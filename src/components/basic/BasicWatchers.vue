<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <section>
          <h3>VueJS本身就实现了双向绑定</h3>
          <input type="text" v-model="msg" />
          <p>{{ msg }}</p>
        </section>
        <section>
          <h3>利用watch监视变量变化</h3>
          <p>{{ tip }}</p>
        </section>
        <section>
          <h3>使用watch制作简单计算器</h3>
          <ul>
              <li v-for="item in operators">
                <input type="radio" name="operator" :name="item.title" :id="item.title" :value="item.id" v-model="operator">
                <label>{{ item.title }}</label>
              </li>
          </ul>
          <input style="width: 4rem;" type="number" v-model="a" />
          <span>{{ operator.title }}</span>
          <input style="width: 4rem;" type="number" v-model="b" />
          = 
          <input style="width: 4rem;" type="number" v-model="result" readonly />
        </section>
        <section>
          <h3>使用computed属性制作简单计算器</h3>
          <ul>
              <li v-for="item in operators2">
                <input type="radio" name="operator2" :name="item.title" :id="item.title" :value="item.id" v-model="operator2">
                <label>{{ item.title }}</label>
              </li>
          </ul>
          <input style="width: 4rem;" type="number" v-model="a2" />
          <span>{{ operator.title }}</span>
          <input style="width: 4rem;" type="number" v-model="b2" />
          = 
          <input style="width: 4rem;" type="number" v-model="result2" readonly />
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'BasicWatchers',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-监视器',
      msg: 'Hello, VueJS!',
      tip: null,
      operators: [
        {id: 1, title: '+'},
        {id: 2, title: '-'},
        {id: 3, title: '*'},
        {id: 4, title: '/'}
      ],
      operators2: [
        {id: 1, title: '+'},
        {id: 2, title: '-'},
        {id: 3, title: '*'},
        {id: 4, title: '/'}
      ],
      operator: {},
      operator2: {},
      a: null,
      b: null,
      result: null,
      a2: null,
      b2: null
      // result2: null
    }
  },
  computed: {
    result2 () {
      return this.calculate(parseInt(this.a2), parseInt(this.b2), this.operator2)
    }
  },
  mounted () {
    this.operator = this.operators[0]
    this.operator2 = this.operators2[0]
  },
  watch: {
    msg (newVMsg) {
      this.tip = '你正在修改中...'
    },
    a (newA) {
      this.result = this.calculate(parseInt(newA), parseInt(this.b), this.operator)
    },
    b (newB) {
      this.result = this.calculate(parseInt(this.a), parseInt(newB), this.operator)
    },
    operator (newOperator) {
      this.result = this.calculate(parseInt(this.a), parseInt(this.b), newOperator)
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    calculate (a, b, operator) {
      if (!a || !b || !operator) return
      switch (operator) {
        case 1:
          return a + b
        case 2:
          return a - b
        case 3:
          return a * b
        case 4:
          if (b === 0) return
          return a / b
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
      h3{margin-bottom: .5rem;}
      li{display: inline-block; width: 4rem; background-color: #fff;margin-right: 1rem;height: 2rem; line-height: 2rem; text-align: center;}
      span{display: inline-block; width: 2rem; text-align: center;}
    }
  }
</style>
