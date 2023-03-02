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
      </div>
      <div class="opensource">
        <a
          href="https://github.com/ahmetilhan24/zelzele.io"
          target="_blank"
          vertical-center
        >
          <img
            src="../../assets/svg/github.svg"
            alt="Open source project"
            title="Bu proje açık kaynaktır"
          />
        </a>
      </div>
    </div>
  </header>
</template>
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
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .opensource {
      a {
        background-color: $white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        @include small-device {
          width: 26px;
          height: 26px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
