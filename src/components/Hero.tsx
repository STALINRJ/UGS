import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { products } from '../data/products';
import { navigateTo } from '../utils/navigation';
import { browseCategory } from '../utils/enquiry';

const scope = [
  ['CTP', 'New & pre-owned equipment'], ['SPARES', 'Parts & components'],
  ['CONSUMABLES', 'Pressroom supplies'], ['SERVICE', 'Installation & maintenance'],
];

export default function Hero() {
  return (
    <section id="home" className="premium-hero surface-dark text-white">
      <div className="hero-composition">
        <div className="hero-copy">
          <p className="hero-kicker"><span />PRINT EQUIPMENT. PARTS. EXPERTISE.</p>
          <h1>PRECISION<br />IN EVERY<br /><span>IMPRESSION.</span></h1>
          <p className="hero-description">The equipment behind the impression.<br className="hidden sm:block" /> CTP systems, printing essentials and dependable service — all in one place.</p>
          <div className="hero-actions">
            <button onClick={() => navigateTo('#products')} className="hero-primary">Explore our products <ArrowUpRight size={20} /></button>
            <button onClick={() => navigateTo('#services')} className="hero-secondary">Our services <ArrowUpRight size={17} /></button>
          </div>
          <div className="hero-location"><span>BENGALURU, INDIA</span><button onClick={() => navigateTo('#categories')} aria-label="Explore what we offer"><ArrowDown size={16} /></button></div>
        </div>
        <div className="hero-showcase">
          <div className="showcase-topline"><span>THE PREPRESS COLLECTION</span><span>01 / CTP</span></div>
          <div className="showcase-image">
            <span aria-hidden="true" className="showcase-lettering">CTP</span>
            <img src={products[1].img} alt="CRON H Series computer-to-plate equipment" fetchPriority="high" width="800" height="600" />
          </div>
          <div className="showcase-caption">
            <div><p>CRON H SERIES</p><span>Computer-to-plate systems</span></div>
            <button onClick={() => browseCategory('CTP')} aria-label="Explore CRON CTP equipment"><ArrowUpRight size={24} /></button>
          </div>
          <div aria-hidden="true" className="showcase-red-rule" />
        </div>
      </div>
      <div className="hero-scope">
        {scope.map(([title, desc], i) => <div key={title}><span className="scope-number">0{i + 1}</span><div><p>{title}</p><span>{desc}</span></div></div>)}
      </div>
    </section>
  );
}
