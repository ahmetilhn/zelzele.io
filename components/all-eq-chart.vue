<template>
    <svg class="chart" view-box="0 0 20 100">
    <line x1="0" y1="10"
          x2="40" y2="20"/>
    <line x1="40" y1="20"
          x2="80" y2="10"/>
    <line x1="80" y1="10"
          x2="120" y2="30"/>
    <line x1="120" y1="30"
          x2="160" y2="20"/>
    </svg>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.chart {
    width: 150px;
    height: 36px;
    line {
        stroke: red;
        stroke-width: 2px;
    }
}
</style>