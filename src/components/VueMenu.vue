<template>
  <div class="menu">
    <ul class="flexRowBetween">
        <li v-for="menu in menus" class="flexItem">
          <router-link :to="menu.path" tag="a">{{menu.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vueMenu',
  data () {
    return {
      msg: 'Menu',
      menus: [
        {id: 1, path: '/basic', name: 'basic', title: 'Vue基础'},
        {id: 2, path: '/advance', name: 'advance', title: 'Vue进阶'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';

.menu{
  width: 100%;
  background-color: $lightColor;
  border-top: 1px solid $borderColor;
  ul{
    width: 100%;
    li{
      text-align: center;
      height: 4rem;
      line-height: 4rem;
    }
    li:not(:last-child){
      border-right: 1px solid $borderColor;
    }
    .router-link-active{
      background-color: $mainColor;
      color: $lightColor;
      font-size: 1.5rem;
    }
  }
}
</style>
