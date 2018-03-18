<template>
  <transition name="slide-dialog">
    <div class="slider-dialog__container" @mousedown.self="close()">
      <div class="slider-dialog__body" :class="size">
        <slot>
        </slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    size: {
      type: String
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.slider-dialog__container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 99;
  transition: background-color .3s ease-out;
}
.slider-dialog__body {
  position: absolute;
  overflow-y: scroll;
  // overflow-y: hidden;
  box-sizing: border-box;
  width: 500px;
  height: 100%;
  background-color: #fff;
  right: 0px;
  top: 0;
  transition: all .3s ease-out;
  &.middle{
    width: 650px;
  }
}
.slide-dialog-enter, .slide-dialog-leave-active {
  .slider-dialog__body{
    right: -560px;
  }
  &.slider-dialog__container{
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
