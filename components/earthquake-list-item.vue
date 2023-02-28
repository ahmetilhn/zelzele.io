<template>
  <article class="earthquake-item" :class="getMagnitudeVal" horizontal-center>
    <div class="earthquake-item__left" horizontal-center>
      <h3 class="magnitude" :class="getMagnitudeVal" vertical-center>
        {{ data.Magnitude }}
      </h3>
      <div class="content" vertical-center>
        <h3 class="city">
          {{ city }}
        </h3>
        <h4 class="district">{{ district }}</h4>
        <h6 class="short-detail">
          {{ data.Depth }} km,
          <strong>{{ dateFromNow }}</strong>
        </h6>
      </div>
    </div>
    <div class="earthquake-item__right">
      <ClientOnly>
        <EarthquakesChart
          v-if="allTimeData?.length"
          :magnitude-val="getMagnitudeVal"
          :all-time-data="allTimeData"
          :width="chartStyle.listing.width"
          :height="chartStyle?.listing.height"
          :is-has-grid="false"
          @open-chart-detail-modal="openChartDetailModalHandler"
        />
      </ClientOnly>
    </div>
    <ClientOnly>
      <BaseModal
        v-if="isChartDetailModalVisible"
        title="Tarihsel Deprem Grafiği"
        @close="closeChartDetailModalHandler"
      >
        <EarthquakesChart
          :magnitude-val="getMagnitudeVal"
          :all-time-data="allTimeData"
          :width="chartStyle.modal.width"
          :height="150"
          :is-has-grid="true"
          @open-chart-detail-modal="openChartDetailModalHandler"
        />
      </BaseModal>
    </ClientOnly>
  </article>
</template>
<script setup lang="ts">
import EarthquakesChart from "./earthquakes-chart.vue";
import BaseModal from "./base-modal.vue";
import EarthquakeInterface from "~~/interfaces/earthquake.interface";
import { magnitudeLevels } from "~~/constants/magnitude.constants";
import { isMobile } from "~~/utils/screen.util";
interface Props {
  data: EarthquakeInterface;
  allTimeData: Array<EarthquakeInterface> | undefined;
}
const { $dayjs } = useNuxtApp();
const { data, allTimeData } = defineProps<Props>();
const isChartDetailModalVisible = ref(false);
const dateFromNow = $dayjs(data.Time).from(new Date());

const { city, district } = (() => {
  const [district, city] = data.Region.split(" - ");
  return {
    city,
    district,
  };
})();
const getMagnitudeVal = ((): string => {
  if (data.Magnitude < magnitudeLevels.LITTLE.limit) {
    return magnitudeLevels.LITTLE.value;
  } else if (data.Magnitude < magnitudeLevels.MEDIUM.limit) {
    return magnitudeLevels.MEDIUM.value;
  } else {
    return magnitudeLevels.MUCH.value;
  }
})();
const chartStyle = computed(() => {
  if (process.client) {
    return {
      modal: {
        width: isMobile() ? window?.innerWidth - 50 : 420,
      },
      listing: {
        width: isMobile() ? 130 : 240,
        height: isMobile() ? 70 : 100,
      },
    };
  }
});
const openChartDetailModalHandler = () => {
  isChartDetailModalVisible.value = true;
};
const closeChartDetailModalHandler = () => {
  isChartDetailModalVisible.value = false;
};
</script>
<style lang="scss" scoped>
.earthquake-item {
  width: 100%;
  height: 130px;
  justify-content: space-between;
  margin: 10px 0;
  border-radius: 10px;
  @include small-device {
    margin: 5px 0;
    height: 100px;
  }
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
      @include small-device {
        width: 60px;
        height: 60px;
        border-radius: 6px;
      }
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
      justify-content: space-around;
      margin-left: 20px;
      padding: 2px 0;
      @include small-device {
        justify-content: space-between;
        height: 60px;
        margin-left: 10px;
      }
      .city {
        font-size: 20px;
        line-height: 20px;
        @include small-device {
          font-size: 16px;
          font-size: 18px;
        }
      }
      .district {
        color: $gray-three;
        font-size: 14px;
        @include small-device {
          font-size: 12px;
          line-height: 13px;
        }
      }
      .short-detail {
        color: $gray-two;
        font-size: 13px;
        font-weight: normal;
        @include small-device {
          font-size: 11px;
          line-height: 12px;
        }
        strong {
          color: $gray-three;
        }
      }
    }
  }
  &__right {
    margin-right: 20px;
    @include small-device {
      margin-right: 5px;
    }
  }
}
</style>
