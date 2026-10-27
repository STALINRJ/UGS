import { ArrowRight, Phone } from 'lucide-react';
import { products } from '../data/products';
import { business } from '../data/business';
import { navigateTo } from '../utils/navigation';
import { browseCategory } from '../utils/enquiry';

const scope = [
  ['CTP', 'New & pre-owned equipment'], ['SPARES', 'Parts & components'],
  ['CONSUMABLES', 'Pressroom supplies'], ['SERVICE', 'Installation & maintenance'],
];

export default function Hero() {
  return (
    <section id="home" className="surface-dark bg-brand-dark pt-[88px] lg:pt-[104px] text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center py-10 sm:py-14 lg:py-20">
        <div>
          <p className="eyebrow mb-6">OFFSET PRINTING & PREPRESS SOLUTIONS</p>
          <h1 className="font-display leading-[0.94] mb-6 text-[clamp(3.1rem,7.2vw,6rem)]">
            PRECISION IN<br />EVERY<br /><span className="text-brand-red text-[clamp(3.6rem,8.2vw,7rem)]">IMPRESSION</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-[470px] mb-8">CTP equipment, processors, spare parts and consumables — with installation and maintenance support for your printing workflow.</p>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => navigateTo('#products')} className="primary-button">EXPLORE PRODUCTS <ArrowRight size={17} /></button>
            <a href={business.phoneHref} className="inline-flex gap-2 items-center min-h-11 px-2 text-sm font-semibold hover:underline underline-offset-4"><Phone size={17} />Talk to our team</a>
          </div>
        </div>
        <div className="border border-white/20">
          <div className="flex justify-between gap-4 p-4 sm:px-6 border-b border-white/20 text-sm text-gray-300"><span>PREPRESS EQUIPMENT</span><span className="text-white">CRON CTP</span></div>
          <div className="bg-brand-warm p-6 sm:p-9 aspect-[5/4] sm:aspect-[4/3] flex items-center justify-center">
            <img src={products[1].img} alt="CRON H Series computer-to-plate equipment" fetchPriority="high" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center justify-between gap-4 p-4 sm:px-6">
            <p className="text-gray-300 text-sm">Find equipment for your workflow.</p>
            <button onClick={() => browseCategory('CTP')} aria-label="Browse CTP equipment" className="w-11 h-11 shrink-0 border border-white/40 grid place-items-center hover:bg-brand-red"><ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 bg-brand-charcoal">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15 px-5 sm:px-8">
          {scope.map(([title, desc]) => <div key={title} className="py-5 sm:py-6 px-3 sm:px-5"><p className="font-display text-2xl mb-1">{title}</p><p className="text-sm text-gray-300 leading-relaxed">{desc}</p></div>)}
        </div>
      </div>
    </section>
  );
}
