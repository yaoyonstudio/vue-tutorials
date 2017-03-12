<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <h2>单个元素/组件动效</h2>
        <section>
          <h3>元素/组件动效(使用CSS Transition)</h3>
          <button @click="showMsg = !showMsg">切换显示</button>
          <nav>
            <ul>
              <li :class="{ active: effect == item }" v-for="item in effects" @click="effect = item">{{ item }}</li>
            </ul>
          </nav>
          <transition :name="effect">
            <h4 v-show="showMsg">{{ msg }}</h4>
          </transition>
        </section>
        <section>
          <h3>元素/组件动效(使用CSS Animation)</h3>
          <button @click="showMsg2 = !showMsg2">切换显示</button>
          <transition name="bounce">
            <h4 v-show="showMsg2">{{ msg }}</h4>
          </transition>
        </section>
        <section>
          <h3>元素/组件动效(直接使用Animate.css,不用transition标签)</h3>
          <select v-model="animateCSS">
            <option v-for="item in animatesCSS" v-bind:value="item">
              {{ item }}
            </option>
          </select>
          <h4 class="animated" :class="animateCSS">{{ msg }}</h4>
        </section>
        <section>
          <h3>元素/组件动效(自定义动画过渡类，结合Animate.css)</h3>
          <select v-model="animateInCSS">
            <option v-for="item in animatesInCSS" v-bind:value="item">
              {{ item }}
            </option>
          </select>
          <select v-model="animateOutCSS">
            <option v-for="item in animatesOutCSS" v-bind:value="item">
              {{ item }}
            </option>
          </select>
          <button @click="showMsg3 = !showMsg3">切换显示</button>
          <transition
            name="custom-classes-transition"
            :enter-active-class="fullAnimateInCSS"
            :leave-active-class="fullAnimateOutCSS"
          >
            <h4 v-if="showMsg3">{{ msg }}</h4>
          </transition>
        </section>
        <section>
          <h3>Javascript动画与钩子(使用Velocity)</h3>
          <p>当使用Javascript实现动画时，在动效执行过程中，可以在transition中使用Javascript钩子去“监听”动效过程的各个阶段</p>
          <button @click="showMsg4 = !showMsg4">切换显示</button>
          <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"
          >
            <h4 v-if="showMsg4">{{ msg }}</h4>
          </transition>
          <p>当只用JavaScript动画过渡的时候,在enter和leave中,回调函数done是必须的。否则它们会被同步调用,过渡会立即完成</p>
          <p>对于仅使用JavaScript过渡的元素添加v-bind:css="false",Vue会跳过CSS的检测.这也可以避免过渡过程中CSS的影响</p>
        </section>
        <section>
          <h3>单个元素/组件初始状态动效</h3>
          <p>加下appear属性</p>
          <transition
            appear
            appear-active-class="animated slideInLeft"
          >
            <h4>{{ msg }}</h4>
          </transition>
          <transition
            appear
            name="custom-classes-transition"
            enter-active-class="animated slideInRight"
          >
            <h4 v-if="showMsg3">{{ msg }}</h4>
          </transition>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
import Velocity from 'velocity-animate'
export default {
  name: 'AdvanceSingleTransition',
  data () {
    return {
      title: 'VueJS实例教程-Vue进阶-过渡动效',
      msg: 'VueJS Transition Effects',
      showMsg: true,
      showMsg2: true,
      showMsg3: true,
      showMsg4: true,
      effect: null,
      effects: ['fade', 'slideRight', 'slideLeft', 'slideTop', 'slideBottom'],
      animate: null,
      animateCSS: null,
      animatesCSS: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'rollIn', 'rollOut', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
      ],
      animatesInCSS: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
      animatesOutCSS: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
      animateInCSS: null,
      animateOutCSS: null
    }
  },
  computed: {
    fullAnimateInCSS () {
      return 'animated' + ' ' + this.animateInCSS
    },
    fullAnimateOutCSS () {
      return 'animated' + ' ' + this.animateOutCSS
    }
  },
  mounted () {
    this.effect = this.effects[0]
    this.animateCSS = this.animatesCSS[0]
    this.animateInCSS = this.animatesInCSS[0]
    this.animateOutCSS = this.animatesOutCSS[0]
  },
  components: {
    VueTopbar
  },
  methods: {
    beforeEnter (el) {
      console.log('动画：beforeEnter')
      el.style.opacity = 0
    },
    enter (el, done) {
      console.log('动画：enter')
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    afterEnter (el) {
      console.log('动画：afterEnter')
    },
    enterCancelled (el) {
      console.log('动画：enterCancelled')
    },
    beforeLeave (el) {
      console.log('动画：beforeLeave')
    },
    leave (el, done) {
      console.log('动画：leave')
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    },
    afterLeave (el) {
      console.log('动画：afterLeave')
    },
    leaveCancelled (el) {
      console.log('动画：leaveCancelled')
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
      h4{height: 3rem; line-height: 3rem; font-size: 2rem; color: $mainColor; width: 100%; overflow: hidden;}
    }
    nav{
      ul{
        li{display: inline-block; border: 1px solid $borderColor; height: 2rem; line-height: 2rem; padding: 0 .5rem; border-radius: 2px; margin-top: .5rem;}
        li:not(:last-child){margin-right: .5rem;}
        .active{border-color: $mainColor; background-color: $mainColor; color: #fff;}
      }
    }
    // CSS Transition
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
    .slideRight-enter-active, .slideRight-leave-active {
      transition: all .5s;
    }
    .slideRight-enter, .slideRight-leave-to {
      transform: translateX(-100%);
    }
    .slideLeft-enter-active, .slideLeft-leave-active {
      transition: all.5s ease;
    }
    .slideLeft-enter, .slideLeft-leave-to {
      transform: translateX(100%);
    }
    .slideTop-enter-active, .slideTop-leave-active {
      transition: all .5s ease-in-out;
    }
    .slideTop-enter, .slideTop-leave-to {
      transform: translateY(100%);
      opacity: 0;
    }
    .slideBottom-enter-active, .slideBottom-leave-active {
      transition: all .5s ease;
    }
    .slideBottom-enter, .slideBottom-leave-to {
      transform: translateY(-100%);
      opacity: 0;
    }
    // CSS Animations
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-out .5s;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
  }
</style>
