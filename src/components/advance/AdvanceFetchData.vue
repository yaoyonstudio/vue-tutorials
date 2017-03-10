<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>使用axios获取数据</h3>
          <button @click="fetchData">获取数据</button>
          <button @click="clearData">清除数据</button>
          <div class="box">
            <p v-show="tip">{{ tip }}</p>
            <p v-show="!posts.length">没有数据</p>
            <ul v-show="posts.length">
                <li v-for="post in posts">{{ post.title }}</li>
            </ul>
          </div>
        </section>
        <section>
          <h3>使用axios发送数据</h3>
          <form name="myForm" id="myForm" @submit.prevent>
            <label><span>用户名</span><input type="text" name="username" v-model="user.username" placeholder="请输入用户名" /></label>
            <label><span>密码</span><input type="password" name="password" v-model="user.password" placeholder="请输入密码" /></label>
            <button type="submit" @click="submitForm" :disabled="!user.username || !user.password">提交</button>
          </form>
          <p v-bind:class="{ error: !result.status}">{{ result.msg }}</p>
        </section>
        <section>
          <h3>分页数据</h3>
          <div class="box2">
            <ul v-show="articles.length">
                <li v-for="article in articles">{{ article.title }}</li>
            </ul>
            <nav>
              <span v-for="i in maxPageNum" :class="{active: currentPage == i}" @click="loadArticle(i)">{{ i }}</span>
            </nav>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueTopbar from '../VueTopbar'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'

export default {
  name: 'AdvanceFetchData',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-数据请求',
      msg: 'Hello, VueJS!',
      apiUrl: 'http://localhost:3000',
      postUrl: 'http://localhost/handle.php',
      tip: null,
      posts: [],
      user: {
        username: null,
        password: null
      },
      result: {
        status: false,
        msg: null
      },
      articles: [],
      count: 18, // 实际项目中可从接口拿到总文章数量
      page: 1,
      pagesize: 4,
      currentPage: 1
    }
  },
  computed: {
    maxPageNum () {
      return Math.ceil(this.count / this.pagesize)
    }
  },
  mounted () {
    let that = this
    this.fetchDataFun(this.apiUrl + '/articles', this.page, this.pagesize).then(function (res) {
      if (res.status === 200) {
        console.log(res)
        res.data.map((item) => {
          that.articles.push(item)
        })
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {
    VueTopbar
  },
  methods: {
    fetchData () {
      let that = this
      this.tip = '正在拼命加载数据...'
      axios.get(this.apiUrl + '/posts')
        .then(function (res) {
          console.log(res)
          if (res.status === 200 && res.data.data.length) {
            that.tip = null
            that.posts = res.data.data
          }
        }, function (error) {
          console.log(error)
          that.tip = '无法加载数据'
        })
    },
    clearData () {
      this.posts = []
    },
    submitForm () {
      let that = this
      axios.post(that.postUrl, {
        username: that.user.username,
        password: that.user.password
      }).then(function (res) {
        console.log(res)
        if (res.status === 200) {
          that.result = res.data
        }
      }).catch(function (error) {
        that.result = error.data
      })
    },
    fetchDataFun (url, page, pagesize) {
      if (!url) return
      let _page
      let _pagesize
      if (page) {
        _page = page
      } else {
        _page = 1
      }
      if (!pagesize) {
        _pagesize = pagesize
      } else {
        _pagesize = 4
      }
      return axios.get(url + '?_page=' + parseInt(_page) + '&_limit=' + parseInt(_pagesize))
    },
    loadArticle (page) {
      if (!page) return
      let that = this
      that.articles = []
      this.fetchDataFun(this.apiUrl + '/articles', parseInt(page), this.pagesize).then(function (res) {
        console.log(res)
        if (res.status === 200) {
          res.data.map((item) => {
            that.articles.push(item)
          })
          that.currentPage = page
        } else {
          that.articles = []
        }
      }).catch(function (error) {
        console.log(error)
        that.articles = []
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
      h3{margin-bottom: .5rem;}
      .box, .box2{width: 100%; height: 12rem; overflow: hidden;border: 1px solid $borderColor;}
      .box2{height: 18rem;}
      ul{
        overflow-y: scroll;
        li{display: block; height: 3rem; line-height: 3rem; background-color: $lightColor; border-bottom: 1px solid $borderColor; overflow: hidden; word-break:keep-all; white-space:nowrap;text-overflow:ellipsis; padding: 0 1rem;}
      }
    }
    form{
      label{
        display: block; display: flex; flex-direction: row; justify-content: space-between; align-items: center; height: 3rem; line-height: 3rem; margin: .5rem 0; background-color: $lightColor;
        span{display: block; width: 4rem; text-align: justify; }
        input{flex: 1; height: 90%; border: none; border-bottom: 1px solid $borderColor; padding: 0 .5rem;}
      }
      button{display: block; margin: 0 auto; width: 100%; padding: .5rem 0;}
    }
    nav{
      margin: 1rem auto; display: block; width: 100%; text-align: center;
      span{display: inline-block; border: 1px solid $borderColor; width: 3rem; height: 3rem; text-align: center; margin: 0 .5rem; line-height: 3rem; border-radius: 3px;}
    }
    .error{color: $mainColor;}
    .active{background-color: $mainColor; color: #fff;}
  }
</style>
