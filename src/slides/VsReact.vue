<template>
  <StandardSlide title="Vue vs. React">
    <p>What are the differences?</p>
  </StandardSlide>
</template>

<script>
import Slide from '../mixins/Slide.js'
import StandardSlide from '../templates/StandardSlide.vue'

export default {
  name: 'VsReact',
  mixins: [Slide],
  data: function(){
    return {
      title: "Vue vs. React"
    };
  },
  components: {
    StandardSlide
  }
}
</script>
