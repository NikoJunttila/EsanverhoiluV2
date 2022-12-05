'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { TitleText, TypingText } from '../components';
import {staggerContainer, fadeIn } from '../utils/motion';

const Kankaat = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Kankaat" />
        <TitleText title={<>Kankaat</>} />
        <div className="mt-[25px] flex flex-wrap justify-between gap-[24px] mt-[8px] font-normal sm:text-[28px] text-[20px] text-center text-secondary-white">
        Jotta verhoiltavasta tuotteesta tulisi täydellisen onnistunut, on Esan verhoilulle tärkeää tehdä asiakkaan kanssa yhteistyötä jo sunnitteluvaiheessa.
Esimerkiksi kankaan valintaa helpottaa Esan verhoomosta löytyvät kangasmallipalat ja lisäksi alta löytyvät linkit eri kangasvalmistajien sivuille.
      Kankaan ym. verhoiluun tarvittavan materiaalin hankinnan suorittaa yleensä Esan verhoilu tai vaihtoehtoisesti asiakas itse, jos asiakas näin haluaa.
        </div>
        <div className='text-blue-600 text-center text-[20px]'>
                <a href="http://www.Annala.fi">Annala.fi</a><br />
                <a href="http://www.Kangastukku.com">Kangastukku.com</a><br />
                <a href="http://www.Lauritzon.fi">Lauritzon.fi</a><br />
                <a href="http://www.Kankaita.com">Kankaita.com</a><br />
                <a href="http://www.Orientoccident.fi">Orientoccident.fi</a><br />
                <a href="http://www.sisustusMuovikum.fi">sisustusMuovikum.fi</a><br />
                <a href="http://www.Patjajapeite.com">Patjajapeite.com</a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left","spring", 0.2,1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/kankaat.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain brightness-50	"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Kankaat;