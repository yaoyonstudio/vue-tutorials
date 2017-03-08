<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <h2>常用指令</h2>
        <section>
          <h3>v-show</h3>
          <p v-show="showMsg">{{ msg }}</p>
          <p v-show="!showMsg">这个不显示</p>
        </section>
        <section>
          <h3>v-if</h3>
          <p v-if="showMsg">{{ msg }}</p>
          <p v-if="!showMsg">这个不显示</p>
        </section>
        <section>
          <h3>v-if & v-else</h3>
          <p v-if="showTitle">{{ title }}</p>
          <p v-else>不显示标题</p>
          <button @click="toggleShowTitle">切换显示</button>
        </section>
        <section>
          <h3>v-if & v-else-if</h3>
          <p v-if="selectedJS === 1">AngularJS</p>
          <p v-else-if="selectedJS === 2">ReactJS</p>
          <p v-else-if="selectedJS === 3">VueJS</p>
          <p v-else>Pure Javascript</p>
          <button @click="toggleJS()">随机选择</button>
        </section>
        <section>
          <h3>v-for循环渲染数组</h3>
          <ul>
              <li v-for="item in jsFrameworks">{{ item.id }} - {{ item.title }}</li>
          </ul>
        </section>
        <section>
          <h3>v-for循环渲染数组(index)</h3>
          <ul>
              <li v-for="(item, index) in jsFrameworks">{{index}} - {{ item.id }} - {{ item.title }}</li>
          </ul>
        </section>
        <section>
          <h3>v-for循环渲染对象</h3>
          <ul>
              <li v-for="(value, key) in myProfile">{{ key }} : {{ value }}</li>
          </ul>
        </section>
        <section>
          <h3>v-for循环渲染对象(index)</h3>
          <ul>
              <li v-for="(value, key, index) in myProfile">{{ index }} - {{ key }} : {{ value }}</li>
          </ul>
        </section>
        <section>
          <h3>v-for循环渲染组件</h3>
          <test-com v-for="(card, index) in cards" v-bind:data="card" v-bind:index="index" :key="index"></test-com>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
import TestCom from '../TestCom'

export default {
  name: 'BasicDirective',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-指令',
      msg: 'Hello, VueJS!',
      showMsg: true,
      showTitle: false,
      selectedJS: 1,
      jsFrameworks: [
        {id: 1, title: 'AngularJS'},
        {id: 2, title: 'ReactJS'},
        {id: 3, title: 'VueJS'}
      ],
      myProfile: {
        name: 'ken',
        age: 28,
        blog: 'https://www.thatyou.cn',
        job: 'Developmental Engineer'
      },
      cards: [
        {name: 'ken', age: 28, blog: 'https://www.thatyou.cn', job: 'Developmental Engineer'},
        {name: 'kenny', age: 30, blog: 'https://www.thatyou.cn', job: 'Web Developmental'},
        {name: 'yaoyon', age: 29, blog: 'https://www.thatyou.cn', job: 'I do not know'}
      ]
    }
  },
  components: {
    VueTopbar,
    TestCom
  },
  methods: {
    toggleShowTitle () {
      this.showTitle = !this.showTitle
    },
    toggleJS () {
      let selectArray = [1, 2, 3, 4, 5]
      let index = Math.floor((Math.random() * selectArray.length)) + 1
      this.selectedJS = index
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
    h2{padding: .5rem 0;text-align: center;}
  }
</style>
