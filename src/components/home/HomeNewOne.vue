<template>
  <div class="homeListCoontainer">
    <HomeListHeader :title="title">
      <div slot="privateRight" class="privateMore">
        <span>更多</span>
        <i class="iconfont icondayufuhao"></i>
      </div>
    </HomeListHeader>
    <ul class="newOne" >
      <li class="swiper-slideItem" v-for="(item, index) in newItemList" :key="index" v-if="index<6">
        <img :src="item.primaryPicUrl"/>
        <div class="swipe_text">
          <span>{{item.name}} </span>
          <span class="jiage">¥{{item.retailPrice}}</span>
        </div>
      </li>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import HomeListHeader from './HomeListHeader'
  export default {
    data(){
      return {
        title:'新品首发'
      }
    },
    computed:{
      ...mapState({
        newItemList:state=>state.home.newItemList
      })
    },
   
    components:{
      HomeListHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.newOne
  display flex
  flex-wrap wrap
  justify-content space-around
  padding-left 10px
  .swiper-slideItem
    width: 108px;
    height: 159px;
    margin-right: 10px;
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
