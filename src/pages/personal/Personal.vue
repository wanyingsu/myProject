<template>
  <div class="personContainer">
    <!-- <header class="header">
      <i class="iconfont icon-shouye"></i>
      <div>
        <i class="iconfont icon-fangdajing magnifier"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>      
    </header> -->
    <Header>
      <div slot="find" class="wangyi">网易严选</div>
    </Header>
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" class="logo" />
    </div>
    <div class="text">
      <button class="phone">手机号快捷登录</button>
      <button class="email">邮箱账号登录</button>
    </div>
    <div class="copy">
      <div class="container">
        <div class="wx">
          <i class="iconfont iconweixin"></i>
          <span>微信</span>
          <span>|</span>
        </div>
        <div class="qq">
          <i class="iconfont iconqq-copy"></i>
          <span>QQ</span>
          <span>|</span>
        </div>
        <div class="wb">
          <i class="iconfont iconweibo"></i>
          <span>微博</span>     
        </div>      
      </div>    
    </div>     
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.personContainer
  width 100%
  .header
    width 100%
    height 45px
    background-size 85px 27px
    padding 0 8px 0 12px
    box-sizing border-box
    display flex
    justify-content space-between
    img
      width 78px
      height 23px
      margin auto
    i
      font-size 20px 
      text-algin center
      line-height 45px
    .magnifier
      margin-right 15px
  .logoWrap
    width 100%
    height 240px
    display flex
    .logo
      width 133px
      height 45px
      margin auto
  .text
    display flex
    flex-direction column
    .phone
      margin auto
      width 335px
      height 46px
      margin-bottom 16px
      background #DD1A21 url("./images/2.png") no-repeat 100px -5px
      background-size 5%
      color #fff
      border 1px solid #DD1A21       
    .email
      margin auto
      width 335px
      height 46px
      background url("./images/2.png") no-repeat 105px 15px
      background-size 5%
      color #DD1A21
      border 1px solid #DD1A21
  .copy
    margin-top 200px
    width 375px 
    .container
      margin-left 70px
      overflow hidden
      .wx,.qq,.wb
        float left
        width 90px
        color #7F7F7F         
        span
          margin-right 10px
          color #7F7F7F
          margin-left 5px 
 
</style>
