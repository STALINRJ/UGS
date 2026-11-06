import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import { products, categories, type Product } from '../data/products';

export default function Products() {
  const [active, setActive] = useState('ALL');
  const [group, setGroup] = useState('ALL');
  const filtered = active === 'ALL' ? products : products.filter((p) => p.cat === active && (group === 'ALL' || p.group === group));
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const filter = (e as CustomEvent<string>).detail;
      setActive(filter);
      setGroup('ALL');
    };
    window.addEventListener('set-product-filter', handler);
    return () => window.removeEventListener('set-product-filter', handler);
  }, []);

  const openProduct = (p: Product) => {
    window.dispatchEvent(new CustomEvent('open-product', { detail: p.title }));
  };

  return (
    <section ref={sectionRef} id="products" className="bg-brand-warm py-16 md:py-24 px-5 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-brand-red" />
              <span className="text-brand-red text-[11px] font-bold tracking-[0.3em] uppercase">
                OUR PRODUCTS
              </span>
            </div>
            <h2 className="font-display text-[#1a1a1a] text-[56px] md:text-[72px] leading-[0.95]">
              EXPLORE OUR <span className="text-brand-red">RANGE</span>
            </h2>
          </div>
          <p className="text-gray-500 text-[14px] max-w-[380px] leading-[1.7]">
            From precision spare parts to high-end offset printing machines, we offer everything your press room needs.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              aria-pressed={active === cat}
              onClick={() => { setActive(cat); setGroup('ALL'); }}
              className={`text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-3 border transition-all duration-300 ease-engineered ${
                active === cat
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {active === 'CTP' && <div className="flex flex-wrap gap-3 mb-6" aria-label="CTP equipment groups">{['ALL', 'New CRON', 'Pre-owned equipment'].map(value => <button key={value} aria-pressed={group === value} onClick={() => setGroup(value)} className={`px-4 py-3 font-display text-[18px] leading-none uppercase border ${group === value ? 'border-brand-red text-brand-red bg-white' : 'border-gray-300 text-gray-600'}`}>{value === 'ALL' ? 'All CTP equipment' : value}</button>)}</div>}

        <p role="status" className="text-sm text-gray-600 mb-5">{filtered.length} products · {active === "ALL" ? "All categories" : active.toLowerCase()}</p>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <button type="button" aria-label={`View ${p.title}`}
              key={p.title}
              onClick={() => openProduct(p)}
              className="text-left border border-black/5 bg-white overflow-hidden group cursor-pointer card-lift hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  loading="lazy" decoding="async" src={p.img}
                  alt={p.title}
                  className="w-full h-full object-contain p-5 pt-14 img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 bg-brand-warm/95 border border-black/10 text-gray-700 font-display text-[17px] uppercase leading-none px-3 py-2">
                  {p.tag}
                </span>

              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[#1a1a1a] text-[22px] leading-[1.15] tracking-wide">{p.title}</h3>
                  <ArrowRight size={16} className="text-brand-red shrink-0 mt-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
