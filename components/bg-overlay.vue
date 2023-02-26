<template>
  <div class="bg-overlay">
    <div class="bg-overlay__content" vertical-center>
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #00000034;
  backdrop-filter: blur(2px);
  &__content {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
