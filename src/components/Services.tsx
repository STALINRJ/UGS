import { navigateTo } from '../utils/navigation';
import { Settings, Wrench, Truck, Headphones, ArrowRight } from 'lucide-react';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Settings,
    title: 'INSTALLATION & COMMISSIONING',
    desc: 'Professional setup and commissioning of offset presses, ensuring optimal performance from day one.',
    num: '01',
  },
  {
    icon: Wrench,
    title: 'MAINTENANCE & REPAIRS',
    desc: 'Scheduled maintenance and rapid repair services to minimize downtime and extend machine life.',
    num: '02',
  },
  {
    icon: Truck,
    title: 'SPARES SUPPLY',
    desc: 'Genuine OEM and compatible spare parts delivered promptly to keep your operations running.',
    num: '03',
  },
  {
    icon: Headphones,
    title: 'TECHNICAL SUPPORT',
    desc: 'Expert guidance on machine upgrades, process optimization and consumable selection.',
    num: '04',
  },
];

export default function Services() {
  const scrollTo = (href: string) => {
    navigateTo(href);
  };

  const leftRef = useReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-brand-dark py-16 md:py-24 px-5 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left intro */}
          <div ref={leftRef} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-brand-red" />
              <span className="text-brand-red text-[11px] font-bold tracking-[0.3em] uppercase">
                WHAT WE OFFER
              </span>
            </div>
            <h2 className="font-display text-white text-[56px] md:text-[68px] leading-[0.95] mb-6">
              COMPLETE<br />SERVICE<br /><span className="text-brand-red">SOLUTIONS.</span>
            </h2>
            <p className="text-gray-400 text-[15px] leading-[1.7] mb-8 max-w-[340px]">
              From installation to lifetime support, we cover every aspect of your printing operation with expertise and care.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2 bg-brand-red hover:bg-[#c40510] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-7 py-4 transition-all duration-300 ease-engineered group"
            >
              REQUEST A SERVICE
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right grid */}
          <div ref={gridRef} className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-white/[0.06]">
            {services.map(({ icon: Icon, title, desc, num }) => (
              <div
                key={num}
                className="bg-brand-dark p-8 lg:p-10 group hover:bg-brand-charcoal transition-colors duration-500 ease-engineered relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-brand-red/30 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300 ease-engineered">
                    <Icon size={22} className="text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-display text-white/[0.06] text-[56px] leading-none">{num}</span>
                </div>
                <h3 className="font-display text-white text-[24px] tracking-wide mb-3 leading-tight">{title}</h3>
                <p className="text-gray-500 text-[14px] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
