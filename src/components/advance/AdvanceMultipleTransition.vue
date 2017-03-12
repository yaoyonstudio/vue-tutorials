<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <h2>只同时渲染一个元素/组件</h2>
        <section>
          <h3>不相同标签多元素动效(transition/v-if/v-else)</h3>
          <button @click="loading = !loading">切换加载</button>
          <transition name="custom-classes-transition" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
            <p v-if="loading">loading...</p>
            <h4 v-else>{{ msg }}</h4>
          </transition>
        </section>
        <section>
          <h3>相同标签多元素动效(transition/v-if/v-else)</h3>
          <p>相同标签的多元素动效需要在各元素上加上key属性标识不同元素</p>
          <button @click="toggleFramework = !toggleFramework">切换框架</button>
          <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
            <p key="angualrjs" v-if="toggleFramework">AngularJS</p>
            <p key="vuejs" v-else>VueJS</p>
          </transition>
        </section>
        <section>
          <h3>相同标签多元素动效(transition/v-if/v-else)</h3>
          <button @click="randomFramework">切换框架</button>
          <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
            <p v-bind:key="framework">{{ framework }}</p>
          </transition>
        </section>
        <section>
          <h3>过渡模式</h3>
          <button @click="mode = (mode === 'in-out') ? 'out-in' : 'in-out'">切换动效模式</button>
          <button @click="loading2 = !loading2">切换加载</button>
          <p>当前模式mode：{{ mode }}</p>
          <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :mode="mode">
            <p v-if="loading2">loading...</p>
            <h4 v-else>{{ msg }}</h4>
          </transition>
        </section>
        <section>
          <h3>多组件过渡动效</h3>
          <p>多组件的过渡动效比上面多元素动效过渡要简单,只需要使用动态组件,不需要使用key属性</p>
          <div class="multipleComponentTransition">
            <ul class="menu">
              <li :class="{'active': currentComponent == 'my-index'}" @click="currentComponent = 'my-index'">首页</li>
              <li :class="{'active': currentComponent == 'my-about'}" @click="currentComponent = 'my-about'">关于</li>
              <li :class="{'active': currentComponent == 'my-profile'}" @click="currentComponent = 'my-profile'">资料</li>
            </ul>
            <transition name="component-fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
              <component v-bind:is="currentComponent"></component>
            </transition>
          </div>
        </section>
        <h2>同时渲染多元素/组件(列表)</h2>
        <p>列表过渡动效使用transition-group组件,它会默认渲染一个span元素,可以使用tag来改变渲染的标签元素,列表项需要唯一key值</p>
        <section class="listTransition">
          <h3>列表进入/离开过渡动效</h3>
          <header>
            <input type="text" v-model="mobile" placeholder="输入添加手机" />
            <button class="add" @click="addMobile">添加手机</button>
          </header>
          <ul class="list">
            <transition-group tag='div' enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <li v-for="item in mobiles" :key="item.id">{{ item.name }}<button class="del" @click="removeMobile(item.id)">X</button></li>
            </transition-group>
          </ul>
          <p>这个示例中,当列表条目发生变化(增加或删除)时,发生变化的条目项都有过渡动效,不过当条目被添加或删除时,列表其他位置的变动(位移)却没有过渡动效</p>
        </section>
        <section class="listTransition">
          <h3>列表位移过渡动效</h3>
          <p>通过增加v-move类,与前面过渡动效类名命名方式相同,在动效name后加move即可,如动效name为flip-list,则需要定义的列表位移动效类名为.filp-list-move</p>
          <header>
            <input type="text" v-model="mobile" placeholder="输入添加手机" />
            <button class="add" @click="addMobile">添加手机</button>
          </header>
          <ul class="list">
            <transition-group tag='div' name="flip-list" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
              <li v-for="item in mobiles" :key="item.id">{{ item.name }}<button class="del" @click="removeMobile(item.id)">X</button></li>
            </transition-group>
          </ul>
        </section>
        <section class="listTransition">
          <h3>列表渐进过渡动效(Javascript过渡动效)</h3>
          <header>
            <input type="text" v-model="keyword" placeholder="输入关键词" />
          </header>
            <transition-group class="list"
              name="staggered-fade"
              tag="ul"
              v-bind:css="false"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:leave="leave"
            >
              <li v-for="(item, index) in filterMobiles" :key="item.id" v-bind:data-index="index">{{ item.name }}</li>
            </transition-group>
        </section>
        <section>
          <h3>复用过渡动效</h3>
          <button @click="showMsg = !showMsg">切换显示</button>
          <fade>
            <h4 v-show="showMsg">{{ msg }}</h4>
          </fade>
        </section>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTopbar from '../VueTopbar'
