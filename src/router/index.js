import Vue from 'vue'
import Router from 'vue-router'

import Login from './login/login.js'; //登录
import Main from './public/main.js'; //公共

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', //默认路由重定向至登录页
      redirect: 'login'
    },
    Login,
    Main,
    {
      path: '*', //输入错误路由跳转至登录页
      redirect: 'login'
    }
  ],
  linkActiveClass: 'active'
})
