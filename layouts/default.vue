<template>
  <main class="layout" vertical-center>
    <AppHeader />
    <div class="layout__content">
      <slot />
    </div>
    <BottomBar />
    <Loader v-if="isLoading" />
    <a
      href="https://www.producthunt.com/posts/zelzele?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-zelzele"
      target="_blank"
      class="product-hunt-widget"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=382002&theme=neutral"
        alt="Zelzele - Earthquakes&#0032;in&#0032;Turkey&#0032;Tracking&#0032;and&#0032;Analysis&#0032;Tool | Product Hunt"
        style="width: 150px"
    /></a>
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
  .product-hunt-widget {
    position: fixed;
    left: 10px;
    bottom: 10px;
    @include small-device {
      display: none;
    }
  }
}
</style>
