import { navigateTo } from '../utils/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoMain from '../assets/logo_main.png';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'PRODUCTS', href: '#products' },
  { label: 'SERVICES', href: '#services' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('HOME');
  const clickedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickedRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.href === `#${entry.target.id}`);
            if (link) setActive(link.label);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
  return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string, label: string) => {
    clickedRef.current = true;
    setActive(label);
    setOpen(false);
    navigateTo(href);
    setTimeout(() => { clickedRef.current = false; }, 1200);
  };

  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    const query = window.matchMedia('(min-width: 1024px)');
    const resize = () => { if (query.matches) setOpen(false); };
    query.addEventListener('change', resize);
    return () => { window.removeEventListener('keydown', close); query.removeEventListener('change', resize); };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[88px] lg:h-[104px] py-2 gap-5">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home', 'HOME'); }}
          className="flex items-center"
        >
          <img
            src={logoMain}
            alt="Universal Graphic Services"
            className="w-[210px] sm:w-[250px] lg:w-[270px] h-auto max-w-full object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <a
              href={link.href}
              aria-current={active === link.label ? "location" : undefined}
              key={link.label}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href, link.label); }}
              className={`text-[13px] font-bold tracking-[0.18em] transition-colors duration-300 relative py-1 ${
                active === link.label ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ${
                  active === link.label ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollTo('#contact', 'CONTACT')}
            className="flex items-center gap-2 bg-brand-red hover:bg-[#c40510] text-white text-[13px] font-bold tracking-[0.18em] uppercase px-6 py-3 transition-all duration-300 group"
          >
            GET IN TOUCH
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button ref={menuButton} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" className="lg:hidden text-white p-3 shrink-0" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden bg-brand-dark border-t border-white/10 max-h-[calc(100dvh-88px)] overflow-auto">
          {navLinks.map((link) => (
            <a
              href={link.href}
              aria-current={active === link.label ? "location" : undefined}
              key={link.label}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href, link.label); }}
              className="block w-full text-left px-6 py-4 text-[14px] font-bold tracking-[0.18em] text-gray-300 hover:text-white hover:bg-white/5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
