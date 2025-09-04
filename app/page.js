//scuffed page no longer in use idk why its here or what it does. go to index.js
import { Footer, Navbar, FloatingBanner } from '../components';
import { About, Kuvat, Galleria, Palvelut, Hero, Yhteystiedot, Kankaat, Hinta } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden relative">
    
    <FloatingBanner />
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Kuvat />
    </div>
    <div className="relative">
      <Palvelut />
      <div className="gradient-04 z-0" />
      <Kankaat />
    </div>
    <Hinta />
    <div className="relative">
    </div>
    <Galleria />
    <Footer />
  </div>
);
export default Page;
