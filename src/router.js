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
import BasicComponentCommunication from './components/basic/BasicComponentCommunication'
import BasicLifeCycle from './components/basic/BasicLifeCycle'
import BasicFormHandle from './components/basic/BasicFormHandle'
import BasicComputed from './components/basic/BasicComputed'
import BasicWatchers from './components/basic/BasicWatchers'

import VueAdvance from './components/VueAdvance'
import AdvanceFetchData from './components/advance/AdvanceFetchData'
// import AdvanceCustomDirective from './components/advance/AdvanceCustomDirective'

import NotFoundPage from './components/NotFoundPage'

const routes = [
  {path: '/basic', name: 'basic', component: VueBasic, alias: '/'},
  {path: '/basic/BasicDataBinding', name: 'BasicDataBinding', component: BasicDataBinding},
  {path: '/basic/BasicStyleBinding', name: 'BasicStyleBinding', component: BasicStyleBinding},
  {path: '/basic/BasicEventHandle', name: 'BasicEventHandle', component: BasicEventHandle},
  {path: '/basic/BasicDirective', name: 'BasicDirective', component: BasicDirective},
  {path: '/basic/BasicFilter', name: 'BasicFilter', component: BasicFilter},
  {path: '/basic/BasicComponent', name: 'BasicComponent', component: BasicComponent},
  {path: '/basic/BasicComponentCommunication', name: 'BasicComponentCommunication', component: BasicComponentCommunication},
  {path: '/basic/BasicLifeCycle', name: 'BasicLifeCycle', component: BasicLifeCycle},
  {path: '/basic/BasicFormHandle', name: 'BasicFormHandle', component: BasicFormHandle},
  {path: '/basic/BasicComputed', name: 'BasicComputed', component: BasicComputed},
  {path: '/basic/BasicWatchers', name: 'BasicWatchers', component: BasicWatchers},
  {path: '/advance', name: 'advance', component: VueAdvance},
  {path: '/advance/AdvanceFetchData', name: 'AdvanceFetchData', component: AdvanceFetchData},
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
