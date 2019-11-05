import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//将axios放到原型里
import axios from 'axios'
Vue.prototype.$http=axios




//导入vant模块
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
