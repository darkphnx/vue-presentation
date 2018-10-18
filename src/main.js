import Vue from 'vue'
import SlideShow from './SlideShow.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(SlideShow)
}).$mount('#app')
