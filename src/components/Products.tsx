import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Search, X, Images } from 'lucide-react';
import { products, categories, type Product } from '../data/products';

const categoryName = (cat: string) => cat === 'ALL' ? 'All categories' : ({ CTP: 'CTP equipment', PROCESSOR: 'Processors', CONSUMABLES: 'Consumables', SOFTWARE: 'Software', 'SPARE PARTS': 'Spare parts' }[cat] || cat);

export default function Products() {
  const [active, setActive] = useState('ALL');
  const [group, setGroup] = useState('ALL');
  const [query, setQuery] = useState('');
  const [pageSize, setPageSize] = useState(() => window.matchMedia('(min-width: 640px)').matches ? 8 : 4);
  const [limit, setLimit] = useState(pageSize);
  const toolbar = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const normalized = query.trim().toLowerCase();
  const filtered = products.filter(p => (active === 'ALL' || p.cat === active) && (group === 'ALL' || p.group === group) && (!normalized || [p.title, p.cat, p.group, p.condition, ...p.specs.map(s => s.value)].join(' ').toLowerCase().includes(normalized)));
  const visible = filtered.slice(0, limit);

  const changeCategory = (cat: string) => { setActive(cat); setGroup('ALL'); setLimit(pageSize); };
  const clear = () => { setActive('ALL'); setGroup('ALL'); setQuery(''); setLimit(pageSize); };
  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');
    const resize = (event: MediaQueryListEvent) => { const size = event.matches ? 8 : 4; setPageSize(size); setLimit(size); };
    media.addEventListener('change', resize);
    return () => media.removeEventListener('change', resize);
  }, []);
  useEffect(() => {
    const handler = (e: Event) => {
      const value = (e as CustomEvent<string>).detail;
      if (!categories.includes(value)) return;
      setActive(value); setGroup('ALL'); setQuery(''); setLimit(pageSize);
    };
    window.addEventListener('set-product-filter', handler);
    return () => window.removeEventListener('set-product-filter', handler);
  }, [pageSize]);

  const openProduct = (p: Product) => window.dispatchEvent(new CustomEvent('open-product', { detail: p.title }));
  const loadMore = () => {
    const previous = visible.length;
    setLimit(previous => previous + pageSize);
    requestAnimationFrame(() => (grid.current?.children[previous] as HTMLButtonElement | undefined)?.focus({ preventScroll: true }));
  };

  return (
    <section id="products" className="bg-brand-warm section-space">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-10">
          <div><p className="eyebrow mb-4">OUR PRODUCTS</p><h2 className="font-display text-brand-dark text-[48px] sm:text-[64px] lg:text-[72px] leading-none">EXPLORE OUR <span className="text-brand-red">RANGE</span></h2></div>
          <p className="text-[#555d68] text-[15px] max-w-[400px] leading-relaxed">Find equipment, supplies and replacement parts. Search by product name, model or part number.</p>
        </div>
        <div ref={toolbar} className="catalogue-toolbar sticky top-[80px] lg:top-[96px] z-20 bg-brand-warm/95 backdrop-blur-md border-y border-black/20 py-3 sm:py-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <div className="relative flex-1 min-w-0">
              <Search size={18} className="absolute left-4 top-3.5 text-gray-600 pointer-events-none" />
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <input id="product-search" type="search" value={query} onChange={e => { setQuery(e.target.value); setLimit(pageSize); }} placeholder="Search products, models, part numbers…" className="w-full h-12 pl-11 pr-11 bg-white border border-gray-400 text-base text-brand-dark placeholder:text-gray-600" />
              {query && <button onClick={() => { setQuery(''); setLimit(pageSize); }} aria-label="Clear product search" className="absolute right-0 top-0 w-11 h-12 grid place-items-center text-gray-700"><X size={18} /></button>}
            </div>
            <div className="lg:hidden flex gap-2"><label htmlFor="product-category" className="sr-only">Product category</label><select id="product-category" value={active} onChange={e => changeCategory(e.target.value)} className="w-full min-w-0 flex-1 bg-white border border-gray-400 h-11 px-3 text-sm text-brand-dark">{categories.map(cat => <option key={cat} value={cat}>{categoryName(cat)}</option>)}</select>{active === 'CTP' && <><label htmlFor="ctp-group" className="sr-only">CTP equipment group</label><select id="ctp-group" value={group} onChange={e => { setGroup(e.target.value); setLimit(pageSize); }} className="w-full min-w-0 flex-1 bg-white border border-gray-400 h-11 px-3 text-sm text-brand-dark"><option value="ALL">All CTP</option><option value="New CRON">New CRON</option><option value="Pre-owned equipment">Pre-owned</option></select></>}</div>
            <div className="hidden lg:flex flex-wrap gap-1.5" aria-label="Product categories">{categories.map(cat => <button key={cat} aria-pressed={active === cat} onClick={() => changeCategory(cat)} className={`min-h-11 px-3 xl:px-4 text-xs font-bold tracking-wide border transition-colors ${active === cat ? 'bg-brand-dark border-brand-dark text-white' : 'bg-white text-gray-700 border-gray-300 hover:border-brand-dark'}`}>{cat}</button>)}</div>
          </div>
          {active === 'CTP' && <div className="hidden lg:flex flex-wrap gap-2 mt-3" aria-label="CTP equipment groups">{['ALL', 'New CRON', 'Pre-owned equipment'].map(value => <button key={value} aria-pressed={group === value} onClick={() => { setGroup(value); setLimit(pageSize); }} className={`px-3 py-2 min-h-11 font-display text-[18px] leading-none uppercase border ${group === value ? 'border-brand-red text-[#bc0712] bg-white' : 'border-gray-400 text-gray-700'}`}>{value === 'ALL' ? 'All CTP' : value}</button>)}</div>}
        </div>
        <div className="flex justify-between items-center gap-4 mb-5 text-sm text-[#555d68]">
          <p role="status">{filtered.length === 0 ? 'No products found' : `Showing ${visible.length} of ${filtered.length} products`} · {categoryName(active)}</p>
          {(query || active !== 'ALL') && <button onClick={clear} className="min-h-11 underline underline-offset-4 font-semibold shrink-0">Reset filters</button>}
        </div>
        <div ref={grid} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {visible.map(p => <button type="button" aria-label={`View ${p.title}`} key={p.title} onClick={() => openProduct(p)} className="text-left border border-black/15 bg-white overflow-hidden group card-lift flex flex-col">
            <div className="relative overflow-hidden aspect-[4/3] bg-[#fafafa] w-full">
              <img loading="lazy" decoding="async" src={p.img} alt={p.title} className="w-full h-full object-contain p-5 pt-14 img-zoom" />
              <span className="absolute top-3 left-3 bg-brand-warm border border-black/15 text-gray-700 font-display text-[17px] uppercase leading-none px-3 py-2">{p.tag}</span>
              {p.gallery.length > 1 && <span className="absolute bottom-3 right-3 bg-white border border-gray-300 px-2 py-1 flex gap-1.5 items-center text-xs font-semibold text-gray-700"><Images size={14} />{p.gallery.length} photos</span>}
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1 w-full"><h3 className="font-display text-brand-dark text-[24px] leading-[1.1]">{p.title}</h3><span className="mt-auto flex items-center justify-between text-sm font-semibold text-[#555d68]">View details <ArrowRight size={18} className="text-brand-red shrink-0 group-hover:translate-x-1 transition-transform" /></span></div>
          </button>)}
        </div>
        {filtered.length === 0 && <div className="border border-gray-300 bg-white text-center px-5 py-12"><h3 className="font-display text-3xl text-brand-dark mb-3">NO MATCH YET</h3><p className="text-[#555d68] mb-5">Try a shorter model name or another category. Our team can also help identify a part.</p><button className="min-h-11 px-5 border border-brand-dark text-brand-dark font-semibold" onClick={clear}>Clear search and filters</button></div>}
        {visible.length < filtered.length && <div className="text-center mt-8"><button onClick={loadMore} className="primary-button mx-auto">SHOW MORE PRODUCTS <ArrowRight size={17} /></button><p className="text-sm text-[#555d68] mt-3">{filtered.length - visible.length} more available in this selection</p></div>}
        <div className="flex justify-center mt-6"><button onClick={() => { toolbar.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); document.getElementById('product-search')?.focus({ preventScroll: true }); }} className="min-h-11 text-sm font-semibold underline underline-offset-4 text-gray-700">Back to search & filters</button></div>
      </div>
    </section>
  );
}
