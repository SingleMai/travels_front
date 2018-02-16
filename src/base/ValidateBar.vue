<template>
  <ul class="validate-list">
    <li class="validate-item">
      实名
    </li>
    <li class="validate-item">
      平台认证
    </li>
  </ul>
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
.validate-list {
  display: flex;
  .validate-item {
    display: inline-block;
    height: 70px;
    margin-right: 10px;
    padding: 0 20px;
    border-radius: 20px;
    line-height: 80px;
    font-size: 40px;
    color: white;
    background: orange;
  }
}
</style>
