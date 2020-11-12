import Vue from 'vue'
import Router from 'vue-router'
// 相对路径
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
     redirect:'login'
    }, 
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
// 配置路由导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
      return next()
  }
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    next('/login')
    return
  }
  next()
})
export default router
