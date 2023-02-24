<template>
  <header class="header" vertical-center>
    <div class="header__content" horizontal-center>
      <div class="site-name">
        <span>zelzele.io</span>
      </div>
      <div class="date">
        <span>{{ $dayjs().format("MMMM D, YYYY") }}</span>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const { $dayjs } = useNuxtApp();
</script>
<style lang="scss" scoped>
.header {
  width: 100vw;
  padding: 10px;
  border-bottom: 2px solid $gray-one;
  &__content {
    width: 100%;
    max-width: $max-width-one;
    justify-content: space-between;
  }
}
</style>
