<template>
  <StandardSlide>
    <div class='demo-container'>
      <Prism class='code' language='javascript'>{{ code }}</Prism>
      <ul>
        <li><Prism :inline="true">v-bind:prop</Prism> passes a property to another component</li>
        <li>Can be shortened to <Prism :inline="true">:prop</Prism></li>
        <li><Prism :inline="true">v-on:event</Prism> defines an event listener</li>
        <li>Can be shortened to <Prism :inline="true">@event</Prism></li>
        <li><Prism :inline="true">this.$emit</Prism> sends a custom event to a parent component</li>
      </ul>
    </div>
  </StandardSlide>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'

import Slide from '../mixins/Slide.js'
import StandardSlide from '../templates/StandardSlide.vue'

const code = `
<template>
  <OtherComponent
    v-bind:people="people"
    v-on:click="handleClick"></OtherComponent>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      people: [{ name: "Adam", friendly: true}]
    }
  },
  methods: {
    handleClick: function(e) {
      this.$emit("customEvent", "Got clicked on");
    }
  }
  components: { OtherComponent }
}
<\/script>
`.trim();

export default {
  name: 'TagsDemo',
  mixins: [Slide],
  data: function(){
    return {
      title: "Special Attributes",
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
  .demo-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .demo-container ul {
    margin-left: 40px;
  }

  .code {
    font-size: 22px;
  }
</style>
