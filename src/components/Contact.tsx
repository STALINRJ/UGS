import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const contactInfo = [
  { icon: MapPin, label: 'VISIT US', value: 'RR Nagar, Bangalore' },
  { icon: Phone, label: 'CALL US', value: '+91 97411 01035', href: 'tel:+919741101035' },
  { icon: Mail, label: 'EMAIL US', value: 'info@universalgraphicservices.com', href: 'mailto:info@universalgraphicservices.com' },
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
  'w-full bg-brand-dark border border-white/10 focus:border-brand-red text-white text-[16px] px-4 py-4 outline-none transition-colors duration-300';
const labelClass =
  'text-gray-300 text-[12px] font-bold tracking-[0.2em] uppercase block mb-2.5';

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
    const subject = `${form.category || 'Website enquiry'} — ${form.name.trim()}`;
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}

${form.message}`;
    window.location.href = `mailto:info@universalgraphicservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-dark py-16 md:py-24 px-5 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-white/[0.06]">
          {/* Left — Info */}
          <div ref={leftRef} className="bg-brand-dark p-5 sm:p-8 lg:p-12">
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
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 border border-brand-red/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-red" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-400 text-[12px] font-bold tracking-[0.2em] mb-1">{label}</div>
                    <div className="text-white text-[15px] font-medium leading-relaxed break-words">{href ? <a href={href} className="text-[13px] sm:text-[15px] hover:underline underline-offset-4">{value}</a> : value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="bg-brand-charcoal p-5 sm:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><h3 className="font-display text-white text-3xl">SEND AN ENQUIRY</h3>
              <p id="email-help" className="text-gray-400 text-sm leading-relaxed mt-2">Complete your details to prepare an email. You’ll review and send it in your email app.</p></div>
              <div>
                <label htmlFor="contact-name" className={labelClass}>Your Name</label>
                <input
                  required
                  id="contact-name" name="name" autoComplete="name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email" className={labelClass}>Email</label>
                  <input
                    required
                    type="email"
                    id="contact-email" name="email" autoComplete="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>Phone</label>
                  <input
                    required
                    type="tel" inputMode="tel" id="contact-phone" name="phone" autoComplete="tel" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-company" className={labelClass}>Company Name</label>
                <input
                  id="contact-company" name="company" autoComplete="organization" value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="contact-category" className={labelClass}>Category</label>
                <div className="relative">
                  <select id="contact-category" name="category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={`${inputClass} appearance-none pr-12`}>
                    <option value="">Select a category</option>
                    {categories.map(category => <option key={category}>{category}</option>)}
                  </select>
                  <ChevronDown aria-hidden="true" size={18} className="absolute right-4 top-5 pointer-events-none text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea
                  required
                  rows={5}
                  id="contact-message" name="message" autoComplete="off" value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-y min-h-[140px]`}
                  placeholder="Tell us about your requirement..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-[#c40510] disabled:bg-green-600 text-white text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-4 transition-all duration-300 ease-engineered"
              >
                CONTINUE IN EMAIL <Send size={16} aria-hidden="true" />
              </button>
              {submitted && <p role="status" className="text-gray-300 text-sm leading-relaxed">Your email app has been requested. Nothing has been sent automatically. If it didn’t open, email <a className="underline break-all" href="mailto:info@universalgraphicservices.com">info@universalgraphicservices.com</a> or call <a className="underline" href="tel:+919741101035">+91 97411 01035</a>. Your details remain here.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
