import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown, Check, ArrowRight, X } from 'lucide-react';
import { products, type Product } from '../data/products';

interface Props {
  productTitle: string | null;
  onClose: () => void;
}

const AUTO_PLAY_MS = 5000;
const INACTIVITY_MS = 4000;
const EXIT_MS = 450;

export default function ProductDetail({ productTitle, onClose }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [displayProduct, setDisplayProduct] = useState<Product | undefined>(undefined);
  const lastInteractionRef = useRef<number>(0);
  const touchStartX = useRef<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const isOpen = !!productTitle;

  // Cache product so it persists during exit animation
  useEffect(() => {
    if (productTitle) {
      const p = products.find((pd) => pd.title === productTitle);
      setDisplayProduct(p);
    }
  }, [productTitle]);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    } else {
      setVisible(false);
      closeTimerRef.current = setTimeout(() => {
        setMounted(false);
        setDisplayProduct(undefined);
      }, EXIT_MS);
    }
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
    setIsPaused(false);
  }, [productTitle]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    const originalPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = original;
      document.body.style.paddingRight = originalPadding;
    };
  }, [isOpen]);

  const product = displayProduct;

  const next = useCallback(() => {
    if (!product) return;
    setActiveIndex((i) => (i + 1) % product.gallery.length);
  }, [product]);

  const prev = useCallback(() => {
    if (!product) return;
    setActiveIndex((i) => (i - 1 + product.gallery.length) % product.gallery.length);
  }, [product]);

  useEffect(() => {
    if (!product || isPaused) return;
    const id = setInterval(() => {
      if (Date.now() - lastInteractionRef.current > INACTIVITY_MS) {
        next();
      }
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [product, isPaused, next]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, next, prev]);

  const handleInteraction = () => {
    lastInteractionRef.current = Date.now();
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), INACTIVITY_MS);
  };

  const handleEnquire = () => {
    onClose();
    window.dispatchEvent(
      new CustomEvent('prefill-contact', {
        detail: { category: 'Product Enquiry', product: product?.title || '' },
      })
    );
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, EXIT_MS + 50);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || !product) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touchStartX.current = null;
  };

  const navigate = (direction: 'up' | 'down') => {
    if (direction === 'up') prev();
    else next();
    handleInteraction();
  };

  if (!mounted || !product) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-[450ms] ease-engineered ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-[450ms] ease-engineered ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Panel wrapper — clicking outside the panel closes */}
      <div
        className="absolute inset-0 flex items-start md:items-center justify-center p-0 md:p-6 lg:p-10"
        onClick={onClose}
      >
        <div
          className={`relative w-full max-w-[1400px] max-h-full md:max-h-[92vh] bg-brand-dark overflow-y-auto transition-all duration-[450ms] ease-engineered ${
            visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-[0.98] opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close — minimal circular icon, top-left */}
          <button
            onClick={onClose}
            className="absolute top-5 left-5 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-black/30 text-gray-400 hover:text-white hover:border-brand-red hover:bg-brand-red/20 backdrop-blur-sm transition-all duration-300 ease-engineered group/close"
            aria-label="Close"
          >
            <X size={16} className="group-hover/close:rotate-90 transition-transform duration-300 ease-engineered" />
          </button>

          {/* Two-column layout — same bg, tight gap */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] lg:gap-1">
            {/* LEFT — Product info (scrolls) */}
            <div className="order-2 lg:order-1 p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[1px] bg-brand-red" />
                <span className="text-brand-red text-[11px] font-bold tracking-[0.3em] uppercase">
                  {product.cat}
                </span>
              </div>

              <h1 className="font-display text-white text-[40px] md:text-[52px] leading-[0.95] mb-4">
                {product.title}
              </h1>

              {product.condition && (
                <span
                  className={`inline-block text-[10px] font-bold tracking-[0.18em] px-3 py-1.5 mb-6 ${
                    product.condition === 'Brand New'
                      ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                      : 'bg-amber-600/20 text-amber-400 border border-amber-600/30'
                  }`}
                >
                  {product.condition.toUpperCase()}
                </span>
              )}

              <p className="text-gray-400 text-[14px] leading-[1.8] mb-8">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/[0.06]">
                  {product.specs.map((s) => (
                    <div key={s.label} className="bg-brand-charcoal px-4 py-3">
                      <div className="text-gray-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-1">
                        {s.label}
                      </div>
                      <div className="text-white text-[13px] font-medium">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} className="text-brand-red mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-[13px] leading-[1.6]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-10">
                <h3 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span
                      key={a}
                      className="text-gray-300 text-[12px] px-3 py-2 bg-white/5 border border-white/10"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleEnquire}
                className="flex items-center gap-2 bg-brand-red hover:bg-[#c40510] text-white text-[12px] font-bold tracking-[0.18em] uppercase px-8 py-4 transition-all duration-300 ease-engineered group"
              >
                ENQUIRE WITH US
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* RIGHT — Gallery (sticky, stays fixed while left scrolls) */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-0 lg:h-[92vh] bg-brand-dark p-2 md:p-3 lg:p-4 flex items-start lg:items-center">
              <div className="flex flex-row gap-2 w-full">
                {/* Main preview — large */}
                <div
                  className="relative flex-1 overflow-hidden bg-brand-dark aspect-[4/3]"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {product.gallery.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${product.title} — view ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-engineered ${
                        i === activeIndex
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}

                  {/* Subtle bottom gradient for counter legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Counter — minimal, bottom-right */}
                  <div className="absolute bottom-3 right-3 text-white/80 text-[11px] font-bold tracking-[0.15em]">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(product.gallery.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Thumbnail strip — compact, up/down arrows navigate images, no scrollbar */}
                <div className="flex flex-col items-center gap-2 shrink-0 w-12 md:w-14">
                  <button
                    onClick={() => navigate('up')}
                    className="w-full h-8 flex items-center justify-center text-gray-500 hover:text-brand-red transition-colors duration-300"
                    aria-label="Previous image"
                  >
                    <ChevronUp size={20} />
                  </button>

                  <div
                    ref={thumbStripRef}
                    className="flex flex-col gap-2 overflow-y-hidden flex-1"
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {product.gallery.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveIndex(i);
                          handleInteraction();
                        }}
                        className={`relative shrink-0 w-full aspect-square overflow-hidden border-2 transition-all duration-300 ease-engineered ${
                          i === activeIndex
                            ? 'border-brand-red opacity-100'
                            : 'border-transparent opacity-45 hover:opacity-75'
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('down')}
                    className="w-full h-8 flex items-center justify-center text-gray-500 hover:text-brand-red transition-colors duration-300"
                    aria-label="Next image"
                  >
                    <ChevronDown size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
