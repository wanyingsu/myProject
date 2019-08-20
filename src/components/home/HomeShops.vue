<template>
  <div class="homeListCoontainer">
    <HomeListHeader :title="title">
      <div slot="privateRight" class="privateMore">
        <span>更多</span>
        <i class="iconfont icondayufuhao"></i>
      </div>
    </HomeListHeader>
    <div class="swiper-slideItem" v-for="(item, index) in pop" :key="index"> 
      <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png"/>
      <div class="swipe_text">
        <span>日本制造 24K金T型美容棒 </span>
        <span class="jiage">¥459</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeListHeader from './HomeListHeader'
  export default {
    data (){
      return {
        title:'限时购',
        pop:['1','2','3','4','5','6']
      }
    },
    components:{
      HomeListHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.homeListCoontainer
  width 100%
  .swiper-slideItem
    float left
    width 105px
    margin-left 10px
    img
      width 108px
      height 108px
      margin-bottom 6px
      background-color #f5f5f5
    .swipe_text
      margin-top 0
      margin-bottom 5px
      font-size 12px
      .jiage
        font-size 11px
        color #b4282d
      
  
  </style>
