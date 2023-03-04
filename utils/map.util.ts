import EarthquakeInterface from "~~/interfaces/earthquake.interface";
import { isMobile } from "./screen.util";
const injectCode = (): void => {
  let map: google.maps.Map;

  function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      zoom: 6.6,
      center: { lat: 38.9637, lng: 35.2433 },
      mapTypeId: "terrain",
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      minZoom: 6.6,
      fullscreenControl: false,
      zoomControl: isMobile() ? false : true,
    });

    map.data.setStyle((feature) => {
      const magnitude = feature.getProperty("mag");
      return {
        icon: getCircle(magnitude),
      };
    });
    setMapData();
  }

  function getCircle(magnitude: number) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "red",
      fillOpacity: 0.4,
      scale: Math.pow(3.4, magnitude),
      strokeColor: "white",
      strokeWeight: 1,
    };
  }

  async function setMapData() {
    try {
      const res = await $fetch("/api/earthquakes");
      if (res.length) {
        map.data.addGeoJson({
          type: "FeatureCollection",
          features: res.map((item: EarthquakeInterface) => {
            return {
              type: "Feature",
              properties: {
                mag: item.Magnitude,
              },
              geometry: {
                type: "Point",
                coordinates: [item.Latitude, item.Longitude],
              },
              id: item.ID,
            };
          }),
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  declare global {
    interface Window {
      initMap: () => void;
      setMapData: (results: any) => void;
    }
  }
  window.initMap = initMap;
  window.setMapData = setMapData;
};

const startMap = (): void => {
  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAmzn3Lx3f2kEY5kJwfGzZLmTvlmsIA_s&callback=initMap&v=weekly";
  script.async = true;
  script.defer = true;
  document.getElementsByTagName("head")[0].appendChild(script);
};
export default {
  injectCode,
  startMap,
};
