const mobileWidth = 750;
export const isMobile = (): boolean => {
  if (process.client) {
    const screenWidth = window?.innerWidth;
    return mobileWidth < screenWidth;
  }
  return false;
};
