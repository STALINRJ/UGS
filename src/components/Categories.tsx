import { products } from '../data/products';
import { navigateTo } from '../utils/navigation';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const cats = [
  {
    num: '01',
    title: 'CTP',
    desc: 'New and pre-owned CTP equipment for your prepress workflow.',
    img: products[1].img,
    href: '#products',
    filter: 'CTP',
  },
  {
    num: '02',
    title: 'SPARE PARTS',
    desc: 'Replacement components for printing and prepress equipment.',
    img: products.find((product) => product.title === 'Processor Drive Components')!.img,
    href: '#products',
    filter: 'SPARE PARTS',
  },
  {
    num: '03',
    title: 'CONSUMABLES',
    desc: 'Offset blankets and supplies for your printing workflow.',
    img: products[0].img,
    href: '#products',
    filter: 'CONSUMABLES',
  },
  {
    num: '04',
    title: 'SERVICES',
    desc: 'Installation, maintenance and technical support for printing equipment.',
    img: 'https://images.pexels.com/photos/9242911/pexels-photo-9242911.jpeg?auto=compress&cs=tinysrgb&w=1000',
    href: '#services',
    filter: null,
  },
];

export default function Categories() {
  const navigate = (href: string, filter: string | null) => {
    if (filter) {
      window.dispatchEvent(new CustomEvent('set-product-filter', { detail: filter }));
    }
    navigateTo(href);
  };

  const machines = cats[0];
  const spareParts = cats[1];
  const consumables = cats[2];
  const services = cats[3];
  const gridRef = useReveal<HTMLDivElement>();

  const tallCard = (cat: typeof cats[0], placement: string) => (
    <a href={cat.href}
      className={`relative overflow-hidden cursor-pointer group min-h-[300px] md:row-span-2 bg-brand-dark ${placement}`}
      onClick={(e) => { e.preventDefault(); navigate(cat.href, cat.filter); }}
    >
      <img
        loading="lazy" decoding="async" src={cat.img}
        alt={cat.title}
        className={`absolute inset-0 w-full h-full ${cat.filter ? "object-contain p-6 bg-white" : "object-cover"} img-zoom`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-7 min-h-[300px]">
        <div className="text-white/80 text-xs font-semibold tracking-widest mb-3">{cat.num} —</div>
        <h3 className="font-display text-white text-[36px] leading-none mb-3">{cat.title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-[240px]">{cat.desc}</p>
        <div className="flex items-center gap-2 text-white text-xs font-bold tracking-widest group-hover:gap-3.5 transition-all duration-200">
          EXPLORE <ArrowRight size={14} />
        </div>
      </div>
    </a>
  );

  const smallCard = (cat: typeof cats[0], placement: string) => (
    <a href={cat.href}
      className={`relative overflow-hidden cursor-pointer group min-h-[200px] bg-brand-dark ${placement}`}
      onClick={(e) => { e.preventDefault(); navigate(cat.href, cat.filter); }}
    >
      <img
        loading="lazy" decoding="async" src={cat.img}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover object-center img-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/65 to-brand-dark/10" />
      <div className="relative h-full flex flex-col justify-end p-6 min-h-[180px]">
        <div className="text-gray-200 text-xs font-semibold tracking-widest mb-1.5">{cat.num} —</div>
        <h3 className="font-display text-white text-[28px] leading-none mb-2">{cat.title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-[240px]">{cat.desc}</p>
        <div className="flex items-center gap-2 text-white text-xs font-bold tracking-widest group-hover:gap-3.5 transition-all duration-200">
          EXPLORE <ArrowRight size={13} />
        </div>
      </div>
    </a>
  );

  return (
    <section id="categories" className="bg-brand-warm" aria-label="Browse our solutions">
      <div ref={gridRef} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-brand-warmgray">
          {tallCard(machines, 'md:col-start-1 md:row-start-1')}
          {smallCard(spareParts, 'md:col-start-2 md:row-start-1')}
          {smallCard(consumables, 'md:col-start-2 md:row-start-2')}
          {tallCard(services, 'md:col-start-3 md:row-start-1')}
        </div>
        <div className="grid sm:grid-cols-2 border-x border-b border-black/15 divide-y sm:divide-y-0 sm:divide-x divide-black/15 bg-white">
          {[{ label: 'PROCESSORS', filter: 'PROCESSOR', img: products[9].img, desc: 'Plate-processing equipment' }, { label: 'SOFTWARE', filter: 'SOFTWARE', img: products[10].img, desc: 'RIP and prepress software' }].map(item => <a key={item.filter} href="#products" onClick={e => { e.preventDefault(); navigate('#products', item.filter); }} className="flex items-center gap-4 p-5 sm:p-6 group hover:bg-brand-warm">
            <img src={item.img} alt="" loading="lazy" className="w-20 h-16 object-contain shrink-0" />
            <div className="min-w-0"><h3 className="font-display text-2xl text-brand-dark">{item.label}</h3><p className="text-sm text-[#555d68]">{item.desc}</p></div><ArrowRight size={20} className="text-brand-red ml-auto shrink-0" />
          </a>)}
        </div>
      </div>
    </section>
  );
}
