<template>
  <header id="headerContainer">
    <div class="header">
      <img class="header_logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"/>
      <!-- <input class="header_search" type="text" placeholder="搜索商品，共有234232件商品"/> -->
      <div class="header_search" @click="$router.replace('/search')">
        <i class="iconfont iconsearch3"></i>
        <span>搜索商品,共21612款好物</span>
      </div>
      <div class="header_btn" @click="$router.push('/personal')">登录</div>
    </div>
    <div class="home_nav" ref="navList">
      <ul class="home_nav_list">
        <li class="home_nav_item" :class="{active:isIndex===index}" @click="navClick(index)"
        v-for="(label, index) in labels" :key="index">{{label}}</li>
      </ul>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        isIndex: 0,
        labels: ['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','礼品特色']
      }
    },
    methods: {
      //导航栏滑动
    navClick(index){
      this.isIndex = index
    }
    },

  mounted() {
      new BScroll(this.$refs.navList, {
          click: true,
          scrollX:true,
          scrollY:false
        })
      },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#headerContainer
  position fixed
  width 100%
  background #fff
  z-index 99
  .header
    display flex
    width 100%
    padding 4px 7px
    align-items center
    .header_logo
      width 69px
    .header_search
      //border 1px solid #333
      width 224px
      height: 28px
      margin 0 4px
      padding-left 18px
      border-radius 2px
      font-size 14px
      background #EDEDED
    .header_btn
      width 38px
      height 20px
      border-radius 2px
      border 1px solid #D99295
      font-size 10px
      text-align center
      line-height 20px
      color #d99295
  .home_nav
    width: 100%;
    overflow: hidden;
    .home_nav_list
      float: left;
      padding-right: 75px;
      display: flex;
    .home_nav_item
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0 8px;
      text-align: center;
      color: #333;
      font-size: 14px;
      line-height: 30px;
      width: 75px;
      &.active
        box-sizing: border-box;
        min-width: 45px;
        color: #b4282d;
        border-bottom: 3px solid #b4282d;


</style>
