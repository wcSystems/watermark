export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  /* router: {
    base: '/gh-pages/'
  }, */
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'water-mark-willinthon',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/fontawesome",
    { src: "@/plugins/watermark", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/pwa'],
    '@nuxt/content',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        optionwater: {
          mode: '',
          textBaseline: '',
          font: '',
          fillStyle: '',
          content: '',
          rotate: 0
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Watermark Willinthon",
      short_name: "Watermark Willinthon",
      lang: "es",
      useWebmanifestExtension: true,
      theme_color: "#00c58e",
      description:
        "Marca de agua para imagenes"
    },
    icon: {
      fileName: 'pwa.png',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    }
  },

  /* server: {
    port: 3000,
    host: "0.0.0.0" //  on production this must be 0.0.0.0
  }, */

}
