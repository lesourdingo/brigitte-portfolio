// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],
  routeRules: {
    // Cache static assets for 1 hour
    "/assets/**": { headers: { "cache-control": "max-age=3600" } },
    // Cache pre-rendered pages for 1 hour
    "/**": { prerender: true },
  },
  image: {
    quality: 50,
  },
});
