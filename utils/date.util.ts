export const setHours = (date: Date,hours: number) => {
   return date.setHours(date.getHours() + hours)
}