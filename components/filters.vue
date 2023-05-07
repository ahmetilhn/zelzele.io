<template>
  <ClientOnly>
    <BaseModal
      v-if="isFilterModalVisible"
      title="Filtre"
      class="filter-modal"
      :is-close-icon-visible="true"
      :is-snapshot-loading="false"
      @close="closeHandler"
    >
      <template v-slot:content>
        <div class="magnitude" vertical-center>
          <span class="magnitude__title">Büyüklük</span>
          <div class="magnitude__items" horizontal-center>
            <template v-for="lat in 9">
              <input
                type="radio"
                name="magnitude"
                :id="lat"
                v-model="filterData.magnitude"
                :value="lat"
                :checked="lat == filterData.magnitude"
              />
              <label :for="lat" vertical-center>
                {{ lat }}
              </label>
            </template>
          </div>
        </div>
        <div class="city" vertical-center>
          <span class="city__title">Şehir</span>
          <select value="Tümü" v-model="filterData.city">
            <option value="" selected>Tümü</option>
            <template v-for="city in cities">
              <option
                :value="clearTurkishChars(city.il_adi)"
                :selected="filterData.city === clearTurkishChars(city.il_adi)"
              >
                {{ city.il_adi }}
              </option>
            </template>
          </select>
        </div>
      </template>
      <template v-slot:footer>
        <button class="apply-btn" @click="applyFilter">Uygula</button>
      </template>
    </BaseModal>
  </ClientOnly>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
import { cities } from "~~/constants/city.constants";
import { storeToRefs } from "pinia";
import BaseModal from "./base-modal.vue";
import { useFilterStore } from "~~/store/filters";
const filterStore = useFilterStore();
const { isFilterModalVisible } = storeToRefs(filterStore);
const { setFilterModalVisible } = filterStore;
const closeHandler = () => {
  setFilterModalVisible(false);
};
const filterData = ref({
  magnitude: "",
  city: "",
});
const applyFilter = () => {
  const queryObj = {};
  if (filterData.value.city) {
    queryObj["city"] = clearTurkishChars(filterData.value.city);
  }
  if (filterData.value.magnitude) {
    queryObj["magnitude"] = filterData.value.magnitude;
  }
  router.push({
    path: "/",
    query: queryObj,
  });
  setFilterModalVisible(false);
};
onMounted(() => {
  filterData.value.city = route.query.city || "";
  filterData.value.magnitude = route.query.magnitude || "";
});
</script>
<style lang="scss" scoped>
.filter-modal {
  width: 100%;
  :deep(.modal__content) {
    align-items: flex-start;
    .magnitude {
      width: 100%;
      align-items: flex-start;
      &__title {
        font-size: 18px;
        font-weight: bold;
      }
      &__items {
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
        label {
          text-decoration: none;
          width: 40px;
          height: 40px;
          background-color: $gray-one;
          border-radius: 4px;
          color: inherit;
          @include small-device {
            width: 36px;
            height: 36px;
          }
        }
        input {
          appearance: none;
          &:checked + label {
            background-color: $dark;
            color: $white;
          }
        }
      }
    }
    .city {
      width: 100%;
      align-items: flex-start;
      margin-top: 20px;
      &__title {
        font-size: 18px;
        font-weight: bold;
      }
      select {
        margin-top: 10px;
        width: 100%;
        border: 2px solid $gray-one;
        border-radius: 4px;
        height: 40px;
        padding: 4px;
      }
    }
  }
  :deep(.modal__footer) {
    .apply-btn {
      border: none;
      background-color: $dark;
      padding: 7px 20px;
      color: $white;
      border-radius: 3px;
    }
  }
}
</style>
