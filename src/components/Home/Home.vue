<template>
  <div>
    <search-box></search-box>
    <carousel-v></carousel-v>
    <div class="barBlock">
      <p class="head">
        <i class="el-icon-picture"></i>
        当地人带你玩
      </p>
      <bar-slide></bar-slide>
      <p class="head">
        <i class="el-icon-goods"></i>
        当地人代购
      </p>
      <bar-slide></bar-slide>
    </div>
    <div class="playing-recommend">
      <block-title title="玩法推荐" subTitle="精选推荐好玩的景区、去处"></block-title>
      <user-card v-for="item in 2" :key="item"></user-card>
    </div>
    <div class="playing-recommend">
      <block-title title="人气推荐" subTitle="用心推荐、优质体验"></block-title>
      <server-card></server-card>
    </div>
  </div>
</template>
<script>
import CarouselV from 'base/CarouselV'
import SearchBox from 'base/SearchBox'
import BarSlide from 'base/BarSlide'
import BlockTitle from 'base/BlockTitle'
import UserCard from 'base/UserCard'
import ServerCard from 'base/ServerCard'

export default {
  name: '',
  data () {
    return {}
  },
  components: {
    CarouselV,
    SearchBox,
    BarSlide,
    BlockTitle,
    UserCard,
    ServerCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.barBlock {
  background: $color-block-background;
  padding: 10px 0 50px;
  .head {
    padding: 50px 50px 20px;
    font-size: 55px;
    color: #faa58c;
  }
}
.playing-recommend {
  margin: 80px 0;
  padding: 50px 0;
  width: 100%;
  background: $color-block-background;
}
</style>
