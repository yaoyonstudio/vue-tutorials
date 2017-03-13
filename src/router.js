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
import AdvanceVueRouter from './components/advance/AdvanceVueRouter'
import AdvanceVueRouterDetail from './components/advance/AdvanceVueRouterDetail'
import AdvanceVueRouterChild1 from './components/advance/AdvanceVueRouterChild1'
import AdvanceVueRouterChild2 from './components/advance/AdvanceVueRouterChild2'
import AdvanceVueRouterChild3 from './components/advance/AdvanceVueRouterChild3'
import AdvanceSingleTransition from './components/advance/AdvanceSingleTransition'
import AdvanceMultipleTransition from './components/advance/AdvanceMultipleTransition'
import AdvanceCustomDirective from './components/advance/AdvanceCustomDirective'
import AdvanceCustomerMixins from './components/advance/AdvanceCustomerMixins'
import AdvanceRenderFunction from './components/advance/AdvanceRenderFunction'
import AdvanceVuex from './components/advance/AdvanceVuex'

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
  {
    path: '/advance/AdvanceVueRouter',
    name: 'AdvanceVueRouter',
    component: AdvanceVueRouter,
    children: [
      {path: '/advance/AdvanceVueRouter/child1', component: AdvanceVueRouterChild1, alias: '/advance/AdvanceVueRouter'},
      {path: '/advance/AdvanceVueRouter/child2', component: AdvanceVueRouterChild2},
      {path: '/advance/AdvanceVueRouter/child3', component: AdvanceVueRouterChild3}
    ]
  },
  {path: '/advance/AdvanceVueRouter/:id', name: 'AdvanceVueRouterDetail', component: AdvanceVueRouterDetail},
  {path: '/advance/AdvanceSingleTransition', name: 'AdvanceSingleTransition', component: AdvanceSingleTransition},
  {path: '/advance/AdvanceMultipleTransition', name: 'AdvanceMultipleTransition', component: AdvanceMultipleTransition},
  {path: '/advance/AdvanceCustomDirective', name: 'AdvanceCustomDirective', component: AdvanceCustomDirective},
  {path: '/advance/AdvanceCustomerMixins', name: 'AdvanceCustomerMixins', component: AdvanceCustomerMixins},
  {path: '/advance/AdvanceRenderFunction', name: 'AdvanceRenderFunction', component: AdvanceRenderFunction},
  {path: '/advance/AdvanceVuex', name: 'AdvanceVuex', component: AdvanceVuex},
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
