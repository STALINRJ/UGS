export function navigateTo(href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  if (window.location.hash !== href) window.history.pushState(null, '', href);
  target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
