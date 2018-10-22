import Vue from 'vue'
import SlideShow from './SlideShow.vue'

Vue.config.productionTip = false

new Vue({
  render: function(createElement) {
    return createElement(SlideShow);
  }
}).$mount('#app');
