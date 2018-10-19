<template>
  <StandardSlide>
    <div class='getting-started-container'>
      <ul>
        <li>vue-cli bootstraps a frontend-only project</li>
        <li>When using Rails with Yarn simply 'yarn add vue'</li>
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

export default {
  name: 'GettingStarted',
  mixins: [Slide],
  data: function(){
    return {
      title: "Getting Started"
    };
  },
  components: {
    StandardSlide
  }
}
</script>

<style>
  .getting-started-container {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>
