<template>
  <div id="navigation">
    Slide {{ currentSlide }} / {{ slideCount }}
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    "slideCount": Number,
    "currentSlide": Number
  },
  methods: {
    prevClicked: function(){
      this.$emit('prevSlide');
    },
    nextClicked: function(){
      this.$emit('nextSlide');
    }
  }
}
</script>

<style>
  #navigation {
    position: absolute;
    top: 45px;
    right: 0;
    margin: 0 15px;
    color: #fff;
    font-size: 16px;
  }
</style>
