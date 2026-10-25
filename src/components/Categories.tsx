import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const cats = [
  {
    num: '01',
    title: 'MACHINES',
    desc: 'Pre-owned and refurbished offset presses, inspected and certified for maximum uptime and output quality.',
    img: 'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=1000',
    href: '#products',
    filter: 'MACHINES',
  },
  {
    num: '02',
    title: 'SPARE PARTS',
    desc: 'Genuine OEM & compatible parts sourced for all major offset presses.',
    img: 'https://images.pexels.com/photos/7568428/pexels-photo-7568428.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#products',
    filter: 'SPARE PARTS',
  },
  {
    num: '03',
    title: 'CONSUMABLES',
    desc: 'High-performance inks, CTP plates, blankets and fountain solutions.',
    img: 'https://images.pexels.com/photos/19316517/pexels-photo-19316517.png?auto=compress&cs=tinysrgb&w=800',
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const machines = cats[0];
  const spareParts = cats[1];
  const consumables = cats[2];
  const services = cats[3];
  const gridRef = useReveal<HTMLDivElement>();

  const tallCard = (cat: typeof cats[0]) => (
    <div
      className="relative overflow-hidden cursor-pointer group min-h-[300px] md:row-span-2 bg-brand-dark"
      onClick={() => navigate(cat.href, cat.filter)}
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover img-zoom"
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
    </div>
  );

  const smallCard = (cat: typeof cats[0]) => (
    <div
      className="relative overflow-hidden cursor-pointer group min-h-[180px] bg-brand-dark"
      onClick={() => navigate(cat.href, cat.filter)}
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover img-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-6 min-h-[180px]">
        <div className="text-gray-400 text-[10px] font-bold tracking-[0.2em] mb-1.5">{cat.num} —</div>
        <h3 className="font-display text-white text-[28px] leading-none mb-2">{cat.title}</h3>
        <p className="text-gray-300 text-[12px] leading-[1.6] mb-4 max-w-[220px]">{cat.desc}</p>
        <div className="flex items-center gap-2 text-white text-[10px] font-bold tracking-[0.18em] group-hover:gap-3.5 transition-all duration-300 ease-engineered">
          EXPLORE <ArrowRight size={13} />
        </div>
      </div>
    </div>
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
