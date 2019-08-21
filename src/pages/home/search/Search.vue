
<template>
  <div class="searchContainer">
    <div class="search">
      <input class="searchInput" type="text" 
      placeholder="新款爆品  季末特惠" v-model="content"/>
      <i class="iconfont iconsearch3"></i>
      <span class="cancel" @click="$router.push('/home')">取消</span>
    </div>
    <div class="searchList" v-show="isShow">
      <span class="remensousuo">热门搜索</span>
      <ul v-if="defalutData.length">
        <li :class="{onlyRed:index%3===2}" v-for="(item, index) in defalutData" :key="index">{{item.keyword}}</li>
      </ul>
    </div>
    <div class="searchContent" v-show="!isShow">
      <ul class="searchContentShow" >
        <li v-for="(item, index) in searchContent" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        searchContent:state=>state.search.searchContent,
        defalutData:state=>state.search.defalutData
      }),
    },
    data(){
      return {
        isShow:true,
        content:''
      }
    },
    mounted(){
      this.$store.dispatch('getDefalut')
    },
    watch:{
      content(){
        if(this.content.trim()){
          if (this.timer) {
            return
          }
          this.timer = setTimeout(()=>{
            let {content} = this
            this.$store.dispatch('getSearch',content)
            clearTimeout(this.timer)
            this.timer = null
          },500)
          this.isShow = false
        }else{
          this.isShow = true
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchContainer
  width 100%
  .search
    position: relative;
    width: 340px;
    height: 28px;
    margin: 10px 0 0 15px;
    font-size: 0;
    display: flex;
    align-items: center;
    .searchInput
      display: block;
      width: 276px;
      height: 100%;
      padding-left: 30px;
      outline: none;
      border: 0 none;
      margin-right : 10px;
      background-color: #f4f4f4;
      font-size: 14px;
    .iconsearch3
      position absolute
      left 10px
    .cancel
      width: 33px;
      font-size: 14px;
      color: #333;
  .searchList
    width 100%
    padding-top 15px
    .remensousuo
      padding: 15px 0 0 15px
      font-size: 14px
      color: #999
    ul
      padding: 15px 0 0 15px
      font-size: 14px
      display: flex
      flex-wrap: wrap
      li
        margin: 0 16px 16px 0
        padding: 4px 7px
        border: 1px solid #ccc
        height: 23px
        line-height: 23px
        text-align: center
        font-size: 14px
        &.onlyRed
          border-color: #b4282d;
          color: #b4282d
  .searchContent
    width 100%
    height 100%
    margin 10px 0 0 15px
    background: #eee
    .searchContentShow
      font-size 14px
      li
        width 100%
        height 45px
        border-bottom 1px solid #eee
        font-size 14px
        line-height 60px
        background #fff


</style>
