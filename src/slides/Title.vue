<template>
  <TitleSlide title="A Window with a Vue"
              subTitle="Vue.js - React killer or just the flavour of the week?">
    <div class='vueLogoContainer'><img src='../assets/vue.png'></div>
  </TitleSlide>
</template>

<script>
import TitleSlide from '../components/TitleSlide.vue'

export default {
  name: "Title",
  components: {
    TitleSlide
  }
}
</script>

<style>
  .vueLogoContainer {
    margin: 0 auto;
  }
</style>
