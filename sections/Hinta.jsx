'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';

const Hinta = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Hinta" textStyles="text-center" />
      <TitleText
        title={( <>HINTA-ARVIO</>)}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex">
        <div className="mt-[25px] flex flex-wrap justify-between mb-0 gap-[24px] mt-[8px] font-normal sm:text-[30px] text-[20px] text-center text-secondary-white">
        Jokaisen verhoiltavan tuotteen hinta on arvioitava erikseen.
Työn lopullinen hinta koostu tarvittavista materiaaleista (esim kangas, pehmusteet jne), verhoiltavan tuotteen kunnosta ja työtunneista.
Parhaimman hinta-arvion saatte lähettämällä verhoiltavasta tuotteesta valokuvan puhelimitse, sähköpostitse tai facebookin kautta Esan verhoiluun.
<br></br><br></br>
Lapuan ja sen lähikuntien alueella tulen tarvittaessa paikan päälle tekemään työn suunnitelmaa ja hinta-arviota.
        </div>
      </motion.div>
      <motion.div
     className={`flex-1 ${styles.flexCenter}`}
     variants={planetVariants("left")}>
      <img 
      alt="singer"
      src="Singer.png"
      className='w-[25%] h-[25%] object-contain brightness-70'
     />
    </motion.div>
    </motion.div>
  </section>
);

export default Hinta;