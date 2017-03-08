<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title"></vue-topbar>
      <div class="mainContent">
        <p>ddf</p>
      </div>
  </div>
</template>

<script>
import VueTopbar from './VueTopbar'
export default {
  name: 'BasicDataBinding',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-数据绑定'
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
</style>
