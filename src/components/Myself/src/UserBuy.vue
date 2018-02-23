<template>
  <div>
    <mt-header title="我购买的" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待付款</mt-tab-item>
      <mt-tab-item id="2">待接收</mt-tab-item>
      <mt-tab-item id="3">已确认</mt-tab-item>
      <mt-tab-item id="4">售后</mt-tab-item>
      <mt-tab-item id="5">已失效</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { OrdersApi } from 'api'

export default {
  name: '',
  mounted () {
    this.$_getOrdersBook()
  },
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    async $_getOrdersBook() {
      const data = await OrdersApi.getOrdersBook()
      console.log(data)
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
