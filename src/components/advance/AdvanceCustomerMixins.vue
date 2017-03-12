<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>一个简单的Mixin</h3>
          <p>Mixin可以为组件提供重用功能，当多个组件需要用到相同功能时，就可以使用Mixin，Mixin在定义时可以包含所有组件含有的选项</p>
          <my-com1></my-com1>
          <my-com2></my-com2>
        </section>
        <section>
          <h3>Mixin与组件配置的合并</h3>
          <p>当一个组件使用一个mixin，并且，组件中含有与mixin中相同的配置时，配置项会被合并在一起。mixin的配置会比组件中的配置先触发执行。</p>
          <p>诸如methods/components/directives等配置项，其配置内容是一个函数或对象，这时，默认地，组件的配置项会有更高优先级，会覆盖mixin的配置项。如当mixin和组件的methods配置中都含有common方法时，组件中的common方法会覆盖mixin中的方法。</p>
          <my-com3></my-com3>
          <my-com4></my-com4>
        </section>
        <section>
          <h3>全局mixin</h3>
          <p>全局mixin的使用要非常小心，因为它会影响到所有的Vue实例。一般用于做自定义全局配置项或做插件</p>
          <my-com5></my-com5>
        </section>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'

let myMixin = {
  created () {
    console.log('created from mixin')
  },
  mount () {
    console.log('mount')
  },
  methods: {
    common () {
      alert('这是一个公用方法')
    }
  }
}

const myCom1 = Vue.extend({
  mixins: [myMixin],
  template: '<div><p>{{ msg }}这是一个组件一。</p><button @click="common">Mixin定义的公有方法</button></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
})

const myCom2 = Vue.extend({
  mixins: [myMixin],
  template: '<div><p>{{ msg }}这是一个组件二。</p><button @click="common">Mixin定义的公有方法</button></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
})

const myCom3 = Vue.extend({
  mixins: [myMixin],
  created () {
    console.log('created from component')
  },
  template: '<div><p>{{ msg }}这是一个组件三。</p><button @click="common">Mixin定义的公有方法</button></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
})

const myCom4 = Vue.extend({
  mixins: [myMixin],
  template: '<div><p>{{ msg }}这是一个组件四。</p><button @click="common">Mixin定义的公有方法</button><button @click="private">组件自有方法</button></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  },
  methods: {
    common () {
      alert('这是一个组件中的方法')
      console.log('common method from component')
    },
    private () {
      console.log('private method from component')
    }
  }
})

// 使用全局mixin
Vue.mixin({
  created () {
    let myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  myOption: 'hello'
})

const myCom5 = Vue.extend({
  mixins: [myMixin],
  template: '<div><p>{{ msg }}这是一个组件五。</p></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
})

export default {
  name: 'AdvanceCustomerMixins',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-数据绑定',
      msg: 'Hello, VueJS!'
    }
  },
  components: {
    VueTopbar,
    myCom1,
    myCom2,
    myCom3,
    myCom4,
    myCom5
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import '../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{margin-bottom: .5rem;}
    }
  }
</style>
