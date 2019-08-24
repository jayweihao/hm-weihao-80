import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // name:找到对应的路由规则
    // 跳转方便一些：$router.push('/login') 或者 $router.push({name:'login'})
    // { path: './', redirect: '/login' },
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
