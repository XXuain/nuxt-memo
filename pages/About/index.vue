<template>
  <div class="about">
    <h1>about</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'about',
  head() {
    return {
      title: 'About Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My About description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
