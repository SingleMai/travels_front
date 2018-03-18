<template>
  <div class="content">
    <router-view class="barHeight"></router-view>
    <tar-bar :v-show="getShowBar"></tar-bar>
  </div>
</template>

<script>
import TarBar from 'base/TarBar'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getShowBar'
    ])
  },
  components: {
    TarBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
<<<<<<< HEAD
@import "src/common/sass/variable.sass";

.content {
  position: relative;
  .barHeight {
    margin-bottom: $tar-bar-height;
  }
=======
$menuWidth: 250px;
.menu-box {
  position: fixed;
  top: 0;
  left: 0;
  width: $menuWidth;
  height: 100vh;
  overflow: scroll;
}
.header {
  display: flex;
  justify-content: flex-end;
  margin-left: $menuWidth;
  background: white;
  box-shadow:0px 1px 6px #828282;
  .name, .permission, .btn-out {
    padding: 15px 5px;
  }
  .btn-out {
    color: #409EFF;
    cursor: pointer;
  }
}
.content {
  margin-left: $menuWidth;
  box-sizing: border-box;
  padding: 20px;
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
}
</style>
