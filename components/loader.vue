<template>
  <div class="loader" vertical-center>
    <div class="outer-circle">
      <div class="outer-circle__scanner"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
onMounted(() => {
  document.body.style.overflow = "hidden";
});
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>
<style lang="scss" scoped>
@keyframes scan {
  to {
    transform: rotate(1turn);
  }
}
.loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 99999;

  .outer-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px dashed $dark;
    position: relative;
    &__scanner {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      top: 4px;
      left: 4px;
      background: conic-gradient($gray-three, $dark);
      animation: scan 1.5s infinite linear;
    }
  }
}
</style>
