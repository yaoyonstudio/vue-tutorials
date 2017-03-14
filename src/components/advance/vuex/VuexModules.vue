<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <p>使用Vuex的module配置项来分离不同层次、不同功能的store配置</p>
        </section>
      </div>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions } from 'vuex'
import VueTopbar from '../../VueTopbar'
export default {
  name: 'VuexBasicDemo',
  data () {
    return {
      title: 'VueJS实例教程-Vuex状态管理-Modules'
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    VueTopbar
  }
}
</script>

<style scoped lang="scss">
  @import '../../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{margin-bottom: .5rem; color: $mainColor;}
      h5{text-align: center;}
      button{padding: .5rem 1rem;}
      ul{
        border: 1px solid $borderColor; list-style: none; margin: .5rem;
        li{height: 2.5rem; line-height: 2.5rem; padding: 0 .5rem; }
        li:not(:last-child) {border-bottom: 1px solid $borderColor;}
      }
      input{height: 28px; width: 120px;}
      button{height: 30px; padding: 0 10px; text-align: center;}
    }
  }
</style>
