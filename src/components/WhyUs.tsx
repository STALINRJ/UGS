import { navigateTo } from '../utils/navigation';
import { Users, Package, Clock, Award, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { icon: Award, num: '30+', label: 'YEARS OF EXCELLENCE' },
  { icon: Users, num: '5000+', label: 'HAPPY CUSTOMERS' },
  { icon: Package, num: '50K+', label: 'PARTS DELIVERED' },
  { icon: Clock, num: '24/7', label: 'SUPPORT AVAILABLE' },
];

const values = [
  { title: 'PRECISION', desc: 'Every part we supply meets exact OEM specifications for flawless press performance.' },
  { title: 'RELIABILITY', desc: 'Decades of proven service keeping multi-million-rupee presses running.' },
  { title: 'EXPERTISE', desc: 'Factory-trained technicians who understand offset press mechanics and electronics inside out.' },
];

export default function WhyUs() {
  const scrollTo = (href: string) => {
    navigateTo(href);
  };

  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-brand-warm py-16 md:py-24 px-5 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 items-stretch">
          {/* Left card */}
          <div ref={leftRef} className="bg-white p-6 sm:p-10 lg:p-12 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-brand-red" />
              <span className="text-brand-red text-[11px] font-bold tracking-[0.3em] uppercase">
                WHY PARTNER WITH US
              </span>
            </div>
            <h2 className="font-display text-[#1a1a1a] text-[52px] md:text-[64px] leading-[0.95] mb-6">
              BUILT ON TRUST.<br />
              FOCUSED ON <span className="text-brand-red">YOU.</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-[1.7] mb-8 max-w-[420px]">
              We go beyond supplying parts — we deliver complete solutions that maximize uptime, enhance productivity and reduce your operational costs.
            </p>

            {/* Values */}
            <div className="space-y-5 mb-10">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-1 self-stretch bg-brand-red/20 mt-1" />
                  <div>
                    <div className="font-display text-[#1a1a1a] text-[18px] tracking-wide mb-1">{v.title}</div>
                    <div className="text-gray-500 text-[14px] leading-[1.6]">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-gray-400 italic text-[13px] font-medium mb-1">— Team Universal Graphic Services</div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {stats.map(({ icon: Icon, num, label }) => (
                <div key={label} className="bg-brand-dark p-5 flex flex-col items-center text-center gap-2">
                  <Icon size={18} className="text-brand-red" />
                  <div className="font-display text-white text-[26px] leading-none">{num}</div>
                  <div className="text-gray-400 text-[11px] font-bold tracking-[0.14em] leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card — Pan India */}
          <div ref={rightRef} className="bg-brand-dark p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            {/* Technical dot grid */}
            <div className="absolute inset-0 opacity-[0.06]">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {Array.from({ length: 400 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={10 + (i % 20) * 19}
                    cy={10 + Math.floor(i / 20) * 19}
                    r="1"
                    fill="#E30613"
                  />
                ))}
              </svg>
            </div>

            {/* Large faded display text */}
            <div className="absolute -bottom-4 -right-2 font-display text-white/[0.03] text-[160px] leading-none pointer-events-none select-none">
              INDIA
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[1px] bg-brand-red" />
                <span className="text-brand-red text-[11px] font-bold tracking-[0.3em] uppercase">
                  PAN INDIA SUPPORT
                </span>
              </div>
              <h2 className="font-display text-white text-[48px] md:text-[58px] leading-[0.95] mb-5">
                WHEREVER YOU ARE,<br />
                WE ARE <span className="text-brand-red">THERE.</span>
              </h2>
              <p className="text-gray-400 text-[14px] leading-[1.7] max-w-[380px]">
                Our nationwide service network ensures rapid response and minimal downtime — wherever your press operates.
              </p>
            </div>

            <div className="relative flex items-center justify-between mt-8">
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 border border-white/25 hover:border-white hover:bg-white hover:text-brand-dark text-white text-[11px] font-bold tracking-[0.18em] uppercase px-7 py-3.5 transition-all duration-300 ease-engineered group"
              >
                CONTACT OUR TEAM
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
