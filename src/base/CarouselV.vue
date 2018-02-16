<template>
  <div class="block">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.block {
  height: 800px;
}
</style>
