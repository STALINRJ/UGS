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
    desc: 'Genuine OEM & compatible parts sourced for all major offset presses.',
    img: products.find((product) => product.title === 'Processor Drive Components')!.img,
    href: '#products',
    filter: 'SPARE PARTS',
  },
  {
    num: '03',
    title: 'CONSUMABLES',
    desc: 'High-performance inks, CTP plates, blankets and fountain solutions.',
    img: products[0].img,
    href: '#products',
    filter: 'CONSUMABLES',
  },
  {
    num: '04',
    title: 'SERVICES',
    desc: 'Installation, maintenance and technical support by industry experts.',
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

  const tallCard = (cat: typeof cats[0]) => (
    <a href={cat.href}
      className="relative overflow-hidden cursor-pointer group min-h-[300px] md:row-span-2 bg-brand-dark"
      onClick={(e) => { e.preventDefault(); navigate(cat.href, cat.filter); }}
    >
      <img
        loading="lazy" decoding="async" src={cat.img}
        alt={cat.title}
        className={`absolute inset-0 w-full h-full ${cat.filter ? "object-contain p-6 bg-white" : "object-cover"} img-zoom`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-7 min-h-[300px]">
        <div className="text-brand-red text-[11px] font-bold tracking-[0.2em] mb-3">{cat.num} —</div>
        <h3 className="font-display text-white text-[36px] leading-none mb-3">{cat.title}</h3>
        <p className="text-gray-300 text-[13px] leading-[1.7] mb-6 max-w-[240px]">{cat.desc}</p>
        <div className="flex items-center gap-2 text-white text-[11px] font-bold tracking-[0.18em] group-hover:gap-3.5 transition-all duration-300 ease-engineered">
          EXPLORE <ArrowRight size={14} />
        </div>
      </div>
    </a>
  );

  const smallCard = (cat: typeof cats[0]) => (
    <a href={cat.href}
      className="relative overflow-hidden cursor-pointer group min-h-[180px] bg-brand-dark"
      onClick={(e) => { e.preventDefault(); navigate(cat.href, cat.filter); }}
    >
      <img
        loading="lazy" decoding="async" src={cat.img}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover object-center img-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/65 to-brand-dark/10" />
      <div className="relative h-full flex flex-col justify-end p-6 min-h-[180px]">
        <div className="text-white/70 text-[10px] font-bold tracking-[0.2em] mb-1.5">{cat.num} —</div>
        <h3 className="font-display text-white text-[28px] leading-none mb-2">{cat.title}</h3>
        <p className="text-gray-300 text-[12px] leading-[1.6] mb-4 max-w-[220px]">{cat.desc}</p>
        <div className="flex items-center gap-2 text-white text-[10px] font-bold tracking-[0.18em] group-hover:gap-3.5 transition-all duration-300 ease-engineered">
          EXPLORE <ArrowRight size={13} />
        </div>
      </div>
    </a>
  );

  return (
    <section className="bg-brand-warm">
      <div ref={gridRef} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-brand-warmgray">
          {tallCard(machines)}
          {smallCard(spareParts)}
          {tallCard(services)}
          {smallCard(consumables)}
        </div>
      </div>
    </section>
  );
}
