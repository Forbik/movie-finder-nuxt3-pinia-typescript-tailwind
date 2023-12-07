// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],
  eslint: {
    /* module options */
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },
  app: {
    baseURL: '/movie-finder-nuxt3-pinia-typescript-tailwind/',
    buildAssetsDir: 'assets'
  },
  runtimeConfig: {
    app: {
      apikey: process.env.NUXT_API_KEY,
      apiUrl: process.env.NUXT_API_URL
    }
  }
})
