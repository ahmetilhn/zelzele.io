<template>
  <svg class="chart" :class="magnitude" view-box="0 0 20 100">
    <line x1="0" y1="10" x2="40" y2="20" />
    <line x1="40" y1="20" x2="80" y2="10" />
    <line x1="80" y1="10" x2="120" y2="30" />
    <line x1="120" y1="30" x2="160" y2="20" />
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  magnitude: string;
}
const { magnitude } = defineProps<Props>();
</script>

<style lang="scss" scoped>
@keyframes dashEffect {
  to {
    stroke-dashoffset: 0;
  }
}
.chart {
  width: 150px;
  height: 36px;
  line {
    stroke-width: 2px;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dashEffect 10s forwards;
  }
  &.little {
    line {
      stroke: $gray-three;
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
