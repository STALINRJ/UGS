import { useState, useEffect } from 'react';
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
    <div className="bg-[#0a0a0a] font-sans antialiased">
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
      <ProductDetail productTitle={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  );
}

export default App;
