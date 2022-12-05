'use client';
import {motion} from "framer-motion";
import styles from "../styles";
import {navVariants} from "../utils/motion";

const Navbar = () => {

  return(
  <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
      src="/icon.png"
      alt="search"
      className="w-[50px] h-[50px] object-contain"
       />
       <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        Esanverhoilu
       </h2>
       <a href="#yhteystiedot">
       <img
       src="/menu.svg"
       alt="menu"
       className="w-[24px] h-[24px] object-contain"
       /></a>
       
    </div>
  </motion.nav>
  )
};

export default Navbar;
