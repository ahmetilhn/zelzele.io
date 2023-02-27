<template>
  <main class="layout" vertical-center>
    <AppHeader />
    <div class="layout__content">
      <slot />
    </div>
    <BottomBar />
    <Loader v-if="isLoading" />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "~~/components/partials/app-header.vue";
import BottomBar from "~~/components/partials/bottom-bar.vue";
import Loader from "~~/components/loader.vue";
const isLoading = ref(false);
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => {
  isLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isLoading.value = false;
});
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  padding-bottom: 120px;
  @include small-device {
    padding-bottom: 90px;
  }
  &__content {
    width: 100%;
    max-width: $max-width-one;
  }
}
</style>
