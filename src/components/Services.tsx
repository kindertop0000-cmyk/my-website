
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Palette, Zap, MessageSquare, Server, Search, Wrench, Smartphone } from 'lucide-react';
import { Content } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ServicesProps {
  content: Content['services'];
  isRTL: boolean;
}

const getIcon = (iconName: string) => {
  const className = "w-12 h-12 md:w-20 md:h-20 text-secondary transition-all duration-300 group-hover:scale-110"; 
  switch (iconName) {
    case 'web': return <Monitor className={className} />;
    case 'ai': return <Cpu className={className} />;
    case 'design': return <Palette className={className} />;
    case 'performance': return <Zap className={className} />;
    case 'consulting': return <MessageSquare className={className} />;
    case 'systems': return <Server className={className} />;
    case 'seo': return <Search className={className} />;
    case 'maintenance': return <Wrench className={className} />;
    default: return <Smartphone className={className} />;
  }
};

const ServiceCard: React.FC<{ 
  item: any; 
  idx: number; 
  isRTL: boolean; 
}> = ({ item, idx, isRTL }) => {
  const [isTouch, setIsTouch] = React.useState(false);

  React.useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden transition-all duration-500 rounded-2xl bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] hover:border-secondary/40 h-full shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Premium Glass Reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-50" />
      
      <motion.div 
        initial={false}
        className="relative z-20 p-8 md:p-12 transition-all duration-700 h-full flex flex-col overflow-hidden group/inner"
      >
        {/* Refined Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Icon Presentation */}
        <div className={`mb-10 relative flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
          <div 
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.05] flex items-center justify-center relative z-10 shadow-lg group-hover/inner:border-secondary/30 transition-all duration-500"
          >
            {getIcon(item.icon)}
          </div>
        </div>
        
        <motion.h3 
          initial={{ color: "var(--text-primary)" }}
          whileInView={{ color: "rgba(212, 175, 55, 1)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, delay: idx * 0.1 }}
          className="text-2xl md:text-3xl font-black tracking-tight mb-4 group-hover/inner:text-secondary transition-colors duration-500 relative z-10" 
        >
          {item.title}
        </motion.h3>
        
        <motion.p 
          whileInView={isTouch ? { color: "var(--text-primary)" } : {}}
          viewport={{ once: true, amount: 0.8 }}
          className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-light mb-8 flex-grow group-hover/inner:text-[var(--text-primary)] transition-colors duration-500 relative z-10"
        >
          {item.description}
        </motion.p>

        {/* Success Step Indicator */}
        <motion.div 
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.05 + (idx * 0.05), ease: "easeOut" }}
          viewport={{ once: true }}
          className={`relative z-10 mt-auto flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-secondary transition-colors duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05), ease: "circOut" }}
            viewport={{ once: true }}
            className="h-[1px] bg-secondary group-hover/inner:w-16 transition-all duration-300" 
          />
          <span className="whitespace-nowrap italic transition-all duration-200 text-secondary">
            {idx + 1} &mdash; DIGITAL SYSTEMS
          </span>
        </motion.div>
      </motion.div>

      {/* Design Accents */}
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-10 h-10 border-t border-r border-secondary/10 rounded-tr-2xl"></div>
      </div>
    </motion.div>
  );
};

export const Services: React.FC<ServicesProps> = ({ content, isRTL }) => {
  return (
    <section id="services" className="py-20 md:py-40 bg-transparent relative scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        <div className="mb-16 md:mb-32 text-center">
          <span className="text-secondary font-black text-[10px] md:text-sm tracking-[0.5em] uppercase mb-4 block opacity-80">Technological Mastery</span>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-black text-[var(--text-primary)] mb-6 md:mb-10 tracking-tighter">{content.title}</h2>
          <p className="text-base md:text-2xl text-[var(--text-secondary)] max-w-4xl font-light leading-relaxed mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-visible">
          {content.items.map((item, idx) => (
            <ServiceCard key={idx} item={item} idx={idx} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};
