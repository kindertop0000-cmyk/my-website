
import { ArrowLeft, ArrowUpRight, Layout, Globe, Cpu, Fingerprint, Database, Network, Share2, Code2, Lock, Unlock, X } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Content } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ProjectsProps {
  content: Content['projects'];
  isRTL?: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ content, isRTL }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showRestricted, setShowRestricted] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showMessageOverlay, setShowMessageOverlay] = useState(false);
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (showMessageOverlay) {
      // Auto-hide the text overlay after 3 seconds
      const hideTimer = setTimeout(() => {
        setShowMessageOverlay(false);
      }, 4000);

      return () => clearTimeout(hideTimer);
    } else if (showImage) {
      // If the text is gone but image is still showing, wait 3 seconds then return to site
      const returnTimer = setTimeout(() => {
        setShowImage(false);
      }, 4000);
      
      return () => clearTimeout(returnTimer);
    }
  }, [showMessageOverlay, showImage]);

  // Handle PIN logic when pin reaches 4 characters
  useEffect(() => {
    if (pin.length === 4) {
      if (pin === '1978') {
        setShowRestricted(false);
        setShowImage(true);
        setShowMessageOverlay(true);
        setPin('');
      } else {
        const timer = setTimeout(() => {
          setPin('');
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pin, isRTL]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when vault opens immediately with mobile optimization
  useEffect(() => {
    if (showRestricted && inputRef.current) {
      // Clear previous pin
      setPin('');
      
      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Force keyboard on some mobile browsers
          inputRef.current.click();
        }
      };

      // Safari requires direct user interaction. 
      // Since this effect is triggered by a click (which set showRestricted),
      // we try to focus as fast as possible.
      focusInput();
      
      const t1 = setTimeout(focusInput, 10);
      const t2 = setTimeout(focusInput, 100);
      const t3 = setTimeout(focusInput, 500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [showRestricted]);

  // DISABLE BODY SCROLL & RESET INTERNAL SCROLL
  useEffect(() => {
    if (selectedProject !== null || showRestricted) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      // Reset internal scroll position after animation frames
      const timer = setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
      }, 30);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject, showRestricted]);
  
  // Helper to get the thematic icon based on index/context
  const getThematicIcon = (idx: number) => {
    const iconClass = "w-full h-full text-secondary/20 group-hover:text-secondary/40 transition-all duration-1000 ease-in-out";
    switch (idx) {
      case 0: return <Layout strokeWidth={0.3} className={iconClass} />;
      case 1: return <Database strokeWidth={0.3} className={iconClass} />;
      case 2: return <Cpu strokeWidth={0.3} className={iconClass} />;
      case 3: return <Fingerprint strokeWidth={0.3} className={iconClass} />;
      default: return <Globe strokeWidth={0.3} className={iconClass} />;
    }
  };

  const getDecorativeElement = (idx: number) => {
     const decorClass = "absolute text-[var(--text-primary)]/5 group-hover:text-secondary/20 transition-all duration-700";
     switch(idx) {
       case 0: return <Share2 className={`${decorClass} top-10 right-10 w-16 md:w-24 h-16 md:h-24 rotate-45`} strokeWidth={0.5} />;
       case 1: return <Network className={`${decorClass} top-1/3 left-10 w-20 md:w-32 h-20 md:h-32 -rotate-12`} strokeWidth={0.5} />;
       case 2: return <Code2 className={`${decorClass} bottom-1/3 right-10 w-16 md:w-20 h-16 md:h-20 rotate-12`} strokeWidth={0.5} />;
       case 3: return <Globe className={`${decorClass} top-20 left-20 w-20 md:w-28 h-20 md:h-28 opacity-10`} strokeWidth={0.5} />;
       default: return null;
     }
  }
  return (
    <section id="projects" className="py-10 md:py-20 bg-transparent relative scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Header Section */}
        <motion.div 
          className={`flex flex-col mb-12 md:mb-20 ${showRestricted ? 'items-center' : 'items-start'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence>
            {!showRestricted ? (
              <motion.div 
                key="header-normal"
                className="max-w-3xl w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-secondary font-black text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3 md:mb-6 block opacity-80">
                  Our Legacy
                </span>
                <h2 className={`text-3xl sm:text-5xl md:text-8xl font-black text-[var(--text-primary)] mb-4 md:mb-8 leading-tight tracking-tighter ${isRTL ? 'font-arabic' : ''}`}>
                  {content.title}
                </h2>
                <p className={`text-base md:text-3xl text-[var(--text-secondary)] font-light mb-6 md:mb-12 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {content.subtitle}
                </p>
                
                <motion.button 
                  onClick={() => setShowRestricted(true)}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="group flex items-center gap-6 md:gap-10 text-secondary font-black transition-all relative py-2"
                >
                  <div className={`rtl:order-2 ltr:order-1 relative flex flex-col ${isRTL ? 'items-end' : 'items-start'}`}>
                    <motion.span 
                      variants={{
                        initial: { color: "rgba(212, 175, 55, 0.8)", x: 0 },
                        hover: { color: "rgba(212, 175, 55, 1)", x: isRTL ? -8 : 8 }
                      }}
                      className={`text-lg md:text-2xl tracking-tight leading-none ${isRTL ? 'font-arabic' : 'font-luxury-serif italic'}`}
                    >
                      {content.viewAll}
                    </motion.span>
                    
                    {/* Animated Underline */}
                    <div className="h-[1.5px] w-full mt-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-secondary/20" />
                      <motion.div 
                        variants={{
                          initial: { x: "-100%" },
                          hover: { x: "0%" }
                        }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                      />
                    </div>
                  </div>
                   
                   <motion.div 
                     variants={{
                       initial: { scale: 1, rotate: 0 },
                       hover: { scale: 1.1, rotate: -5 },
                       tap: { scale: 0.9, rotate: 5, transition: { type: "spring", stiffness: 400, damping: 10 } }
                     }}
                     className="rtl:order-1 ltr:order-2 relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0"
                   >
                     {/* Tap Flash Effect */}
                     <motion.div 
                       variants={{
                         initial: { opacity: 0, scale: 0.5 },
                         tap: { opacity: 0.4, scale: 1.5, transition: { duration: 0.2 } }
                       }}
                       className="absolute inset-0 bg-secondary rounded-full z-0 pointer-events-none"
                     />

                     {/* Glow Background */}
                     <motion.div 
                       variants={{
                         initial: { opacity: 0, scale: 0.8 },
                         hover: { opacity: 1, scale: 1.2 }
                       }}
                       className="absolute inset-0 bg-secondary/10 blur-xl rounded-full"
                     />
                     
                     <div className="absolute inset-0 border border-secondary/30 rounded-full group-hover:border-secondary transition-all duration-500" />
                     
                     <motion.div 
                       className="absolute inset-1 border border-secondary/10 rounded-full"
                       animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     />
                     
                     <motion.div
                       variants={{
                         initial: { y: 0, opacity: 0.7, scale: 1 },
                         hover: { y: -3, opacity: 1 },
                         tap: { scale: 0.85, opacity: 1 }
                       }}
                       className="relative z-10"
                     >
                       <Lock size={18} className="md:w-6 md:h-6 text-secondary brightness-125" strokeWidth={2} />
                     </motion.div>
                   </motion.div>
                </motion.button>
              </motion.div>
            ) : (
              <motion.div 
                key="header-restricted"
                className="w-full max-w-md mx-auto flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Restricted Text Instructions */}
                <div className="mb-8 md:mb-12 text-center max-w-sm">
                  <h3 className={`text-xl md:text-2xl font-black text-secondary mb-3 tracking-widest ${isRTL ? 'font-arabic' : ''}`}>
                    {content.restricted.title}
                  </h3>
                  <p className={`text-xs md:text-sm text-white/50 leading-relaxed font-light ${isRTL ? 'font-arabic' : ''}`}>
                    {content.restricted.description}
                  </p>
                </div>

                {/* PIN Display Boxes */}
                <div className="mb-8 md:mb-12 w-full relative flex justify-center" onClick={() => inputRef.current?.focus()}>
                  <div className="flex gap-3 md:gap-5" dir="ltr">
                    {[0, 1, 2, 3].map((idx) => (
                      <div 
                        key={idx} 
                        className={`w-12 h-16 md:w-16 md:h-20 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center ${
                          pin.length === idx 
                            ? 'border-secondary bg-secondary/10 shadow-[0_0_30px_rgba(212,175,55,0.4)]' 
                            : pin.length > idx 
                            ? 'border-white/40 bg-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.5)]' 
                            : 'border-white/20 bg-black/40 opacity-60'
                        }`}
                      >
                        {pin[idx] ? (
                          <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-2xl md:text-4xl font-black text-secondary drop-shadow-[0_0_12px_rgba(212,175,55,0.8)] font-mono"
                          >
                            {pin[idx]}
                          </motion.div>
                        ) : (
                          <div className={`h-[2px] rounded-full transition-all duration-500 ${pin.length === idx ? 'bg-secondary w-5 animate-pulse' : 'bg-white/10 w-2'}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    ref={inputRef}
                    maxLength={4}
                    value={pin}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      if (val.length <= 4) setPin(val);
                    }}
                    className="absolute opacity-0 inset-0 w-full h-full cursor-pointer touch-none z-0"
                    autoFocus
                    autoComplete="off"
                  />
                </div>

                <button 
                  onClick={() => {
                    setShowRestricted(false);
                    setPin('');
                  }}
                  className={`group flex items-center gap-3 text-white/70 hover:text-white transition-all text-xs font-black uppercase tracking-[0.3em] ${isRTL ? 'font-arabic' : ''}`}
                >
                  <ArrowLeft className={`w-4 h-4 transition-transform group-hover:-translate-x-2 ${isRTL ? 'rotate-180 group-hover:translate-x-2' : ''}`} />
                  {content.restricted.cancel}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
          {content.items.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
            >
              <SpotlightCard 
                className="group relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-[var(--border-color)]" 
                spotlightColor="rgba(212, 175, 55, 0.15)"
              >
                  <div 
                    className="relative z-20 h-full flex flex-col overflow-hidden group-hover:border-secondary/30 transition-all duration-700 cursor-pointer group/item"
                    onClick={() => setSelectedProject(idx)}
                  >
                  {/* Decorative Content Layer */}
                  <div className="relative aspect-[4/2.85] md:aspect-[1/0.95] overflow-hidden bg-[var(--bg-secondary)] flex items-center justify-center p-10 md:p-11 transition-colors duration-700">
                    
                    <motion.div 
                      className="w-[120%] h-[120%] absolute -right-[15%] -top-[5%] z-0"
                      initial={{ rotate: 12, scale: 1, opacity: 0.1 }}
                      whileInView={{ rotate: 5, scale: 1.05, opacity: 0.4 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {getThematicIcon(idx)}
                    </motion.div>
                    
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none"
                      initial={{ x: 0, y: 0, opacity: 0.1 }}
                      whileInView={{ x: 4, y: -4, opacity: 0.5 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      {getDecorativeElement(idx)}
                    </motion.div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-20"></div>
                  </div>

                  {/* Content Layer */}
                  <div className="py-7 md:py-11 px-8 md:px-12 relative flex flex-col flex-grow bg-gradient-to-b from-transparent to-[var(--bg-primary)]">

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[1.5px] bg-secondary group-hover:w-20 transition-all duration-700 ease-[0.16,1,0.3,1]"></div>
                      <span className="text-secondary text-[11px] font-black uppercase tracking-[0.4em] mb-[1px]">
                        {project.category}
                      </span>
                    </div>
                    
        <motion.h3 
          initial={{ color: "var(--text-primary)" }}
          whileInView={{ color: "rgba(212, 175, 55, 1)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, delay: idx * 0.1 }}
          className="text-2xl md:text-5xl font-black mb-4 leading-tight tracking-tighter group-hover:text-secondary transition-colors duration-500"
        >
          {project.title}
        </motion.h3>
                    
                    <p className="text-[var(--text-secondary)] text-sm md:text-lg font-light leading-relaxed max-w-md group-hover:text-[var(--text-primary)] transition-colors duration-500 mb-8">
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-[var(--border-color)] pt-6">
                      <span className="text-[11px] text-[var(--text-secondary)] font-black uppercase tracking-[0.25em]">{project.year}</span>
                      <div 
                        className="group/btn relative h-12 md:h-16 flex items-center gap-5 bg-transparent cursor-pointer hover:translate-x-1.5 transition-transform duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(idx);
                        }}
                      >
                        <span className="text-secondary text-[11px] md:text-sm font-black uppercase tracking-[0.25em] opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500 ease-out">
                          {isRTL ? 'التفاصيل' : 'Details'}
                        </span>
                        
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-secondary/40 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:border-secondary group-hover/btn:scale-110 transition-all duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0)] group-hover/btn:shadow-[0_0_60px_rgba(212,175,55,0.7)]">
                          <motion.div 
                            className="absolute inset-0 bg-white/40 -translate-x-full group-hover/btn:translate-x-full"
                             style={{ skewX: -20 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                          />
                          <ArrowUpRight className="text-secondary group-hover/btn:text-black w-6 h-6 md:w-10 md:h-10 absolute transform -translate-x-full translate-y-full opacity-0 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]" />
                          <ArrowUpRight className="text-[var(--text-primary)] group-hover/btn:opacity-0 w-6 h-6 md:w-10 md:h-10 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal Overlay */}
      {typeof document !== 'undefined' && createPortal(
        <>
          <AnimatePresence>
            {selectedProject !== null && (
            <motion.div 
              key="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--bg-primary)]/90 backdrop-blur-3xl md:p-8 lg:p-12 overflow-hidden"
              style={{ height: '100dvh', width: '100vw' }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full md:h-auto md:max-h-[85dvh] md:max-w-6xl bg-[#050505] border-b md:border border-white/10 md:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row overflow-hidden"
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(null);
                  }}
                  className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} z-50 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors group`}
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
   
                {/* Media Section */}
                <div className="w-full md:w-3/5 aspect-video md:aspect-auto bg-[#0a0a0a] relative shrink-0 overflow-hidden group/modal-img">
                  {content.items[selectedProject] && (
                    <>
                      <motion.img 
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={content.items[selectedProject].image} 
                        alt={content.items[selectedProject].title}
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover/modal-img:scale-105 pointer-events-none select-none"
                        loading="eager"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                      />
                      {/* Transparent Guard Overlay */}
                      <div className="image-overlay-guard" onContextMenu={(e) => e.preventDefault()} />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#050505] via-transparent to-transparent opacity-60"></div>
                </div>
   
                {/* Content Section */}
                <div 
                  ref={scrollContainerRef}
                  className="w-full md:w-2/5 p-8 md:p-14 flex flex-col bg-[#050505] justify-center overflow-y-auto scrollbar-hide relative"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-3 mb-6 md:mb-10">
                      <div className="w-12 h-[1px] bg-secondary shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
                      <span className="text-secondary text-[11px] md:text-xs font-black uppercase tracking-[0.5em]">
                        {content.items[selectedProject]?.category}
                      </span>
                    </div>
    
                    <h3 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6 md:mb-10 leading-none tracking-tighter italic font-luxury-serif">
                      {content.items[selectedProject]?.title}
                    </h3>
    
                    <p className="text-[var(--text-primary)]/60 text-base md:text-xl font-light leading-relaxed mb-10 md:mb-16">
                       {content.items[selectedProject]?.description}
                    </p>
    
                    <div className="grid grid-cols-2 gap-10 md:gap-14 pt-10 border-t border-white/10">
                       <div>
                        <div className="text-[10px] md:text-[11px] text-secondary font-black uppercase tracking-[0.3em] mb-3 opacity-60">YEAR</div>
                        <div className="text-[var(--text-primary)] font-medium text-lg md:text-2xl">{content.items[selectedProject]?.year}</div>
                      </div>
                       <div>
                        <div className="text-[10px] md:text-[11px] text-secondary font-black uppercase tracking-[0.3em] mb-3 opacity-60">EXPERTISE</div>
                        <div className="text-[var(--text-primary)] font-medium text-lg md:text-2xl">{content.items[selectedProject]?.category}</div>
                      </div>
                    </div>

                    <div className="mt-12 md:mt-20">
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Portfolio Success Preview Modal */}
          <AnimatePresence>
            {showImage && (
            <motion.div 
              key="success-preview-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100000] flex items-center justify-center bg-black backdrop-blur-3xl w-full h-full p-4 md:p-8"
              onClick={() => setShowImage(false)}
            >
              {/* Luxury Background Layers */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,20,20,1)_0%,_rgba(0,0,0,1)_100%)] z-0" />
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-30 z-0 pointer-events-none" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-full max-h-full flex items-center justify-center p-4 md:p-12 group/img-vault cursor-pointer"
                onClick={() => setShowImage(false)}
              >
                <div className="relative rounded-2xl md:rounded-[3rem] overflow-hidden group">
                  <img 
                    src="https://emadhadid.de/IMG_3575.jpeg" 
                    alt="Exclusive Portfolio" 
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain pointer-events-none select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  {/* Transparent Guard Overlay */}
                  <div className="image-overlay-guard" onContextMenu={(e) => e.preventDefault()} />
                  
                  {/* Professional Light Sweep Animation */}
                  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <motion.div 
                      initial={{ x: '-150%', opacity: 0 }}
                      animate={{ 
                        x: ['-150%', '150%'],
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatDelay: 4,
                        ease: "easeInOut" 
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] blur-[40px]"
                    />
                  </div>

                  {/* Gentle Surface Glow */}
                  <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-secondary/5 z-0"
                  />
                  
                  {/* Integrated Secure Overlay */}
                  {showMessageOverlay && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none p-6"
                    >
                      {/* Deep cinematic vignette */}
                      <div className="absolute inset-0 bg-black/40 z-0" />
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 p-12 md:p-20 overflow-hidden min-w-[320px] md:min-w-[750px]"
                      >
                        {/* Elegant Glass Container */}
                        <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-[60px] rounded-[4rem] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.8)]" />
                        
                        {/* Refined Inner Border */}
                        <div className="absolute inset-0 border border-white/[0.08] rounded-[4rem] z-10 pointer-events-none" />
                        
                        {/* Soft Ambient Light */}
                        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-20 flex flex-col items-center">
                          {/* Elegant Pill Tag */}
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-12"
                          >
                            <span className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
                            <span className="text-secondary/70 font-black text-[9px] md:text-[10px] tracking-[0.5em] uppercase">
                              {content.restricted.archiveLabel}
                            </span>
                          </motion.div>

                          <div className="text-center max-w-2xl px-4">
                            <motion.h2
                              initial={{ opacity: 0, filter: "blur(10px)" }}
                              animate={{ opacity: 1, filter: "blur(0px)" }}
                              transition={{ delay: 0.6, duration: 1.2 }}
                              className={`text-4xl sm:text-5xl md:text-8xl font-black tracking-tight text-white mb-8 ${isRTL ? 'font-arabic leading-[1.4]' : 'font-luxury-serif italic leading-none'}`}
                            >
                              {content.success.description}
                            </motion.h2>

                            <motion.div
                              initial={{ scaleX: 0, opacity: 0 }}
                              animate={{ scaleX: 1, opacity: 1 }}
                              transition={{ delay: 1, duration: 1.5 }}
                              className="h-px w-32 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto rounded-full"
                            />
                          </div>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 1.2, duration: 2 }}
                            className="text-[9px] md:text-[10px] uppercase tracking-[0.7em] text-white/60 mt-12 font-light"
                          >
                            The Hadid Collection — Limited Access
                          </motion.p>
                        </div>

                        {/* Subtle Edge Shine */}
                        <motion.div
                          animate={{ 
                            left: ["-100%", "200%"]
                          }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-30deg] pointer-events-none"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </section>
  );
};
