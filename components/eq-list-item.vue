<template>
  <article class="eq-item" :class="getMagnitudeVal" horizontal-center>
    <div class="eq-item__left" horizontal-center>
      <h3 class="magnitude" :class="getMagnitudeVal" vertical-center>
        {{ data.Magnitude }}
      </h3>
      <div class="content" vertical-center>
        <h3 class="city">
          {{ city || district.split(" ")[0].split("/")[1] || district }}
        </h3>
        <h4 class="district">{{ district }}</h4>
        <h6 class="short-detail">
          {{ data.Depth }} km, {{ $dayjs().format("DD/MM/YYYY") }} ,
          <strong>{{ dateFromNow }}</strong>
        </h6>
      </div>
    </div>
    <div class="eq-item__right">
      <AllEqChart
        :magnitude-val="getMagnitudeVal"
        :all-time-data="allTimeData"
      />
    </div>
  </article>
</template>
<script setup lang="ts">
import AllEqChart from "./all-eq-chart.vue";
import EQInterface from "~~/interfaces/eq.interface";
import { setHours } from "~~/utils/date.util";
import magnitudeConstants from "~~/constants/magnitude.constants";
interface Props {
  data: EQInterface;
  allTimeData: Array<EQInterface> | undefined;
}
const { data, allTimeData } = defineProps<Props>();
const { $dayjs } = useNuxtApp();
const dateFromNow = $dayjs(setHours(new Date(data.Time), 3)).from(new Date());

const { city, district } = (() => {
  const city = data.Region.split("-")[1];
  const district = data.Region.split("-")[0];
  return {
    city,
    district,
  };
})();
const getMagnitudeVal = ((): string => {
  if (data.Magnitude < magnitudeConstants.LITTLE.limit) {
    return magnitudeConstants.LITTLE.value;
  } else if (data.Magnitude < magnitudeConstants.MEDIUM.limit) {
    return magnitudeConstants.MEDIUM.value;
  } else {
    return magnitudeConstants.MUCH.value;
  }
})();
</script>
<style lang="scss" scoped>
.eq-item {
  width: 100%;
  height: 160px;
  justify-content: space-between;
  margin: 10px 0;
  border-radius: 10px;
  &.little {
    background: linear-gradient(90deg, $white 0%, $gray-one 100%);
  }
  &.medium {
    background: linear-gradient(90deg, $white 0%, $orange-light 100%);
  }
  &.much {
    background: linear-gradient(90deg, $white 0%, $red-light 100%);
  }
  &__left {
    .magnitude {
      width: 80px;
      height: 80px;
      color: $white;
      font-size: 20px;
      font-weight: bold;
      border-radius: 10px;
      &.little {
        background-color: $gray-one;
        color: $dark;
      }
      &.medium {
        background-color: $orange-light;
        color: $orange;
      }
      &.much {
        background-color: $red-light;
        color: $red;
      }
    }
    .content {
      align-items: flex-start;
      height: 80px;
      justify-content: space-between;
      margin-left: 20px;
      padding: 2px 0;
      .district {
        color: $gray-three;
        font-size: 16px;
      }
      .short-detail {
        color: $gray-two;
        font-size: 13px;
        font-weight: normal;
        strong {
          color: $gray-three;
        }
      }
    }
  }
  &__right {
    margin-right: 20px;
    height: 60px;
  }
}
</style>
