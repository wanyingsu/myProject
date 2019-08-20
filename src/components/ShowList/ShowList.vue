<template>
  <div class="contentRight">
    <div class="sortRight" v-if="categoryArr.length">
      <div class="sortbanner">
        <img :src="categoryArr[atIndex].wapBannerUrl">
      </div>
      <!-- <Swiper/> -->
      <div class="contentMove">
        <ul class="contentRightBottom" >
          <li v-for="(category, index) in categoryArr[atIndex].subCateList" :key="index">
            <img :src="category.bannerUrl">
            <p>{{category.name}}</p>
          </li> 
        
        </ul>
      </div>
    </div>       
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    props:['atIndex'],
    data(){
      return {
        listIndex: 0,
      }
    },
    computed:{
      ...mapState({
        categoryArr:state=>state.category.categoryArr
      })
    },
    mounted(){
      console.log(this.categoryArr[2])
    }
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.contentRight
  width 300px
  padding 15px 15px 100px
  box-sizing border-box
  .sortRight
    box-sizing border-box
    .sortbanner
      width 270px
      height 100px
      margin-bottom 16px
      img
        width 100%
        height 100%
    .contentMove
      width 100%
      height 100%
      .contentRightBottom
        width 270px            
        display flex
        flex-wrap wrap
        li
          width 72px
          height 110px
          margin-right 17px
          img
            width 72px
            height 72px
          p
            font-size 14px
            width: 72px;
            height: 36px;
            text-align center




  </style>
