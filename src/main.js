import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueAxios } from "./axios/request"
//---Ant-design-vue【style】-----------
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.use(VueAxios,router)
//-------------------------------------
//v-login
import login from './directive/directive'
require('./mock')

Vue.config.productionTip = false

new Vue({
  directives:{login},
  router,
  store,
  render: h => h(App)
}).$mount('#app')
