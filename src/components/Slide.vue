<template>
  <div class="slide" :style="slideStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    backgroundColour: String
  },
  computed: {
    slideStyle: function() {
      return { "background-color": this.backgroundColour };
    }
  }
}
</script>

<style>
  .slide {
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
