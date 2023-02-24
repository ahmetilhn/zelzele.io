<template>
  <div class="eq-list" vertical-center>
    <EqListItem
      v-for="(item, key) in list"
      :key="key"
      :data="item"
      :all-time-data="getAllTimeData(item.Region)"
    />
  </div>
</template>
<script setup lang="ts">
import EQInterface from "~~/interfaces/eq.interface";
import EqListItem from "./eq-list-item.vue";
const { data: list } = await useAsyncData<Array<EQInterface>>("list", () =>
  $fetch(`https://api.berkealp.net/kandilli/index.php?page=1`, {
    method: "GET",
  })
);
const { data: allData } = await useAsyncData<Array<EQInterface>>(
  "allData",
  () =>
    $fetch(`https://api.berkealp.net/kandilli/index.php?all`, {
      method: "GET",
    })
);
const getAllTimeData = (
  region: EQInterface["Region"]
): Array<EQInterface> | undefined => {
  return allData.value?.filter((item: EQInterface) => item.Region === region);
};
</script>

<style lang="scss" scoped>
.eq-list {
  width: 100%;
}
</style>
