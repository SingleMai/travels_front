<template>
  <div class="search-block">
    <a class="btn-location" href="#">北京</a>
    <div class="search">
      <i></i>
      <span>搜索目的地、玩法、景区</span>
    </div>
    <a href="#" class="btn-map">Logo</a>
  </div>
</template>
<script>
import InputBox from 'base/InputBox'
export default {
  name: '',
  data () {
    return {}
  },
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$textColor: white;
.search-block {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  margin: 50px 0;
  z-index: 3;
  .btn-location {
    position: relative;
    width: 240px;
    margin: 0 80px 0 40px;
    font-size: 90px;
    text-align: center;
    color: $textColor;
    text-decoration:none;
    &::after {
      content: '';
      position: absolute;
      right: -50px;
      top: 50%;
      transform: translateY(-50%);
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-top: 40px solid $textColor;
    }
  }
  .search {
    border: 1px solid $textColor;/* no */
    padding: 30px 0;
    font-size: 60px;
    width: 1200px;
    border-radius: 80px;
    text-indent: 2em;
    color: $textColor;
  }
  .btn-map {
    display: inline-block;
    width: 240px;
    margin: 0 50px;
  }
}
</style>
