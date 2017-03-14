import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './Store'

// console.log(router)
// router.beforeEach((to, from, next) => {
//   console.log('这是一个全局钩子')
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   next(true)
// })

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
