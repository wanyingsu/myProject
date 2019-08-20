<template>
  <div class="home_private">
        <HomeListHeader :title="title"/>
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
            </li>
            <li class="swiper-slide">
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
            </li>
            <li class="swiper-slide">
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
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
import HomeListHeader from './HomeListHeader'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
    data (){
      return {
        title:"私人订制"
      }
    },


    components:{
      HomeListHeader
    },


    mounted() {
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
