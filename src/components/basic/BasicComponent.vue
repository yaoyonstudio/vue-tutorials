<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <h2>创建组件</h2>
        <section>
          <h3>使用Vue.extend创建组件</h3>
          <p>使用Vue.extend创建组件需要注册组件</p>
          <my-com1></my-com1>   
        </section>
        <section>
          <h3>使用Vue.component创建组件1</h3>
          <p>使用Vue.componen创建组件第一种方式：</p>
          <my-com2></my-com2>
        </section>
        <section>
          <h3>使用Vue.component创建组件2</h3>
          <p>使用Vue.componen创建组件第二种方式：</p>
          <my-com3></my-com3>
        </section>
        <section>
          <h3>使用Vue单页面组件创建组件</h3>
          <my-com4></my-com4>
        </section>
        <p class="padding">注：如果要使用vue.extend和vue.component来创建组件，需要使用"Standalone"版本的Vue，在使用webpack开发工具的情况下，默认使用的是Runtime only版本，因此，需要在webpack中使用resole的alias配置Standalone版本的Vue。</p>
        <hr />
        <h2>组件属性</h2>
        <section>
          <h3>组件属性传递</h3>
          <my-com5 v-bind:data="msg"></my-com5>
        </section>
        <section>
          <h3>组件属性传递(单向数据流)</h3>
          <my-com5 v-bind:data="msg" v-bind:one-way-flow-data="msg"></my-com5>
          <button @click="changeMsg">改变外部属性的值</button>
        </section>
        <section>
          <h3>组件属性校验</h3>
          <my-com6 v-bind:string="string" v-bind:number="number" v-bind:bool="bool" v-bind:fun="fun" v-bind:obj="obj" v-bind:arr="arr" ></my-com6>
        </section>
        <hr />
        <h2>组件内容分布（Slots）</h2>
        <section>
          <h3>单个slot</h3>
          <my-com7>
            <div>
              组件下面有内容，就展示在组件的slot区域，并且不显示组件slot中原定的内容
            </div>
          </my-com7>
          <my-com7></my-com7>
        </section>
        <section>
          <h3>多个slot</h3>
          <my-com8>
            <div slot="header" style="background-color: #0a8acd; color: #fff; padding: .5rem;">
              这是自定义的头部
            </div>
            <div>
              组件下面有内容，就展示在组件的slot区域，并且不显示组件slot中原定的内容
            </div>
            <div slot="footer" style="background-color: #0a8acd; color: #fff; padding: .5rem;">
              这是自定义的底部
            </div>
          </my-com8>
          <my-com8></my-com8>
        </section>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'
// 使用Vue.extend创建组件
const myCom1 = Vue.extend({
  template: '<div><p>{{ msg }}这是一个用Vue.extend建立的组件。</p></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
})

// 使用Vue.componen创建组件第一种方式
Vue.component('myCom2', {
  template: '<div><p>{{ msg }}这是一个用Vue.component</p></div>',
  data: function () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
})

// 使用Vue.componen创建组件第二种方式
Vue.component('myCom3', myCom1)

// 使用Vue单页面组件创建组件
import MyCom4 from './MyCom4'
import MyCom5 from './MyCom5'
import MyCom6 from './MyCom6'

Vue.component('myCom7', {
  template: `
    <div class="slotContainer">
      <header style="background-color: #dd3333; color: #fff; padding: .5rem;"><p>头部内容</p></header>
      <section style="margin: 1rem auto; ">
        <slot>这是主体内容，如果没有内容分布到这个组件下，就会默认显示此处内容。</slot>
      </section>
      <footer style="background-color: #dd3333; color: #fff; padding: .5rem;"><p>底部内容</p></footer>
    </div>
  `
})

Vue.component('myCom8', {
  template: `
    <div class="slotContainer">
      <slot name="header">
        <header style="background-color: #dd3333; color: #fff; padding: .5rem;"><p>头部内容</p></header>
      </slot>
      <section style="margin: 1rem auto; ">
        <slot>这是主体内容，如果没有内容分布到这个组件下，就会默认显示此处内容。</slot>
      </section>
      <slot name="footer">
        <footer style="background-color: #dd3333; color: #fff; padding: .5rem;" slot="footer"><p>底部内容</p></footer>
      </slot>
    </div>
  `
})

export default {
  name: 'BasicComponent',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-组件',
      msg: 'Hello, VueJS!',
      string: '这是字符串',
      number: 9,
      bool: true,
      fun: this.testFun,
      obj: {
        name: 'ken',
        age: 28
      },
      arr: [1, 2, 3]
    }
  },
  components: {
    VueTopbar,
    myCom1,
    MyCom4,
    MyCom5,
    MyCom6
  },
  methods: {
    changeMsg () {
      this.msg = '改变了'
    },
    testFun () {
      alert('这是一个函数弹出框')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{
        margin-bottom: .5rem;
      }
    }
    h2{padding: .5rem 0;text-align: center;}
    .padding{padding: 1rem;}
    pre{border-top: 1px solid $borderColor; border-bottom: 1px solid $borderColor;}
    .slotContainer{
      border: 1px solid $mainColor; 
      margin:1rem 0;
    }
  }
</style>
