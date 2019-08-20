<template>
<div>
  <Header>
    <div slot='find' class="discover_find">
      <div class="discover_find_left active">发现</div>
      <div class="discover_find_right">甑选家</div>
    </div>
  </Header>
  <div class="discover_nav">
    <ul class="discover_navList">
      <li class="discover_navItem" :class="{active: isShow===index}"
      @click="goTo(index%2===1?'/discover/bask':'/discover/comment',index)" v-for="(option, index) in options" :key="index">{{option}}</li>
      
    </ul>
  </div>
  <router-view></router-view>
</div>
  

</template>

<script type="text/ecmascript-6">

  export default {
    data(){
     return {
       isShow:0,
        options:['盛夏特别版','推荐','好货内部价','回购榜','晒单','开发者日记','达人','HOME']
     }
    },

    methods:{
      goTo(path,index){
        this.$router.replace(path)
        this.isShow = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.discover_nav 
  position: fixed
  top: 44px
  left: 0
  width: 100%
  height: 36px
  overflow: hidden
  font-size: 14px
  border-top: 1px solid #ddd
  background-color: #fafafa
  z-index 99
  .discover_navList
    display flex
    height 100%
    align-items center
    justify-content center
    .discover_navItem
      height: 100%
      box-sizing: border-box
      padding: 0 5px
      line-height: 36px
      &.active
        color: #b4282d
        border-bottom: 3px solid #b4282d
  
  
</style>
