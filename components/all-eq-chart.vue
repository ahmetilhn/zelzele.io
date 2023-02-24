<template>
  <svg class="chart" :class="magnitudeVal" view-box="0 0 20 100">
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

const chart = {
  height: 60,
  width: 160,
};
const chartData = ref<Array<ChartLineData>>([]);
const getChartData = () => {
  let oldX = 0;
  let oldY = chart.height / 2;
  allTimeData?.reverse()?.forEach((item: EQInterface, index) => {
    console.log({
      şiddet: item.Magnitude,
      past: allTimeData,
    });
    const y = (item.Magnitude / maxMagnitude) * chart.height;
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
  width: 160px;
  height: 60px;
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
