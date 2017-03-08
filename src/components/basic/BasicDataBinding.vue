<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>普通绑定({{}})</h3>
          <p>{{ msg }}</p>
        </section>
        <section>
          <h3>表达式</h3>
          <p>{{ number + 10 }}</p>
        </section>
        <section>
          <h3>表达式</h3>
          <p>{{ time.getHours() > 12 ? '下午好' : '上午好' }}</p>
        </section>
        <section>
          <h3>普通绑定(v-cloak)</h3>
          <p>在数据渲染前防止显示{{}}</p>
          <p v-cloak>{{ msg }}</p>
        </section>
        <section>
          <h3>绑定属性</h3>
          <button v-bind:disabled="!enabled">按钮不可用</button>
        </section>
        <section>
          <h3>绑定属性</h3>
          <a v-bind:href="url">那时那你</a>
        </section>
        <section>
          <h3>一次渲染绑定(v-once)</h3>
          <p>即取消双向绑定，当数据绑定完成后，即使变量发生改变，这里也不会变。点击下面按钮测试结果。</p>
          <p v-once>{{ msg }}</p>
          <button v-on:click="change">改变msg的值</button>
        </section>
        <section>
          <h3>普通绑定(v-text)</h3>
          <p v-text="msg"></p>
        </section>
        <section>
          <h3>Html格式数据绑定</h3>
          <p v-html="htmlStr"></p>
        </section>
        <section>
          <h3>预格式数据绑定</h3>
          <p v-pre>{{ htmlStr }}</p>
        </section>
        <section>
          <h3>图片路径绑定</h3>
          <img v-bind:src="imageSrc">
          <img :src="imageSrc">
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'BasicDataBinding',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-数据绑定',
      enabled: false,
      number: 10,
      time: new Date(),
      msg: 'Hello, VueJS!',
      url: 'https://www.thatyou.cn',
      htmlStr: '<p style="color: #0a8acd; font-weight: 600;">Hello, VueJS!</p>',
      imageSrc: 'https://www.thatyou.cn/wp-content/uploads/2016/04/logo.png'
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    change () {
      this.msg = 'msg变量的值改变了'
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
  }
</style>
