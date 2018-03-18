<template>
  <div>
        <div class="main">
      <div class="row">
        <div class="header">标题：</div>
        <div class="info">{{ data.title }}</div>
      </div>
      <div class="row">
        <div class="header">首图</div>
        <div class="info">
          <img style="margin:0 auto;height: 100px;width:100px;" :src="data.headImg" alt="">
        </div>
      </div>
      <div class="row">
        <div class="header">价格：</div>
        <div class="info">{{ data.price }}</div>
      </div>
      <div class="row">
        <div class="header">类型：</div>
        <div class="info">{{ data.type }}</div>
      </div>
      <div class="row">
        <div class="header">时间：</div>
        <div class="info">{{ data.time }}</div>
      </div>
      <div class="row">
        <div class="header">正文内容：</div>
        <div class="info">{{ data.content }}</div>
      </div>
      <div class="row">
        <div class="header">浏览量：</div>
        <div class="info">{{ data.views }}</div>
      </div>
      <div class="row">
        <div class="header">点赞：</div>
        <div class="info">{{ data.likes }}</div>
      </div>
      <div class="row">
        <div class="header">向导：</div>
        <div class="info">{{ data.user.name }}</div>
      </div>
      <div class="row">
        <div class="header">头像：</div>
        <div class="info">
          <img style="margin:0 auto;height: 100px;width:100px;" :src="data.user.head" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    data: {
      type: Object
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
      width: 80%;
      word-wrap:break-word;
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
