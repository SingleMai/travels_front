<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="header">名字：</div>
        <div class="info">{{ result.name }}</div>
      </div>
      <div class="row">
        <div class="header">电话：</div>
        <div class="info">{{ result.phone }}</div>
      </div>
      <div class="row">
        <div class="header">自我介绍：</div>
        <div class="info">{{ result.instroduction }}</div>
      </div>
      <div class="row">
        <div class="header">出生日期：</div>
        <div class="info">{{ result.born }}</div>
      </div>
      <div class="row">
        <div class="header">城市：</div>
        <div class="info">{{ result.city }}</div>
      </div>
      <div class="row">
        <div class="header">邮箱：</div>
        <div class="info">{{ result.email }}</div>
      </div>
      <div class="row">
        <div class="header">微信：</div>
        <div class="info">{{ result.wetchat }}</div>
      </div>
      <div class="row">
        <div class="header">博客：</div>
        <div class="info">{{ result.blog }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserApi } from 'api/index.js'

export default {
  name: '',
  mounted () {
    this._getUsers()
  },
  data () {
    return {
      result: null
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    async _getUsers () {
      const data = await UserApi.getDetail({ id: this.data.id })
      this.result = data
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.main {
  box-sizing: border-box;
  padding: 10px;
  .row {
    display: flex;
    align-content: center;
    line-height: 20px;
    padding: 5px;
    .header {
      display: flex;
      align-content: center;
      justify-content: flex-end;
      flex-basis: 140px;
      font-weight: bold;
    }
    .info {
      width: 100%;
    }
    .info-table {
      display: flex;
      justify-content: center;
      align-content: center;
      border: 1px solid #c0c4cc;
      border-radius: 5px;
      .col {
        padding: 0 5px;
        border: 1px solid #c0c4cc;
        .col-header {
          border-bottom: 1px solid #c0c4cc;
        }
      }
    }
  }
}
</style>
