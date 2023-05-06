<template>
  <div class="bottom-bar">
    <div class="bottom-bar__items" horizontal-center>
      <div
        :class="{
          item: true,
          'item--active': activeMenu === menuConstants.MAP.path,
        }"
        horizontal-center
        @click="click(menuConstants.MAP)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            opacity="0.2"
            d="M19.8796 20.9401C18.9296 21.6401 17.6796 22.0001 16.1896 22.0001H7.8096C7.5696 22.0001 7.32961 21.9901 7.09961 21.9601L13.9996 15.0601L19.8796 20.9401Z"
            fill="#273251"
          />
          <path
            opacity="0.2"
            d="M22.0005 7.8101V16.1901C22.0005 17.6801 21.6406 18.9301 20.9406 19.8801L15.0605 14.0001L21.9605 7.1001C21.9905 7.3301 22.0005 7.5701 22.0005 7.8101Z"
            fill="#273251"
          />
          <path
            opacity="0.2"
            d="M15.06 14L20.94 19.88C20.65 20.3 20.3 20.65 19.88 20.94L14 15.06L7.10001 21.96C6.46001 21.92 5.88001 21.79 5.35001 21.59C3.21001 20.81 2 18.91 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.91 2 20.81 3.21 21.59 5.35C21.79 5.88 21.92 6.46 21.96 7.1L15.06 14Z"
            fill="#273251"
          />
          <path
            d="M15.0596 14.0001L20.9396 19.8801C20.6496 20.3001 20.2996 20.6501 19.8796 20.9401L13.9996 15.0601L7.09961 21.9601C6.45961 21.9201 5.87961 21.7901 5.34961 21.5901L5.73959 21.2001L21.5896 5.3501C21.7896 5.8801 21.9196 6.4601 21.9596 7.1001L15.0596 14.0001Z"
            fill="#273251"
          />
          <path
            d="M12.2408 7.92979C11.8608 6.27979 10.4008 5.53979 9.12078 5.52979C7.84078 5.52979 6.38079 6.26978 6.00079 7.91978C5.58079 9.74978 6.70078 11.2798 7.71078 12.2398C8.11078 12.6198 8.61078 12.7998 9.12078 12.7998C9.63078 12.7998 10.1308 12.6098 10.5308 12.2398C11.5408 11.2798 12.6608 9.74979 12.2408 7.92979ZM9.15078 9.48978C8.60078 9.48978 8.15078 9.03978 8.15078 8.48978C8.15078 7.93978 8.59078 7.48978 9.15078 7.48978H9.16079C9.71079 7.48978 10.1608 7.93978 10.1608 8.48978C10.1608 9.03978 9.70078 9.48978 9.15078 9.48978Z"
            fill="#273251"
          />
        </svg>
        <span class="item__label">Harita</span>
      </div>
      <div
        :class="{
          item: true,
          center: true,
          'item--active': activeMenu === menuConstants.LISTING.path,
        }"
        horizontal-center
        @click="click(menuConstants.LISTING)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            opacity="0.2"
            d="M8.55906 3.33984V17.6698C8.21906 17.6798 7.87906 17.7598 7.62906 17.9098L5.27906 19.2498C3.63906 20.1898 2.28906 19.4098 2.28906 17.5098V7.77984C2.28906 7.14984 2.73906 6.36984 3.29906 6.04984L7.62906 3.56984C7.87906 3.42984 8.21906 3.34984 8.55906 3.33984Z"
            fill="#273251"
          />
          <path
            d="M15.7305 6.32994V20.6599C15.3805 20.6699 15.0405 20.6099 14.7705 20.4799L9.52055 17.8499C9.25055 17.7199 8.91055 17.6599 8.56055 17.6699V3.33994C8.91055 3.32994 9.25055 3.38994 9.52055 3.51994L14.7705 6.14994C15.0405 6.27994 15.3805 6.33994 15.7305 6.32994Z"
            fill="#273251"
          />
          <path
            opacity="0.2"
            d="M22.0005 6.49006V16.2201C22.0005 16.8501 21.5505 17.6301 20.9905 17.9501L16.6605 20.4301C16.4105 20.5701 16.0705 20.6501 15.7305 20.6601V6.33006C16.0705 6.32006 16.4105 6.24006 16.6605 6.09006L19.0105 4.75006C20.6505 3.81006 22.0005 4.59006 22.0005 6.49006Z"
            fill="#273251"
          />
        </svg>
      </div>
      <div
        :class="{
          item: true,
          'item--active': activeMenu === menuConstants.INFO.path,
        }"
        horizontal-center
        @click="click(menuConstants.INFO)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            opacity="0.2"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#273251"
          />
          <path
            d="M12 13.75C12.41 13.75 12.75 13.41 12.75 13V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V13C11.25 13.41 11.59 13.75 12 13.75Z"
            fill="#273251"
          />
          <path
            d="M12.92 15.6199C12.87 15.4999 12.8 15.3899 12.71 15.2899C12.61 15.1999 12.5 15.1299 12.38 15.0799C12.14 14.9799 11.86 14.9799 11.62 15.0799C11.5 15.1299 11.39 15.1999 11.29 15.2899C11.2 15.3899 11.13 15.4999 11.08 15.6199C11.03 15.7399 11 15.8699 11 15.9999C11 16.1299 11.03 16.2599 11.08 16.3799C11.13 16.5099 11.2 16.6099 11.29 16.7099C11.39 16.7999 11.5 16.8699 11.62 16.9199C11.74 16.9699 11.87 16.9999 12 16.9999C12.13 16.9999 12.26 16.9699 12.38 16.9199C12.5 16.8699 12.61 16.7999 12.71 16.7099C12.8 16.6099 12.87 16.5099 12.92 16.3799C12.97 16.2599 13 16.1299 13 15.9999C13 15.8699 12.97 15.7399 12.92 15.6199Z"
            fill="#273251"
          />
        </svg>
        <span class="item__label">Bilgi</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import menuConstants from "~~/constants/menu.constants";
