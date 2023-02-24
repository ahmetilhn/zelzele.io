// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@import "@/assets/scss/variables.scss";',
            },
          },
        },
    },
    css: ["@/assets/scss/global.scss", "@/assets/scss/fonts.scss", "@/assets/scss/align.scss", "@/assets/scss/typography.scss"],
    plugins: [{
        src: "@/plugins/dayjs.plugin.ts",
        mode: "server"
    }]
})
