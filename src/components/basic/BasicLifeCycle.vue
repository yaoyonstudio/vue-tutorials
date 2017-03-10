<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>Vue生命周期</h3>
          <ul>
              <li>beforeCreate:无法拿到data中的变量值</li>
              <li>created</li>
              <li>beforeMount</li>
              <li>mount</li>
              <li>beforeUpdate：可以拿到变化后的变量值</li>
              <li>updated：可以拿到变化后的变量值</li>
              <li>beforeDestroy</li>
              <li>destroyed</li>
          </ul>
          <hr />
          <p>{{ msg }}</p>
          <button @click="change">改值</button>
        </section>
        <section>
          <h3>Vue实例生命周期图表</h3>
          <img src="assets/lifecycle.png" style="width: 100%;" />
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'BasicComponentLifeCycle',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-生命周期',
      msg: 'Hello, VueJS!'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
    console.log(this.msg)
    console.log('-----------------------')
  },
  created () {
    console.log('create')
    console.log(this.msg)
    console.log('-----------------------')
  },
  beforeMount () {
    console.log('beforeMount')
    console.log(this.msg)
    console.log('-----------------------')
  },
  mount () {
    console.log('mount')
    console.log(this.msg)
    console.log('-----------------------')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
    console.log(this.msg)
    console.log('-----------------------')
  },
  updated () {
    console.log('updated')
    console.log(this.msg)
    console.log('-----------------------')
  },
  beforeDestroy () {
    alert('beforeDestroy')
  },
  destroyed () {
    alert('destroyed')
  },
  components: {
    VueTopbar
  },
  methods: {
    change () {
      this.msg = '值改变了'
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
      h3{ margin-bottom: .5rem; }
    }
  }
</style>
