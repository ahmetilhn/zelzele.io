import cheerio from "cheerio";
export default defineEventHandler(async () => {
  const afadWeb = await $fetch<Promise<string>>(
    "http://www.koeri.boun.edu.tr/scripts/lst6.asp"
  );
  const $ = cheerio.load(afadWeb);
  const response = $("pre").text();
  var result = response.split("\n");
  result = result.splice(6, result.length);
  result = result.splice(0, result.length - 2);
  return {
    data: result,
    status: 200,
  };
});
