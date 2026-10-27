import { Settings, Wrench, Truck, Headphones, ArrowRight } from 'lucide-react';
import { requestEnquiry } from '../utils/enquiry';

const services = [
  { icon: Settings, title: 'INSTALLATION & COMMISSIONING', desc: 'Discuss setup and commissioning requirements for your printing equipment.', category: 'Machine Installation', num: '01' },
  { icon: Wrench, title: 'MAINTENANCE & REPAIRS', desc: 'Tell us about the machine, symptoms and maintenance work you need.', category: 'Maintenance & Repairs', num: '02' },
  { icon: Truck, title: 'SPARES SUPPLY', desc: 'Share a part reference or photograph to discuss a suitable replacement.', category: 'Spare Parts', num: '03' },
  { icon: Headphones, title: 'TECHNICAL SUPPORT', desc: 'Talk through equipment issues, upgrades and prepress workflow requirements.', category: 'Technical Support', num: '04' },
];

export default function Services() {
  return (
    <section id="services" className="surface-dark bg-brand-dark section-space text-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4"><p className="eyebrow mb-5">WHAT WE OFFER</p><h2 className="font-display text-[48px] sm:text-[64px] leading-none mb-6">COMPLETE<br />SERVICE<br /><span className="text-brand-red">SOLUTIONS.</span></h2><p className="text-gray-300 text-base leading-relaxed mb-7 max-w-[380px]">Choose the support you need. We’ll carry your service selection into the enquiry so you don’t have to explain it twice.</p><button onClick={() => requestEnquiry({ category: 'Machine Service', subject: 'Machine service requirements' })} className="primary-button">REQUEST A SERVICE <ArrowRight size={17} /></button></div>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px border border-white/25 bg-white/25">{services.map(({ icon: Icon, title, desc, category, num }) => <div key={num} className="bg-brand-charcoal p-6 sm:p-8 flex flex-col"><div className="flex items-center justify-between mb-6"><Icon size={27} className="text-[#ff737c]" /><span className="font-display text-gray-400 text-3xl">{num}</span></div><h3 className="font-display text-2xl leading-tight mb-3">{title}</h3><p className="text-gray-300 text-[15px] leading-relaxed mb-5">{desc}</p><button aria-label={`Enquire about ${title.toLowerCase()}`} onClick={() => requestEnquiry({ category, subject: title })} className="mt-auto inline-flex justify-between items-center gap-4 text-sm font-bold min-h-11 hover:underline underline-offset-4">ENQUIRE ABOUT THIS SERVICE <ArrowRight size={17} className="shrink-0" /></button></div>)}</div>
      </div>
    </section>
  );
}
