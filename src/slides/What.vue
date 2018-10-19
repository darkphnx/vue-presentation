<template>
  <StandardSlide>
    <div class='what-container'>
      <img src='../assets/vue.png'>
      <ul>
        <li>Frontend Javascript Framework</li>
        <li>
          Similar to React
          <ul>
            <li>Component Based</li>
            <li>Virtual DOM</li>
            <li>One-way Data Flow (Parent Component &rarr; Child Component)</li>
          </ul>
        </li>
        <li>Used in production by Alibaba, WizzAir, GitLab</li>
      </ul>
    </div>
  </StandardSlide>
</template>

<script>
import Slide from '../mixins/Slide.js'
import StandardSlide from '../templates/StandardSlide.vue'

export default {
  name: 'What',
  mixins: [Slide],
  data: function(){
    return {
      title: "What is Vue.js?"
    };
  },
  components: {
    StandardSlide
  }
}
</script>

<style>
  .what-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .what-container img {
    margin-right: 40px;
    min-width: 16%;
  }
</style>
