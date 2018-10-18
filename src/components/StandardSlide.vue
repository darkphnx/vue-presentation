<template>
  <Slide>
    <div class='header'>
      <h1>{{ title }}</h1>
    </div>
    <div class='content'>
      <slot></slot>
    </div>
  </Slide>
</template>

<script>
import Slide from "./Slide.vue"

export default {
  name: "StandardSlide",
  props: {
    title: String,
  },
  components: {
    Slide
  }
}
</script>

<style>
  .header {
    background-color: #017dc6;
    color: #fff;
  }

  .header, .content {
    padding-left: 5rem;
  }
</style>
