
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Content } from '../types';

const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (e.g., "150+" -> { num: 150, suffix: "+" })
  const num = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = num;
      if (start === end) {
        setDisplayValue(num);
        return;
      }

      let totalDuration = 2000;
      let incrementTime = (totalDuration / end) > 10 ? (totalDuration / end) : 10;

      let timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, num]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

interface AboutProps {
  content: Content['about'];
  isRTL: boolean;
}

import { SpotlightCard } from './SpotlightCard';

export const About: React.FC<AboutProps> = ({ content, isRTL }) => {
  const imgRef = React.useRef(null);
  
  return (
    <section id="about" className="py-24 md:py-48 bg-transparent relative overflow-hidden scroll-mt-24 w-full">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-40">
          
          {/* Image Container - Enhanced with Glow and Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Dynamic Backlight */}
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 md:-inset-20 bg-secondary/10 blur-[80px] md:blur-[120px] rounded-full opacity-40 z-0 group-hover:opacity-60 transition-opacity duration-1000"
            ></motion.div>
            
            <div className="relative z-10" ref={imgRef}>
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 md:p-6 luxury-glow-border rounded-[2.5rem] md:rounded-[4rem] bg-[var(--bg-secondary)]/80 shadow-2xl"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3.5rem] relative transition-all duration-500 blur-0 scale-100 opacity-100">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80" 
                    alt="Emad Hadid" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 pointer-events-none select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>
                </div>
              </motion.div>
              
              {/* Experience Badge - Floating & Glowing */}
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-4 md:-bottom-12 md:-right-12 bg-secondary px-6 py-4 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center text-black border-4 md:border-[12px] border-[var(--bg-primary)] z-20"
                style={{ opacity: 1 }}
              >
                <span className="text-3xl md:text-7xl font-black leading-none tracking-tighter">
                  <CountUp value="10+" />
                </span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mt-2 opacity-80">Experience</span>
              </motion.div>

              {/* Decorative "Golden Thread" */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-secondary/30 rounded-tl-[3rem] hidden md:block"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-secondary/30 rounded-bl-[3rem] hidden md:block"></div>
            </div>
          </motion.div>

          {/* Text Content - Refined Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={`w-full lg:w-1/2 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <div className={`inline-flex items-center gap-4 mb-8 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-sm md:text-xl whitespace-nowrap">{content.subtitle}</span>
              <div className="w-16 h-[2px] bg-secondary shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
            </div>
            
            <h2 className="text-4xl md:text-8xl font-black text-[var(--text-primary)] mb-8 md:mb-14 leading-[0.9] tracking-tighter">
              {content.title}
            </h2>
            
            <div className="relative mb-12 md:mb-20">
              <p className={`text-lg md:text-3xl text-[var(--text-primary)] opacity-80 font-light leading-relaxed italic border-secondary/40 py-2 ${isRTL ? 'border-r-4 pr-8 md:pr-12' : 'border-l-4 pl-8 md:pl-12'}`}>
                {content.description}
              </p>
              {/* Decorative Quote Mark */}
              <span className={`absolute -top-10 text-secondary/10 text-9xl font-serif select-none ${isRTL ? '-right-4' : '-left-4'}`}>"</span>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {content.stats.map((stat, idx) => (
                <SpotlightCard 
                  key={idx} 
                  className="relative p-6 md:p-10 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-color)] hover:border-secondary transition-all duration-700 group overflow-hidden shadow-2xl"
                >
                  <div className="relative z-10">
                    <div className="text-3xl md:text-6xl font-black text-secondary mb-2 tracking-tighter">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-[10px] md:text-xs text-[var(--text-secondary)] font-black uppercase tracking-[0.4em]">{stat.label}</div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
