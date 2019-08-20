<template>
  <div id="header">
    <div class="discover_header">
      <i class="iconfont iconhome"></i>
      <slot name="find"></slot>
      <!-- <div class="discover_find">
        <div class="discover_find_left active">发现</div>
        <div class="discover_find_right">甑选家</div>
      </div> -->
      <div class="discover_right">
        <i class="iconfont iconsearch1"></i>
        <i class="iconfont icongouwuche"></i>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#header
  width 100%
  height 100%
  overflow hidden
  .discover_header
    position fixed
    background #fff
    display flex
    width 100%
    height 44px
    z-index 99
    .iconhome
      margin-left 12px
      line-height 44px 
    .iconfont
      font-size 26px
    .discover_find
      display flex
      align-items center
      justify-content center
      width 70%
      margin-left 18px
      font-size 14px
      .discover_find_right
        margin-left 18px
        &.active
          font-weight bold
          color red
    .wangyi
      display flex
      align-items center
      justify-content center
      width 70%
      margin-left 18px
      font-size 20px
      font-weight bold
    .discover_right
      display flex
      align-items center
      .iconfont
        margin-right 12px
  </style>
