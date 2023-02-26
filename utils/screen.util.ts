const mobileWidth = 576;
export const isMobile = (): boolean => {
  if (process.client) {
    const screenWidth = window?.innerWidth;
    return mobileWidth > screenWidth;
  }
  return false;
};
