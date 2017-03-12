<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>创建自定义指令</h3>
          <button @click="showMsg = !showMsg">切换显示</button>
          <button @click="msg = '内容变化了'">更新内容</button>
          <div :data-value="msg" v-test-directive v-if="showMsg">
            <p>{{ msg }}</p>
          </div>
        </section>
        <section>
          <h3>创建自定义指令(简写传值)</h3>
          <button @click="showMsg2 = !showMsg2">切换显示</button>
          <button @click="msg2 = '内容变化了'">更新内容</button>
          <div v-if="showMsg2" v-test-directive2="msg2">
            <p>{{ msg2 }}</p>
          </div>
        </section>
        <section>
          <h3>创建自定义指令(简写传多值)</h3>
          <button @click="showMsg3 = !showMsg3">切换显示</button>
          <button @click="msg3 = '内容变化了'; bgColor = '#dd3333'">更新内容</button>
          <div v-if="showMsg3" v-test-directive3="{color: bgColor, text: msg3}">
            <p>{{ msg3 }}</p>
          </div>
        </section>
        <section>
          <h3>文本框获取焦点指令(来自官网)</h3>
          <input type="text" v-focus />
        </section>
        <section>
          <h3>无限加载指令</h3>
          <div class="box" v-infinite-scroll>
            <ul>
              <li v-for="(article, index) in articles">{{ article.title }}</li>
            </ul>
            <p v-show="!loaded" class="articleStatus">正在加载数据...</p>
            <p v-show="!hasMore" class="articleStatus">没有更多数据</p>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueTopbar from '../VueTopbar'

Vue.directive('test-directive', {
  bind: (el, binding, vnode) => {
    // console.log('bind')
    // console.log(el)
    // console.log(binding)
    // console.log(vnode)
    // console.log('元素值：', vnode.data.attrs['data-value'])
  },
  inserted: (el, binding, vnode) => {
    // console.log('inserted')
    // console.log('元素值：', vnode.data.attrs['data-value'])
  },
  update: (el, binding, vnode, oldNode) => {
    // console.log('update')
    // console.log(binding)
    // console.log(vnode)
    // console.log(oldNode)
    el.style.color = '#dd3333'
    // console.log(binding.value)
    // console.log('原元素值：', oldNode.data.attrs['data-value'])
    // console.log('更新后元素值：', vnode.data.attrs['data-value'])
  },
  componentUpdated: (el, binding, vnode, oldNode) => {
    // console.log('componentUpdated')
    // console.log(binding)
    // console.log(vnode)
    // console.log(oldNode)
    // console.log('原元素值：', oldNode.data.attrs['data-value'])
    // console.log('更新后元素值：', vnode.data.attrs['data-value'])
  },
  unbind: (el, binding, vnode) => {
    // console.log('unbind')
  }
})

Vue.directive('test-directive2', function (el, binding) {
  // console.log(el)
  // console.log(binding)
})

Vue.directive('test-directive3', function (el, binding) {
  // console.log(el)
  // console.log(binding)
  el.style.backgroundColor = binding.value.color
})

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

const Events = new Vue({})
Vue.directive('infinite-scroll', {
  inserted: (el, binding, vnode) => {
    vnode.elm.addEventListener('scroll', function (e) {
      if ((vnode.elm.scrollTop + vnode.elm.clientHeight > vnode.elm.scrollHeight - 10)) {
        Events.$emit('loadMore')
      }
    })
  }
})

export default {
  name: 'AdvanceCustomDirective',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-自定义指令',
      msg: 'Hello, VueJS!',
      showMsg: true,
      msg2: 'Hello, VueJS!',
      showMsg2: true,
      msg3: 'Hello, VueJS!',
      showMsg3: true,
      bgColor: '#0a8acd',
      text: 'Hello, VueJS!',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      apiUrl: 'http://localhost:3000/articles',
      articles: [],
      hasMore: true,
      loaded: true,
      page: 1,
      pagesize: 6
    }
  },
  mounted () {
    let that = this
    that.loadArticle(that.apiUrl, that.page, that.pagesize)
    Events.$on('loadMore', function () {
      if (that.hasMore && that.loaded) {
        that.loaded = false
        that.loadArticle(that.apiUrl, that.page, that.pagesize)
      }
    })
  },
  components: {
    VueTopbar
  },
  methods: {
    loadArticle (apiUrl, page, pagesize) {
      console.log('loadArticle')
      if (!apiUrl) return
      let that = this
      let url = apiUrl + '?_page=' + page + '&_limit=' + pagesize
      axios.get(url).then((res) => {
        if (res.status === 200 && res.data.length) {
          if (res.data.length >= that.pagesize) {
            that.hasMore = true
            that.page++
          } else {
            that.hasMore = false
          }
          res.data.map((item) => {
            that.articles.push(item)
            that.loaded = true
          })
        } else {
          that.hasMore = false
          that.loaded = true
          console.log(res)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{
        margin-bottom: .5rem;
      }
    }
    .box{
      width: 100%; height: 10rem; overflow-y: scroll; border: 1px solid $borderColor;
      ul{
        li{height: 3rem; line-height: 3rem; display: block; overflow: hidden; padding: 0 .5rem; border-bottom: 1px solid $borderColor; }
      }
      .articleStatus{height: 3rem; line-height: 3rem; text-align: center; color: $mainColor;}
    }
  }
</style>
