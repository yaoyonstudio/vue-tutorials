<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title"></vue-topbar>
      <div class="mainContent">
        <ul>
            <li v-for="item in lists">
              <router-link :to="item.path" tag="a">{{item.title}}</router-link>
            </li>
        </ul>
      </div>
      <vue-menu></vue-menu>
  </div>
</template>

<script>
import VueTopbar from './VueTopbar'
import VueMenu from './VueMenu'
export default {
  name: 'VueAdvance',
  data () {
    return {
      title: 'VueJS实例教程',
      lists: [
        {id: 1, path: '/advance/AdvanceFetchData', name: 'AdvanceFetchData', title: '数据请求'},
        {id: 2, path: '/advance/AdvanceVueRouter', name: 'AdvanceFetchData', title: 'VueRouter路由系统'},
        {id: 3, path: '/advance/AdvanceSingleTransition', name: 'AdvanceSingleTransition', title: '单个元素/组件动效'},
        {id: 4, path: '/advance/AdvanceMultipleTransition', name: 'AdvanceMultipleTransition', title: '多元素/组件/列表动效'},
        {id: 5, path: '/advance/AdvanceCustomDirective', name: 'AdvanceCustomDirective', title: '自定义指令'},
        {id: 6, path: '/advance/AdvanceCustomerMixins', name: 'AdvanceCustomerMixins', title: 'Mixins'},
        {id: 7, path: '/advance/AdvanceRenderFunction', name: 'AdvanceRenderFunction', title: '渲染函数'},
        {id: 8, path: '/advance/AdvanceServerSideRendering', name: 'AdvanceServerSideRendering', title: '服务端渲染'},
        {id: 9, path: '/advance/AdvanceVuex', name: 'AdvanceVuex', title: 'Vuex状态管理'},
        {id: 10, path: '/advance/AdvanceVueUnitTest', name: 'AdvanceVueUnitTest', title: '单元测试'}
      ]
    }
  },
  components: {
    VueTopbar,
    VueMenu
  }
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';
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
