<template>
  <StandardSlide>
    <div class='why-container'>
      <ul>
        <li>HTML templates written in standard HTML instead of JSX</li>
        <li>No distinction between state and props</li>
        <li>
          Less hand-tuning required for performance
          <ul>
            <li>No need for shouldComponentUpdate or PureComponent</li>
            <li> Vue has smart property change detection to prevent unnecessary renders. </li>
          </ul>
        </li>
        <li>More structured approach to components</li>
      </ul>
    </div>
  </StandardSlide>
</template>

<script>
import Slide from '../mixins/Slide.js'
import StandardSlide from '../templates/StandardSlide.vue'

export default {
  name: 'Why',
  mixins: [Slide],
  data: function(){
    return {
      title: "Why Bother?"
    };
  },
  components: {
    StandardSlide
  }
}
</script>

<style>
  .why-container {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>
