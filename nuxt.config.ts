// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content', // use better-sqlite3 as dependancy
    '@nuxt/hints',
    '@nuxtjs/seo',
    'nuxt-security',
  ],

  devtools: {
    enabled: true,
  },

  ogImage: {
    zeroRuntime: true,
  },

  css: ['~/assets/css/main.css'],

  content: {},

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-06-30',

  security: {},
})
