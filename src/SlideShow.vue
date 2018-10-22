<template>
  <div id="slideshow" @click.prevent="nextSlide">
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
import What from './slides/What.vue'
import Why from './slides/Why.vue'
import ComponentDemo from './slides/ComponentDemo.vue'
import ComputedProperties from './slides/ComputedProperties.vue'
import TagsDemo from './slides/TagsDemo.vue'
import TagsDemo2 from './slides/TagsDemo2.vue'
import Drawbacks from './slides/Drawbacks.vue'
import GettingStarted from './slides/GettingStarted.vue'

const slides = [Title, What, Why, ComponentDemo, ComputedProperties, TagsDemo, TagsDemo2, Drawbacks, GettingStarted];

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
  font-size: 48px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  margin: 0;
  line-height: 1.5;

  display: flex;
  flex-direction: column;
}

.slideContainer {
  flex: 1 0 auto;
  display: flex;
}

ul {
  list-style: none;
  padding-left: 1em;
}

li {
  margin-top: 0.5em;
}

li:before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  background-image: url('./assets/vue.svg');
  background-repeat: no-repeat;
  background-size: 0.75em;
  background-position: bottom;
  margin-right:0.2em;
}

li:first-child {
  margin-top: 0;
}

ul > li:first-child {
  margin-top: 0.5em;
}
</style>
