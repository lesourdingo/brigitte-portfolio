// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-16",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
    theme: {
      transitions: true,
      colors: ["primary", "neutral"],
    },
  },
  fonts: {
    families: [{ name: "Syne", provider: "google", weights: [600, 700, 800] }],
  },
  routeRules: {
    "/assets/**": { headers: { "cache-control": "max-age=3600" } },
    "/**": { prerender: true },
  },
  image: {
    quality: 50,
  },
});
