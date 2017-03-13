<template>
  <div class="page flexColumnBetween">
    <vue-topbar v-bind:title="title" back="true"></vue-topbar>
    <div class="mainContent">
      <section>
        <h3>最简单的demo</h3>
        <my-com1></my-com1>
      </section>
      <section>
        <h3>渲染多个同级元素</h3>
        <my-com2></my-com2>
      </section>
      <section>
        <h3>渲染多个不同级元素</h3>
        <my-com3></my-com3>
      </section>
      <section>
        <h3>加入样式(class/style)</h3>
        <my-com4></my-com4>
      </section>
      <section>
        <h3>数据绑定</h3>
        <div>
          <my-com5 msg="Hello, VueJS!"></my-com5>
        </div>
      </section>
      <section>
        <h3>属性绑定</h3>
        <my-com6 data="这是属性"></my-com6>
      </section>
      <section>
        <h3>条件渲染</h3>
        <my-com7></my-com7>
      </section>
      <section>
        <h3>循环渲染</h3>
        <my-com8></my-com8>
      </section>
      <section>
        <h3>v-model双向绑定</h3>
        <my-com9></my-com9>
      </section>
      <section>
        <h3>事件处理(v-on)</h3>
        <my-com10></my-com10>
      </section>
      <section>
        <h3>Slots</h3>
        <my-com11>
          <p>一个基本的Slot示例</p>
        </my-com11>
      </section>
      <section>
        <h3>Slots数据绑定示例</h3>
        <my-com12>
          <template scope="props">
            <p>从render function中传递过来的数据：{{ props.text }}</p>
          </template>
        </my-com12>
      </section>
      <section>
        <h3>功能组件</h3>
        <p>...</p>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'
// import axios from 'axios'

// 最简单的render function demo
Vue.component('myCom1', {
  render: (h) => {
    return h('p', 'Hello, VueJS!')
  }
})

// 多个元素
Vue.component('myCom2', {
  render: (h) => {
    return h('div', [
      h('h1', 'Title'),
      h('p', 'content')
    ])
  }
})

// 多个元素
Vue.component('myCom3', {
  render: (h) => {
    return h('div', [
      h('section', [
        h('h1', 'Title'),
        h('p', 'content1'),
        h('p', 'content2'),
        h('p', 'content3')
      ])
    ])
  }
})

// 加入class和style
Vue.component('myCom4', {
  render: (h) => {
    return h('div', {
      'class': 'box',
      'style': {
        backgroundColor: '#eee'
      }
    }, [
      h('h1', 'Title'),
      h('p', 'content')
    ])
  }
})

// 数据绑定
Vue.component('myCom5', {
  data: () => ({
    text: 'vue component',
    hasClass: true
  }),
  props: {
    msg: {
      type: String,
      default: () => {
        return 'This is a Vue Component'
      }
    }
  },
  render (h) {
    return h('div', {
      'class': {
        'red': this.hasClass
      }
    }, [
      h('h1', 'Title'),
      h('p', this.text),
      h('p', this.msg)
    ])
  }
})

// 属性绑定
Vue.component('myCom6', {
  data: () => ({
    msg: 'Hello, VueJS!'
  }),
  render (h) {
    return h('div', {
      attrs: {
        id: 'myDiv',
        name: 'divName'
      },
      props: {
        data: this.data
      }
    }, [
      h('h1', 'Title'),
      h('p', 'content'),
      h('input', {
        attrs: {
          id: 'name',
          name: 'name'
        },
        domProps: {
          value: this.msg
        }
      })
    ])
  }
})

// 条件渲染
Vue.component('myCom7', {
  data: () => ({
    check: true
  }),
  render (h) {
    if (this.check) {
      return h('div', [
        h('p', '已选中')
      ])
    } else {
      return h('p', '未选中')
    }
  }
})

// 循环渲染
Vue.component('myCom8', {
  data: () => ({
    frameworks: ['AngularJS', 'ReactJS', 'ReactJS']
  }),
  render (h) {
    return h('div', [
      h('ul', this.frameworks.map((item) => h('li', item)))
    ])
  }
})

// v-model双向绑定
Vue.component('myCom9', {
  data: () => ({
    text: 'Hello, VueJS!'
  }),
  render (h) {
    let that = this
    return h('div', [
      h('input', {
        domProps: {
          value: that.text
        },
        on: {
          input: function (event) {
            that.text = event.target.value
          }
        }
      }),
      h('p', that.text)
    ])
  }
})

// 事件处理
Vue.component('myCom10', {
  data: () => ({
    msg: 'Hello, VueJS!',
    count: 0,
    bgColor: ''
  }),
  render (h) {
    let that = this
    return h('div', [
      h('button', {
        on: {
          click (e) {
            console.log(e)
            that.count++
            that.msg = '值改变了' + that.count
          }
        }
      }, '修改值' + this.count),
      h('button', {
        on: {
          '~click' (e) {
            that.count++
            that.msg = '值改变了' + that.count
          }
        }
      }, '只能修改一次值' + this.count),
      h('p', this.msg),
      h('p', {
        style: {
          backgroundColor: that.bgColor
        },
        on: {
          '!mouseover' (e) {
            that.bgColor
            that.bgColor = '#eee'
          },
          '!mouseout' (e) {
            that.bgColor = ''
          }
        }
      }, '鼠标经过事件,bgColor:' + this.bgColor)
    ])
  }
})

// 一个基本的Slot
Vue.component('myCom11', {
  data: () => ({
    msg: 'Hello, VueJS!'
  }),
  render (h) {
    return h('div', this.$slots.default)
  }
})

// Slot数据绑定
Vue.component('myCom12', {
  data: () => ({
    msg: 'Hello, VueJS!'
  }),
  render (h) {
    return h('div', [
      this.$scopedSlots.default({
        text: this.msg
      })
    ])
  }
})

export default {
  name: 'AdvanceRenderFunction',
  data () {
    return {
      title: 'VueJS实例教程-Vue进阶-渲染函数',
      msg: 'Hello, VueJS!'
    }
  },
  components: {
    VueTopbar
  },
  methods: {
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
    }
  }
</style>
