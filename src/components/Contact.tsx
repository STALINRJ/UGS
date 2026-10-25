import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const contactInfo = [
  { icon: MapPin, label: 'VISIT US', value: 'RR Nagar, Bangalore' },
  { icon: Phone, label: 'CALL US', value: '+91 97411 01035' },
  { icon: Mail, label: 'EMAIL US', value: 'info@universalgraphicservices.com' },
  { icon: Clock, label: 'WORKING HOURS', value: 'Mon - Sat: 9:00 AM - 7:00 PM' },
];

const categories = [
  'General Enquiry',
  'Product Enquiry',
  'Machine Sales',
  'Spare Parts',
  'Machine Service',
  'Annual Maintenance Contract (AMC)',
  'Machine Installation',
  'Technical Support',
  'Consumables',
  'Request a Quotation',
  'Other',
];

const inputClass =
  'w-full bg-brand-dark border border-white/10 focus:border-brand-red text-white text-[14px] px-4 py-4 outline-none transition-colors duration-300';
const labelClass =
  'text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase block mb-2.5';

function CategorySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${inputClass} flex items-center justify-between text-left ${
          open ? 'border-brand-red' : ''
        } ${!value ? 'text-gray-500' : 'text-white'}`}
      >
        <span className="truncate pr-2">{value || 'Select a Category'}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        onWheel={(e) => {
          const el = e.currentTarget;
          if (el.scrollHeight > el.clientHeight) {
            e.stopPropagation();
          }
        }}
        className={`absolute top-full left-0 right-0 z-30 bg-brand-dark border border-brand-red/40 overflow-y-auto transition-all duration-300 ease-engineered ${
          open ? 'max-h-[260px] opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'
        }`}
        style={{ scrollbarWidth: 'thin' }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              onChange(cat);
              setOpen(false);
            }}
            className={`w-full text-left px-4 py-3 text-[13px] flex items-center justify-between transition-colors duration-200 ${
              value === cat
                ? 'bg-brand-red/15 text-brand-red'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            {cat}
            {value === cat && <Check size={15} className="shrink-0" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    message: '',
  });
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();

  useEffect(() => {
    const handler = (e: Event) => {
      const { category, product } = (e as CustomEvent<{ category: string; product: string }>).detail;
      setForm((prev) => ({
        ...prev,
        category,
        message: product ? `I would like to enquire about: ${product}` : prev.message,
      }));
    };
    window.addEventListener('prefill-contact', handler);
    return () => window.removeEventListener('prefill-contact', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', company: '', category: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="bg-brand-dark py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/[0.06]">
          {/* Left — Info */}
          <div ref={leftRef} className="bg-brand-dark p-10 lg:p-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-brand-red" />
              <span className="text-brand-red text-[11px] font-bold tracking-[0.3em] uppercase">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="font-display text-white text-[56px] md:text-[68px] leading-[0.95] mb-6">
              LET'S WORK<br /><span className="text-brand-red">TOGETHER.</span>
            </h2>
            <p className="text-gray-400 text-[15px] leading-[1.7] mb-12 max-w-[400px]">
              Have a question or need a quote? Reach out to us and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-7">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-brand-red/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-red" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-bold tracking-[0.2em] mb-1">{label}</div>
                    <div className="text-white text-[14px] font-medium leading-snug">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="bg-brand-charcoal p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={labelClass}>Your Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Company Name</label>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className={labelClass}>Category</label>
                <CategorySelect
                  value={form.category}
                  onChange={(v) => setForm({ ...form, category: v })}
                />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your requirement..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-[#c40510] disabled:bg-green-600 text-white text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-4 transition-all duration-300 ease-engineered"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} /> MESSAGE SENT
                  </>
                ) : (
                  <>
                    SEND MESSAGE <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
