export function isMobile(): boolean {
  if (typeof navigator === "undefined") return false; // SSR 대비

  const ua = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|mobile|blackberry|iemobile|opera mini/.test(ua);
}

export function isDesktop(): boolean {
  return !isMobile();
}