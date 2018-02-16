<template>
  <div>
    <div :style="`background: url(${serviesImg}) center;background-size: 100% 100%;`" class="head-box">
      <span class="btn-back" @click="back()"><</span>
    </div>
    <div class="info">
      <div class="info-left">
        <p class="title">Javascript 从入门到放弃</p>
        <validate-bar></validate-bar>
        <p class="likes">
          <i class="el-icon-view"></i>
          出行： 0
        </p>
        <p class="views">
          <i class="el-icon-view"></i>
          66666人浏览过
        </p>
      </div>
      <p class="info-right price">￥ 1999.00</p>
    </div>
    <user-card></user-card>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">玩法</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
    </mt-navbar>
    <div class="bottom-box">
      <p class="btn-chat">聊天</p>
      <p class="btn-phone">电话</p>
      <p class="btn-book">预定</p>
    </div>
  </div>
</template>
<script>
import UserHomeImg from 'img/userHome.jpg'
import UserCard from 'components/Servies/src/UserCard'

export default {
  name: '',
  data () {
    return {
      selected: '',
      serviesImg: UserHomeImg
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  components: {
    UserCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.head-box {
  position: relative;
  width: 100%;
  height: 800px;
  .btn-back {
    position: absolute;
    left: 30px;
    top: 20px;
    font-size: 100px;
    color: $color-neutral-disabled;
  }
}
.info {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  background: white;
  .info-left {
    .title {
      margin: 20px 0;
      font-size: 70px;
    }
    .views, .likes {
      margin: 20px 0;
      color: $grey-text;
      font-size: 40px;
    }
  }
  .info-right.price {
    font-size: 60px;
  }
}
.bottom-box {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  background: white;
  .btn-book {
    width: 60%;
    text-align: center;
    font-size: 60px;
    padding: 40px 0;
    color: white;
    background: #ff7a7a;
  }
  .btn-chat, .btn-phone {
    padding: 40px 0;
    text-align: center;
    border: 1px solid $color-neutral-border;
    width: 20%;
  }
}
</style>
