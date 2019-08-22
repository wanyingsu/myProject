<template>
  <div>
    <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')"> <!-- 类名确定, 但不确定有没有 -->
      <span class="item_icon">
        <i class="iconfont iconhome"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont iconfenlei2"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/discover'}" @click="goTo('/discover')">
      <span class="item_icon">
        <i class="iconfont icontupian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/shopCart'}" @click="goTo('/shopCart')">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont iconren-"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
  .footer_guide  
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom -4px
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 20px
 
</style>
