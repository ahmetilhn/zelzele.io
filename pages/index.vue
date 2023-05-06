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
const { setAllEarthquakes, setLastEarthquakes, allEarthquakes } =
  earthquakesStore;
const route = useRoute();
const config = useRuntimeConfig();
await useAsyncData(async () => {
  let filteredList: Array<EarthquakeInterface> = [];
  const _allEarthquakes = await $fetch<Promise<Array<EarthquakeInterface>>>(
    `/api/earthquakes`,
    {
      method: "GET",
    }
  );
  if (route.query.city) {
    filteredList = JSON.parse(JSON.stringify(_allEarthquakes)).filter(
      (item: EarthquakeInterface) => {
        return clearTurkishChars(item.Region.City) === route.query.city;
      }
    );

    setLastEarthquakes(filteredList);
  } else {
    setLastEarthquakes(
      JSON.parse(JSON.stringify(_allEarthquakes)).splice(0, 30)
    );
  }
  setAllEarthquakes(_allEarthquakes);
});
watch(
  () => route.query.city,
  async (val) => {
    if (val) {
      const filteredList = allEarthquakes.filter((item) => {
        return clearTurkishChars(item.Region.City) === val;
      });
      setLastEarthquakes(filteredList);
    } else {
      setLastEarthquakes(
        JSON.parse(JSON.stringify(allEarthquakes)).splice(0, 30)
      );
    }
  }
);
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
          config.public.appDescription,
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
