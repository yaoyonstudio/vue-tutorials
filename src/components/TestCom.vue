<template>
  <div class="testContainer">
    <p>姓名：{{ data.name }}</p>
    <p>年龄：{{ data.age }}</p>
    <p>职业：{{ data.job }}</p>
    <p>博客：{{ data.blog }}</p>
    <span>{{ index + 1 }}</span>
  </div>
</template>

<script>
export default {
  name: 'TestCom',
  props: ['data', 'index']
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';
.testContainer{
  width: 70%;
  margin: 1rem auto;
  border: 1px solid $borderColor;
  border-radius: 4px;
  padding: 1rem;
  position: relative;
  span{display: block; width: 2rem; height: 2rem; position: absolute; right: 1rem; top: 1rem; font-size: 3rem; color: #ccc; font-style: italic; }
}
</style>
