import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'

import User from '../page/User.vue'
import Commodity from '../page/Commodity.vue'
import UserMain from '../page/UserMain.vue'
import PageOne from '../page/PageOne.vue'
import PageTwo from '../page/PageTwo.vue'
import Index from '../page/Index.vue'
import Login from '../page/Login.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/userMain', //重定向
    children: [
      //子路由
      { path: '/userMain', component: UserMain, name: 'userMain' }, //首页
      { path: '/user', component: User, name: 'user' }, //用户管理
      { path: '/commodity', component: Commodity, name: 'commodity' }, //商品管理
      { path: '/page1', component: PageOne, name: 'page1' }, //页面1
      { path: '/page2', component: PageTwo, name: 'page2' }, //页面2
    ],
  },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})

//添加全局前置路由守卫
router.beforeEach((to, from, next) => {
  // console.log('@@@@@@@@')
  // next()
  // 判断token是否存在
  const token = Cookie.get('token')
  //token不存在则用户没有登录，跳转至登录页面
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
    // token存在,说明用户已经登录，则跳转至首页
  } else if (token && to.name === 'login') {
    next({ name: 'userMain' })
  } else {
    next()
  }
})

export default router
