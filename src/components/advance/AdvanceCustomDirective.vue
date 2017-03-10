<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>ddd</h3>
        </section>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'

Vue.directive("test-directive", {
  
})

export default {
  name: 'AdvanceCustomDirective',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-自定义指令',
      msg: 'Hello, VueJS!'
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
  }
</style>
