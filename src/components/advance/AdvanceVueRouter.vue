<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>动态路由</h3>
          <div>
            <ul>
              <router-link :to="{ path: '/advance/AdvanceVueRouter/' + article.id }" v-for="article in articles" tag="li">{{ article.title }}</router-link>
            </ul>
          </div>
        </section>
        <section>
          <h3>嵌套路由</h3>
          <div class="nestRoute">
            <nav>
              <router-link tag="span" to="/advance/AdvanceVueRouter/child1" v-bind:class="{ 'router-link-active': $route.path == '/advance/AdvanceVueRouter'}">子页面1</router-link>
              <router-link tag="span" to="/advance/AdvanceVueRouter/child2" >子页面2</router-link>
              <router-link tag="span" to="/advance/AdvanceVueRouter/child3" >子页面3</router-link>
            </nav>
            <article>
              <router-view></router-view>
            </article>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
import axios from 'axios'
export default {
  name: 'AdvanceVueRouter',
  data () {
    return {
      title: 'VueJS实例教程-Vue进阶-VueRouter路由系统',
      msg: 'Hello, VueJS!',
      articles: []
    }
  },
  mounted () {
    console.log(this.$route.path)
    let that = this
    axios.get('http://localhost:3000/articles?_page=1&_limit=5')
      .then((res) => {
        if (res.status === 200) {
          that.articles = res.data
        }
      })
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
      h3{margin-bottom: .5rem;}
      ul{
        border: 1px solid $borderColor; padding: 0 .5rem;
        li{height: 2.5rem; line-height: 2.5rem; display: block; background-color: #fff; border-bottom: 1px solid $borderColor; overflow: hidden;}
      }
    }
    .nestRoute{
      box-sizing: border-box; border: 1px solid $borderColor;
      nav{
        display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 100%;
        span{display: block; flex: 1; text-align: center; height: 2.5rem; line-height: 2.5rem; border-bottom: 2px solid $borderColor;}
        span:not(:last-child){border-right: 1px solid $borderColor;}
        .router-link-active{color: $mainColor; border-bottom: 2px solid $mainColor;}
      }
    }
  }
</style>
