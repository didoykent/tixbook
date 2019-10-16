import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './App.vue'

import router from './router'





import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

const app = new Vue({


  el: '#app',
  components: {App},
  template: '<App></App>',
  router

})
