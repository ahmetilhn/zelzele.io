<template>
  <div class="eq-list" vertical-center>
    <EqListItem
      v-for="(item, key) in lastEarthquakes"
      :key="key"
      :data="item"
      :all-time-data="getAllTimeDataForCustomEQ(item.Region)"
    />
  </div>
</template>
<script setup lang="ts">
import EQInterface from "~~/interfaces/eq.interface";
import EqListItem from "./eq-list-item.vue";
import { useEarthquakesStore } from "~~/store/earthquakes";
import { storeToRefs } from "pinia";
const earthquakesStore = useEarthquakesStore();
const { lastEarthquakes, allEarthquakes } = storeToRefs(earthquakesStore);
const getAllTimeDataForCustomEQ = (
  region: EQInterface["Region"]
): Array<EQInterface> | undefined => {
  return allEarthquakes.value?.filter(
    (item: EQInterface) => item.Region === region
  );
};
</script>

<style lang="scss" scoped>
.eq-list {
  width: 100%;
  @include medium-device {
    padding: $padding-one;
  }
}
</style>
