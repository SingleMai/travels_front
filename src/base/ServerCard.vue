<template>
  <div class="server-card-block">
    <div class="img"></div>
    <div class="info">
      <div class="info-left">
        <p class="title">Javascript 从入门到放弃</p>
        <validate-bar></validate-bar>
        <p class="views">
          <i class="el-icon-view"></i>
          66666人浏览过
        </p>
      </div>
      <p class="info-right price">￥ 1999.00</p>
      <div class="avator"></div>
    </div>
  </div>
</template>
<script>
import ValidateBar from 'base/ValidateBar'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    ValidateBar
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$grey-text: #919191;
.server-card-block {
  padding-top: 50px;
  .img {
    width: 100%;
    height: 700px;
    background: pink;
  }
  .info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 60px;
    .info-left {
      .title {
        margin: 20px 0;
        font-size: 60px;
      }
      .views {
        margin: 20px 0;
        color: $grey-text;
        font-size: 40px;
      }
    }
    .info-right.price {
      font-size: 60px;
    }
    .avator{
      position: absolute;
      top: -50%;
      right: 40px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: orange;
      border: 1px solid $grey-text;
    }
  }
}
</style>
