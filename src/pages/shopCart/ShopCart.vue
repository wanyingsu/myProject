<template>
  <div class="shopCart">
    <header class="header">
      <span>购物车</span>
      <span class="active">领券</span>
    </header>
    <ul class="indexConentList">
      <li class="indexConentItem">           
        网易自营品牌
      </li>
      <li class="indexConentItem">            
        30天无忧退货
      </li>
      <li class="indexConentItem">            
        48小时快速退款
      </li>
    </ul>
    <div class="login">
      <p class="shopping">去添加点什么吧</p>
      <button class="btn">登录</button>
    </div>      
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCart
  position relative
  width 100%
  height 100%
  background-color #666
  background-image url("./images/shopCart.png") no-repeat center
  background-size 124px 124px
  .header
    width 100%
    height 45px
    padding 0 15px
    box-sizing border-box
    background-color #fff
    display flex
    justify-content space-between
    span        
      text-algin center
      line-height 45px
      &:nth-child(1)
        margin-left 50% 
        transform translateX(-9px)
        font-size 18px
      &:nth-child(2)
        font-size 14px
    .active
      color #B9383D
  .indexConentList
    box-sizing border-box
    width 100%
    height 36px
    padding 0 15px
    background-color #eee
    display flex 
    justify-content space-between
    .indexConentItem
      padding-left 10px              
      height 36px  
      font-size 12px
      display flex
      align-items center       
      color #333         
      background-image url("./images/circle.png")
      background-repeat no-repeat
      background-size 5px 5px
      background-position 4px 16px
  .login
    height 100%
    .shopping
      position absolute
      top 58%
      left 37%
      color #A7A7A7
      font-size 14px        
    .btn
      position absolute
      top 64%
      left 17%
      width 240px
      height 45px
      font-size 15px
      color #fff
      background #b4282d
      border-color #b4282d

    
          

    

    


</style>
