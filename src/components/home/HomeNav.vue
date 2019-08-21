<template>
  <div class="home_nev">
    <ul class="home_list">
      <li class="home_item" v-for="(kingKongItem, index) in kingKongModule.kingKongList" :key="index">
        <img class="homeImg" :src="kingKongItem.picUrl"/>
        <span class="home_living">{{kingKongItem.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        kingKongModule:state=>state.home.kingKongModule
      })
    },
    mounted(){
      // console.log(this.kingKongModule.kingKongList)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home_nev
  width 100%
  height 167px
  .home_list
    display flex
    flex-wrap wrap
    width 100%
    height 100%
    margin-bottom 20px
    .home_item
      display flex
      flex-direction column
      align-items center
      width 55px
      height 76px
      margin 5px 10px 0
      .homeImg
        width 100%
        margin-bottom 2px
      .home_living
        font-size 10px



</style>
