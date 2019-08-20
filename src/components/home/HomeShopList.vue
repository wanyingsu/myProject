<template>
  <ul class="home_shopList">
    <li class="home_shopItem">
      <p class="home_shop_top">实时好评榜</p>
      <p class="home_shop_center">精选优质好物</p>
      <div class="home_shopImgContainer">
        <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png"/>
        <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png"/>
      </div>
    </li>
    <li class="home_shopItem">
      <p>实时好评榜</p>
      <p>精选优质好物</p>
      <div class="home_shopImgContainer">
        <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png"/>
        <img src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png"/>
      </div>
    </li>
    <li class="home_shopItem">
      <p>实时好评榜</p>
      <p>精选优质好物</p>
      <div class="home_shopImgContainer">
        <img src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png"/>
        <img src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png"/>
      </div>
    </li>
    <li class="home_shopItem">
      <p>实时好评榜</p>
      <p>精选优质好物</p>
      <div class="home_shopImgContainer">
        <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png"/>
        <img src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png"/>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
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
