<template>
  <div>
    <p>{{ data }} 从组件外部以属性的方式传入数据.</p>
    <p>{{ msg }} 组件内部变量数据.</p>
    <p v-if="oneWayFlowDataVar">{{ oneWayFlowDataVar }} 从组件外部属性传递单向数据流，外部属性值变化，此处不变化。</p>
  </div>
</template>

<script>
export default {
  name: 'MyCom5',
  props: ['data', 'oneWayFlowData'],
  data () {
    return {
      msg: 'Hello, VueJS Component!',
      oneWayFlowDataVar: this.oneWayFlowData
    }
  }
}
</script>

<style scoped lang="scss">
</style>
