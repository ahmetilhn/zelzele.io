<template>
  <svg
    :width="chart.width"
    :height="chart.height"
    class="chart"
    :class="magnitudeVal"
    view-box="0 0 20 100"
    @click="openChartDetailModal"
  >
    <line
      v-for="data in chartData"
      :key="data.x1"
      :x1="data.x1"
      :y1="data.y1"
      :x2="data.x2"
      :y2="data.y2"
    />
  </svg>
</template>

<script lang="ts" setup>
import EQInterface from "~~/interfaces/eq.interface";
const maxMagnitude = 9.5;
interface Props {
  magnitudeVal: string;
  allTimeData: Array<EQInterface> | undefined;
}
type ChartLineData = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};
const { magnitudeVal, allTimeData } = defineProps<Props>();
const emit = defineEmits(["openChartDetailModal"]);
const chart = {
  height: 60,
  width: 160,
};
const chartData = ref<Array<ChartLineData>>([]);
const getChartData = () => {
  let oldX = 0;
  let oldY: number;
  allTimeData?.reverse()?.forEach((item: EQInterface, index) => {
    const y = chart.height - (item.Magnitude / maxMagnitude) * chart.height;
    if (index === 0) oldY = y;
    console.log({
      [item.Region]: item.Magnitude,
    });
    const x = (chart.width / allTimeData.length) * (index + 1);
    chartData.value.push({
      x1: oldX,
      y1: oldY,
      x2: x,
      y2: y,
    });
    oldY = y;
    oldX = x;
  });
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
  line {
    stroke-width: 2px;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dashEffect 10s forwards;
    stroke-linecap: round;
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
</style>
