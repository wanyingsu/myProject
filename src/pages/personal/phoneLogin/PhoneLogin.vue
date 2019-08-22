<template> 
  <div>
    <Login :dataObj="dataObj">
      <!-- <div slot="huoqu" class="huoqu">
        <span>获取验证码</span>
      </div> -->
      <div slot="otherOk" class="agree_title">
        <input type="checkbox" class="checkbox">
        <span>我同意</span>
        <a href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127">《服务条款》</a>
        <span>和</span>
        <a href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127">《网易隐私政策》</a>
      </div>
    </Login>
  </div>
</template>

<script type="text/ecmascript-6">
import Login from '../../../components/Login/Login'
  export default {
    data (){
      return {
        dataObj:{
          title:'请输入手机号',
          code:'请输入验证码',
          wenti:'遇到问题？',
          pwd:'使用密码验证登录'
        }
        
      }
    },
    components:{
      Login
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
