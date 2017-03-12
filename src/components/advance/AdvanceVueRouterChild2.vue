<template>
  <transition name="slide-fade">
    <div style="height: 5rem;">
      <h3>第二个子页面</h3>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AdvanceVueRouterChild2'
}
</script>

<style>
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>
