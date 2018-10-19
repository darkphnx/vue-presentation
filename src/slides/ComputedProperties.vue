<template>
  <StandardSlide>
    <div class='demo-container'>
      <Prism class='code' language='javascript'>{{ code }}</Prism>
      <ul>
        <li>Methods are always calculated at runtime.</li>
        <li>Good for dynamic methods or event handlers</li>
        <li>Computed properties are built from component data and are cached until their data changes</li>
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
  <p>{{ randomGreeting }} {{ fullName }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return { firstName: "Dan", lastName: "Wentworth"
             greetings: ["How's it going?", "Howdy"] }
  }
  computed: function() {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  methods: {
    randomGreeting: function() {
      return this.greetings[Math.floor(Math.random()*this.greetings.length)]
    }
  }
}
<\/script>
`.trim();

export default {
  name: 'ComputedProperties',
  mixins: [Slide],
  data: function(){
    return {
      title: "Component Methods",
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
    font-size: 24px;
    flex: 0 0 auto;
  }
</style>
