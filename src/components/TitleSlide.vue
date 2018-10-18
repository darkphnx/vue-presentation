<template>
  <Slide>
    <div class='title'>
      <h1>{{ title }}</h1>
    </div>
    <div class='subTitle'>
      <h3>{{ subTitle }}</h3>
    </div>
    <slot></slot>
  </Slide>
</template>

<script>
import Slide from "./Slide.vue"

export default {
  name: "TitleSlide",
  props: {
    title: String,
    subTitle: String
  },
  components: {
    Slide
  }
}
</script>

<style>
  .title {
    height: 50%;
    background-color: #017dc6;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  .title h1 {
    margin-top: auto;
  }

  .title, .subTitle {
    text-align: center;
  }
</style>
