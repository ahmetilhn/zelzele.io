<template>
  <main class="layout" vertical-center>
    <AppHeader />
    <div class="layout__content">
      <slot />
    </div>
    <BottomBar />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "~~/components/partials/app-header.vue";
import BottomBar from "~~/components/partials/bottom-bar.vue";
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  padding-bottom: 100px;
  @include small-device {
    padding-bottom: 60px;
  }
  &__content {
    width: 100%;
    max-width: $max-width-one;
  }
}
</style>
