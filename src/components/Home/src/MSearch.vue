<template>
  <div>
    <mt-header title="搜索路线" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <mt-search v-model="value">
      <mt-cell v-for="(item, index) in result"
               :key="index"
               :title="item.title"
               :value="item.value">
      </mt-cell>
    </mt-search>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      value: '',
      result: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
