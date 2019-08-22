<template>
  <div class="phone_login">
    <Header>
      <div slot="find" class="wangyi">网易严选</div>
    </Header>
    <div class="phone_login_content">
      <div class="phone_login_content_img">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phone_login_input_box">
        <input type="text" maxlength="11" :placeholder="dataObj.title" v-model="phone"
        name="phone" v-validate="'required|mobile'" class="phone_login_input">
        <i class="iconfont icondanchuangXhao" v-show="phone" @click="phone=''"></i>
        <span class="hint" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

      </div>
      <div class="email_login_input_box">
        <input type="text" :placeholder="dataObj.code" class="email_login_input" >
        <!-- <slot name="huoqu" class="huoqu"></slot> -->
        <div v-show="$route.path==='/phonelogin'" class="huoqu">
          <span :class="{on:number}" @click="sendTime">{{time>0?`短信已发送(${time}s)`:'获取验证码'}}</span>
        </div>
      </div>
      <div class="tip_text">
        <span>{{dataObj.wenti}}</span>
        <span @click="$router.push({path:'/fastlogin'})">{{dataObj.pwd}}</span>
      </div>
      <div class="login_button">
        <button class="btn">登录</button>
      </div>
      <slot name="otherOk"></slot>
      <div class="other_login_way">
        <span @click="$router.push({path:'/personal'})">其它方式登录 ></span>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    watch: {
      phone () {
        
      }  
    },
    data (){
      return {
        phone:'',
        time:0,  //计时剩余的时间
      }
    },
    // ^1(3|4|5|7|8)\d{9}$
    props:{
      dataObj:Object
    },
    computed:{
       number(){
         return /^1\d{10}$/.test(this.phone)
       }
    },
    methods:{
    async sendTime(){
        // console.log()
        if (this.time || !this.number) {
          return
        }
        this.time = 30
        const timeId = setInterval(()=>{
          if(this.time===0){
              clearInterval(timeId)
          }else{
            this.time--
          }
        },1000)
        let result = await reqSendCode(this.phone)
        if(result.code===0){
          alert('短信发送成功')
        }else{
          this.time=0
          alert(result.msg)
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone_login
  .phone_login_content
    width 100%
    margin-top 70px
    .phone_login_content_img
      display flex
      justify-content center
      margin 28px 0 67px
      img 
        width 96px
        height 32px
    .phone_login_input_box
      position relative
      height 45px
      display flex
      justify-content center
      .phone_login_input
        width 334px
        outline none 
        border-bottom 1px solid #666
        font-size 15px
      i 
        position absolute
        right 40px
        top 15px
        font-size 18px
      .hint
        position absolute 
        bottom -17px
        left 0
        color red
       
    .email_login_input_box
      margin 15px 0 15px 0
      position relative
      height 45px
      display flex
      justify-content center
      .email_login_input
        width 337px
        outline none 
        border-bottom 1px solid #666
        font-size 15px
      .huoqu
        height 28px      
        position absolute
        right 0
        bottom 0
        margin 0 25px 10px 0
        border 1px solid #333
        span 
          line-height 28px
          text-align center
          font-size 14px
          color #666
          margin 0 3px 0 3px
          &.on
            color red
    .tip_text
      height 22px
      padding 0 19px 22px 18px
      display flex
      justify-content space-between
      span
        font-size 14px
        color #666
        text-align center
        line-height 22px
    .login_button
      display flex
      justify-content center
      .btn 
        height 49px
        width 340px    
        background #DD1A21
        font-size 14px
        color #ffffff
        line-height 49px
        text-align center
        border none
    .agree_title
      margin 7px 0 0 7px
      .checkbox
        width 14px
        height 14px
        border none 
        outline none
      span 
        font-size 14px
      a
        font-size 14px
        color #007AFF
    .other_login_way
      margin-top 25px
      display flex
      justify-content center
      span
        font-size 14px
</style>
