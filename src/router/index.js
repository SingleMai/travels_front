import Vue from 'vue'
import Router from 'vue-router'
// 异步加载组件
const Index = resolve => { import('components/Index').then(module => { resolve(module) }) }
const Home = resolve => { import('components/Home/Home').then(module => { resolve(module) }) }
const Chat = resolve => { import('components/Chat/Chat').then(module => { resolve(module) }) }
const Myself = resolve => { import('components/Myself/Myself').then(module => { resolve(module) }) }
const Travels = resolve => { import('components/Travels/Travels').then(module => { resolve(module) }) }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          name: 'home',
          path: 'home',
          component: Home,
        }, {
          name: 'travels',
          path: 'travels',
          component: Travels,
        }, {
          name: 'chat',
          path: 'chat',
          component: Chat,
        }, {
          name: 'myself',
          path: 'myself',
          component: Myself,
        },
      ],
    },
  ],
})
