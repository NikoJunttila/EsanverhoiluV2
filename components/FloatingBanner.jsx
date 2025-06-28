'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <>
    <motion.div

      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg"
    >
      <div className="absolute w-full h-full bg-black opacity-10" />
      <div className={`${styles.innerWidth} mx-auto flex items-center justify-between py-3 px-4 relative z-10`}>
        {/* Bannerin sisältö */}
        <div className="flex items-center gap-4 flex-1">
          <div className="text-2xl animate-pulse">📋</div>
          <div className="flex-1">
            <h3 className="font-bold text-lg md:text-xl">
              Kesätauko käynnissä
            </h3>
            <p className="text-base md:text-lg opacity-90">
              Parannamme tilojamme - palaamme syksyllä 2025 entistä paremmalla palvelulla!
            </p>
          </div>
        </div>

        {/* Sulje-nappi */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="ml-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200 flex-shrink-0"
          aria-label="Sulje ilmoitus"
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </motion.div>
    </>
  );
};

export default FloatingBanner;
