<template>
  <main class="layout" vertical-center>
    <AppHeader />
    <div class="layout__content">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "~~/components/partials/app-header.vue";
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  &__content {
    width: 100%;
    max-width: $max-width-one;
  }
}
</style>
