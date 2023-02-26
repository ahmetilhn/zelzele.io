<template>
  <div class="index" vertical-center>
    <EarthquakesList />
  </div>
</template>
<script setup lang="ts">
import EarthquakesList from "~~/components/earthquakes-list.vue";
import EQInterface from "~~/interfaces/eq.interface";
import { useEarthquakesStore } from "~~/store/earthquakes";
const earthquakesStore = useEarthquakesStore();
const { setAllEarthquakes, setLastEarthquakes } = earthquakesStore;
await useAsyncData(async () => {
  const _allEarthquakes = await $fetch<Promise<Array<EQInterface>>>(
    `https://api.berkealp.net/kandilli/index.php?all`,
    {
      method: "GET",
    }
  );
  const _lastEarthquakes = await $fetch<Promise<Array<EQInterface>>>(
    `https://api.berkealp.net/kandilli/index.php?page=1`,
    {
      method: "GET",
    }
  );
  setLastEarthquakes(_lastEarthquakes);
  setAllEarthquakes(_allEarthquakes);
});
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
}
</style>
