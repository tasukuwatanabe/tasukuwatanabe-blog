// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  content: {
    highlight: {
      theme: {
        default: 'dracula'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
})
