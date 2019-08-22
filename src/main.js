import Vue from 'vue'
// import './cube-ui'
import App from './App.vue'

import router from './router'
import store from './store'
import Header from './components/Header/Header.vue'
import Swiper from './components/Swiper/Swiper.vue'
import './mockData/mockServer'
import './validate'
import 'lib-flexible'

import loading from './common/images/timg (1).gif'
import VueLazyload from 'vue-lazyload'
import 'amfe-flexible'

//声明使用插件
Vue.use(VueLazyload, {
  loading,
})



Vue.config.productionTip = false
// 注册全局组件
Vue.component('Header',Header)
Vue.component('Swiper',Swiper)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
