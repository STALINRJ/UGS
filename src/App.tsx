import { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { business } from './data/business';
import { requestEnquiry } from './utils/enquiry';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      setActiveProduct(title);
    };
    window.addEventListener('open-product', handler);
    return () => window.removeEventListener('open-product', handler);
  }, []);

  return (
    <div className="bg-[#0a0a0a] font-body antialiased pb-20 lg:pb-0">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Categories />
        <WhyUs />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
      {!activeProduct && <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/40 bg-brand-dark text-white flex px-3 py-2 gap-2" style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }} aria-label="Quick contact"><a href={business.phoneHref} className="flex-1 flex justify-center items-center gap-2 min-h-12 text-sm font-semibold border border-white/40"><Phone size={18} />Call UGS</a><button onClick={() => requestEnquiry()} className="primary-button flex-1">ENQUIRE <ArrowRight size={17} /></button></div>}
      <ProductDetail productTitle={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}

export default App;
