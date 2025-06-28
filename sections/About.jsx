'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText
        title="| Tietoa"
        textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween,", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <span className="font-extrabold text-white"> Esan verhoilu </span> tarjoaa ammattitaitoisia verhoilupalveluja <span className="font-extrabold text-white"> Lapualla </span>, Karhunkylässä.
        Laadukkaan kädenjäljen perustana on verhoilijan ja puusepän ammattitaito ja  <span className="font-extrabold text-white"> kymmenien vuosien työkokemus aloilta. </span>
        Esan verhoilu tarjoaa<span className="font-extrabold text-white"> tyylikkään verhoilun </span> sekä kotien että julkisten tilojen huonekaluille.
        Myös <span className="font-extrabold text-white">ajoneuvojen penkit ja veneiden sisustat </span> saavat uuden ilmeen Esan verhoilussa.
        Verhoilut suunnitellaan ja toteutetaan aina asiakkaan tarpeiden ja toiveiden mukaan.

      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]" />

    </motion.div>

  </section>
);

export default About;
