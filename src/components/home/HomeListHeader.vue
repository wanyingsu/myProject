<template>
  <div class="privateContainer">
    <div class="privateTitle">{{title}}</div>
    <slot name="privateRight"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default { 
    props:['title']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.privateContainer
  width 100%
  display flex
  .privateTitle
    width 70%
    height 50px
    line-height 50px
    padding 0 15px
    font-size 16px
  .privateMore
    float right
    font-size 15px
    line-height: 50px
    margin-right: 25px
</style>
