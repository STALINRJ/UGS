import { useState, useEffect, useRef, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, ArrowUpRight, X, Copy } from 'lucide-react';
import { business, addressSearch, enquiryCategories } from '../data/business';
import type { EnquiryContext } from '../utils/enquiry';

type Form = { name: string; email: string; phone: string; company: string; category: string; message: string };
type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;
const fieldClass = 'w-full bg-brand-dark border border-[#737b87] focus:border-white text-white text-base px-4 py-3 min-h-12 placeholder:text-[#adb3bd]';
const labelClass = 'text-gray-100 text-sm font-semibold block mb-2';

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: '', email: '', phone: '', company: '', category: 'General Enquiry', message: '' });
  const [context, setContext] = useState<EnquiryContext | null>(null);
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const summary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const next = (e as CustomEvent<EnquiryContext>).detail;
      setContext(next);
      // Context is separate from the visitor's message. Switching services
      // replaces the selection while preserving everything the visitor typed.
      setForm(prev => ({ ...prev, category: next.category }));
      setSubmitted(false); setCopyStatus(''); setErrors({});
    };
    window.addEventListener('enquiry-context', handler);
    return () => window.removeEventListener('enquiry-context', handler);
  }, []);

  const update = (key: keyof Form, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: undefined }));
    setSubmitted(false); setCopyStatus('');
  };
  const validate = () => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (method === 'email' && !form.email.trim()) next.email = 'Enter an email address so we can reply.';
    else if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email address.';
    const digits = form.phone.replace(/\D/g, '');
    if (method === 'phone' && !digits) next.phone = 'Enter a phone number so we can call you.';
    else if (form.phone.trim() && (digits.length < 7 || digits.length > 15 || /[^\d\s()+.-]/.test(form.phone))) next.phone = 'Enter a valid phone number, including the country code if needed.';
    if (!context && !form.message.trim()) next.message = 'Tell us briefly what you need.';
    return next;
  };
  const draft = [`Name: ${form.name.trim()}`, `Preferred reply: ${method === 'email' ? 'Email' : 'Phone'}`, form.email.trim() && `Email: ${form.email.trim()}`, form.phone.trim() && `Phone: ${form.phone.trim()}`, form.company.trim() && `Company: ${form.company.trim()}`, `Category: ${form.category}`, context && `Enquiry about: ${context.subject}`, '', form.message.trim()].filter(line => line !== null).join('\n');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(); setErrors(next);
    if (Object.values(next).some(Boolean)) { requestAnimationFrame(() => summary.current?.focus()); return; }
    const subject = `${form.category}${context ? ` — ${context.subject}` : ''} — ${form.name.trim()}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`;
    setSubmitted(true);
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(draft); setCopyStatus('Enquiry copied. Paste it into an email to our team.'); }
    catch { setCopyStatus('Copy is unavailable here. Select and copy your enquiry from the text box below.'); }
  };
  const error = (key: keyof Errors) => errors[key] ? <p id={`error-${key}`} className="text-[#ffb4b9] text-sm mt-2">{errors[key]}</p> : null;

  return (
    <section id="contact" className="surface-dark bg-brand-dark text-white section-space">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-start">
        <div className="min-w-0 py-2 lg:py-6">
          <p className="eyebrow mb-5">GET IN TOUCH</p>
          <h2 className="font-display text-[52px] sm:text-[68px] leading-none mb-6">LET’S WORK<br /><span className="text-brand-red">TOGETHER.</span></h2>
          <p className="text-gray-300 text-base leading-relaxed max-w-[410px] mb-8">Tell us about your equipment or service requirement. Call directly, email our team or prepare an enquiry below.</p>
          <a href={business.phoneHref} className="contact-link"><Phone size={22} className="shrink-0 text-[#ff737c]" /><div><span className="block text-sm text-gray-300 mb-1">Call our team</span><span className="font-semibold text-lg">{business.phone}</span></div><ArrowUpRight size={20} className="ml-auto shrink-0" /></a>
          <a href={`mailto:${business.email}`} className="contact-link mt-3"><Mail size={22} className="shrink-0 text-[#ff737c]" /><div className="min-w-0"><span className="block text-sm text-gray-300 mb-1">Email us</span><span className="font-semibold text-sm sm:text-base break-words">{business.email}</span></div><ArrowUpRight size={20} className="ml-auto shrink-0" /></a>
          <div className="border-t border-white/30 mt-8 pt-7"><div className="flex items-center gap-3 mb-3"><MapPin size={21} className="text-[#ff737c]" /><h3 className="font-display text-2xl">VISIT US</h3></div><address className="not-italic text-gray-200 text-[15px] leading-relaxed">{business.address.map(line => <span className="block" key={line}>{line}</span>)}</address><a href={addressSearch} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center min-h-11 mt-3 text-sm font-semibold underline underline-offset-4">Find this address on Google Maps <ArrowUpRight size={17} /></a></div>
        </div>
        <div id="enquiry-form" className="min-w-0 bg-brand-charcoal border border-white/30 p-5 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div><h3 className="font-display text-3xl mb-2">SEND AN ENQUIRY</h3><p className="text-gray-300 text-sm leading-relaxed">This prepares an email in your email app. You’ll review it and press Send there.</p><p className="text-gray-300 text-sm mt-3">Fields marked * are required. We only need one way to reach you.</p></div>
            {context && <div className="border border-white/40 bg-white/5 p-4 flex gap-3 items-start"><div className="min-w-0"><p className="text-sm text-gray-300 mb-1">Your selection · {context.category}</p><p className="font-semibold break-words">{context.subject}</p></div><button type="button" aria-label="Remove enquiry selection" onClick={() => { setContext(null); update('category', 'General Enquiry'); }} className="ml-auto shrink-0 w-11 h-11 border border-white/40 grid place-items-center"><X size={18} /></button></div>}
            {Object.values(errors).some(Boolean) && <div ref={summary} tabIndex={-1} role="alert" className="border border-[#ff9ca4] p-4"><p className="font-semibold mb-2">Please check these details:</p><ul>{Object.entries(errors).filter(([,value]) => value).map(([key,value]) => <li key={key}><button type="button" onClick={() => document.getElementById(`contact-${key}`)?.focus()} className="text-left text-sm text-[#ffb4b9] underline underline-offset-4 py-2">{value}</button></li>)}</ul></div>}
            <div><label htmlFor="contact-name" className={labelClass}>Your name *</label><input required id="contact-name" name="name" autoComplete="name" value={form.name} onChange={e => update('name', e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'error-name' : undefined} className={fieldClass} placeholder="Your name" />{error('name')}</div>
            <fieldset><legend className={labelClass}>How should we reply?</legend><div className="flex flex-wrap gap-3">{(['email','phone'] as const).map(value => <label key={value} className={`flex items-center gap-3 min-h-11 px-4 border cursor-pointer ${method === value ? 'border-white bg-white/10' : 'border-[#737b87]'}`}><input type="radio" name="reply-method" value={value} checked={method === value} onChange={() => { setMethod(value); setErrors({}); setSubmitted(false); }} className="accent-[#e30613] w-4 h-4" /><span className="text-sm font-semibold">{value === 'email' ? 'Email' : 'Phone'}</span></label>)}</div></fieldset>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="contact-email" className={labelClass}>Email {method === 'email' ? '*' : '(optional)'}</label><input required={method === 'email'} id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={e => update('email', e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'error-email' : undefined} className={fieldClass} placeholder="you@company.com" />{error('email')}</div>
              <div><label htmlFor="contact-phone" className={labelClass}>Phone {method === 'phone' ? '*' : '(optional)'}</label><input required={method === 'phone'} id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={e => update('phone', e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'error-phone' : undefined} className={fieldClass} placeholder="Include country code" />{error('phone')}</div>
            </div>
            <details><summary className="text-sm text-gray-200 cursor-pointer min-h-11 flex items-center underline underline-offset-4">Add company details (optional)</summary><div className="mt-2"><label htmlFor="contact-company" className={labelClass}>Company (optional)</label><input id="contact-company" name="company" autoComplete="organization" value={form.company} onChange={e => update('company', e.target.value)} className={fieldClass} /></div></details>
            <div><label htmlFor="contact-category" className={labelClass}>Enquiry category</label><select id="contact-category" name="category" value={form.category} onChange={e => { if (context?.category !== e.target.value) setContext(null); update('category', e.target.value); }} className={fieldClass}>{enquiryCategories.map(category => <option key={category}>{category}</option>)}</select></div>
            <div><label htmlFor="contact-message" className={labelClass}>{context ? 'Additional details (optional)' : 'How can we help? *'}</label><textarea required={!context} id="contact-message" name="message" rows={4} value={form.message} onChange={e => update('message', e.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'error-message' : 'message-hint'} className={`${fieldClass} resize-y min-h-[120px]`} placeholder="Machine model, part reference, requirement and location…" /><p id="message-hint" className="text-gray-300 text-sm mt-2">{context ? 'Your selection is included automatically. Add any useful details here.' : 'Include a machine model or part reference if you have one.'}</p>{error('message')}</div>
            <button type="submit" className="primary-button w-full">CONTINUE IN EMAIL <Send size={17} /></button>
            {submitted && <div className="border border-white/40 p-4 space-y-3"><p role="status" className="text-gray-200 text-sm leading-relaxed">Your email app has been requested. Nothing has been sent automatically. If it didn’t open, copy the enquiry below and email it to {business.email}.</p><button type="button" onClick={copy} className="min-h-11 flex items-center gap-2 border border-white/40 px-4 text-sm font-semibold"><Copy size={17} />Copy enquiry</button><p role="status" className="text-gray-200 text-sm">{copyStatus}</p><label className="sr-only" htmlFor="enquiry-draft">Your enquiry draft</label><textarea id="enquiry-draft" readOnly value={draft} rows={7} className={fieldClass} /></div>}
          </form>
        </div>
      </div>
    </section>
  );
}
