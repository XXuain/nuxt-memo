# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

# router

加 \_ 前綴代表動態路由(帶 params 的路徑)

```
pages/
--| product.vue
--| index.vue
--| users/
-----| _id.vue
```

# Nuxt 頁面元件細部設定

## Nuxt 頁面元件 擴充了以下屬性:

```
head        // <head> 內要產生的標籤
layout      // 這頁套用的佈局元件
loading     // 是否套用預設 loading 效果，預設為 Progress Bar 效果。可自行控制 loading 效果觸發點、Progress Bar 效果參數，參考 API > page > loading
transition  // 這頁套用的跳頁轉場效果
scrollToTop // 換頁是否跳到頁首
```

## Nuxt 頁面生命週期 擴充了以下屬性:

```
middleware // 這頁執行哪些 middleware，後面會深入介紹
validate   // 進入頁面前的驗證規則。false 代表沒驗過，Nuxt 會導到錯誤頁面
asyncData  // 頁面元件渲染前執行，回傳 Promise 物件，會把 Promise callback 最終回傳值設為頁面 data
fetch      // 頁面元件渲染前執行，和 asyncData 類似，也回傳 Promise 物件，但最終回傳值不做處理
```
