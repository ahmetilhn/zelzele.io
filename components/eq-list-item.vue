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
          {{ data.Depth }} km,
          <strong>{{ dateFromNow }}</strong>
        </h6>
      </div>
    </div>
    <div class="eq-item__right">
      <ClientOnly>
        <AllEQChart
          :magnitude-val="getMagnitudeVal"
          :all-time-data="allTimeData"
          :width="chartStyle.listing.width"
          :height="chartStyle?.listing.height"
          :is-indicator-visible="false"
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
        <AllEQChart
          :magnitude-val="getMagnitudeVal"
          :all-time-data="allTimeData"
          :width="chartStyle.modal.width"
          :height="150"
          :is-indicator-visible="true"
          @open-chart-detail-modal="openChartDetailModalHandler"
        />
      </BaseModal>
    </ClientOnly>
  </article>
</template>
<script setup lang="ts">
import AllEQChart from "./all-eq-chart.vue";
import BaseModal from "./base-modal.vue";
import EQInterface from "~~/interfaces/eq.interface";
import { setHours } from "~~/utils/date.util";
import magnitudeConstants from "~~/constants/magnitude.constants";
import { isMobile } from "~~/utils/screen.util";
interface Props {
  data: EQInterface;
  allTimeData: Array<EQInterface> | undefined;
}
const { data, allTimeData } = defineProps<Props>();
const isChartDetailModalVisible = ref(false);
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
const chartStyle = computed(() => {
  if (process.client) {
    return {
      modal: {
        width: isMobile() ? window?.innerWidth - 50 : 420,
      },
      listing: {
        width: isMobile() ? 100 : 160,
        height: isMobile() ? 45 : 60,
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
.eq-item {
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
        width: 54px;
        height: 54px;
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
      justify-content: space-between;
      margin-left: 20px;
      padding: 2px 0;
      @include small-device {
        height: 60px;
        margin-left: 10px;
      }
      .city {
        @include small-device {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .district {
        color: $gray-three;
        font-size: 16px;
        @include small-device {
          font-size: 14px;
          line-height: 14px;
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
