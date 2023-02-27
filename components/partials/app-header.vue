<template>
  <header class="header" vertical-center>
    <div class="header__content" horizontal-center>
      <div class="site-info">
        <NuxtLink to="/">
          <img
            src="../../assets/svg/logo.svg"
            title="zelzele.io logo"
            alt="zelzele.io"
          />
        </NuxtLink>
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
  width: 100%;
  padding: $padding-one;
  border-bottom: 1px solid $dark;
  @include small-device {
    padding: calc($padding-one / 3) $padding-one;
    border-color: $gray-three;
  }
  &__content {
    width: 100%;
    max-width: $max-width-one;
    justify-content: space-between;
    .site-info {
      display: flex;
      height: fit-content;
      img {
        width: 40px;
        @include small-device {
          width: 32px;
        }
      }
    }
    .date {
      font-size: 13px;
      font-weight: bold;
    }
  }
}
</style>
