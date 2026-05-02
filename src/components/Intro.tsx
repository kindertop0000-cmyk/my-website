import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
  lang: string;
}

export const Intro: React.FC<IntroProps> = ({ onComplete, lang }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  const getSubtitle = () => {
    switch (lang) {
      case 'ar': return "فن الهندسة الرقمية";
      case 'tr': return "Dijital Mühendislik Sanatı";
      case 'de': return "Digitale Ingenieurskunst";
      default: return "Digital Engineering Artistry";
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full bg-[var(--bg-primary)] flex items-center justify-center overscroll-none z-[999999]"
      onClick={onComplete}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Line 1: EMAD HADID - Luxury Playfair Display */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-luxury-serif font-bold tracking-[4px] uppercase text-center leading-none">
            <span className="text-[#C9A24A]">Emad</span>{" "}
            <span className="text-[var(--text-primary)]">Hadid</span>
          </h1>
        </motion.div>
        
        {/* Line 2: DIGITALE EXZELLENZ - Montserrat SemiBold */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-xl md:text-3xl lg:text-4xl font-montserrat font-semibold text-[#C9A24A] uppercase tracking-[12px] text-center leading-none"
        >
          Digitale Exzellenz
        </motion.div>

        {/* Line 3: KLARE UND STARKE ERGEBNISSE - Montserrat Light (Typing Effect) */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.4, duration: 0.5 }}
           className="text-[9px] sm:text-[13px] md:text-[22px] lg:text-[32px] font-montserrat font-light text-[var(--text-secondary)] uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[10px] text-center leading-none whitespace-nowrap"
        >
          {getSubtitle().split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.4 + (index * 0.03),
                duration: 0.05
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