import Velocity from 'velocity-animate'

Vue.component('my-index', {
  template: '<div style="height: 3rem; padding: 1rem;"><p>首页组件</p></div>'
})
Vue.component('my-about', {
  template: '<div style="height: 3rem; padding: 1rem;"><p>关于组件</p></div>'
})
Vue.component('my-profile', {
  template: '<div style="height: 3rem; padding: 1rem;"><p>资料组件</p></div>'
})

// 创建动效函数组件
Vue.component('fade', {
  functional: true,
  render: function (createElement, context) {
    var data = {
      props: {
        name: 'fade',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function (el) {
          // ...
        },
        afterEnter: function (el) {
          // ...
        }
      }
    }
    return createElement('transition', data, context.children)
  }
})

export default {
  name: 'AdvanceMultipleTransition',
  data () {
    return {
      title: 'VueJS实例教程-Vue进阶-多元素/组件/列表动效',
      msg: 'Hello, VueJS!',
      loading: true,
      loading2: true,
      toggleFramework: true,
      framework: 'angularjs',
      mode: 'out-in',
      currentComponent: 'my-index',
      mobiles: [
        {id: 1, name: 'Iphone'},
        {id: 2, name: 'Samsung'},
        {id: 3, name: 'Huawei'},
        {id: 4, name: 'Xiaomi'},
        {id: 5, name: 'Meizu'}
      ],
      length: 5,
      mobile: null,
      keyword: null,
      showMsg: true
    }
  },
  computed: {
    getFramework () {
      switch (this.framework) {
        case 'angularjs': return 'AngularJS'
        case 'vuejs': return 'VueJS'
        case 'reactjs': return 'ReactJS'
      }
    },
    filterMobiles () {
      let that = this
      if (this.keyword) {
        return this.mobiles.filter(function (item) {
          return item.name.toLowerCase().indexOf(that.keyword.toLowerCase()) !== -1
        })
      } else {
        return this.mobiles
      }
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    randomFramework () {
      let frameworks = ['angularjs', 'vuejs', 'reactjs']
      this.framework = frameworks[Math.round(Math.random() * 2 + 1) - 1]
      console.log(this.framework)
    },
    shuffle (a) {
      let j, x, i
      for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i)
        x = a[i - 1]
        a[i - 1] = a[j]
        a[j] = x
      }
    },
    addMobile () {
      this.length++
      this.mobiles.push({
        id: this.length,
        name: this.mobile
      })
      this.shuffle(this.mobiles)
      this.mobile = null
    },
    removeMobile (id) {
      let that = this
      this.mobiles.map((item, index) => {
        if (item.id === id) {
          that.mobiles.splice(index, 1)
        }
      })
      this.shuffle(this.mobiles)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '2.5rem' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../css/vars.scss';
  @import '../../css/animate.css';
  .mainContent{
    width: 100%; overflow: hidden; overflow-y: scroll;
    h2{text-align: center; margin-top: .5rem; color: #0a8acd;}
    section{
      padding: 1rem;
      border-bottom: 1px solid $borderColor;
      h3{margin-bottom: .5rem;}
    }
    .multipleComponentTransition{
      border: 1px solid $borderColor;
    }
    ul.menu{
      display: flex; flex-direction: row; justify-content: space-between; align-items: center; 
      li{display: block; text-align: center; flex: 1; height: 2.5rem; line-height:2.5rem; border-bottom: 2px solid $borderColor; }
      li:not(:last-child){border-right: 1px solid $borderColor;}
      .active{border-color: $mainColor; color: $mainColor;}
    }
    .listTransition{
      header{
        display: flex; flex-direction: row; justify-content: space-between; align-items: center; height: 2.5rem; line-height: 2.5rem;
        input[type=text]{display:block; flex: 1; height: 100%; padding: 0 .5rem;box-sizing: border-box;}
      }
      ul.list{
        display: block;border: 1px solid $borderColor;
        li{display: block; padding: 0 .5rem; height: 2.5rem; line-height: 2.5rem; border-bottom: 1px solid $borderColor; background-color: $lightColor; position: relative;}
      }
      button{display:block; text-align: center;}
      button.add{ height: 2.5rem; line-height: 2.5rem; padding: 0 1rem;}
      button.del{width: 2rem; height: 2rem; position: absolute; right: .5rem; top: 0.225rem; line-height: 2rem;}
    }
    .flip-list-move{transition: transform 1s;}
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
</style>
