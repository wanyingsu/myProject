<template>
  <div class="shopCart">
    <div class="shopcart_header">
      <span class="car">购物车</span>
      <span class="lingquan">领券</span>		
    </div>
		<div class="shopcart_text">
			<ul class="shopcart_text_list">
				<li>
					<span>30天无忧退货</span>
				</li>
					<li>
					<span>48小时极速退款</span>
				</li>
					<li>
					<span>满88元免邮费</span>
				</li>
			</ul>	
      <div class="shopcart_content">
        <img class="shopcartImg" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt=""/>
        <p>去添加点什么吧</p>
        <button class="btn" @click="$router.push({path:'/personal'})">登录</button>
		  </div>	
		</div>
	</div>    
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCart
  width 100%
  padding-top 44px
  font-size 14px
  background-color #f4f4f4
	.shopcart_header
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    .car
      width: 100%;
      height: 100%;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    .lingquan
      position: absolute;
      right: 30px;
      top: 5px;
      webkit-transform: translateY(50%);
      transform: translateY(50%);
      font-size: 15px;
      color: #b4282d;
  .shopcart_text
    width: 100%;
    padding-top: 7px;
    .shopcart_text_list
      font-size: 12px;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: space-around;
    .shopcart_content
      text-align: center; 
      .shopcartImg
        display: block;
        width: 124px;
        height: 124px;
        margin: 187px auto 0;
      p
        color: #999;
      .btn
        width: 240px;
        height: 46px;
        margin: 25px auto 144px;
        font-size: 15px;
        color: #fff;
        background-color: #b4282d;

</style>
