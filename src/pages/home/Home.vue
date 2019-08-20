<template>
  <div id="home">
    <HomeHeader/>
    <!--主题内容-->
    <div id="homeContainer">
      <!-- 轮播图 -->
      <Swiper/>
      <!--提示-->
      <!-- <div class="home_hint" v-for="(item, index) in policyDescList" :key="index">
        <span class="home_hint_size">网易自营品牌</span>
        <span class="home_hint_size">30天无忧退货</span>
        <span class="home_hint_size">48小时快速退款</span>
      </div> -->
      <!--导航列表-->
      <HomeNav/>
      <!--商品提示-->
      <div class="home_shop">
        <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png"/>
      </div>
      <!--商品列表-->
      <HomeShopList/>
      <!--私人订制-->
      <HomeProvate/>
      <!-- 限时购 -->
      <HomeShops/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import HomeHeader from '../../components/home/HomeHeader'   //头部
import HomeNav from '../../components/home/HomeNav'       //导航列表
import HomeShopList from '../../components/home/HomeShopList' //商品列表
import HomeProvate from '../../components/home/HomeProvate'   //私人订制
import HomeShops from '../../components/home/HomeShops'
  export default {
    
    computed:{
      ...mapState({
        policyDescList:state=>state.home.policyDescList
      })
    },
    async  mounted(){
      await this.$store.dispatch('getHomeData')
    },

  components:{
    HomeHeader,
    HomeNav,
    HomeShopList,
    HomeProvate,
    HomeShops
  },
    

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
@import '../../common/css/reset.css'
  #home
    width 100%
    height 100%
    #homeContainer
      width 100%
      padding-top 100px 
      .home_hint
        display flex
        width 100%
        height: 36px
        align-items center
        justify-content center
        .home_hint_size
          font-size 10px
          margin-right 12px
          color #b4282d
      .home_shop
        height 80px
        margin-bottom 20px
        img
          height 100%
      </style>
