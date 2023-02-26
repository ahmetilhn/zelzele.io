<template>
  <div class="tooltip" vertical-center>
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.tooltip {
  background-color: $white;
  border: 1px solid $gray-two;
  border-radius: 4px;
  padding: 3px;
}
</style>
