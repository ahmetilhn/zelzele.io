<template>
  <div class="bg-overlay" vertical-center>
    <slot />
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
}
</style>
