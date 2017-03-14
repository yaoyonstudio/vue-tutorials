<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <ul>
          <li v-for="item in lists">
            <router-link :to="item.path" tag="a">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'AdvanceVuex',
  data () {
    return {
      title: 'VueJS实例教程-Vue进阶-Vuex状态管理',
      msg: 'Hello, VueJS!',
      lists: [
        {id: 1, path: '/advance/AdvanceVuex/VuexBasicDemo', name: 'VuexBasicDemo', title: 'Vuex Basic Demo'},
        {id: 2, path: '/advance/AdvanceVuex/VuexState', name: 'VuexState', title: 'Vuex State'},
        {id: 3, path: '/advance/AdvanceVuex/VuexGetters', name: 'VuexGetters', title: 'Vuex Getters'},
        {id: 4, path: '/advance/AdvanceVuex/VuexMutations', name: 'VuexMutations', title: 'Vuex Mutations'},
        {id: 5, path: '/advance/AdvanceVuex/VuexActions', name: 'VuexActions', title: 'Vuex Actions'},
        {id: 6, path: '/advance/AdvanceVuex/VuexModules', name: 'VuexModules', title: 'Vuex Modules'},
        {id: 7, path: '/advance/AdvanceVuex/VuexPlugins', name: 'VuexPlugins', title: 'Vuex Plugins'},
        {id: 8, path: '/advance/AdvanceVuex/VuexFormHandling', name: 'VuexFormHandling', title: 'Vuex Form Handling'}
      ]
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
    ul{
      li{
        font-size: 1.5rem;
        height: 3.25rem;
        line-height: 3.25rem;
        padding: 0 1rem;
        border-bottom: 1px solid $borderColor;
        background-color: $lightColor;
      }
    }
  }
</style>
