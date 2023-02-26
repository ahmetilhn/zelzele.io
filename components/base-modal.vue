<template>
  <BGOverlay>
    <div :class="{ modal: true, 'modal--mobile': isMobile }">
      <header class="modal__header" horizontal-center>
        <h2 class="title">{{ title }}</h2>
        <div class="close">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#0F1729"
            />
          </svg>
        </div>
      </header>
      <main class="modal__content">
        <slot />
      </main>
    </div>
  </BGOverlay>
</template>

<script lang="ts" setup>
import BGOverlay from "./bg-overlay.vue";

type Props = {
  title: string;
};
const { title } = defineProps<Props>();
const mobileWidth = 750;
const isMobile = computed(() => {
  const screenWidth = window?.innerWidth;
  return mobileWidth < screenWidth;
});
</script>

<style lang="scss" scoped>
.modal {
  width: 500px;
  height: fit-content;
  padding: 20px;
  background-color: $white;
  border-radius: 10px;
  &__header {
    width: 100%;
    justify-content: space-between;
    .title {
      font-size: 18px;
      color: $dark;
      font-weight: bold;
    }
    .close {
      width: 24px;
      height: 24px;
      cursor: pointer;
      svg {
        object-fit: cover;
      }
    }
  }
}
</style>
