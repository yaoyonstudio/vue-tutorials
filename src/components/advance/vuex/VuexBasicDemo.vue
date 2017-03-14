<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <p>{{ count }}</p>
          <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
          </p>
        </section>
        <section>
          <h3>使用</h3>
          <h4>1、安装：npm install --save vuex</h4>
          <h4>2、新建Vuex配置Store.js</h4>
          <pre>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
          </pre>
          <h4>3、全局引入配置</h4>
          <pre>
import Vue from 'vue'
import store from './Store'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
          </pre>
          <h4>4、使用</h4>
          <p>(1) 使用computed绑定state,让state变化可响应</p>
          <pre>
computed: {
  count () {
    return this.$store.state.count
  }
}
          </pre>
          <p>(2) 使用加入状态变化事件响应</p>
          <pre>
methods: {
  increment () {
    this.$store.commit('increment')
  },
  decrement () {
    this.$store.commit('decrement')
  }
}
          </pre>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../../VueTopbar'
export default {
  name: 'VuexBasicDemo',
  data () {
    return {
      title: 'VueJS实例教程-Vuex状态管理-BasicDemo',
      msg: 'Hello, VueJS!'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  components: {
    VueTopbar
  }
}
</script>

<style scoped lang="scss">
  @import '../../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{margin-bottom: .5rem; color: $mainColor;}
      button{padding: .5rem 1rem;}
    }
  }
</style>
