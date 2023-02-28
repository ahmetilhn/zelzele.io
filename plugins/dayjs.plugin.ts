import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import("dayjs/locale/tr");
export default defineNuxtPlugin(() => {
  dayjs.locale("tr");
  dayjs.extend(timezone);
  dayjs.extend(relativeTime);
  return {
    provide: {
      dayjs,
    },
  };
});
