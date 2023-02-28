export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return;
  const nuxtApp = useNuxtApp();
  nuxtApp.$gtm.pushVirtualPageViewEvent(to.path);
});
