const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        name: 'author',
        content: 'wlg519803194, wlg519803194@163.com'
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { name: 'force-rendering', content: 'webkit|ie-comp|ie-stand' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'full-screen', content: 'yes' },
      { name: 'robots', content: 'index,about' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'format-detection', content: 'telephone=no,email=no' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'browsermode', content: 'application' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'skyBlue' },

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],

  // render: {
  //   resourceHints: false
  // },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/element-ui',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  buildDir: '.wu',

  router: {
    base: '/',
    fallback: true,
    // middleware: 'index',
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    optimizeCSS: true,
    transpile: [/^element-ui/],
    filenames: {
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : '[path][name].[hash:7].[ext]'
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
