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

# SEO

Nuxt 能夠讓你客製 `<HEAD>`

## 全域: 整個網站，寫在全域設定檔 nuxt.config.js

## 單頁: 套用單頁，寫在頁面元件 pages/\*.vue 的 head 設定

```
export default {
        head: {
          title: '甜點電商 - 巧克力布朗尼'
        },
        /*...略*/
    }
```

## 關於 SMO Tag

社群媒體有各自的定義，你可以針對需要，查詢該 SMS 需要填寫哪些資訊

## 列出如下:

### Twitter meta-tags

```
twitter:card
twitter:site
twitter:title
twitter:description
twitter:creator
twitter:image
twitter:data1
twitter:label1
twitter:data2
twitter:label2
```

### Open Graph Data

```
og:title
og:type
og:image
og:description
og:site_name
og:url
og:locale
```

### Facebook specific tags

```
fb:admins (for an existing related facebook page)
```

SMS 也有提供偵錯工具，供人預覽自家網站的完成度
Facebook Debugger - https://developers.facebook.com/tools/debug/

# Nuxt 擴充屬性：

Page Component @/pages -> 有
