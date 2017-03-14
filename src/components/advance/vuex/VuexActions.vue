<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>分发Action</h3>
          <p>Mutation只能同步执行，Action不受限制，可以异步</p>
          <p>同步：
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <span>{{ count }}</span>
          </p>
          <p>异步：
            <button @click="incrementAsync">+</button>
            <button @click="decrementAsync">-</button>
            <span>{{ count }}</span>
          </p>
        </section>
        <section>
          <h5>共有{{ getPostCount }}条文章数据</h5>
          <ul>
            <li v-for="post in posts">{{ post.id }} - {{ post.title }}</li>
          </ul>
        </section>
        <section>
          <h3>Action传参数一</h3>
          <input type="text" v-model="postTitle" placeholder="请输入文章标题"/>
          <button @click="insertPost1" v-bind:disabled="!postTitle">添加文章</button>
        </section>
        <section>
          <h3>Action传参数二</h3>
          <input type="number" v-model="post.id" placeholder="请输入文章编号"/>
          <input type="text" v-model="post.title" placeholder="请输入文章标题"/>
          <button @click="insertPost2" v-bind:disabled="!post.title || !post.id">添加文章</button>
        </section>
        <section>
          <h3>Action传参数三</h3>
          <input type="number" v-model="post.id" placeholder="请输入文章编号"/>
          <input type="text" v-model="post.title" placeholder="请输入文章标题"/>
          <button @click="insertPost3" v-bind:disabled="!post.title || !post.id">添加文章</button>
        </section>
        <section>
          <h3>Action分发多个Mutations</h3>
          <input type="text" v-model="postTitle" placeholder="请输入文章标题"/>
          <button @click="insertPost4" v-bind:disabled="!postTitle">添加文章</button>
          {{ msg }}
        </section>
        <section>
          <h3>mapActions</h3>
          <p>
            <button @click="incrementAction">+</button>
            <button @click="decrementAction">-</button>
            <span>{{ count }}</span>
          </p>
          <p>
            <button @click="add">+</button>
            <button @click="subtract">-</button>
            <span>{{ count }}</span>
          </p>
        </section>
        <section>
          <h3>组合Actions</h3>
          <p>原数字：{{ number }}</p>
          <p v-show="loadding">正在加载中...</p>
          <button @click="addOneAsyncAction">异步加1</button>
          <button @click="addElevenAsyncAction">异步加11</button>
        </section>
        <section>
          <h3>组合Actions(使用async / await)</h3>
          <p>原数字：{{ number }}</p>
          <p v-show="loadding">正在加载中...</p>
          <button @click="addOneAsyncAction2">异步加1</button>
          <button @click="addElevenAsyncAction2">异步加11</button>
        </section>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import VueTopbar from '../../VueTopbar'
export default {
  name: 'VuexBasicDemo',
  data () {
    return {
      title: 'VueJS实例教程-Vuex状态管理-Actions',
      postTitle: '',
      post: {
        id: null,
        title: null
      },
      loadding: false
    }
  },
  computed: {
    ...mapState([
      'count', 'posts', 'currentPost', 'msg', 'number'
    ]),
    ...mapGetters([
      'getPostCount'
    ])
  },
  methods: {
    increment () {
      this.$store.dispatch('incrementAction')
    },
    decrement () {
      this.$store.dispatch('decrementAction')
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    },
    decrementAsync () {
      this.$store.dispatch('decrementAsync')
    },
    insertPost1 () {
      if (this.postTitle) {
        this.$store.dispatch('insertPostAction', {title: this.postTitle})
        this.postTitle = ''
      }
    },
    insertPost2 () {
      if (this.post.id && this.post.title) {
        this.$store.dispatch('insertObjPostAction', {id: this.post.id, title: this.post.title})
        this.post = {
          id: null,
          title: null
        }
      }
    },
    insertPost3 () {
      if (this.post.id && this.post.title) {
        this.$store.dispatch({
          type: 'insertObjPostAction',
          id: this.post.id,
          title: this.post.title
        })
        this.post = {
          id: null,
          title: null
        }
      }
    },
    insertPost4 () {
      if (this.postTitle) {
        this.$store.dispatch('insertPostShowMsgAction', {title: this.postTitle})
        this.postTitle = ''
      }
    },
    ...mapActions([
      'incrementAction', 'decrementAction'
    ]),
    ...mapActions({
      add: 'incrementAction',
      subtract: 'decrementAction'
    }),
    addOneAsyncAction () {
      this.loadding = true
      let that = this
      this.$store.dispatch('addOneAsyncAction').then(() => {
        that.loadding = false
        console.log('加1完成了')
      })
    },
    addElevenAsyncAction () {
      this.loadding = true
      let that = this
      this.$store.dispatch('addElevenAsyncAction').then(() => {
        that.loadding = false
        console.log('加11完成了')
      })
    },
    addOneAsyncAction2 () {
      this.loadding = true
      let that = this
      this.$store.dispatch('addOneAsyncAction2').then(() => {
        that.loadding = false
        console.log('加1完成了')
      })
    },
    addElevenAsyncAction2 () {
      this.loadding = true
      let that = this
      this.$store.dispatch('addElevenAsyncAction2').then(() => {
        that.loadding = false
        console.log('加11完成了')
      })
    }
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
