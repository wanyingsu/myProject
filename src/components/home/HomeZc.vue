<template>
  <div class="container">
    <HomeListHeader :title="title">
      <div slot="privateRight" class="privateMore">
        <span>更多</span>
        <i class="iconfont icondayufuhao"></i>
      </div>
    </HomeListHeader>
    <ul class="list">
      <li class="item" v-for="(item, index) in zhongChouList" :key="index">
        <img :src="item.picUrl"/>
        <div class="zc_info">
          <div class="zc_title">{{item.name}}</div>
          <div class="zc_price">{{item.showRetailPrice}}</div>
          <div class="zc_box">
            <div class="zc_progress">
              <div class="bg" style="width: 60%;"></div>
            </div>
            <div class="zc_percent">{{item.progress}}%</div>
          </div> 
          <div class="zc_supportNum">{{item.supportNum}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeListHeader from './HomeListHeader'
import {mapState} from 'vuex'
  export default {
    data(){
      return {
        title:'众筹'
      }
    },
    computed:{
      ...mapState({
        zhongChouList:state=>state.home.zhongChouList
      })
    },
    components:{
      HomeListHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  width 100%
  .list
    padding-left 10px
    display flex
    flex-direction column
    .item
      height 125px
      display flex
      img
        width 105px
        height 105px
        background #f5f5f5
      .zc_info
        height: 100%;
        margin-left: 7px;
        font-size: 6px;
        line-height: 9px;
        display: flex;
        lex-direction: column;
        flex-direction: column;
        .zc_title
            color #7f7f7f
          .zc_price
            color #7f7f7f
            margin-top 4px
          .zc_box
            display flex
            align-items center
            justify-content center
            margin-top 5px
            .zc_progress
              width 180px
              height 3px
              margin-right 10px
              background #d8d8d8
              display flex
              justify-content flex-start
              .bg
                height 100%
                background-color #fea438
            .zc_percent
              color #7f7f7f
          .zc_supportNum
            margin-top 20px
            color #7f7f7f

 
</style>
