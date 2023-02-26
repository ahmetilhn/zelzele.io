import { defineStore } from "pinia";
import EarthquakeInterface from "~~/interfaces/earthquake.interface";

export const useEarthquakesStore = defineStore({
  id: "earthquakes-store",
  state: () => {
    return {
      allEarthquakes: [] as Array<EarthquakeInterface>,
      lastEarthquakes: [] as Array<EarthquakeInterface>,
    };
  },
  actions: {
    setAllEarthquakes(val: Array<EarthquakeInterface>) {
      this.allEarthquakes = val;
    },
    setLastEarthquakes(val: Array<EarthquakeInterface>) {
      this.lastEarthquakes = val;
    },
  },
  getters: {
    getAllEarthQuakes: (state) => state.allEarthquakes,
    getLastEarthquakes: (state) => state.lastEarthquakes,
  },
});
