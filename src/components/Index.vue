<template>
  <div class="content">
    <search-box></search-box>
    <carousel-v></carousel-v>
  </div>
</template>

<script>
import CarouselV from 'base/CarouselV'
import SearchBox from 'base/SearchBox'

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    CarouselV,
    SearchBox,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
.content {
  position: relative;
}
</style>
