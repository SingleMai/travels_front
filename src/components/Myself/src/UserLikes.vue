<template>
  <div>
    <mt-header title="我的收藏" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">服务</mt-tab-item>
      <mt-tab-item id="2">旅途</mt-tab-item>
    </mt-navbar>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
