import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import UTC from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import("dayjs/locale/tr");
export default defineNuxtPlugin(() => {
  dayjs.extend(UTC);
  dayjs.extend(timezone);
  dayjs.tz("2013-11-18 11:55:20", "Turkey");
  dayjs.locale("tr");
  dayjs.extend(relativeTime);
  return {
    provide: {
      dayjs,
    },
  };
});
