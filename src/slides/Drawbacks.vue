<template>
  <StandardSlide>
    <div class='drawbacks-container'>
      <ul>
        <li>Tooling for Rails isn't available yet. No react_rails of the Vue world.</li>
        <li>Server-side rendering is avaiable but not mature</li>
        <li>Less mature than React</li>
        <li>Smart property management means you have to be careful how you mutate properties</li>
      </ul>
    </div>
  </StandardSlide>
</template>

<script>
import Slide from '../mixins/Slide.js'
import StandardSlide from '../templates/StandardSlide.vue'

export default {
  name: 'Drawbacks',
  mixins: [Slide],
  data: function(){
    return {
      title: "Any Downsides?"
    };
  },
  components: {
    StandardSlide
  }
}
</script>

<style>
  .drawbacks-container {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>
