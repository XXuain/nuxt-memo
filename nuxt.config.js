module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "甜點電商",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { "http-equiv": "X-UA-Compatible", content: "ie=edge" },
      { property: "og:title", content: "甜點電商" },
      { property: "og:description", content: "六角學院的甜點電商" },
      { property: "og:site_name", content: "甜點電商" },
      { property: "og:locale", content: "zh_TW" }
    ],
    link: [
      {
        rel: "shortcut icon",
        href: "~/img/favicon_48.ico",
        type: "image/x-icon"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
        integrity:
          "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU",
        crossorigin: "anonymous"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/sass/all.sass"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
