<template>
  <div class="page flexColumnBetween">
    <vue-topbar v-bind:title="title" back="true"></vue-topbar>
    <div class="mainContent">
      <section>
        <h3>字符串方法替代过滤器</h3>
        <p>{{ msg }}</p>
        <p>{{ msg.toUpperCase() }}</p>
        <p>{{ msg.toLowerCase() }}</p>
        <p>&nbsp;</p>
        <p>{{ price }}</p>
        <p>{{ '$' + price.toFixed(2) }}</p>
        <p>{{ '￥' + price.toFixed(2) }}</p>
      </section>
      <section>
        <h3>自定义过滤器</h3>
        <p>{{ msg }}</p>
        <p>{{ msg | reverse }}</p>
        <p>{{ msg | replaceBlank }}</p>
        <p>&nbsp;</p>
        <p>{{ msg | change }}</p>
        <p>{{ msg | change('upper') }}</p>
        <p>{{ msg | change('lower') }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'

Vue.filter('reverse', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.split('').reverse().join('')
})

Vue.filter('replaceBlank', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/ /g, '-')
})

Vue.filter('change', function (value, param) {
  console.log(value)
  console.log(param)
  if (!value) return ''
  value = value.toString()
  switch (param) {
    case 'upper':
      return value.toUpperCase()
    case 'lower':
      return value.toLowerCase()
    default:
      return value
  }
})

export default {
  name: 'BasicFilter',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-过滤器',
      msg: 'Hello Vue.js!',
      price: 4999.8888
    }
  },
  components: {
    VueTopbar
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
      h3{
        margin-bottom: .5rem;
      }
    }
    h2{padding: .5rem 0;text-align: center;}
  }
</style>
