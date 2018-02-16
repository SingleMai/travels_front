<template>
  <div class="user-card-block">
    <div class="block-left">
      <div class="head-img"></div>
      <div class="user-info">
        <p class="name">嘻嘻啊</p>
        <ul class="label-list">
          <li class="label-item">
            技术宅
          </li>
          <li class="label-item">
            精通html/css/js
          </li>
        </ul>
      </div>
    </div>
    <div class="block-right">
      <span class="arrow">></span>
    </div>
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
$cardHeight: 250px;
$grey-text: #919191;
.user-card-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $cardHeight;
  padding: 50px;
  background: white;
  .block-left {
    display: flex;
    height: 100%;
    .head-img {
      width: $cardHeight;
      height: $cardHeight;
      border-radius: 50%;
      background: pink;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 40px;
      padding-bottom: 10px;
      .label-list {
        display: flex;
        .label-item {
          padding-right: 20px;
          font-size: 40px;
          color: $grey-text;
        }
      }
    }
  }
  .block-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
}
</style>
