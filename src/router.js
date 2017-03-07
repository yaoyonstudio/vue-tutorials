import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueBasic from './components/VueBasic'
import NotFoundPage from './components/NotFoundPage'

const routes = [
  {path: '/basic', name: 'basic', component: VueBasic, alias: '/'},
  {path: '*', component: NotFoundPage}
]

export default new VueRouter({
  // mode: 'history',
  base: '/',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition
  },
  routes
})
