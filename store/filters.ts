import { defineStore } from "pinia";

export const useFilterStore = defineStore({
  id: "filter-store",
  state: () => {
    return {
      isFilterModalVisible: false,
    };
  },
  actions: {
    setFilterModalVisible(val: boolean) {
      this.isFilterModalVisible = val;
    },
  },
  getters: {},
});
