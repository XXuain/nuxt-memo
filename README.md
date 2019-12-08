# nuxt-memo

> My cool Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# 資料夾介紹

- assets: 放需要 webpack 編譯的靜態資源
- static: 不需要編譯的靜態資源
- pages: 各頁對應的頁面元件 (相當於你寫 SPA 時，VueRouter 路由指定的元件)
- components: 跨頁面的元件，不具狀態
- nuxt.config.js: Nuxt 全域設定檔
- .nuxt: Nuxt 暫存資料夾

### 模板語言換成 Pug

\$ yarn add -D pug pug-plain-loader

### 樣式換成 SASS

\$ yarn add -D node-sass sass-loader

### 安裝 SUSY (這版面用 SUSY 定義格線系統)

\$ yarn add -D susy

### 定義全域樣式

- nuxt.config.js

```
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/all.sass'
  ],
```
