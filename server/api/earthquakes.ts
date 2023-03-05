import AfadScraper from "afad-scraper";
import EarthquakeInterface from "~~/interfaces/earthquake.interface";
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const scraper = new AfadScraper();
    try {
      const res: Array<EarthquakeInterface> = await scraper.getEarthquakes();
      return res;
    } catch (error) {
      console.error(error);
    }
  }
});
