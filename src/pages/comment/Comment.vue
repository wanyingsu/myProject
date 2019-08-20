<template>
  <div class="commentContainer">
    <div class="discover_container">
      <div class="discover_navCard">
        <div class="discover_navCard_life">让生活更好的N种方式</div>
        <div class="discover_navCard_max">可爱值max的严选萌物</div>
        <div class="discover_navCard_img" ref="picture">
          <ul class="discover_navCard_list">
            <li class="discover_navCard_item">
              <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg"/>
            </li>
            <li class="discover_navCard_item">
              <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg"/>
            </li>
            <li class="discover_navCard_item">
              <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg"/>
            </li>
            <li class="discover_navCard_item">
              <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg"/>
            </li>
            <li class="discover_navCard_item">
              <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg"/>
            </li>
            <li class="discover_navCard_item">
              <img src="https://yanxuan.nosdn.127.net/1c4b26e112bef898ff8e159310af0660.jpg"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="discover_orderContainer">
      <div class="orderContainer_top">TA们的严选生活</div>
      <div class="orderContainer_text">
        <span class="orderContainer_btn " :class="{new:number==='0'}" @click="goToNew('0')">最新</span>
        <span class="orderContainer_btn"  :class="{new:number==='1'}" @click="goToNew('1')">本月最热</span>
        <span class="orderContainer_btn"  :class="{new:number==='2'}" @click="goToNew('2')">晒单合集</span>
      </div>
      <Brand/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Brand from '../../components/Brand/Brand'
import BScroll from 'better-scroll'
  export default {
    components:{
      Brand
    },
    data(){
      return {
        number:'',
      }
    },
    methods:{
      goToNew(number){     
          this.number = number
        
      }
    },
    mounted() {
      // let card = new BScroll(this.$refs.picture, {
      //   click: true,
      //   scrollX:false,
      //   scrollY:true
      // })

     new BScroll(this.$refs.picture, {
        click: true,
        scrollX:true,
        scrollY:false
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.commentContainer
  width 100%
  .discover_container
    padding-top 100px 
    width 100%
    .discover_navCard
      width 100%
      .discover_navCard_life
        width 100%
        height 20px
        line-height 20px
        text-align center
        font-size 14px
        color #7f7f7f
      .discover_navCard_max
        width 100%
        height  24px
        margin-top  15px
        line-height 24px
        text-align center
        font-size 16px
        color #333
      .discover_navCard_img
        width 100%
        margin 15px 0 15px
        .discover_navCard_list
          float left 
          display flex
          .discover_navCard_item
            width 120px
            height 120px
            border-radius 7px
            img
              width 100%
              height 100%
              border-radius 7px
  .discover_orderContainer
    padding-top 120px 
    width 100%
    .orderContainer_top
      width: 100%;
      margin-top: 30px;
      line-height: 16px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: #333;
    .orderContainer_text
      margin-top: 15px;
      font-size: 14px;
      color: #333;
      display: flex;
      justify-content: space-around;
      .orderContainer_btn
        padding: 5px 15px;    
        display: flex;    
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;
        &.new 
          font-weight: 700;
          color: #b0955f;
          background-color: #ffe4af;
    </style>
