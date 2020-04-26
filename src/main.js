import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'

Vue.use(Element)
new Vue({
  el: '#app',
  render: h => h(App)
})