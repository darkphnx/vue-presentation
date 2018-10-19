<template>
  <div class='progressContainer'>
    <div class='progressInner' :style="progressInnerStyle"></div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    "slideCount": Number,
    "currentSlide": Number
  },
  computed: {
    progressPercent: function() {
      return (this.currentSlide / this.slideCount) * 100;
    },
    progressInnerStyle: function() {
      return { width: `${this.progressPercent}%` }
    }
  }
}
</script>

<style>
.progressContainer {
  opacity: 0.8;
  height: 10px;
  border: solid 2px #fff;
  width: 200px;
}
.progressInner {
  background-color: #fff;
  height: 100%;
  transition: width 0.1s;
}
</style>
