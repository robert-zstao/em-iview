<template>
  <!-- 这是一个用于水平方向分割的占位元素 -->
  <span class="split_blank" v-html="num">
  </span>
</template>

<script>
export default {
  name: 'split_blank',
  props: ['blankWidth'], // 父组件传入数据， 数组形式 [ "连雨不知春去","一晴方觉夏深"]
  data () {
    return {
      num: ''

    }
  },
  methods: {
    initDOM () {
      for(var i = 0; i<this.blankWidth;i++){
        this.num += '\xa0'
      }
    }
  },
  // 把父组件传入的arr转化成字符串
  mounted: function () {
     this.initDOM()
  },
  beforeDestroy () {

      },
  destroyed () {

  }
}
</script>

<style>
  .blank{
    height: 100%;
  }
  .split_blank{
     height: 100%;

  }
</style>
