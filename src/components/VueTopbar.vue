<template>
  <header>
    <h2>{{ title }}</h2>
  </header>
</template>

<script>
export default {
  name: 'vueTopbar',
  props: ['title']
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';
header{
  width: 100vw;
  height: 4rem;
  background-color: $mainColor;
  h2{
    font-weight: 500;
    font-size: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: $lightColor;
  }
}
</style>
