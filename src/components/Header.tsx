import { navigateTo } from '../utils/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { requestEnquiry } from '../utils/enquiry';
import { business } from '../data/business';
import logoMain from '../assets/logo_main.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const clickedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (clickedRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = navLinks.find((l) => l.href === `#${entry.target.id}`);
          if (link) setActive(link.label);
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => { observer.disconnect(); clearTimeout(timerRef.current); };
  }, []);

  const scrollTo = (href: string, label: string) => {
    clickedRef.current = true;
    setActive(label);
    setOpen(false);
    navigateTo(href);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { clickedRef.current = false; }, 1200);
  };

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    const query = window.matchMedia('(min-width: 1024px)');
    const resize = () => { if (query.matches) setOpen(false); };
    window.addEventListener('keydown', close);
    query.addEventListener('change', resize);
    return () => { window.removeEventListener('keydown', close); query.removeEventListener('change', resize); };
  }, [open]);

  const enquire = () => { setOpen(false); setActive('Contact'); requestEnquiry(); };

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="header-inner">
        <a href="#home" aria-label="Universal Graphic Services — home" onClick={(e) => { e.preventDefault(); scrollTo('#home', 'Home'); }} className="brand-link">
          <img src={logoMain} alt="Universal Graphic Services" width="2185" height="678" />
        </a>
        <nav aria-label="Main navigation" className="hidden lg:flex header-navigation">
          {navLinks.map((link) => <a href={link.href} key={link.label} aria-current={active === link.label ? 'location' : undefined} onClick={(e) => { e.preventDefault(); scrollTo(link.href, link.label); }}>{link.label}</a>)}
        </nav>
        <button onClick={enquire} className="header-enquire hidden lg:flex">Let’s talk <ArrowUpRight size={17} /></button>
        <button ref={menuButton} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" className="lg:hidden mobile-menu-button" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-navigation lg:hidden">
        <p className="text-[11px] uppercase tracking-[.2em] text-gray-400 mb-4">Explore Universal</p>
        {navLinks.map((link, i) => <a href={link.href} key={link.label} aria-current={active === link.label ? 'location' : undefined} onClick={(e) => { e.preventDefault(); scrollTo(link.href, link.label); }}><span className="text-xs text-gray-500 mr-5">0{i + 1}</span>{link.label}<ArrowUpRight size={18} className="ml-auto" /></a>)}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4"><a className="mobile-phone" href={business.phoneHref}>{business.phone}</a><button className="header-enquire" onClick={enquire}>Let’s talk <ArrowUpRight size={17} /></button></div>
      </nav>}
    </header>
  );
}
