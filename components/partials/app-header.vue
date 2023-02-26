<template>
  <header class="header" vertical-center>
    <div class="header__content" horizontal-center>
      <div class="site-info">
        <img
          src="../../assets/svg/logo.svg"
          title="zelzele.io logo"
          alt="zelzele.io"
        />
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
    .site-info {
      display: flex;
      height: fit-content;
      img {
        width: 40px;
      }
    }
  }
}
</style>
