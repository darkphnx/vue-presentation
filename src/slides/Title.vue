<template>
  <TitleSlide title="A Window with a Vue"
              subTitle="Vue.js - React killer or just the flavour of the week?">
  </TitleSlide>
</template>

<script>
import Slide from '../mixins/Slide.js'
import TitleSlide from '../templates/TitleSlide.vue'

export default {
  name: "Title",
  mixins: [Slide],
  components: {
    TitleSlide
  }
}
</script>

<style>
</style>
