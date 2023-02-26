<template>
  <div class="bg-overlay" @click="outsideClick">
    <div class="bg-overlay__content" vertical-center>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(["outsideClick"]);
const outsideClick = (e: Event) => {
  if (e.target.className === "bg-overlay__content") emit("outsideClick");
};
</script>
<style lang="scss" scoped>
.bg-overlay {
  width: 100vw;
  height: calc(
    100% - env(safe-area-inset-bottom)
  ); // for ios 11+ versions and all browsers
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #00000034;
  backdrop-filter: blur(3px);
  &__content {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
