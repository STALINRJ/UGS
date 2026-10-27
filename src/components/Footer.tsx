import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { navigateTo } from '../utils/navigation';
import { browseCategory, requestEnquiry } from '../utils/enquiry';
import { business, addressSearch } from '../data/business';
import logoMain from '../assets/logo_main.png';

const links = [['Home', '#home'], ['About Us', '#about'], ['Products', '#products'], ['Services', '#services'], ['Contact', '#contact']];
const catalogue = [['CTP Equipment', 'CTP'], ['Processors', 'PROCESSOR'], ['Spare Parts', 'SPARE PARTS'], ['Consumables', 'CONSUMABLES'], ['Software', 'SOFTWARE']];

export default function Footer() {
  return (
    <footer className="surface-dark bg-[#070707] text-white border-t border-white/25 section-space !py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.1fr_0.65fr_0.8fr_1.2fr] gap-8 lg:gap-10">
          <div><div className="inline-block bg-brand-warm px-3 py-2 mb-5"><img src={logoMain} alt={business.name} className="w-[230px] max-w-full h-auto" /></div><p className="text-gray-300 text-sm leading-relaxed max-w-[320px]">Equipment, spare parts, consumables and technical support for printing and prepress workflows.</p><p className="text-gray-300 text-sm leading-relaxed mt-4">Share your machine’s make and model so we can discuss the right parts and support.</p></div>
          <div><h3 className="font-display text-2xl mb-4">QUICK LINKS</h3><ul>{links.map(([label,href]) => <li key={href}><a href={href} onClick={e => { e.preventDefault(); navigateTo(href); }} className="inline-flex min-h-11 items-center text-gray-300 hover:text-white text-sm underline-offset-4 hover:underline">{label}</a></li>)}</ul></div>
          <div><h3 className="font-display text-2xl mb-4">OUR OFFERINGS</h3><ul>{catalogue.map(([label,category]) => <li key={category}><a href="#products" onClick={e => { e.preventDefault(); browseCategory(category); }} className="inline-flex min-h-11 items-center text-gray-300 hover:text-white text-sm hover:underline underline-offset-4">{label}</a></li>)}<li><a href="#contact" onClick={e => { e.preventDefault(); requestEnquiry({ category: 'Machine Service', subject: 'Installation and maintenance support' }); }} className="inline-flex min-h-11 items-center text-gray-300 hover:text-white text-sm hover:underline underline-offset-4">Installation & maintenance</a></li></ul></div>
          <div><h3 className="font-display text-2xl mb-4">CONTACT</h3><div className="space-y-3 text-gray-200 text-sm leading-relaxed"><div className="flex gap-3"><MapPin size={18} className="text-[#ff737c] shrink-0 mt-1" /><address className="not-italic">{business.address.map(line => <span className="block" key={line}>{line}</span>)}<a href={addressSearch} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center min-h-11 underline underline-offset-4">Find this address <ArrowUpRight size={15} /></a></address></div><a href={business.phoneHref} className="flex items-center gap-3 min-h-11 hover:underline underline-offset-4"><Phone size={18} className="text-[#ff737c] shrink-0" />{business.phone}</a><a href={`mailto:${business.email}`} className="flex items-center gap-3 min-h-11 hover:underline underline-offset-4"><Mail size={18} className="text-[#ff737c] shrink-0" /><span className="break-all">{business.email}</span></a></div></div>
        </div>
        <div className="border-t border-white/25 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-3 text-gray-300 text-sm"><p>© {new Date().getFullYear()} {business.name}.</p><p>Printing & prepress solutions.</p></div>
      </div>
    </footer>
  );
}
