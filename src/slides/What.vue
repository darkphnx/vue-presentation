<template>
  <StandardSlide>
    <div class='what-container'>
      <div class='icons'>
        <img src='../assets/vue.svg'>
        <img src='../assets/react.svg'>
      </div>
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

  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 200px;
    height: 100%;
  }

  .icons img {
    width: 100%;
  }
</style>
