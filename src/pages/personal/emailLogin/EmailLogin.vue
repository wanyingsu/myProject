<template>
  <div>
    <Login :dataObj="dataObj"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Login from '../../../components/Login/Login'
  export default {
    data (){
      return {
        dataObj:{
          title:'请输入邮箱号',
          code:'请输入密码',
          wenti:'注册账号',
          pwd:'忘记密码'
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
