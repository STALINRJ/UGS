import { navigateTo } from '../utils/navigation';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import logoMain from '../assets/logo_main.png';

const brands = [
  'Heidelberg', 'KOMORI', 'MAN Roland', 'Mitsubishi', 'Sakurai', 'Planeta', 'Goss', 'Akiyama',
];

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const offerings = [
  'Spare Parts',
  'Consumables',
  'Printing Machines',
  'Installation & Commissioning',
  'Maintenance & Repairs',
  'Technical Support',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    navigateTo(href);
  };

  const ref = useReveal<HTMLElement>();

  return (
    <footer ref={ref} className="bg-[#070707] text-white">
      {/* Brands strip */}
      <div className="border-t border-b border-white/[0.06] py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center text-gray-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
            Brands We Support
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {brands.map((b) => (
              <span key={b} className="font-display text-gray-400 text-[22px] tracking-wide hover:text-white transition-colors duration-300 cursor-default">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand — prominent logo */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <img src={logoMain} alt="Universal Graphic Services" className="w-[250px] max-w-full h-auto object-contain" />
            </div>
            <p className="text-gray-500 text-[13px] leading-[1.7] max-w-[320px]">
              Your trusted partner for offset printing machine spare parts, consumables, machines and expert service solutions across India.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-display text-white text-[16px] tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    className="text-gray-500 hover:text-white text-[13px] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div className="md:col-span-3">
            <h4 className="font-display text-white text-[16px] tracking-wide mb-6">Our Offerings</h4>
            <ul className="space-y-3.5 text-gray-500 text-[13px]">
              {offerings.map((o) => (
                <li key={o} className="hover:text-white transition-colors duration-300 cursor-default">{o}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-display text-white text-[16px] tracking-wide mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500 text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-red mt-0.5 shrink-0" />
                <span>RR Nagar, Bangalore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-red shrink-0" />
                <a href="tel:+919741101035" className="hover:text-white transition-colors duration-300">+91 97411 01035</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-red shrink-0" />
                <a href="mailto:info@universalgraphicservices.com" className="hover:text-white transition-colors duration-300 break-all">info@universalgraphicservices.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-6 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-[12px]">
            © {new Date().getFullYear()} Universal Graphic Services. All rights reserved.
          </p>
          <p className="text-gray-600 text-[12px] tracking-wide">
            Engineered for the offset printing industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
