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
@import "src/common/sass/variable.sass";

.content {
  position: relative;
  .barHeight {
    margin-bottom: $tar-bar-height;
  }
}
</style>
