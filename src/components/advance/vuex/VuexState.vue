<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>使用State</h3>
          <p>使用computed可以直接访问某个State</p>
          <pre>
count () {
  return this.$store.state.count
}
          </pre>
          <p>count: {{ count }}</p>
          <p>allCount: {{ allCount }}</p>
          <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
          </p>
        </section>
        <section>
          <h3>使用mapState</h3>
          <p>使用MapState可以更方便地获取到Store中的state，获取操作是在组件的computed中操作的，为了使state和组件自身的computed对象联合使用，可以使用对象操作符绑定在一起</p>
          <br />
          <p>import { mapState } from 'vuex'</p>
          <br />
          <h4>不使用对象操作符</h4>
          <pre>
computed: mapState([
  'projects'
])        
          </pre>
          <h4>使用对象操作符(区别开组件的computed)</h4>
          <pre>
computed: {
  showTypeTxt () {
    return this.showType ? '是' : '否'
  },
  ...mapState([
    'count'
  ])
}
          </pre>
          {{ showTypeTxt }}
          <h4>在组件中使用别名</h4>
          <pre>
...mapState({
  allCount: 'count'
})
          </pre>
          <p>上面使用对象方式把count引用到allCount这个“别名”下，在组件中使用allCount也可以获取count的state</p>
        </section>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueTopbar from '../../VueTopbar'

export default {
  name: 'VuexState',
  data () {
    return {
      title: 'VueJS实例教程-Vuex状态管理-State',
      msg: 'Hello, VueJS!',
      showType: true
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    showTypeTxt () {
      return this.showType ? '是' : '否'
    },
    ...mapState([
      'count'
    ]),
    ...mapState({
      allCount: 'count'
    })
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
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
      button{padding: .5rem 1rem;}
    }
  }
</style>
