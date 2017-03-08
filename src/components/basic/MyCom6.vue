<template>
  <div>
    <p>字符串：{{string}}</p>
    <p>数字：{{number}}</p>
    <p>布尔：{{bool}}</p>
    <p>函数：<button @click="fun">弹框</button></p>
    <p>对象：{{obj}}</p>
    <p>数组：{{arr}}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCom6',
  // props: ['string', 'number', 'bool', 'fun', 'obj', 'arr'],
  props: {
    string: String,
    number: {
      type: Number,
      require: true
    },
    bool: {
      type: Boolean,
      default: false
    },
    fun: {
      type: Function
    },
    obj: {
      type: Object
    },
    arr: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
</style>
