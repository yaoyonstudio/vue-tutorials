<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>响应点击事件</h3>
          <button v-on:click="greeting">开始</button>
        </section>
        <section>
          <h3>响应点击事件</h3>
          <button @click="greeting">开始</button>
        </section>
        <section>
          <h3>响应点击事件(事件处理)</h3>
          <button v-on:click="handle">开始</button>
        </section>
        <section>
          <h3>响应点击事件（传参）</h3>
          <p>赞成：{{ agree }}</p>
          <p>反对：{{ disagree }}</p>
          <button v-on:click="vote(true)">赞成</button>
          <button v-on:click="vote(false)">反对</button>
        </section>
        <section>
          <h3>响应点击事件（传参及事件）</h3>
          <p>赞成：{{ agree }}</p>
          <p>反对：{{ disagree }}</p>
          <button v-on:click="vote2(true, $event)">赞成</button>
          <button v-on:click="vote2(false, $event)">反对</button>
        </section>
        <section>
          <h3>响应点击事件（执行一次）</h3>
          <p>你的投票是：{{myVoteResult}}</p>
          <p>赞成：{{ agree }}</p>
          <p>反对：{{ disagree }}</p>
          <button v-on:click.once="myVote(true)">赞成</button>
          <button v-on:click.once="myVote(false)">反对</button>
        </section>
        <section>
          <h3>事件干预</h3>
          <button v-on:click.stop="eventModify($event)">.stop</button>
          <button v-on:click.prevent="eventModify($event)">.prevent</button>
          <button v-on:click.capture="eventModify($event)">.capture</button>
          <button v-on:click.self="eventModify($event)">.self</button>
        </section>
        <section>
          <h3>键盘控制</h3>
          <p>{{ tip }}</p>
          <input v-on:keyup.enter="keyPress('enter')" v-on:keyup.tab="keyPress('tab')" v-on:keyup.delete="keyPress('delete')" v-on:keyup.esc="keyPress('esc')" v-on:keyup.space="keyPress('space')" v-on:keyup.up="keyPress('up')" v-on:keyup.down="keyPress('down')" v-on:keyup.left="keyPress('left')" v-on:keyup.right="keyPress('right')" v-model="tip" />
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'BasicEventHandle',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-事件处理',
      msg: 'Hello, VueJS!',
      agree: 0,
      disagree: 0,
      myVoteResult: null,
      tip: null
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    greeting () {
      alert('Hello, VueJS!')
    },
    handle (event) {
      console.log(event)
      alert(this.title)
    },
    vote (param) {
      if (param) {
        this.agree += 1
      } else {
        this.disagree += 1
      }
    },
    vote2 (param, event) {
      console.log(event)
      if (param) {
        this.agree += 1
      } else {
        this.disagree += 1
      }
    },
    myVote (param) {
      console.log(param)
      if (param) {
        this.myVoteResult = '赞成'
        this.agree += 1
      } else {
        this.myVoteResult = '反对'
        this.disagree += 1
      }
    },
    eventModify (event) {
      console.log(event)
    },
    keyPress (key) {
      if (key) {
        this.tip = '你点击了' + key
      }
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
