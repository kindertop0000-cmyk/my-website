
import React, { useState, useEffect } from 'react';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Content, Language } from '../types';
import { SpotlightCard } from './SpotlightCard';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 500 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    let interval: NodeJS.Timeout;
    
    const timeout = setTimeout(() => {
      setDisplayedText(text.substring(0, 1));
      i = 1;
      interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, 50);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className="relative inline-block py-2">
      <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">
        {text}
      </span>
      <span 
        className="absolute top-0 left-0 w-full h-full bg-clip-text text-transparent bg-white"
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
      >
        {displayedText}
      </span>
      
      {/* Shimmer effect removed as per "white only" request */}
    </span>
  );
};

interface HeroProps {
  content: Content['hero'];
  isRTL: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Hero: React.FC<HeroProps> = ({ content, isRTL, lang, setLang }) => {
  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'ar', label: 'AR', native: 'العربية' },
    { code: 'tr', label: 'TR', native: 'Türkçe' },
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'de', label: 'DE', native: 'Deutsch' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as const;

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-16 md:pt-24 scroll-mt-24"
    >
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 w-full text-center py-8 md:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          {/* Royal Badge - Professional Ethereal Reveal & Breathing Animation */}
          <div className="flex justify-center mb-6 md:mb-14 pointer-events-none select-none">
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.98 }} // Removed blur for mobile performance
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 1.2,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ willChange: 'transform, opacity' }}
              className={`animate-luxury-drift inline-flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-3 rounded-full border border-secondary/30 bg-[var(--bg-secondary)]/40 backdrop-blur-xl ${isRTL ? 'flex-row-reverse' : 'flex-row'} relative group overflow-hidden`}
            >
               {/* Ambient Pulse for "Professional Fade" effect during the loop */}
               <motion.div 
                 className="absolute inset-0 bg-secondary/5"
                 animate={{ opacity: [0, 0.15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               />

               {/* Internal Shimmer Sweep - Looping professionally */}
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                 animate={{ x: ['-200%', '200%'] }}
                 transition={{ 
                   duration: 4.5, 
                   repeat: Infinity, 
                   ease: "easeInOut",
                   repeatDelay: 3
                 }}
               />

               <Crown size={12} className="text-secondary md:w-[14px] md:h-[14px]" />
                <motion.span 
                  className="text-[7px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-secondary/90 whitespace-nowrap"
                  animate={{ 
                    opacity: [0.6, 1, 0.6], // Very smooth "breathing" fade loop
                    letterSpacing: isRTL ? ["0.15em", "0.25em", "0.15em"] : ["0.3em", "0.45em", "0.3em"]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {content.badge}
                </motion.span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          {/* Language Switcher - Better spacing for touch */}
          <div className="flex justify-center mb-6 md:mb-12">
            <div className={`inline-flex items-center gap-1 ${isRTL ? 'bg-black' : 'bg-[var(--bg-secondary)]/30'} p-1 rounded-full border border-secondary/10 backdrop-blur-2xl`}>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`relative overflow-hidden px-4 md:px-6 py-2 rounded-full text-[10px] md:text-[11px] font-bold uppercase transition-all duration-500 ${
                    lang === l.code 
                      ? 'bg-secondary text-black' 
                      : 'text-[var(--text-secondary)] hover:text-secondary'
                  }`}
                >
                  {lang === l.code && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 mix-blend-multiply pointer-events-none rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 mix-blend-multiply pointer-events-none rounded-full border border-black/20"></div>
                      <div className="absolute inset-0 shadow-[inset_0_0px_20px_rgba(0,0,0,0.6)] pointer-events-none rounded-full"></div>
                    </>
                  )}
                  <span className="relative z-10">{l.native}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-12 w-full">
          {/* MASSIVE TITLES - Clean Matte Interior with Animated Border Lighting */}
          <div className="relative inline-block rounded-[2rem] md:rounded-[4rem] w-full max-w-4xl mx-auto group">
            <div className="relative p-[0.96px] w-full h-full overflow-hidden rounded-[2rem] md:rounded-[4rem]">
              {/* Border Lighting Trace */}
              <div 
                className="absolute -inset-[200%] z-0"
                style={{ transform: 'translateZ(0)' }}
              >
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_60%,rgba(212,175,55,0.8)_85%,rgba(255,255,255,0.64)_92%,rgba(212,175,55,0.8)_95%,transparent_100%)] animate-[spin_12s_linear_infinite]" />
              </div>

              <div 
                className="relative z-10 bg-black rounded-[1.95rem] md:rounded-[3.95rem] px-4 py-8 md:px-10 md:py-14 border border-white/5 flex items-center justify-center overflow-hidden h-full"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <h1 
                  className={`text-[1.8rem] sm:text-5xl md:text-7xl lg:text-[7rem] leading-tight tracking-tighter m-0 relative z-10 whitespace-nowrap text-white ${isRTL ? 'font-arabic font-bold' : 'font-premium-sans font-medium'}`} 
                  style={{ 
                    transform: 'translateZ(0)'
                  }}
                >
                  <TypewriterText text={content.title} delay={100} />
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          initial={{ opacity: 0 }} // Removed heavy blur inView
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-sm sm:text-xl md:text-3xl text-[var(--text-secondary)] mb-8 md:mb-20 max-w-4xl mx-auto leading-relaxed font-light px-2">
            {content.subtitle}
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center relative z-30 w-full max-w-sm md:max-w-none mx-auto">
            {/* CTA Button - Mobile width full-ish */}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(0,0,0,0.8), 0 0 40px rgba(212, 175, 55, 0.6)"
              }}
              className="group relative w-full sm:w-auto px-8 md:px-12 py-3.5 md:py-4 bg-gradient-to-r from-secondary via-[#fcd34d] to-secondary bg-[length:200%_auto] text-black font-black text-[12px] md:text-base uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-right flex items-center justify-center gap-3 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 mix-blend-multiply pointer-events-none rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 mix-blend-multiply pointer-events-none rounded-full border border-black/20"></div>
              <div className="absolute inset-0 shadow-[inset_0_0px_20px_rgba(0,0,0,0.6)] pointer-events-none rounded-full"></div>
              <span className="relative z-10">{content.cta}</span>
              <ArrowRight 
                className={`relative z-10 w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} 
                strokeWidth={3}
              />
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
            </motion.a>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="text-[var(--text-secondary)] hover:text-secondary font-black text-[10px] md:text-xs uppercase tracking-[0.3em] border-b border-transparent hover:border-secondary pb-1 transition-all py-2"
            >
              {content.explore}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
