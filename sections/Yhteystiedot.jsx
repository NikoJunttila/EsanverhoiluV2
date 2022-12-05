'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer,fadeIn } from '../utils/motion';
import {TitleText, TypingText } from '../components';

const Yhteystiedot = () => (
  <section className={`${styles.paddings} relative z-10`} id="yhteystiedot">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Yhteystiedot" textStyles="text-center" />
      <TitleText title={<>Yhteystiedot</>} textStyles="text-center" />
      <motion.div
    variants={fadeIn('up', 'spring',0.5, 1)}
    className="gap-4 mt-[25px] justify-between gap-[24px] mt-[8px] font-normal sm:text-[28px] text-[20px] text-center text-secondary-white">
    <p className="font-bold">Esan Verhoilu</p>
    Esa Junttila<br></br>
    Puhelinnumero: 040-8344202<br></br>
    Osoite: Yliluomantie 5, 62160 Karhunkylä<br></br>
    Sähköposti: esa.tapani@anvianet.fi<br></br>
    <a className='text-blue-600' href="https://www.facebook.com/verhoomoesa/">Facebook</a><br></br>
    <p className="font-bold mt-3">Esan verhoilu avoinna sopimuksen mukaan, otathan etukäteen yhteyttä!</p>
    Y-tunnus: 2758041-2
    </motion.div>
    <motion.div
    className='mt-8'
    variants={fadeIn('up', 'spring',1, 1)}>
<iframe title='osoite' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1814.2177298775598!2d23.145744255198387!3d62.95360334320526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46864cd6abfe83cf%3A0x4c064a9a28d6c975!2sYliluomantie%205%2C%2062160%20Karhunkyl%C3%A4!5e0!3m2!1sfi!2sfi!4v1670175967848!5m2!1sfi!2sfi" width="100%" height="400px" loading="lazy"></iframe>
    </motion.div>
    </motion.div>
  </section>
);

export default Yhteystiedot;