import { ArrowRight, Check } from 'lucide-react';
import { products } from '../data/products';
import { requestEnquiry } from '../utils/enquiry';

const values = [
  ['THE RIGHT FIT', 'Share your machine model and part reference so our team can discuss compatibility.'],
  ['A CONNECTED WORKFLOW', 'Explore CTP equipment, processors, consumables and replacement components in one place.'],
  ['TECHNICAL SUPPORT', 'Discuss installation, maintenance and your printing-equipment requirements with our team.'],
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-brand-warm section-space">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-6 items-start">
        <div className="bg-white p-6 sm:p-10 lg:p-12 border border-black/10">
          <p className="eyebrow mb-5">UNIVERSAL GRAPHIC SERVICES</p>
          <h2 className="font-display text-[48px] sm:text-[60px] leading-none text-brand-dark mb-6">YOUR WORKFLOW.<br />OUR <span className="text-brand-red">FOCUS.</span></h2>
          <p className="text-[#555d68] text-base leading-relaxed mb-8">Based in Bengaluru, we work with printing businesses on equipment, spare parts, consumables and service requirements.</p>
          <div className="space-y-6">{values.map(([title, desc]) => <div key={title} className="flex gap-4"><Check size={19} className="text-brand-red shrink-0 mt-1" /><div><h3 className="font-display text-[22px] text-brand-dark mb-1">{title}</h3><p className="text-[#555d68] text-[15px] leading-relaxed">{desc}</p></div></div>)}</div>
        </div>
        <div className="surface-dark bg-brand-dark text-white border border-white/20">
          <img src={products.find(p => p.title === 'Processor Drive Components')!.img} alt="Processor drive components and gears" loading="lazy" className="w-full h-52 sm:h-60 object-cover" />
          <div className="p-6 sm:p-10">
            <p className="eyebrow mb-4">LET’S DISCUSS YOUR REQUIREMENT</p>
            <h3 className="font-display text-[36px] sm:text-[44px] leading-none mb-4">KEEP YOUR PRINT ROOM MOVING.</h3>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6">A machine model, part number or clear photograph is a useful starting point. Tell us what you need and where the equipment is located.</p>
            <button onClick={() => requestEnquiry({ category: 'General Enquiry', subject: 'Equipment and support requirements' })} className="primary-button">CONTACT OUR TEAM <ArrowRight size={17} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
