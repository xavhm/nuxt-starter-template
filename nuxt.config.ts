// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/hints', '@nuxtjs/seo', 'nuxt-security'],

  devtools: {
    enabled: true,
  },

  ogImage: {
    enabled: false,
    zeroRuntime: true,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-06-30',

  security: {},
})
