<template>
  <StandardSlide>
    <div class='demo-container'>
      <Prism class='code' language='javascript'>{{ code }}</Prism>
      <ul>
        <li>All of your code goes in one file</li>
        <li>20 years of separation of concerns &mdash; gone!</li>
        <li>
          This format is not required
          <ul>
            <li>HTML could be generated by HAML templates</li>
            <li>CSS could go in global stylesheets</li>
            <li>Javascript could go in a file on it's own</li>
          </ul>
        </li>
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
  <h1>Hello World</h1>
  <p>How's it going {{ name }}?</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      name: "Dan"
    }
  }
}
<\/script>

<style scoped>
h1 {
  font-size: 28px;
}
</style>
`.trim();

export default {
  name: 'ComponentDemo',
  mixins: [Slide],
  data: function(){
    return {
      title: "DemoComponent.vue",
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
