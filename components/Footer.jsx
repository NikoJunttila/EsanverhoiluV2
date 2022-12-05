'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    id="footer"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="items-center text-center gap-4">
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Esanverhoilu. All rights reserved.
          </p>

         
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;