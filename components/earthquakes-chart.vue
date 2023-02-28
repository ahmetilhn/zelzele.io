<template>
  <div class="chart-container">
    <svg
      :width="width"
      :height="height"
      class="chart"
      :class="[magnitudeVal, isHasGrid ? 'chart--grid' : '']"
      :view-box="'0 0' + ' ' + width.toString() + ' ' + height.toString()"
      @click="openChartDetailModal"
    >
      <g v-if="isHasGrid" class="grid">
        <line
          v-for="index in chartData.length + 1"
          :key="index"
          :x1="Math.ceil(index * (width / chartData.length))"
          y1="0"
          :x2="Math.ceil(index * (width / chartData.length))"
          :y2="height"
        />
        <line
          v-for="item in 9"
          :key="item"
          x1="0"
          :y1="Math.ceil(item * (height / 9))"
          :x2="width"
          :y2="Math.ceil(item * (height / 9))"
        />
      </g>
      <g class="lines">
        <template v-for="data in chartData" :key="data.x1">
          <line :x1="data.x1" :y1="data.y1" :x2="data.x2" :y2="data.y2" />
          <circle
            v-if="data.id === activeEarthquake.ID"
            :cx="data.x2"
            :cy="data.y2"
          />
        </template>
      </g>
      <g v-if="isHasGrid" class="labels">
        <template v-for="(data, index) in chartData" :key="data.x1">
          <text
            v-if="index + 1 !== chartData.length"
            :x="data.x2"
            :y="data.y2 - 10"
            text-anchor="middle"
          >
            {{ data.label }}
          </text>
        </template>
      </g>
      <g v-if="isHasGrid" class="circles">
        <template v-for="(data, index) in chartData" :key="index">
          <circle v-if="index !== 0" :cx="data.x1" :cy="data.y1" />
        </template>
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import EarthquakeInterface from "~~/interfaces/earthquake.interface";
import { MAX_MAGNITUDE_INTENSITY } from "~~/constants/magnitude.constants";
import { LineType } from "~~/types/chart.type";
interface Props {
  magnitudeVal: string;
  allTimeData: Array<EarthquakeInterface> | undefined;
  width: number;
  height: number;
  isHasGrid: boolean;
  activeEarthquake: EarthquakeInterface;
}
const { magnitudeVal, allTimeData, height, width, activeEarthquake } =
  defineProps<Props>();
const emit = defineEmits(["openChartDetailModal"]);
const chartData = ref<Array<LineType>>([]);
const chartLimit = 30;
const getChartData = () => {
  let oldX = 0;
  let oldY: number;
  JSON.parse(JSON.stringify(allTimeData))
    ?.reverse()
    .slice(-chartLimit)
    ?.forEach((item: EarthquakeInterface, index: number) => {
      if (index + 1 > chartLimit) return;
      const y = Math.ceil(
        height - (item.Magnitude / MAX_MAGNITUDE_INTENSITY) * height
      );
      if (index === 0) oldY = y;
      const x = Math.ceil(
        (width /
          (allTimeData.length > chartLimit ? chartLimit : allTimeData.length)) *
          (index + 1)
      );
      chartData.value.push({
        x1: oldX,
        y1: oldY,
        x2: x,
        y2: y,
        id: item.ID,
        label: item.Magnitude.toString(),
      });
      oldY = y;
      oldX = x;
    });
};
const { $gtm } = useNuxtApp();
const route = useRoute();
const openChartDetailModal = () => {
  emit("openChartDetailModal");
  $gtm.pushUIEvent({
    eventCategory: "Earthquakes Chart - Click",
    eventAction:
      activeEarthquake.Region.City + activeEarthquake.Region.District,
    eventLabel: route.path,
  });
};
onMounted(() => {
  getChartData();
});
</script>

<style lang="scss" scoped>
@keyframes dashEffect {
  to {
    stroke-dashoffset: 0;
  }
}
.chart {
  cursor: pointer;
  &--grid {
    border: 1px dashed $gray-one;
  }
  .lines {
    line {
      stroke-width: 2px;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dashEffect 5s forwards;
      stroke-linecap: round;
      cursor: crosshair;
    }
    circle {
      r: 2px;
    }
  }
  .grid {
    line {
      stroke: $gray-one !important;
      stroke-linecap: round;
      stroke-dashoffset: 100;
      stroke-dasharray: 2;
    }
  }
  .circles {
    circle {
      r: 2px;
      transition: r 0.2s;
      &:hover {
        r: 8px;
      }
    }
  }
  .labels {
    text {
      font-size: 9px;
      font-weight: 600;
    }
  }
  &.little {
    line {
      stroke: $dark;
    }
    circle {
      stroke: $dark;
      fill: $dark;
    }
  }
  &.medium {
    line {
      stroke: $orange;
    }
    circle {
      stroke: $orange;
      fill: $orange;
    }
  }
  &.much {
    line {
      stroke: $red;
    }
    circle {
      stroke: $red;
      fill: $red;
    }
  }
}
.chart-container {
  position: relative;
  width: 100%;
}
</style>
