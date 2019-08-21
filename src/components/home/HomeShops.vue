<template>
  <div class="homeListCoontainer">
    <HomeListHeader :title="title">
      <div slot="privateRight" class="privateMore">
        <span>更多</span>
        <i class="iconfont icondayufuhao"></i>
      </div>
    </HomeListHeader>
    <div class="swiper-slideItem" v-for="(item, index) in flashSaleModule.itemList" :key="index"> 
      <img :src="item.picUrl"/>
      <div class="swipe_text">
        <span v-show="isShow">日本制造 24K金T型美容棒 </span>
        <span class="jiage">¥{{item.activityPrice}}</span>
        <del class="huadiao">¥{{item.originPrice}}</del>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeListHeader from './HomeListHeader'
import {mapState} from 'vuex'
  export default {
    data (){
      return {
        title:'限时购',
        isShow:false
      }
    },
  computed:{
    ...mapState({
      flashSaleModule:state=>state.home.flashSaleModule
    })
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
      display flex
      align-items center
      justify-content center
      margin-bottom 5px
      font-size 12px
      .jiage
        font-size 14px
        color #b4282d
        margin-right 10px
      .huadiao
        font-size 11px
        color black

      
  
  </style>
