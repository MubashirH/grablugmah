import Vue from 'vue'
import App from './App.vue'
import Router from './router/index'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'material-icons/iconfont/material-icons.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
}).$mount('#app')
