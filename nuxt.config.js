export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fachschaft',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js',
    '~plugins/vuetailwind.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Rubik: [300, 700],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "bootstrap-vue/nuxt"
  ],

  bootstrapVue: {
    icons: true
  },

  firebase: {
    config: {
      src: '~/plugins/firebase.js'
    },
    services: {
      auth: true, // Aktiviert den Authentifizierungsdienst
      firestore: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
        plugins: {
            'postcss-import': true,
            'tailwindcss/nesting': {}, 
             'postcss-nested': {},
        },
    },
},


  router: {
    middleware: []
  },
}