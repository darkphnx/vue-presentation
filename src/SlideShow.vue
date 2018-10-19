<template>
  <div id="slideshow">
    <Header
      :title="currentSlideTitle"
      :currentSlide="currentSlideNumber"
      :slideCount="slideCount">
    </Header>
    <div class='slideContainer'>
      <component :is="currentSlide" @changeTitle="changeTitle"></component>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

import Title from './slides/Title.vue'
import VsReact from './slides/VsReact.vue'

const slides = [Title, VsReact];

export default {
  name: 'slideshow',
  data: function() {
    return {
      slides: slides,
      currentSlideIndex: 0,
      currentSlideTitle: ""
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
    changeTitle: function(newTitle){
      this.currentSlideTitle = newTitle
    },
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
    Header
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

  display: flex;
  flex-direction: column;
}
.slideContainer {
  flex: 1 0 auto;
}
</style>
