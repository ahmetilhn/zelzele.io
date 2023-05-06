<template>
  <div class="earthquakes-list" vertical-center>
    <template v-if="lastEarthquakes.length > 0">
      <EarthquakeListItem
        v-for="(item, key) in lastEarthquakes"
        :key="key"
        :data="item"
        :all-time-data="getAllTimeDataForCustomEQ(item.Region.City)"
        :class="{
          'earthquake-item--last': key === 0,
        }"
      />
    </template>
    <div v-else class="earthquakes-list--not-result" vertical-center>
      <img src="../assets/img/happy.svg" alt="" />
      <span>Çok şükür deprem bulunamadı 🙏🏻</span>
    </div>
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
  city: EarthquakeInterface["Region"]["City"]
): Array<EarthquakeInterface> | undefined => {
  return allEarthquakes.value?.filter(
    (item: EarthquakeInterface) => item.Region.City === city
  );
};
</script>

<style lang="scss" scoped>
.earthquakes-list {
  width: 100%;

  row-gap: 16px;
  margin-block: 16px;
  position: relative;
  @include medium-device {
    padding: $padding-one;
    row-gap: 8px;
  }
  &--not-result {
    margin-top: 200px;
    img {
      width: 50px;
      margin-bottom: 20px;
    }
  }
}
</style>
