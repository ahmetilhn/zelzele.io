import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import("dayjs/locale/tr")
export default defineNuxtPlugin(() => {
    dayjs.locale('tr')
    dayjs.extend(relativeTime)
    return{
        provide: {
           dayjs
        }
    }
})