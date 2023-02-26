import { defineStore } from "pinia";
import EQInterface from "~~/interfaces/eq.interface";

export const useEarthquakesStore = defineStore({
  id: "eq-store",
  state: () => {
    return {
      allEarthquakes: [] as Array<EQInterface>,
      lastEarthquakes: [] as Array<EQInterface>,
    };
  },
  actions: {
    setAllEarthquakes(val: Array<EQInterface>) {
      this.allEarthquakes = val;
    },
    setLastEarthquakes(val: Array<EQInterface>) {
      this.lastEarthquakes = val;
    },
  },
  getters: {
    getAllEarthQuakes: (state) => state.allEarthquakes,
    getLastEarthquakes: (state) => state.lastEarthquakes,
  },
});
