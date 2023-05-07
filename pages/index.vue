<template>
  <div class="index" vertical-center>
    <EarthquakesList />
    <Filters />
  </div>
</template>
<script setup lang="ts">
import Filters from "~~/components/filters.vue";
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
  const _allEarthquakes = await $fetch<Promise<Array<EarthquakeInterface>>>(
    `/api/earthquakes`,
    {
      method: "GET",
    }
  );
  if (Object.keys(route.query).length > 0) {
    let filteredList: Array<EarthquakeInterface> = JSON.parse(
      JSON.stringify(_allEarthquakes)
    );
    if (route.query.city) {
      filteredList = filteredList.filter((item: EarthquakeInterface) => {
        return clearTurkishChars(item.Region.City) === route.query.city;
      });
    }
    if (route.query.magnitude) {
      filteredList = filteredList.filter((item: EarthquakeInterface) => {
        return item.Magnitude > Number(route.query.magnitude);
      });
    }
    setLastEarthquakes(filteredList);
  } else {
    setLastEarthquakes(
      JSON.parse(JSON.stringify(_allEarthquakes)).splice(0, 30)
    );
  }
  setAllEarthquakes(_allEarthquakes);
});
watch(
  () => route.query,
  (val) => {
    if (val) {
      let filteredList = JSON.parse(JSON.stringify(allEarthquakes));
      if (val.city) {
        filteredList = filteredList.filter((item: EarthquakeInterface) => {
          return clearTurkishChars(item.Region.City) === val.city;
        });
      }
      if (val.magnitude) {
        filteredList = filteredList.filter((item: EarthquakeInterface) => {
          return item.Magnitude > Number(val.magnitude);
        });
      }
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
