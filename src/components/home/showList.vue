<template>
  <ul class="showList">
    <li class="showItem" v-for="(category, index) in categoryModule" :key="index">
      <img :src="category.titlePicUrl"/>
      <div class="showNav">
        <ul class="NavList">
          <li class="NavItem" v-for="(item, index) in category.itemList" :key="index">
            <img :src="item.scenePicUrl"/>
            <div class="swipe_text">
              <span>{{item.name}}</span>
              <span class="jiage">¥{{item.counterPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        categoryModule:state=>state.home.categoryModule
      })
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.showList
  width 100%
  .showItem
    padding-top 50px
    position relative
    width 100%
    img
      width 100%
      height 200px
      margin-bottom 10px
    .showNav
      width 100%
      overflow hidden
      .NavList
        display flex
        float left
        .NavItem
          width: 108px;
          height: 159px;
          margin-right: 10px;
          img
            width 108px
            height 108px
            margin-bottom 6px
            background-color #f5f5f5
          .swipe_text
            margin-top 0
            margin-bottom 5px
            font-size 12px
            .jiage
              font-size 14px
              color #b4282d
              margin-right 10px
            
  
</style>
