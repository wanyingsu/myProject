<template>
  <div id="sortContainer">
    <div class="sortHeader">
      <div class="sortSearch" @click="$router.replace('/search')">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品，共21615款好物</span> 
      </div>                
    </div>
    <div class="sortContent">
      <div class="contentLeft" ref="categoryNav">
        <ul class="contentLeftList">
          <li :class="{active: atIndex===index}" @click="goToSort(index)" 
          v-for="(category, index) in categoryArr" :key="index">{{category.name}}</li>          
        </ul>
      </div>
      <ShowList :atIndex="atIndex"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ShowList from '../../components/ShowList/ShowList'
import BScroll from 'better-scroll'

import {mapState} from 'vuex'

  export default {
    data(){
      return {
        atIndex:0,
      }
    },
  computed:{
    ...mapState({
      categoryArr:state=>state.category.categoryArr
    })
  },

 
  mounted(){
    this.$store.dispatch("getCategoryData")
    new BScroll(this.$refs.categoryNav, {
          click: true,
          scrollX:false,
          scrollY:true
        })
  },

    methods:{
      goToSort(index){
          this.atIndex = index
      }
    },
    components:{
      ShowList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#sortContainer
  width 100%
  height 100%
  .sortHeader
    position fixed
    width 100%
    height 45px
    background-color #fff
    display flex
    border-bottom 1px solid #EDEDED
    .sortSearch
      margin auto
      width 340px
      height 30px
      line-height 30px
      background #EDEDED
      text-align center
      span
        font-size 12px
        color #666
  .sortContent
    padding-top 45px 
    padding-bottom 50px
    box-sizing border-box
    width 100%
    height 100%
    display flex
    .contentLeft
      width 80px
      height 100%
      .contentLeftList          
        text-align center
        line-height 25px      
        li
          width 100%
          height 25px
          margin-top 20px            
          font-size 13px            
          &.active
            border-left 2px solid #B9383D
            color #B9383D
    </style>
