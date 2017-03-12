<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>{{ article.title }}</h3>
          <p>文章编号：{{ article.id }}</p>
          <p>这是文章内容</p>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
import axios from 'axios'
export default {
  name: 'AdvanceVueRouterDetail',
  data () {
    return {
      title: 'VueJS实例教程-Vue进阶-VueRouter路由系统',
      msg: 'Hello, VueJS!',
      article: {}
    }
  },
  mounted () {
    let that = this
    this.article.id = this.$route.params.id
    axios.get('http://localhost:3000/articles/' + this.article.id)
      .then((res) => {
        if (res.status === 200) {
          that.article = res.data
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
    }
  }
</style>
