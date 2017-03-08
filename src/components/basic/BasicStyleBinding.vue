<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <h2>类样式</h2>
        <section>
          <h3>使用v-bind绑定单个样式</h3>
          <p v-bind:class="{ style1: isActive }">{{ msg }}</p>
        </section>
        <section>
          <h3>使用v-bind根据条件绑定两个样式</h3>
          <p v-bind:class="{ style2: !isActive, style3: isActive }">{{ msg }}</p>
          <button v-on:click="toggleClass()">切换样式</button>
        </section>
        <section>
          <h3>使用v-bind根据条件绑定两个样式</h3>
          <p v-bind:class="vClass">{{ msg }}</p>
          <button v-on:click="toggleClass()">切换样式</button>
        </section>
        <section>
          <h3>使用v-bind绑定多个样式</h3>
          <p v-bind:class="[bgColorClass, colorClass, centerClass]">{{ msg }}</p>
        </section>
        <section>
          <h3>使用v-bind绑定多个样式(某个样式根据条件)</h3>
          <p v-bind:class="[isActive ? bgColorClass : bgColorClass2, colorClass, centerClass]">{{ msg }}</p>
          <button v-on:click="toggleClass()">切换样式</button>
        </section>
        <hr />
        <h2>行内样式</h2>
        <section>
          <h3>使用v-bind绑定多个行内样式(对象形式)</h3>
          <p v-bind:style="{ backgroundColor: redColor, fontSize: fontSize + 'px', color: whiteColor }">{{ msg }}</p>
        </section>
        <section>
          <h3>使用v-bind绑定多个行内样式(对象形式)</h3>
          <p v-bind:style="vStyle">{{ msg }}</p>
        </section>
        <section>
          <h3>使用v-bind绑定多个行内样式(数组形式，数组元素为样式对象)</h3>
          <p v-bind:style="[vStyle1, vStyle2, vStyle3]">{{ msg }}</p>
        </section>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
export default {
  name: 'BasicStyleBinding',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-样式绑定',
      msg: 'Hello, VueJS!',
      isActive: true,
      vClass: {
        style2: false,
        style3: true
      },
      bgColorClass: 'style4',
      bgColorClass2: 'style7',
      colorClass: 'style5',
      centerClass: 'style6',
      whiteColor: 'white',
      blueColor: 'blue',
      redColor: 'red',
      fontSize: 16,
      align: 'center',
      vStyle: {
        backgroundColor: 'blue',
        fontSize: 16 + 'px',
        color: 'white'
      },
      vStyle1: {
        backgroundColor: '#e47e2c'
      },
      vStyle2: {
        fontSize: 16 + 'px'
      },
      vStyle3: {
        color: 'white'
      }
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    toggleClass () {
      this.isActive = !this.isActive
      this.vClass.style2 = !this.vClass.style2
      this.vClass.style3 = !this.vClass.style3
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
      h3{ margin-bottom: .5rem; }
    }
    h2{padding: .5rem 0;text-align: center;}
    p{padding: .5rem;}
    .style1{background-color: $mainColor; color: $lightColor;}
    .style2{background-color: #0a8acd; color: $lightColor;}
    .style3{background-color: #2c2ce4; color: $lightColor;}
    .style4{background-color: #e47e2c;}
    .style5{color: $lightColor;}
    .style6{text-align: center;}
    .style7{background-color: $mainColor;}
  }
</style>
