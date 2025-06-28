import { Footer, Navbar, FloatingBanner } from '../components';
import { About, Kuvat, Galleria, Palvelut, Hero, Yhteystiedot, Kankaat, Hinta } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden relative">
    <div>
      xdd
    </div>
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
      <Yhteystiedot />
    </div>
    <Galleria />
    <Footer />
  </div>
);
export default Page;
