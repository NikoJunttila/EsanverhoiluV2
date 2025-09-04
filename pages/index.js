import { Footer, Navbar, FloatingBanner } from '../components';
import { About, Kuvat, Feedback, Palvelut, Hero, Yhteystiedot, Kankaat, Hinta } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <FloatingBanner />
    <div className='pt-9'>
      <Navbar />
    </div>
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Kuvat />
    </div>
    <div className='relative'>
      <Palvelut />
      <div className='gradient-04 z-0' />
      <Kankaat />
    </div>
    <Hinta />
    <div className='relative'>
      <Yhteystiedot />
      <div className='gradient-04 z-0' />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;

