<template>
  <div class="map">
    <div id="map"></div>
  </div>
</template>
<script lang="ts" setup>
import mapUtil from "~~/utils/map.util";
const { $map } = useNuxtApp();
onBeforeMount(() => {
  mapUtil.injectCode();
});
onMounted(() => {
  mapUtil.startMap();
});
useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
  ],
});
</script>
<style lang="scss" scoped>
.map {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  #map {
    height: 100%;
    width: 100%;
  }
}
</style>
