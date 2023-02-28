import cheerio from "cheerio";
import { getRandomString } from "~~/utils/random.util";
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const afadWeb = await $fetch<Promise<string>>(
      "http://www.koeri.boun.edu.tr/scripts/lst6.asp"
    );
    const $ = cheerio.load(afadWeb);
    const response = $("pre").text();
    let result = response.split("\n");
    result = result.splice(6, result.length);
    result = result.splice(0, result.length - 2);
    const convertedData = result.map((item) => {
      return convertData(item);
    });
    return [...convertedData];
  }
});

const convertData = (data: string) => {
  let parsedData: Array<string> = data.split("  ");
  parsedData = parsedData.filter((item) => {
    return item.length > 0;
  });
  const [CreatedDate, Latitude, Longitude, Depth, MD, ML, MW, Region] =
    parsedData;
  return {
    ["ID"]: new Date(CreatedDate).getTime(),
    ["Time"]: CreatedDate.replaceAll(".", "/"),
    ["Latitude"]: Latitude,
    ["Longitude"]: Longitude,
    ["Depth"]: Number(Depth),
    ["Magnitude"]: Number(ML),
    ["Region"]: parseLocation(Region).replace("(", "").replace(")", ""),
  };
};
const parseLocation = (val: string): string => {
  val = val.trim(" ");
  const spaces = val.split("").filter((item) => item === " ");
  const isHasHyphenChar = !spaces.length && val.split("-").length;
  if (spaces.length === 1) {
    return val.split(" ")[0] + " - " + val.split(" ")[1];
  } else if (spaces.length === 2) {
    return val.split(" ")[0] + "-" + val.split(" ")[1] + " - " + val.split("2");
  } else if (isHasHyphenChar) {
    return val.split("-")[0] + " - " + val.split("-")[1];
  } else {
    return "___" + val;
  }
};
