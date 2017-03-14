<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>使用Getters</h3>
          <p>共有 {{ postsCount }} 篇文章</p>
          <p>随机文章: {{ randomPost.title }}</p>
          <p>
            <input type="number" v-model="id" />
            <span>文章：{{ id }} - {{ specifiPost.title }}</span>
          </p>
        </section>
        <section>
          <h3>使用mapGetters</h3>
          <p>共有 {{ postsCount }} 篇文章</p>
          <p>共有 {{ postsCount2 }} 篇文章</p>
          <p>共有 {{ getPostCount }} 篇文章</p>
          <p>随机文章1: {{ randomPost.title }}</p>
          <p>随机文章2: {{ randomPost2.title }}</p>
          <p>随机文章3: {{ getRandomPost.title }}</p>
          <p>
            <input type="number" v-model="id" />
            <span>文章：{{ id }} - {{ specifiPost.title }}</span>
          </p>
        </section>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueTopbar from '../../VueTopbar'

export default {
  name: 'VuexGetters',
  data () {
    return {
      title: 'VueJS实例教程-Vuex状态管理-Getters',
      msg: 'Hello, VueJS!',
      id: 3
    }
  },
  computed: {
    // 使用Getters
    postsCount () {
      return this.$store.getters.getPostCount
    },
    randomPost () {
      return this.$store.getters.getRandomPost
    },
    specifiPost () {
      if (this.id) {
        let post = this.$store.getters.getPostById(this.id)
        return post || {title: '无法找到文章'}
      }
    },
    // mapGetters第一种使用方式，如果使用自定义的获取名，则mapGetters传入一个对象，将新命名和store中的正式命名对应起来
    ...mapGetters({
      postsCount2: 'getPostCount',
      randomPost2: 'getRandomPost'
    }),
    // mapGetters第二种使用方式，如果使用store中的命名，则可以直接传入数组，将获取名作为数组的字符串元素传入
    ...mapGetters([
      'getPostCount',
      'getRandomPost'
    ])
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
      button{padding: .5rem 1rem;}
      input[type=number]{width: 4rem;}
    }
  }
</style>
