<template>
  <div>
    <mt-header title="我" class="m-header">
    </mt-header>
    <user-card class="card-margin" to="/user/1"></user-card>
    <mt-cell title="我的小店"
             icon="more"
             value="带 icon"
             :is-link="true"
             to="www.baidu.com">
             <!-- slot=icon 自定义图片内容 -->
    </mt-cell>
    <div class="card-margin">
      <mt-cell title="我购买的"
              icon="more"
              value="带 icon"
              :is-link="true"
              to="/user/1/buy">
              <!-- slot=icon 自定义图片内容 -->
      </mt-cell>
      <mt-cell title="我出售的"
              icon="more"
              value="带 icon"
              :is-link="true"
              to="/user/1/sell">
              <!-- slot=icon 自定义图片内容 -->
      </mt-cell>
    </div>
    <div class="card-margin">
      <mt-cell title="我的钱包"
              icon="more"
              value="带 icon"
              :is-link="true"
              to="www.baidu.com">
              <!-- slot=icon 自定义图片内容 -->
      </mt-cell>
    </div>
    <div class="card-margin">
      <mt-cell title="我的旅途"
              icon="more"
              value="带 icon"
              :is-link="true"
              to="/user/1/travels">
              <!-- slot=icon 自定义图片内容 -->
      </mt-cell>
    </div>
    <div class="card-margin">
      <mt-cell title="我的收藏"
              icon="more"
              value="带 icon"
              :is-link="true"
              to="/user/1/likes">
              <!-- slot=icon 自定义图片内容 -->
      </mt-cell>
    </div>
    <div class="card-margin">
      <mt-cell title="设置"
              icon="more"
              value="带 icon"
              :is-link="true"
              to="www.baidu.com">
              <!-- slot=icon 自定义图片内容 -->
      </mt-cell>
    </div>
  </div>
</template>
<script>
import UserCard from 'components/Myself/src/UserCard'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    UserCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.card-margin {
  margin: 50px 0;
}
</style>
