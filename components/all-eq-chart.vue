<template>
  <div class="chart-container">
    <Tooltip
      v-if="isIndicatorVisible"
      :style="{ transform: 'translateX(' + (indicatorData.x - 40) + 'px)' }"
      class="chart-tooltip"
    >
      <div class="content">
        {{ $dayjs(indicatorData.EQData.Time).format("MMMM D, YYYY") }} <br />
        <strong>{{ indicatorData.EQData.Magnitude }}</strong>
      </div>
    </Tooltip>
    <svg
      :width="width"
      :height="height"
      class="chart"
      :class="magnitudeVal"
      :view-box="'0 0' + ' ' + width.toString() + ' ' + height.toString()"
      @click="openChartDetailModal"
      @mousemove="mouseMove"
    >
      <g class="lines">
        <line
          v-for="data in chartData"
          :key="data.x1"
          :x1="data.x1"
          :y1="data.y1"
          :x2="data.x2"
          :y2="data.y2"
          :data-id="data.id"
        />
      </g>

      <g
        v-if="isIndicatorVisible"
        class="indicator"
        :style="{ transform: 'translateX(' + indicatorData.x + 'px)' }"
      >
        <line x1="0" x2="1" y1="0" :y2="height" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import EQInterface from "~~/interfaces/eq.interface";
import Tooltip from "~~/components/tooltip.vue";
const maxMagnitude = 9.5;
interface Props {
  magnitudeVal: string;
  allTimeData: Array<EQInterface> | undefined;
  width: number;
  height: number;
  isIndicatorVisible: boolean;
}
type ChartLineData = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  id: string;
};
const { magnitudeVal, allTimeData, height, width, isIndicatorVisible } =
  defineProps<Props>();
const emit = defineEmits(["openChartDetailModal"]);
const chartData = ref<Array<ChartLineData>>([]);
const { $dayjs } = useNuxtApp();
const indicatorData = ref({
  x: 0,
  EQData: allTimeData[0] as EQInterface | undefined,
});
const getChartData = () => {
  let oldX = 0;
  let oldY: number;
  allTimeData?.reverse()?.forEach((item: EQInterface, index) => {
    const y = height - (item.Magnitude / maxMagnitude) * height;
    if (index === 0) oldY = y;
    const x = (width / allTimeData.length) * (index + 1);
    chartData.value.push({
      x1: oldX,
      y1: oldY,
      x2: x,
      y2: y,
      id: item.ID,
    });
    oldY = y;
    oldX = x;
  });
};
const indicatorMove = (e: MouseEvent) => {
  indicatorData.value.x = e.offsetX;
  if (
    e.target?.nodeName == "line" &&
    e.target.parentNode?.className.baseVal !== "indicator"
  ) {
    const id = e.target.attributes["data-id"].value;
    const EQData: EQInterface | undefined = allTimeData?.find(
      (item: EQInterface) => item.ID === id
    );
    indicatorData.value.EQData = EQData;
  }
};
const mouseMove = (e: MouseEvent) => {
  if (isIndicatorVisible) {
    indicatorMove(e);
  }
};
const openChartDetailModal = () => {
  emit("openChartDetailModal");
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
  .lines {
    line {
      stroke-width: 2px;
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dashEffect 5s forwards;
      stroke-linecap: round;
      cursor: crosshair;
    }
  }
  .indicator {
    transition: transform 0.2s;
    line {
      stroke-dasharray: 3;
      stroke-linecap: butt;
      stroke-width: 1px;
      animation: none;
    }
  }
  &.little {
    line {
      stroke: $dark;
    }
  }
  &.medium {
    line {
      stroke: $orange;
    }
  }
  &.much {
    line {
      stroke: $red;
    }
  }
}
.chart-container {
  position: relative;
  :deep(.chart-tooltip) {
    position: absolute;
    top: -10px;
    width: 80px;
    height: 30px;
    font-size: 8px;
    text-align: center;
    transition: transform 0.2s;
  }
}
</style>
