<template>
  <header class="header" vertical-center>
    <div class="header__content" horizontal-center>
      <div class="site-info" horizontal-center>
        <NuxtLink to="/">
          <img
            src="../../assets/svg/logo.svg"
            title="zelzele.io logo"
            alt="zelzele.io"
          />
        </NuxtLink>
        <a
          href="https://github.com/ahmetilhan24/zelzele.io"
          target="_blank"
          class="opensource"
          vertical-center
        >
          <img
            src="../../assets/svg/opensource.svg"
            alt="Open source project"
            title="Bu proje açık kaynaktır"
          />
        </a>
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
      position: relative;
      a {
        height: 40px;
        width: 40px;
        @include small-device {
          width: 32px;
          height: 32px;
        }
        &.opensource {
          background-color: $white;
          border-radius: 50%;
          border: 1px solid $gray-two;
          width: 20px;
          height: 20px;
          position: absolute;
          right: -5px;
          top: -5px;
          @include small-device {
            width: 16px;
            height: 16px;
            right: -2px;
            top: -2px;
          }
        }
        img {
          width: 100%;
          height: 100%;
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
