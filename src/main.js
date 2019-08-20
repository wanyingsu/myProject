import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

import router from './router'
import store from './store'
import Header from './components/Header/Header.vue'
import Swiper from './components/Swiper/Swiper.vue'
import './api/index'
import './mockData/mockServer'


Vue.config.productionTip = false
// 注册全局组件
Vue.component('Header',Header)
Vue.component('Swiper',Swiper)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
