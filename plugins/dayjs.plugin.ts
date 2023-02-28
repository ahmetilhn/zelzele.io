import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import UTC from "dayjs/plugin/utc";
import("dayjs/locale/tr");
export default defineNuxtPlugin(() => {
  dayjs.extend(UTC);
  dayjs.locale("tr");
  dayjs.extend(relativeTime);
  return {
    provide: {
      dayjs,
    },
  };
});
