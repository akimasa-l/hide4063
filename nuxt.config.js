export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hide4063ジェネレーター',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Akimasa_L" },
      { property: "og:url", content: "https://hide-4063.web.app" },
      { property: "og:title", content: "hide4063ジェネレーター" },
      { property: "og:description", content: "みんな大好きhide4063が構文ジェネレーターになって帰ってきた！！" },
      { property: "og:image", content: "https://hide-4063.web.app/morokoshi.png" },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/morokoshi.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "sanitize.css",
    '~assets/styles/font-family.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    'nuxt-clipboard2',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faClipboard'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter'],
      },
    ],
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:300;400;500;700;900']
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
