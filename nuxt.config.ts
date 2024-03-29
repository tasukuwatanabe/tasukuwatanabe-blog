// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: ''
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'ja', prefix: 'og: <https://ogp.me/ns#>' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: '渡邉佑ポートフォリオサイト' },
        { name: 'author', content: '渡邉佑' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '渡邉佑ポートフォリオサイト' },
        { name: 'twitter:site', content: '@tasuku_web' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'dracula'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
