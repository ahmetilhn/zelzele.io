export default defineNuxtPlugin((nuxtApp) => {
  const inject = (w: Window, d: Document, s: string, l: string, i: string) => {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j: HTMLScriptElement = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  };
  inject(window, document, "script", "dataLayer", "GTM-5PRLP9S");
  nuxtApp.$gtm = gtmUtil;
});
