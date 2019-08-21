<template>
  <ul class="home_shopList">
    <li class="home_shopItem" v-for="(Shop, index) in Shopping" :key="index">
      <p class="home_shop_top">{{Shop.styleItem.title}}</p>
      <p class="home_shop_center">{{Shop.styleItem.desc}}</p>
      <div class="home_shopImgContainer">
        <img :src="Shop.styleItem.picUrlList[0]"/>
        <img :src="Shop.styleItem.picUrlList[1]"/>
      </div>
    </li>    
  </ul>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        Shopping:state=>state.home.Shopping
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home_shopList
  width 100%
  display flex
  flex-wrap wrap
  justify-content center
  .home_shopItem
    width 170px
    height 130px
    background-color #f5f5f5
    margin 2px 0 0 2px
    padding 10px 0 0 10px
    box-sizing border-box
    .home_shop_top
      padding-left 5px
      color #333
      font-size 16px
    .home_shop_center
      margin 5px 0
      padding-left 5px
      color #7f7f7f
      font-size 12px
    .home_shopImgContainer
      display flex
      justify-content center
      img
        width 75px
        height 75px
        margin-right 2px


</style>
