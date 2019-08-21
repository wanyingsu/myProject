<template>
  <div class="phone_login">
    <Header>
      <div slot="find" class="wangyi">网易严选</div>
    </Header>
    <div class="phone_login_content">
      <div class="phone_login_content_img">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="email_input_box">
        <input type="text" placeholder="请输入邮箱" class="email_input">
      </div>
      <div class="email_password">
        <input type="text" placeholder="请输入密码" class="email_password_input">
      </div>
      <div class="tip_text">
        <a href="https://zc.reg.163.com/m/regInitialized?pd=yanxuan&pkid=QyOtTGv&pkht=you.163.com&tp=2&as=3&curl=https%3A%2F%2Fm.you.163.com%2Fucenter">注册账号</a>
        <a href="https://reg.163.com/naq/findPassword#/verifyAccount">忘记密码</a>
      </div>
      <div class="login_button">
        <button class="btn">登录</button>
      </div>
      <div class="other_login_way">
        <span @click="$router.push({path:'/personal'})">其它方式登录 ></span>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone_login
  height 100%
  .phone_login_content
    height 100%
    width 100%
    margin-top 70px 
    .phone_login_content_img
      display flex
      justify-content center
      margin 28px 0 67px
      img 
        width 96px
        height 32px
    .email_input_box
      height 45px
      display flex
      justify-content center
      .email_input
        width 334px
        outline none 
        border-bottom 1px solid #666
        font-size 15px
    .email_password
      margin 15px 0 15px 0
      position relative
      height 45px
      display flex
      justify-content center
      .email_password_input
        width 334px
        outline none 
        border-bottom 1px solid #666
        font-size 15px
    .tip_text
      height 22px
      padding 0 19px 22px 18px
      display flex
      justify-content space-between
      a
        font-size 14px
        color #333
        text-align center
        line-height 22px
    .login_button
      display flex
      justify-content center
      .btn 
        height 49px
        width 340px    
        background #DD1A21
        font-size 15px
        color #ffffff
        line-height 49px
        text-align center
        border none
    .other_login_way
      margin-top 25px
      display flex
      justify-content center
      span
        font-size 14px
</style>
