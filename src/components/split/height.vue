<template>
  <div  class="split_height" :style="{height:num}">

  </div>
</template>

<script>
  export default {
    name : 'split_height',
    props: ['splitHeight'], // 父组件传入数据， 数组形式 [ "连雨不知春去","一晴方觉夏深"]
    data () {
      return {
         num:'10px',
      }
    },
    methods: {
      initDOM() {
           this.num = this.splitHeight + 'px'
         },
    },
    // 把父组件传入的arr转化成字符串
    mounted: function () {
       this.initDOM()
    },
    beforeDestroy() {

        },
    destroyed () {

    }
  }
</script>

<style>
  .split_height{
    width: 100%;
  }
</style>
