<template>
  <div id="navigation">
    <a href="#" @click.prevent="prevClicked">&larr;</a>
    {{ currentSlide }} of {{ slideCount }}
    <a href="#" @click.prevent="nextClicked">&rarr;</a>
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
    bottom: 0;
    right: 0;
    margin: 0 15px 10px;
  }
</style>
