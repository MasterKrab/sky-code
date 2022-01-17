const getIsMobile = (): boolean =>
  window.matchMedia("(max-width: 768px)").matches;

export default getIsMobile;
