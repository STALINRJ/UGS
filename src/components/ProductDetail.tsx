import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { products } from '../data/products';
import { requestEnquiry } from '../utils/enquiry';

interface Props { productTitle: string | null; onClose: () => void }

export default function ProductDetail({ productTitle, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const zoomClose = useRef<HTMLButtonElement>(null);
  const imageButton = useRef<HTMLButtonElement>(null);
  const product = products.find(p => p.title === productTitle);

  useEffect(() => {
    const el = dialog.current;
    if (!el || !productTitle) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    setActiveIndex(0); setZoomed(false); setZoom(1);
    el.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { el.close(); document.body.style.overflow = overflow; previousFocus?.focus({ preventScroll: true }); };
  }, [productTitle]);

  useEffect(() => { if (zoomed) zoomClose.current?.focus(); }, [zoomed]);
  if (!product) return null;
  const move = (delta: number) => setActiveIndex(i => (i + delta + product.gallery.length) % product.gallery.length);
  const closeZoom = () => { setZoomed(false); setZoom(1); requestAnimationFrame(() => imageButton.current?.focus()); };
  const enquire = () => { onClose(); requestAnimationFrame(() => requestEnquiry({ category: 'Product Enquiry', subject: product.title })); };
  const facts = [{ label: 'Category', value: product.cat }, ...(product.condition ? [{ label: 'Condition', value: product.condition }] : []), ...(product.group ? [{ label: 'Range', value: product.group }] : []), ...product.specs];

  return (
    <dialog ref={dialog} aria-labelledby={zoomed ? 'zoom-title' : 'product-title'} className="product-dialog surface-dark bg-brand-dark text-white" onCancel={e => { e.preventDefault(); if (zoomed) closeZoom(); else onClose(); }} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      {zoomed ? <div className="flex flex-col h-[min(820px,90dvh)]">
        <div className="flex flex-wrap gap-3 justify-between items-center p-4 border-b border-white/30 shrink-0"><h2 id="zoom-title" className="font-display text-2xl">{product.title} — PHOTO {activeIndex + 1}</h2><button ref={zoomClose} onClick={closeZoom} className="min-h-11 px-3 border border-white/50 flex gap-2 items-center"><X size={18} />Back to details</button></div>
        <div className="flex items-center gap-3 p-3 shrink-0"><button aria-label="Zoom out" disabled={zoom === 1} onClick={() => setZoom(z => Math.max(1, z - 1))} className="w-11 h-11 border border-white/50 grid place-items-center disabled:opacity-40"><ZoomOut size={20} /></button><span aria-live="polite">{zoom * 100}%</span><button aria-label="Zoom in" disabled={zoom === 3} onClick={() => setZoom(z => Math.min(3, z + 1))} className="w-11 h-11 border border-white/50 grid place-items-center disabled:opacity-40"><ZoomIn size={20} /></button><span className="text-sm text-gray-300">Scroll to inspect when enlarged.</span></div>
        <div className="overflow-auto flex-1 min-h-0 bg-white" tabIndex={0} aria-label="Enlarged product image"><div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}><img src={product.gallery[activeIndex]} alt={`${product.title} — enlarged photo ${activeIndex + 1}`} className="w-full h-full object-contain max-w-none" /></div></div>
      </div> : <div className="flex flex-col max-h-[inherit]">
        <div className="flex items-start justify-between gap-4 px-5 sm:px-8 py-5 border-b border-white/25 shrink-0"><div><p className="eyebrow mb-2">{product.cat}</p><h2 id="product-title" className="font-display text-[32px] sm:text-[42px] leading-none">{product.title}</h2></div><button autoFocus onClick={onClose} aria-label="Close product details" className="w-11 h-11 shrink-0 grid place-items-center border border-white/40 hover:bg-brand-red"><X size={20} /></button></div>
        <div className="overflow-y-auto overscroll-contain p-5 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 items-start">
            <div className="lg:order-2 min-w-0">
              <button ref={imageButton} aria-label={`Enlarge image of ${product.title}`} onClick={() => { setZoom(1); setZoomed(true); }} className="relative w-full aspect-[4/3] bg-white border border-white/25 overflow-hidden group"><img src={product.gallery[activeIndex]} alt={`${product.title} — photo ${activeIndex + 1}`} className="w-full h-full object-contain p-3" /><span className="absolute bottom-3 right-3 flex gap-2 items-center text-brand-dark bg-white border border-gray-400 px-3 py-2 text-sm font-semibold"><ZoomIn size={17} />Enlarge</span></button>
              {product.gallery.length > 1 && <><div className="flex items-center justify-between my-3"><button onClick={() => move(-1)} aria-label="Previous product image" className="w-11 h-11 border border-white/40 grid place-items-center hover:border-white"><ChevronLeft size={20} /></button><span aria-live="polite" className="text-gray-200 text-sm">Photo {activeIndex + 1} of {product.gallery.length}</span><button onClick={() => move(1)} aria-label="Next product image" className="w-11 h-11 border border-white/40 grid place-items-center hover:border-white"><ChevronRight size={20} /></button></div><div className="flex gap-2 overflow-x-auto py-1" aria-label="Product images">{product.gallery.map((src, i) => <button key={src} onClick={() => setActiveIndex(i)} aria-label={`Show image ${i + 1} of ${product.title}`} aria-pressed={i === activeIndex} className={`w-16 h-16 shrink-0 border-2 bg-white ${i === activeIndex ? 'border-brand-red' : 'border-white/50'}`}><img loading="lazy" src={src} alt="" className="w-full h-full object-contain p-1" /></button>)}</div></>}
            </div>
            <div className="lg:order-1 min-w-0">
              <dl className="border-y border-white/25 mb-6">{facts.map(s => <div key={s.label} className="flex justify-between gap-5 py-3 border-b last:border-0 border-white/15 text-sm"><dt className="text-gray-300">{s.label}</dt><dd className="text-white font-semibold text-right">{s.value}</dd></div>)}</dl>
              {product.specs.length > 0 && <p className="text-gray-200 leading-relaxed mb-5">{product.description}</p>}
              <h3 className="font-display text-2xl mb-3">LET’S CONFIRM THE RIGHT FIT</h3>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-4">Contact our team for this item’s specifications, compatibility and current availability.</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">For a useful enquiry, include your machine model, part reference or required format, and your location.</p>
              {product.features.length > 0 && <ul className="space-y-2 text-gray-200 mb-6">{product.features.map(f => <li key={f}>{f}</li>)}</ul>}
              {product.applications.length > 0 && <p className="text-gray-200 mb-6">Applications: {product.applications.join(', ')}</p>}
              <button onClick={enquire} className="primary-button hidden lg:inline-flex">ENQUIRE ABOUT THIS PRODUCT <ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
        <div className="lg:hidden p-4 border-t border-white/25 bg-brand-dark shrink-0"><button onClick={enquire} className="primary-button w-full">ENQUIRE ABOUT THIS PRODUCT <ArrowRight size={17} /></button></div>
      </div>}
    </dialog>
  );
}