type MenuType = {
  label: string;
  val: string;
  path: string;
};
const router = useRouter();
const route = useRoute();
const { $gtm } = useNuxtApp();
const activeMenu = computed(() => {
  return route.path;
});
const click = (menu: MenuType) => {
  router.push(menu.path);
  $gtm.pushUIEvent({
    eventCategory: "Bottom Bar - Click",
    eventAction: menu.path,
    eventLabel: route.path,
  });
};
</script>
<style lang="scss" scoped>
@keyframes bottomToTop {
  to {
    transform: translateY(0);
  }
}
.bottom-bar {
  width: 100vw;
  background-color: $white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  height: calc(50px + env(safe-area-inset-bottom));
  box-shadow: 0px -10px 40px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid $gray-three;
  border-bottom: none;
  @include small-device {
    transform: translateY(100px);
    animation: bottomToTop 0.3s ease-out forwards;
    animation-delay: 0.6s;
  }
  @include min-small-device {
    left: 50%;
    transform: translate(-50%);
    bottom: 30px;
    border-radius: 40px;
    border: 1px solid $dark;
    width: 500px;
  }
  &__items {
    width: 100%;
    height: 100%;
    justify-content: space-around;
    .item {
      height: 40px;
      width: calc(40% - 40px);
      border-radius: 20px;
      cursor: pointer;
      svg {
        width: 30px;
      }
      &__label {
        font-size: 14px;
        margin-left: 5px;
        font-weight: bold;
      }
      &--active {
        background-color: #e8e8e8;
      }
      &.center {
        width: 60px;
        height: 60px;
        background-color: $white;
        border: 2px solid $gray-three;
        position: relative;
        transform: translateY(-10px);
        border-radius: 50%;
        transition: transform 0.2s;
        box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.1);
        @include min-small-device {
          transform: translateY(0);
          width: 64px;
          height: 64px;
          border-color: $dark;
        }
        &.item--active {
          transform: translateY(-12px);
        }
      }
    }
  }
}
</style>
