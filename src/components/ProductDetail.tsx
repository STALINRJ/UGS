import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowRight, X } from 'lucide-react';
import { products } from '../data/products';
import { navigateTo } from '../utils/navigation';

interface Props { productTitle: string | null; onClose: () => void }

export default function ProductDetail({ productTitle, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const product = products.find(p => p.title === productTitle);

  useEffect(() => {
    const el = dialog.current;
    if (!el || !productTitle) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    setActiveIndex(0);
    el.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      el.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [productTitle]);

  if (!product) return null;
  const move = (delta: number) => setActiveIndex(i => (i + delta + product.gallery.length) % product.gallery.length);
  const enquire = () => {
    window.dispatchEvent(new CustomEvent('prefill-contact', { detail: { category: 'Product Enquiry', product: product.title } }));
    onClose();
    requestAnimationFrame(() => {
      navigateTo('#contact');
      document.getElementById('contact-name')?.focus({ preventScroll: true });
    });
  };

  return (
    <dialog ref={dialog} aria-labelledby="product-title" className="product-dialog bg-brand-dark text-white"
      onCancel={e => { e.preventDefault(); onClose(); }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="flex flex-col max-h-[inherit]">
        <div className="flex items-center justify-between px-5 sm:px-8 py-3 border-b border-white/10 shrink-0">
          <span className="text-gray-400 text-xs tracking-[0.18em] font-bold">PRODUCT DETAILS</span>
          <button autoFocus onClick={onClose} aria-label="Close product details" className="w-11 h-11 grid place-items-center border border-white/20 hover:bg-brand-red hover:border-brand-red transition-colors"><X size={20} /></button>
        </div>
        <div className="overflow-y-auto overscroll-contain p-5 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-1 lg:order-2 lg:sticky lg:top-0 min-w-0">
              <div className="aspect-[4/3] bg-brand-charcoal border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={product.gallery[activeIndex]} alt={`${product.title} — view ${activeIndex + 1}`} className="w-full h-full object-contain" />
              </div>
              <div className="flex items-center justify-between mt-3 mb-4">
                <button onClick={() => move(-1)} aria-label="Previous product image" className="w-11 h-11 border border-white/20 grid place-items-center hover:border-brand-red"><ChevronLeft size={20} /></button>
                <span aria-live="polite" className="text-gray-300 text-sm">{activeIndex + 1} / {product.gallery.length}</span>
                <button onClick={() => move(1)} aria-label="Next product image" className="w-11 h-11 border border-white/20 grid place-items-center hover:border-brand-red"><ChevronRight size={20} /></button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Product images">
                {product.gallery.map((src, i) => <button key={src + i} onClick={() => setActiveIndex(i)} aria-label={`Show image ${i + 1} of ${product.title}`} aria-pressed={i === activeIndex} className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 ${i === activeIndex ? 'border-brand-red' : 'border-white/15 hover:border-white/50'}`}><img loading="lazy" src={src} alt="" className="w-full h-full object-cover" /></button>)}
              </div>
            </div>
            <div className="order-2 lg:order-1 min-w-0">
              <p className="text-brand-red text-xs font-bold tracking-[0.2em] mb-4">{product.cat}</p>
              <h2 id="product-title" className="font-display text-[40px] sm:text-[52px] leading-none mb-4">{product.title}</h2>
              {product.condition && <span className={`inline-block text-xs font-bold px-3 py-2 mb-5 border ${product.condition === 'Brand New' ? 'text-emerald-300 border-emerald-600/40 bg-emerald-600/10' : 'text-amber-300 border-amber-600/40 bg-amber-600/10'}`}>{product.condition}</span>}
              <p className="text-gray-300 text-[15px] leading-relaxed mb-6">{product.description}</p>
              <button onClick={enquire} className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-red hover:bg-[#c40510] px-6 py-4 text-xs font-bold tracking-widest mb-8">ENQUIRE ABOUT THIS PRODUCT <ArrowRight size={17} /></button>
              <h3 className="detail-heading">Specifications</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8">{product.specs.map(s => <div key={s.label} className="bg-brand-charcoal p-4"><dt className="text-gray-400 text-xs mb-1">{s.label}</dt><dd className="text-white text-sm font-medium">{s.value}</dd></div>)}</dl>
              <h3 className="detail-heading">Key features</h3>
              <ul className="space-y-3 mb-8">{product.features.map(f => <li key={f} className="flex gap-3 text-gray-300 text-sm leading-relaxed"><Check size={17} className="text-brand-red shrink-0 mt-1" />{f}</li>)}</ul>
              <h3 className="detail-heading">Applications</h3>
              <ul className="flex flex-wrap gap-2">{product.applications.map(a => <li key={a} className="bg-white/5 border border-white/10 px-3 py-2 text-sm text-gray-300">{a}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
