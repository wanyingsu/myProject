<template>
  <div class="home_private">
    <HomeListHeader :title="title"/>
    <div class="swiper-container" v-if="personalShop.length">
      <ul class="swiper-wrapper" >
        <li  class="swiper-slide" v-for="(personals, index) in personalArr" :key="index">
          <div class="swiper-slideItem" v-for="(personal, index) in personals" :key="index">
            <img v-lazy="personal.scenePicUrl"/>
            <div class="swipe_text">
              <span>{{personal.name}} </span>
              <span class="jiage">¥{{personal.counterPrice}}</span>
            </div>
          </div>
          
        </li>
        
      </ul>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import HomeListHeader from './HomeListHeader'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
    data (){
      return {
        title:"私人订制"
      }
    },

    computed:{
      ...mapState({
        personalShop:state=>state.home.personalShop
      }),
      personalArr(){
        const bigArr = []
        let smallArr = []
        const {personalShop} = this
        personalShop.forEach(item => {
          if(smallArr.length===0){
            bigArr.push(smallArr)
          }
          smallArr.push(item)
          if(smallArr.length===3){
            smallArr=[]
          }
        });
        // console.log(bigArr,"0000000000")
        return bigArr
      }
    },
    components:{
      HomeListHeader
    },


    mounted() {
      // console.log(this.personalShop)

      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.home_private
  width 100%
  margin-bottom 40px
  
  .swiper-container
    position relative
    width 100%
    height 100%
    padding-bottom 24px
    .swiper-wrapper
      width  100%
      .swiper-slide
        width 100%
        .swiper-slideItem
          float left
          width 105px
          margin-left 10px
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
              font-size 11px
              color #b4282d
    .swiper-pagination
      position absolute
      bottom 0px


</style>
