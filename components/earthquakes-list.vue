<template>
  <div class="earthquakes-list" vertical-center>
    <EarthquakeListItem
      v-for="(item, key) in lastEarthquakes"
      :key="key"
      :data="item"
      :all-time-data="getAllTimeDataForCustomEQ(item.Region)"
    />
  </div>
</template>
<script setup lang="ts">
import EarthquakeInterface from "~~/interfaces/earthquake.interface";
import EarthquakeListItem from "./earthquake-list-item.vue";
import { useEarthquakesStore } from "~~/store/earthquakes";
import { storeToRefs } from "pinia";
const earthquakesStore = useEarthquakesStore();
const { lastEarthquakes, allEarthquakes } = storeToRefs(earthquakesStore);
const getAllTimeDataForCustomEQ = (
  region: EarthquakeInterface["Region"]
): Array<EarthquakeInterface> | undefined => {
  return allEarthquakes.value?.filter(
    (item: EarthquakeInterface) =>
      item.Region.split(" - ")[1] === region.split(" - ")[1]
  );
};
</script>

<style lang="scss" scoped>
.earthquakes-list {
  width: 100%;
  @include medium-device {
    padding: $padding-one;
  }
}
</style>
