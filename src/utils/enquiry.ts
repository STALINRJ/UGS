import { navigateTo } from './navigation';

export interface EnquiryContext { category: string; subject: string }

export function requestEnquiry(context?: EnquiryContext) {
  if (context) window.dispatchEvent(new CustomEvent('enquiry-context', { detail: context }));
  navigateTo(window.matchMedia('(max-width: 1023px)').matches ? '#enquiry-form' : '#contact');
  requestAnimationFrame(() => document.getElementById('contact-name')?.focus({ preventScroll: true }));
}

export function browseCategory(category: string) {
  window.dispatchEvent(new CustomEvent('set-product-filter', { detail: category }));
  navigateTo('#products');
}
