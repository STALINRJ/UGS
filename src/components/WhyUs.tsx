import { ArrowRight } from 'lucide-react';
import { requestEnquiry } from '../utils/enquiry';
import aboutLogo from '../assets/ugs-about-logo.jpeg';

const principles = [
  { letter: 'Q', title: 'Quality', text: 'Delivering dependable products and services that meet customer expectations.' },
  { letter: 'C', title: 'Cost', text: 'Providing practical, cost-effective solutions that maximize value.' },
  { letter: 'I', title: 'Innovation', text: 'Embracing new technologies and exploring smarter ways to improve performance.' },
  { letter: 'S', title: 'Sustainability', text: 'Extending equipment life, optimizing resources, and promoting long-term operational efficiency.' },
];

export default function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-brand-warm section-space text-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-start">
          <div className="min-w-0">
            <p className="eyebrow mb-5">ABOUT US</p>
            <h2 id="about-heading" className="font-display text-[44px] sm:text-[60px] xl:text-[68px] leading-[1.02] mb-7 max-w-[650px]">Your Trusted Partner in <span className="text-brand-red">Prepress Technology</span></h2>
            <div className="space-y-5 text-[15px] sm:text-base leading-[1.85] text-[#4b515b]">
              <p>Universal Graphic Services (UGS) is dedicated to serving the prepress industry with reliable, efficient, and innovative technical solutions. With nearly two decades of experience in imaging technology, we specialize in prepress equipment, hardware, software, consumables, technical support, and system modernization.</p>
              <p>Our experienced engineering team works closely with prepress departments, commercial printers, newspaper publishers, and print service providers to help them maximize equipment performance, minimize downtime, and maintain smooth, efficient operations.</p>
            </div>
          </div>
          <figure className="min-w-0 bg-white border border-black/10 lg:mt-1">
            <img src={aboutLogo} alt="Universal Graphic Services — Engineering Print. Powering Performance." width="1600" height="800" loading="lazy" decoding="async" className="block w-full h-auto" />
          </figure>
        </div>

        <div className="grid md:grid-cols-2 gap-9 lg:gap-14 mt-12 sm:mt-16">
          <article className="min-w-0 border-t border-black/20 pt-6">
            <h3 className="font-display text-[32px] sm:text-[36px] leading-none mb-5">Our Expertise</h3>
            <div className="space-y-5 text-[15px] sm:text-base leading-[1.85] text-[#4b515b]">
              <p>With strong technical knowledge and extensive industry experience, we provide dependable solutions for the installation, maintenance, troubleshooting, repair, and modernization of prepress systems. We also support customers in extending the service life of existing equipment through suitable upgrades and cost-effective technical solutions.</p>
              <p>By combining engineering expertise with a strong network of industry contacts and technical specialists, we help our customers identify the right solutions to meet their operational requirements and evolving business needs.</p>
            </div>
          </article>
          <article className="min-w-0 border-t border-black/20 pt-6">
            <h3 className="font-display text-[32px] sm:text-[36px] leading-none mb-5">Our Commitment</h3>
            <div className="space-y-5 text-[15px] sm:text-base leading-[1.85] text-[#4b515b]">
              <p>At Universal Graphic Services, we believe that long-term customer relationships are built on trust, technical excellence, and consistent service quality. Our commitment is to deliver reliable solutions that improve productivity, optimize operating costs, and support the sustainable growth of our customers' businesses.</p>
              <p>We continuously strive to maintain the highest standards of <strong className="text-brand-dark font-semibold">Quality, Consistency, and Reliability</strong> in every aspect of our work.</p>
            </div>
          </article>
        </div>

        <div className="surface-dark bg-brand-dark text-white mt-12 sm:mt-16 p-6 sm:p-9 lg:p-12">
          <h3 className="font-display text-[32px] sm:text-[40px] leading-tight mb-3">Our Core Philosophy <span className="text-[#ff737c]">— QCIS</span></h3>
          <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed">Our business philosophy is built on four fundamental principles:</p>
          <dl className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-9 mt-8 sm:mt-10">
            {principles.map(({ letter, title, text }) => (
              <div key={letter} className="border-t border-white/25 pt-6 min-w-0">
                <dt><span aria-hidden="true" className="block font-display text-[56px] leading-none text-[#ff737c] mb-4">{letter}</span><span className="block text-xl font-semibold mb-3">{title}</span></dt>
                <dd className="text-gray-300 text-[15px] leading-[1.8]">{text}</dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-white/25 mt-8 sm:mt-10 pt-6 text-[15px] sm:text-base leading-[1.8] text-gray-200 max-w-[800px]">Through QCIS, we aim to help our customers progress from operational efficiency to engineering excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mt-6">
          <article className="bg-white border border-black/10 border-t-2 border-t-brand-red p-6 sm:p-9 min-w-0">
            <h3 className="font-display text-[32px] sm:text-[36px] leading-none mb-5">Our Vision</h3>
            <p className="text-[#4b515b] text-[15px] sm:text-base leading-[1.85]">To be a trusted and preferred technical solutions partner in the prepress industry through engineering excellence, continuous innovation, and dependable customer support.</p>
          </article>
          <article className="bg-white border border-black/10 border-t-2 border-t-brand-red p-6 sm:p-9 min-w-0">
            <h3 className="font-display text-[32px] sm:text-[36px] leading-none mb-5">Our Mission</h3>
            <p className="text-[#4b515b] text-[15px] sm:text-base leading-[1.85]">To empower the prepress industry with reliable technology, expert engineering, and cost-effective solutions that enhance productivity, improve performance, and create lasting value for our customers.</p>
          </article>
        </div>

        <div className="mt-10 sm:mt-12 pt-9 sm:pt-10 border-t border-black/20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
          <div className="max-w-[780px] min-w-0">
            <h3 className="font-display text-[36px] sm:text-[44px] leading-none mb-4">LET US <span className="text-brand-red">GROW TOGETHER</span></h3>
            <p className="text-[#4b515b] text-[15px] sm:text-base leading-[1.85]">At Universal Graphic Services, your growth is our commitment. We believe in building lasting partnerships, creating mutual value, and achieving excellence together.</p>
          </div>
          <button onClick={() => requestEnquiry({ category: 'General Enquiry', subject: 'Prepress technology and support' })} className="primary-button shrink-0 self-start lg:self-center">CONTACT OUR TEAM <ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  );
}
