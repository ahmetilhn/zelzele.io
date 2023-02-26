// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/mixins.scss";',
        },
      },
    },
  },
  css: [
    "@/assets/scss/global.scss",
    "@/assets/scss/fonts.scss",
    "@/assets/scss/align.scss",
    "@/assets/scss/typography.scss",
  ],
  plugins: [
    {
      src: "@/plugins/dayjs.plugin.ts",
    },
  ],
  modules: ["@pinia/nuxt"],
  app: {
    buildAssetsDir: "/assetsDir/",
    head: {
      charset: "utf-16",
      viewport: "initial-scale=1",
      title: "Zelzele.io - Son Depremler, Deprem Analiz ve Canlı Takip",
      meta: [
        {
          name: "description",
          content:
            "Zelzele.io ile Deprem analizi yapabilir, son depremleri öğrenebilir tüm depremler ile karşılaştırabilirsiniz.",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileImage",
          content: "/assetsDir/meta/ms-icon-144x144.png",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/assetsDir/meta/apple-icon-57x57.png",
        },
        {
          rel: "manifest",
          href: "/assetsDir/meta/manifest.json",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assetsDir/meta/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/assetsDir/meta/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assetsDir/meta/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/assetsDir/meta/android-icon-192x192.png",
        },
      ],
    },
  },
});
