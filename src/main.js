require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

import jQuery from 'jquery'
global.jQuery = jQuery
import 'bootstrap'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
