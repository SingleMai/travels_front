<template>
  <div class="bar-slide-box">
    <ul class="bar-slide-list">
      <li class="bar-slide-item" v-for="item in 8" :key="item">
        <div class="img"></div>
        <p class="label">个性玩法</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$block-width: 280px;
$bar-slide-margin-top: 20px;
.bar-slide-box {
  height: $block-width+$bar-slide-margin-top*4;
  overflow: hidden;
}
.bar-slide-list {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  .bar-slide-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: $bar-slide-margin-top 40px;
    width: $block-width;
    .img {
      width: $block-width;
      height: $block-width;
      background: pink;
      border-radius: 100px;
    }
    .label {
      margin: $bar-slide-margin-top 0;
      line-height: 40px;
      font-size: 40px;
    }
  }
}
</style>
