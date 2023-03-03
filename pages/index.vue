<template>
  <div class="index" vertical-center>
    <EarthquakesList />
  </div>
</template>
<script setup lang="ts">
import EarthquakesList from "~~/components/earthquakes-list.vue";
import EarthquakeInterface from "~~/interfaces/earthquake.interface";
import { useEarthquakesStore } from "~~/store/earthquakes";
import { capitalizeFirstLetter } from "~~/utils/string.util";
const earthquakesStore = useEarthquakesStore();
const { setAllEarthquakes, setLastEarthquakes } = earthquakesStore;
const route = useRoute();
const config = useRuntimeConfig();
await useAsyncData(async () => {
  const _allEarthquakes = await $fetch<Promise<Array<EarthquakeInterface>>>(
    `/api/earthquakes`,
    {
      method: "GET",
    }
  );
  setLastEarthquakes(JSON.parse(JSON.stringify(_allEarthquakes)).splice(0, 30));
  setAllEarthquakes(_allEarthquakes);
});
if (route.query.city) {
  useHead({
    title:
      capitalizeFirstLetter(route?.query?.city) + " " + config.public.appTitle,
    meta: [
      {
        name: "description",
        content:
          capitalizeFirstLetter(route?.query?.city) +
          " şehri için " +
          config.public.appDescripiton,
      },
    ],
  });
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
}
</style>
