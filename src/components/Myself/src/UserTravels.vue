<template>
  <div>
    <mt-header title="我的旅途" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
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
