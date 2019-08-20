<template>
  <!--轮播图-->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="./images/list/j1.jpg"> 
          </li>
          <li class="swiper-slide">
            <img src="./images/list/j2.jpg">
          </li>
          <li class="swiper-slide">
            <img src="./images/list/j3.jpg">
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {


    mounted() {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.swiper-container
  width 100%
  height 180px
  .swiper-wrapper
    img
      width 100%
      height 100%
      
 
</style>
