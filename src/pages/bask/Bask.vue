<template>
  <div class="baskContainer">
    <ul class="backList" v-if="commentArr.length">
      <li class="backItem" v-for="(comment, index) in commentArr" :key="index">
        <div class="backItemContainer" v-for="(topic, index) in comment.topics" :key="index">
          <div class="backItem_header">
            <img :src="topic.avatar"/>
            <span>{{topic.nickname}}</span>
          </div>
          <div class="backItem_text">{{topic.title}}</div>
          <img :src="topic.picUrl"/>
          <div class="backItem_footer">
            <i class="iconfont iconeye"></i>
            <span>{{topic.readCount}} 人看过</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        commentArr:state=>state.category.commentArr,
        // page:state=>state.category.page
      }),
    
    },
    data(){
        return {
          topics:[]
        }
    },
   async mounted(){
      await this.$store.dispatch('getComment')
      console.log(this.commentArr)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.baskContainer
  padding-top 100px 
  width 100%
  .backList
    width: 100%;
    .backItem
      width 100%
      box-sizing: border-box;
      background-color: #fff;
      .backItemContainer
        width 100%
        .backItem_header
          width: 100%;
          margin: 0 15px;
          margin-bottom: 10px;
          font-size: 14px;
          img 
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            border-radius: 50%;
            vertical-align: middle;
        .backItem_text
          margin: 0 15px;
          margin-bottom: 7px;
          font-size: 18px;
          color: #333;
        img 
          height: 194px;
          margin: 0 15px;
          margin-bottom: 7px;
        .backItem_footer
          margin: 0 15px
          font-size: 14px;
          color: #999;
          .iconeye
            font-size: 14px;
            color: #999;
</style>
