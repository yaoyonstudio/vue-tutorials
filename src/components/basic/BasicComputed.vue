<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>在模板中对变量进行操作并输出</h3>
          <p>一个正常的字符串：{{ msg }}</p>
          <p>字符串长度：{{ msg.length }}</p>
          <p>连接字符串：{{ msg.concat(" - haha") }}</p>
          <p>替换字符串：{{ msg.replace(/hello/, "Hi")}}</p>
          <p>分离字符串：{{ msg.split(',')[1] }}</p>
          <p class="comment">在VueJS中可以在模板中使用JS一些方法来对输出进行操作</p>
        </section>
        <section>
          <h3>使用Computed属性操作</h3>
          <p>一个正常的字符串：{{ msg }}</p>
          <p>字符串长度：{{ getStringLength }}</p>
          <p>连接字符串：{{ concatString }}</p>
          <p>替换字符串：{{ replaceString }}</p>
          <p>分离字符串：{{ splitString }}</p>
          <p class="comment">在模板中嵌入太多的逻辑并不易于维护，而且功能也较单一。使用Computed属性可以更灵活地对变量进行处理。</p>
        </section>
        <section>
          <h3>使用Computed属性与使用函数的差异</h3>
          <p>一个正常的字符串：{{ msg }}</p>
          <p>字符串长度：{{ getStringLengthFun() }}</p>
          <p>连接字符串：{{ concatStringFun() }}</p>
          <p>替换字符串：{{ replaceStringFun() }}</p>
          <p>分离字符串：{{ splitStringFun() }}</p>
          <p class="comment">这部分是使用函数来做输出的，效果一样。使用Computed属性和使用函数的差异在于：使用Computed属性操作的变量输出是有缓存的，只有在变量发生变化时才会重新计算输出变化后的内容，在重复使用某一变量时，不会每次都"compute"一次，而函数则是在每次使用的地方都重新调用。注意这里的变化是针对computed的“依赖”而言，上面例子的依赖是变量msg，所以当变量msg发生变化时就会变化。</p>
          <button @click="changeMsg">改变变量值</button>
        </section>
        <section>
          <h3>不会重新Computed的例子</h3>
          <p>Vue文档中给出的一个不重新Computed的例子</p>
          <p>原定义的时间变量： {{ now }}</p>
          <p>Computed返回原定义的时间变量： {{ getNow }}</p>
          <p>使用函数返回的时间变量：{{ getNowFun() }}</p>
          <p style="color: #dd3333;">Computed返回时间变量： {{ getNow2 }}</p>
          <button @click="changeNow">改变变量值</button>
          <p class="comment">可以注意到当改变当前时间值时，上面红色一行并不改变，因为computed中返回的不是一个“依赖”变量</p>
        </section>
        <section>
          <h3>Computed Setter</h3>
          <p>姓名：{{ firstName }}  {{ lastName }}</p>
          <p>姓名：{{ fullName }}</p>
          <button @click="changeName">改变姓名</button>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'BasicComputed',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-Computed属性',
      msg: 'Hello, VueJS!',
      now: Date.now(),
      firstName: 'ken',
      lastName: 'yao'
    }
  },
  computed: {
    getStringLength () {
      return this.msg.length
    },
    concatString () {
      return this.msg.concat(' - haha')
    },
    replaceString () {
      return this.msg.replace(/hello/, 'Hi')
    },
    splitString () {
      return this.msg.split(',')[1]
    },
    getNow () {
      return this.now
    },
    getNow2 () {
      return Date.now()
    },
    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (newName) {
        var names = newName.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    getStringLengthFun () {
      return this.msg.length
    },
    concatStringFun () {
      return this.msg.concat(' - haha')
    },
    replaceStringFun () {
      return this.msg.replace(/hello/, 'Hi')
    },
    splitStringFun () {
      return this.msg.split(',')[1]
    },
    changeMsg () {
      this.msg = '值改变了'
    },
    getNowFun () {
      return Date.now()
    },
    changeNow () {
      this.now = Date.now()
    },
    changeName () {
      this.fullName = 'yao ken'
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
      .comment{color: #999;}
    }
  }
</style>
