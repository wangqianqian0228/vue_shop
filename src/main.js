// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/reset.css'
import axios from 'axios'
import {Form,
 FormItem,
 Input,
 Button,
 Message,
 Container,
 Header,
 Aside,
 Main,
 Submenu,
 MenuItemGroup,
 MenuItem,
 Menu
} from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Menu)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 配置请求头
axios.interceptors.request.use((config)=>{
   config.headers.Authorization = window.sessionStorage.getItem('token')
   return config
})
Vue.prototype.$http = axios
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
