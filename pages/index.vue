<template>
  <div class="index" vertical-center>
    <EarthquakesList />
  </div>
</template>
<script setup lang="ts">
import EarthquakesList from "~~/components/earthquakes-list.vue";
import EarthquakeInterface from "~~/interfaces/earthquake.interface";
import { useEarthquakesStore } from "~~/store/earthquakes";
const earthquakesStore = useEarthquakesStore();
const { setAllEarthquakes, setLastEarthquakes } = earthquakesStore;
await useAsyncData(async () => {
  const _allEarthquakes = await $fetch<Promise<Array<EarthquakeInterface>>>(
    `/api/earthquakes`,
    {
      method: "GET",
    }
  );
  setLastEarthquakes(_allEarthquakes.splice(0, 30));
  setAllEarthquakes(_allEarthquakes);
});
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
}
</style>
