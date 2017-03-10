<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>父级组件传递给子级组件：通过属性prop</h3>
          <parent-com1></parent-com1>
        </section>
        <section>
          <h3>父级组件改变父级变量(父级组件变量将变化后的变量传递给子级组件,子级组件中通过prop承接的父级变量发生变化)</h3>
          <parent-com2></parent-com2>
        </section>
        <section>
          <h3>子级组件改变父级变量(子级组件通过$emit传递改变父级变量的事件和要改变的变量值给父级组件，父级组件通过$on监听接收事件和变量值,并作出改变)</h3>
          <parent-com3></parent-com3>
        </section>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'

Vue.component('childCom1', {
  template: `
    <div style="border: 1px solid #b7b7e6; margin-top: 10px; color: #0a8acd;">
      <p>这是一个子级组件</p>
      <p>子级变量：{{ msg }}</p>
      <p>来自父级的变量：{{ parentMsg }}</p>
    </div>
  `,
  data: function () {
    return {
      msg: 'child scope'
    }
  },
  props: ['parentMsg']
})

Vue.component('parentCom1', {
  template: `
    <div style="border: 1px solid #e8b1d2; padding: 10px;">
      <p>这是一个父级组件</p>
      <p>父级变量：{{ msg }}</p>
      <child-com1 :parent-msg="msg"></child-com1> 
    </div>
  `,
  data: function () {
    return {
      msg: 'parent scope'
    }
  }
})

Vue.component('parentCom2', {
  template: `
    <div style="border: 1px solid #e8b1d2; padding: 10px;">
      <p>这是一个父级组件</p>
      <p>父级变量：{{ msg }}</p>
      <button @click="changeParentScope">父级组件中改变父级变量</button>
      <child-com1 :parent-msg="msg"></child-com1> 
    </div>
  `,
  data: function () {
    return {
      msg: 'parent scope'
    }
  },
  methods: {
    changeParentScope () {
      this.msg = 'parent scope chagned (父级组件改变了父级变量)'
    }
  }
})

// ///////////////////////////////////////

const Events = new Vue({})

Vue.component('childCom3', {
  template: `
    <div style="border: 1px solid #b7b7e6; margin-top: 10px; color: #0a8acd;">
      <p>这是一个子级组件</p>
      <p>子级变量：{{ msg }}</p>
      <p>来自父级的变量：{{ parentMsg }}</p>
      <button @click="changeParentScopeFromChild">子级组件中改变父级变量</button>
    </div>
  `,
  data: function () {
    return {
      msg: 'child scope'
    }
  },
  props: ['parentMsg'],
  methods: {
    changeParentScopeFromChild () {
      console.log(this.parentMsg)
      Events.$emit('changeScope', 'parent scope chagned (子级组件改变了父级变量)')
    }
  }
})

Vue.component('parentCom3', {
  template: `
    <div style="border: 1px solid #e8b1d2; padding: 10px;">
      <p>这是一个父级组件</p>
      <p>父级变量：{{ msg }}</p>
      <child-com3 :parent-msg="msg"></child-com3> 
    </div>
  `,
  mounted () {
    Events.$on('changeScope', (msg) => {
      console.log(msg)
      this.msg = msg
    })
  },
  data: function () {
    return {
      msg: 'parent scope'
    }
  }
})

export default {
  name: 'BasicComponentCommunication',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-组件交互',
      msg: 'Hello, VueJS!'
    }
  },
  components: {
    VueTopbar
  }
}
</script>

<style scoped lang="scss">
  @import '../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{ margin-bottom: .5rem; }
    }
  }
</style>
