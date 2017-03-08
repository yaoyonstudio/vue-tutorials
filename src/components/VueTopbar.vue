<template>
  <header>
    <h2>{{ title }}</h2>
    <span v-if="back" v-on:click="goback()"></span>
  </header>
</template>

<script>
export default {
  name: 'vueTopbar',
  props: ['title', 'back'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../css/vars.scss';
header{
  width: 100vw;
  height: 4rem;
  position: relative;
  background-color: $mainColor;
  h2{
    font-weight: 500;
    font-size: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: $lightColor;
  }
  span{
    position: absolute;
    display: block;
    width: 1.2rem;
    height: 3rem;
    top: .5rem;
    left: 1rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAArCAYAAACTkhN2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAj0lEQVRIx+3VsQ3CMBBG4Z+MwGYMQTpSsQKdSZNUoU5FSYlEwzJs8SiSwnJ9J9nSXefmfbJl6STjAXrgA5ytwxeycQsDL6/wO8IR5tpcuHyKb3Ph+n9FhBsODy4bZI/n8zMLS+okpex8BEZLQMC9uMESQAD1A2sAJTAXwMMaSAEEYA5MrsDBtL4BN0knSc8/KRgEWHMneQwAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
}
</style>
