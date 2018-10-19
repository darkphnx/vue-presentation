<template>
  <StandardSlide>
    <div class='demo-container'>
      <Prism class='code' language='javascript'>{{ code }}</Prism>
      <ul>
        <li><Prism :inline="true">v-if</Prism> conditionally displays the element</li>
        <li><Prism :inline="true">v-for</Prism> renders the elements once for each item in the array</li>
        <li>
          <Prism :inline="true">v-for</Prism> takes precedence over <Prism :inline="true">v-if</Prism> therefore
          we can access the iterated item in our conditional
        </li>
        <li>Friendly people get greeted</li>
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
  <p
    v-if="person.friendly"
    v-for="person in people">
      How's it going {{ person.name }}?
  </p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      people: [{ name: "Adam", friendly: true},
               { name: "Dan", friendly: false }]
    }
  }
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
