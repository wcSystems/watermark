export default {

  target: 'static',

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

  css: [
    '@/assets/scss/main.scss'
  ],

  plugins: [
    "@/plugins/fontawesome",
    { src: "@/plugins/watermark", mode: "client" }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['@nuxtjs/pwa',{icon: false }],
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

  axios: {},

  pwa: {
    manifest: {
      name: "Watermark Willinthon",
      short_name: "Watermark Willinthon",
      lang: "es",
      useWebmanifestExtension: false,
      theme_color: "#00c58e",
      description:
        "Marca de agua para imagenes"
    },
    icon: {
      fileName: 'pwa.png',
    },
  },

  content: {},

  build: {
    babel: {
      compact: true
    }
  },

  // server: {
  //   port: 3000,
  //   host: "0.0.0.0" //  on production this must be 0.0.0.0
  // },

}
