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
  name: 'vueBasic',
  data () {
    return {
      title: 'VueJS实例教程',
      lists: [
        {id: 1, path: '/basic/BasicDataBinding', name: 'BasicDataBinding', title: '数据绑定'},
        {id: 2, path: '/basic/BasicStyleBinding', name: 'BasicStyleBinding', title: '样式绑定'},
        {id: 3, path: '/basic/BasicEventHandle', name: 'BasicEventHandle', title: '事件处理'},
        {id: 4, path: '/basic/BasicDirective', name: 'BasicDirective', title: '指令'},
        {id: 5, path: '/basic/BasicFilter', name: 'BasicFilter', title: '过滤器'},
        {id: 6, path: '/basic/BasicComponent', name: 'BasicComponent', title: '组件'},
        {id: 7, path: '/basic/BasicComponentCommunication', name: 'BasicComponentCommunication', title: '组件交互'},
        {id: 8, path: '/basic/BasicComponentLifeCycle', name: 'BasicComponentLifeCycle', title: '组件生命周期'},
        {id: 9, path: '/basic/BasicFormHandle', name: 'BasicFormHandle', title: '表单操作'}
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
