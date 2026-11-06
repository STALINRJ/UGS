import { navigateTo } from '../utils/navigation';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { num: '30+', sub: 'YEARS OF EXPERIENCE' },
  { num: '5000+', sub: 'SATISFIED CUSTOMERS' },
  { num: 'PAN INDIA', sub: 'SERVICE NETWORK' },
  { num: '24/7', sub: 'TECHNICAL SUPPORT' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    navigateTo(href);
  };

  const statsRef = useReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-brand-dark overflow-hidden">
      {/* Cinematic printing press image — machine dominates */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial printing press"
          className="w-full h-full object-cover object-center"
        />
        {/* Controlled lighting — left dark for text, right reveals machine */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative flex-1 flex items-center pt-[88px] lg:pt-[104px]">
        <div className="max-w-[1400px] mx-auto px-6 w-full py-20">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-brand-red" />
              <span className="text-brand-red text-[11px] font-bold tracking-[0.32em] uppercase">
                Offset Printing Machinery Experts
              </span>
            </div>

            <h1 className="font-display text-white leading-[0.92] mb-8">
              <span className="block text-[clamp(2.75rem,9vw,6.25rem)]">PRECISION IN</span>
              <span className="block text-[clamp(2.75rem,9vw,6.25rem)]">EVERY</span>
              <span className="block text-brand-red text-[clamp(3.15rem,11.3vw,9.25rem)] leading-[0.85]">
                IMPRESSION
              </span>
            </h1>

            <p className="text-gray-300 text-[16px] leading-[1.7] mb-12 max-w-[460px] font-medium">
              Precision spare parts, CTP consumables, and expert installation and maintenance — engineered to keep your offset press running at peak performance.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => scrollTo('#products')}
                className="flex items-center gap-2 bg-brand-red hover:bg-[#c40510] text-white text-[11px] font-bold tracking-[0.18em] uppercase px-8 py-4 transition-all duration-300 ease-engineered group"
              >
                EXPLORE SOLUTIONS
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="relative bg-brand-charcoal border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {stats.map(({ num, sub }) => (
              <div key={sub} className="flex flex-col justify-center px-6 py-6">
                <div className="font-display text-white text-[32px] leading-none mb-1.5">{num}</div>
                <div className="text-gray-500 text-[12px] font-bold tracking-[0.18em]">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
