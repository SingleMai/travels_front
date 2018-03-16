import Vue from 'vue'
import Router from 'vue-router'
// 异步加载组件
const Index = resolve => { import('components/Index').then(module => { resolve(module) }) }
const Login = resolve => { import('components/Login').then(module => { resolve(module) }) }
const Users = resolve => { import('components/Users').then(module => { resolve(module) }) }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/users',
          name: 'Users',
          component: Users
        }
      ]
    }
  ]
})
