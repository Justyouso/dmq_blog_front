import Vue from 'vue'
import App from './App.vue' // 单页面变化
import router from './router' //路径
import axios from 'axios'
import '@/components' // 全局组件
import '@/components/ElementUI' // ElementUI
import '@/style/index.scss'
import '@/apis' // 全局api

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
