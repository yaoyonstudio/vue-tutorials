import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueBasic from './components/VueBasic'
import BasicDataBinding from './components/basic/BasicDataBinding'
import BasicStyleBinding from './components/basic/BasicStyleBinding'
import BasicEventHandle from './components/basic/BasicEventHandle'
import BasicDirective from './components/basic/BasicDirective'
import BasicFilter from './components/basic/BasicFilter'
import BasicComponent from './components/basic/BasicComponent'

import NotFoundPage from './components/NotFoundPage'

const routes = [
  {path: '/basic', name: 'basic', component: VueBasic, alias: '/'},
  {path: '/basic/BasicDataBinding', name: 'BasicDataBinding', component: BasicDataBinding},
  {path: '/basic/BasicStyleBinding', name: 'BasicStyleBinding', component: BasicStyleBinding},
  {path: '/basic/BasicEventHandle', name: 'BasicEventHandle', component: BasicEventHandle},
  {path: '/basic/BasicDirective', name: 'BasicDirective', component: BasicDirective},
  {path: '/basic/BasicFilter', name: 'BasicFilter', component: BasicFilter},
  {path: '/basic/BasicComponent', name: 'BasicComponent', component: BasicComponent},
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
