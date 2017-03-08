<template>
  <div>
    <p>{{ msg }}这是一个用Vue.extend建立的组件。</p>
  </div>
</template>

<script>
export default {
  name: 'MyCom4',
  data () {
    return {
      msg: 'Hello, VueJS!'
    }
  }
}
</script>

<style scoped lang="scss">
</style>
