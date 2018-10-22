<template>
  <StandardSlide>
    <div class='getting-started-container'>
      <Prism class='code' language='javascript'>{{ code }}</Prism>
      <ul>
        <li>vue-cli bootstraps a frontend-only project</li>
        <li>When using Rails with Yarn simply 'yarn add vue'</li>
        <li>Easy to add to an existing application</li>
        <li>Look at the source for <a href='https://github.com/darkphnx/vue-presentation'>this presentation</a>
        <li>
          Check out the source for <a href='https://github.com/darkphnx/vue-rails-todo'>vue-rails-todo</a> for an
          example with a Rails backend
        </li>
      </ul>
    </div>
  </StandardSlide>
</template>

<script>
import Slide from '../mixins/Slide.js'
import StandardSlide from '../templates/StandardSlide.vue'
import Prism from 'vue-prism-component'

const code = `
import Vue from 'vue'
import SlideShow from './SlideShow.vue'

new Vue({
  render: function(createElement) {
    return createElement(SlideShow);
  }
}).$mount('#app');
`.trim();

export default {
  name: 'GettingStarted',
  mixins: [Slide],
  data: function(){
    return {
      title: "Getting Started",
      code: code
    };
  },
  components: {
    StandardSlide,
    Prism
  }
}
</script>

<style>
  .getting-started-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .getting-started-container ul {
    margin-left: 40px;
  }
</style>
