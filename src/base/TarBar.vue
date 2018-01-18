<template>
  <ul class="tar-bar-list">
    <li class="tar-bar-item"
        v-for="(item, index) in barOptions"
        :key="index"
        @click="routeTo(item, index)"
        :class="{ on: currentIndex === index }"
    >
      <i :class="['img', item.img]"></i>
      <p class="item-title">{{ item.text }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      barOptions: [
        {
          img: 'el-icon-menu',
          text: '首页',
          src: '/',
        }, {
          img: 'el-icon-share',
          text: '旅途',
          src: '/',
        }, {
          img: 'el-icon-plus',
          text: '添加',
          src: '/',
        }, {
          img: 'el-icon-edit',
          text: '留言',
          src: '/',
        }, {
          img: 'el-icon-service',
          text: '我',
          src: '/',
        },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    routeTo (item, index) {
      console.log(item)
      this.currentIndex = index
    },
  },
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$grey-text: #919191;
.tar-bar-list {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 250px;
  background: white;
  border-top: 1px solid $grey-text;
  .tar-bar-item {
    flex: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $grey-text;
    .img {
      font-size: 150px;
      margin-bottom: 20px;
    }
    .item-title {
      font-size: 50px;
    }
  }
  .on {
    color: #409EFF;
  }
}
</style>
