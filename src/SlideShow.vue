<template>
  <div id="slideshow">
    <component :is="currentSlide"></component>
    <Navigation
      :currentSlide="currentSlideNumber"
      :slideCount="slideCount"
      @nextSlide="nextSlide"
      @prevSlide="prevSlide">
    </Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

import Title from './slides/Title.vue'
import VsReact from './slides/VsReact.vue'

const slides = [Title, VsReact];

export default {
  name: 'slideshow',
  data: function() {
    return {
      slides: slides,
      currentSlideIndex: 0
    }
  },
  created: function(){
    window.addEventListener('keyup', this.handleKeyUp);
  },
  computed: {
    currentSlide: function(){
      return this.slides[this.currentSlideIndex];
    },
    slideCount: function(){
      return this.slides.length;
    },
    currentSlideNumber: function(){
      return this.currentSlideIndex + 1;
    }
  },
  methods: {
    nextSlide: function(){
      const nextSlideIndex = this.currentSlideIndex + 1;

      if(nextSlideIndex < this.slides.length){
        this.currentSlideIndex = nextSlideIndex;
      }
    },
    prevSlide: function(){
      const prevSlideIndex = this.currentSlideIndex - 1;

      if(prevSlideIndex >= 0){
        this.currentSlideIndex = prevSlideIndex;
      }
    },
    handleKeyUp: function(e){
      if(e.keyCode === 39 || e.keyCode === 32){
        this.nextSlide();
      } else if(e.keyCode === 37){
        this.prevSlide();
      }
    }
  },
  components: {
    Navigation
  }
}
</script>

<style>
#slideshow {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  margin: 0;
}
</style>
