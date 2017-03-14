<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>使用Mutations</h3>
          <p>Mutations是状态真正发生变化的地方，相当于状态变化的处理程序。使用commit来执行一个状态变化处理程序。每一个定义的Mutations都带有state作为第一个参数，可以添加额外的参数(payload)</p>
          <ul>
            <li v-for="post in posts">{{ post.id }} - {{ post.title }}</li>
          </ul>
        </section>
        <section>
          <h3>传普通参数</h3>
          <input type="text" v-model="postTitle" placeholder="请输入文章标题"/>
          <button @click="insertPost" v-bind:disabled="!postTitle">添加文章</button>
        </section>
        <section>
          <h3>传对象参数</h3>
          <input type="number" v-model="post.id" placeholder="请输入文章编号"/>
          <input type="text" v-model="post.title" placeholder="请输入文章标题"/>
          <button @click="insertObjPost" v-bind:disabled="!post.title || !post.id">添加文章</button>
        </section>
        <section>
          <h3>添加属性</h3>
          <input type="number" v-model="post2.id" placeholder="请输入文章编号"/>
          <input type="text" v-model="post2.title" placeholder="请输入文章标题"/>
          <button @click="addProperty" v-bind:disabled="!post2.title || !post2.id">添加属性</button>
          <p>{{ currentPost }}</p>
        </section>
        <section>
          <h3>使用常量代替Mutation类型</h3>
          <p>使用专门独立文件保存Mutation类型</p>
          <button @click="addProperty2" v-bind:disabled="!post2.title || !post2.id">添加属性</button>
        </section>
        <section>
          <h3>mapMutations</h3>
          <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <span>{{ count }}</span>
            <button @click="add">+</button>
            <button @click="subtract">-</button>
          </p>
        </section>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VueTopbar from '../../VueTopbar'

export default {
  name: 'VuexMutations',
  data () {
    return {
      title: 'VueJS实例教程-Vuex状态管理-Mutations',
      msg: 'Hello, VueJS!',
      postTitle: '',
      post: {
        id: null,
        title: null
      },
      post2: {
        id: null,
        title: null
      }
    }
  },
  computed: {
    ...mapState([
      'posts', 'currentPost', 'count'
    ])
  },
  methods: {
    insertPost () {
      if (this.postTitle) {
        this.$store.commit('insertPost', this.postTitle)
        this.postTitle = ''
      }
    },
    insertObjPost () {
      if (this.post.id && this.post.title) {
        this.$store.commit('insertObjPost', {
          id: this.post.id,
          title: this.post.title
        })
        this.post = {
          id: null,
          title: null
        }
      }
    },
    addProperty () {
      if (this.post2.id && this.post2.title) {
        this.$store.commit('addProperty', this.post2)
      }
    },
    addProperty2 () {
      if (this.post2.id && this.post2.title) {
        this.$store.commit('ADDPROPERTY', this.post2)
      }
    },
    // 使用mapMutations
    ...mapMutations([
      'increment', 'decrement'
    ]),
    ...mapMutations({
      add: 'increment',
      subtract: 'decrement'
    })
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
