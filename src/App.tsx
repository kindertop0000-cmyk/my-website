
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useMotionValueEvent, useInView } from 'framer-motion';
import { BackgroundMesh } from './components/BackgroundMesh';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';
import { LegalSection } from './components/LegalSection';
import { LegalModal } from './components/LegalModal';
import { Strategy } from './components/Strategy';
import { Automation } from './components/Automation';
import { CustomCursor } from './components/CustomCursor';
import { CONTENT } from './constants';
import Lenis from '@studio-freight/lenis';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('de');
  const [introState, setIntroState] = useState<'visible' | 'fading' | 'hidden'>('visible');
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'imprint' | null }>({ isOpen: false, type: null });
  const [isScrolled, setIsScrolled] = useState(false);
  const lenisRef = React.useRef<any>(null);

  const showIntro = introState !== 'hidden';

  // Tab Title Magic Logic
  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = lang === 'ar' ? "عماد حديد بانتظارك! 👋" : (lang === 'de' ? "Komm zurück! Emad Hadid 👋" : "Come back! Emad Hadid 👋");
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [lang]);

  // Scroll Reset and Smooth Scroll Initialization
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    if (introState === 'visible') {
      lenis.stop();
    }

    let rafId: number;
    function raf(time: number) {
      if (lenis && lenis.raf) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && lenis.destroy) {
        lenis.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  const { scrollYProgress } = useScroll();
  
  const [showBottomActions, setShowBottomActions] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0.02);
    setShowBottomActions(latest > 0.85);
  });

  // Performance & Stability
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLegalModal = (type: 'privacy' | 'imprint') => {
    setLegalModal({ isOpen: true, type: type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  // PERFORMANCE & STABILITY: Language, Theme & Scroll Lock
  useEffect(() => {
    const isRTL = lang === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // CRITICAL: Unlock scroll exactly when transition begins to prevent "frozen" feeling
    if (lenisRef.current) {
      if (introState === 'visible') {
        lenisRef.current.stop();
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        document.documentElement.style.overflow = 'hidden';
      } else {
        // Start scrolling as soon as fading begins
        lenisRef.current.start();
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.documentElement.style.overflow = '';
      }
    }
    
    const bodyClasses = [
      'selection:bg-secondary',
      'selection:text-black',
      'overflow-x-hidden',
      'w-full',
      'bg-[var(--bg-primary)]',
      'text-[var(--text-primary)]',
      isRTL ? 'font-arabic' : 'font-premium-sans'
    ];
    document.body.className = bodyClasses.join(' ');
  }, [lang, introState]);

  // Global Image Protection & Security
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('.image-overlay-guard')) {
        e.preventDefault();
      }
    };
    
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Prevent Print Screen / Screenshot shortcut notifications if possible (limited)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Cmd+S or Ctrl+S
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
      }
      // Prevent Cmd+P or Ctrl+P
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
      }
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

  useEffect(() => {
    const checkViewport = () => {
      // Typically desktops are > 1024px. We'll use this threshold.
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const currentContent = CONTENT[lang];
  const isRTL = lang === 'ar';

  if (isDesktop) {
    return (
      <div className="fixed inset-0 z-[9999999] bg-[#000000] flex items-center justify-center p-8 overflow-hidden font-premium-sans">
        <BackgroundMesh />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-xl w-full text-center"
        >
          {/* Logo/Brand Accent */}
          <div className="mb-12 flex justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white border border-[#C5A059]/20 relative shadow-none overflow-hidden">
               <motion.img
                src="https://emadhadid.de/favicon.png"
                alt="Emad Hadid Logo"
                className="w-full h-full object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-widest leading-tight">
            Mobile Experience <span className="text-secondary italic">Only</span>
          </h1>
          
          <div className="h-px w-24 bg-secondary/50 mx-auto mb-8" />

          <div className="space-y-8">
            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed">
              Um die Exzellenz meiner Arbeit vollumfänglich zu erleben, 
              ist der Zugriff auf <span className="text-secondary">Mobilgeräte</span> beschränkt.
            </p>

            <p className="text-xl md:text-2xl text-white font-arabic leading-relaxed dir-rtl py-4 border-y border-white/5">
              لتجربة التميز الرقمي في أعمالي بشكل كامل، يرجى تصفح الموقع من خلال <span className="text-secondary">الهاتف المحمول</span> فقط.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="flex items-center gap-3 px-8 py-4 bg-secondary/10 rounded-full border border-secondary/30 scale-105 shadow-[0_0_30px_rgba(var(--secondary-rgb),0.1)]">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary font-black text-xs uppercase tracking-[0.4em]">Digital Excellence</span>
            </div>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.6em] mt-6">Emad Hadid — Archive restricted to Mobile</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen flex flex-col relative bg-[var(--bg-primary)] text-[var(--text-primary)] w-full max-w-full ${isRTL ? 'text-right' : 'text-left'}`}
      style={{ 
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Absolute base background - Always present to prevent flicker */}
      <div className="fixed inset-0 z-[-2] pointer-events-none bg-[var(--bg-primary)]">
         {/* Focal Header Light Source */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] blur-[80px]" />
         
         <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-br from-secondary/15 to-transparent opacity-10"></div>
         <div className="absolute bottom-0 right-0 w-full h-[60vh] bg-gradient-to-tl from-secondary/8 to-transparent opacity-10"></div>
         
         {/* Ambient Section Blooms */}
         <div className="ambient-glow-source top-[25%] left-[10%] w-[400px] h-[400px]" />
         <div className="ambient-glow-source top-[50%] right-[10%] w-[500px] h-[500px]" style={{ backgroundColor: 'rgba(212,175,55,0.05)' }} />
         <div className="ambient-glow-source top-[75%] left-[-5%] w-[600px] h-[600px]" />
         
         {/* Subtle Edge Glows for Screen Depth */}
         <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent opacity-50" />
         <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent opacity-50" />
         
         <BackgroundMesh />
      </div>
      
      {showIntro && (
          <motion.div
            key="intro-container"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[999999] bg-[#000000]"
            style={{ 
              height: '100dvh',
              WebkitBackfaceVisibility: 'hidden',
              pointerEvents: 'auto'
            }}
          >
            <Intro onComplete={() => setIntroState('hidden')} lang={lang} />
          </motion.div>
      )}
      
        <motion.div 
        key="page-content"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: showIntro ? 0 : 1
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut"
        }}
        className="flex flex-col flex-grow w-full relative"
        style={{ 
          minHeight: '100dvh', 
          height: '100%',
          transform: 'translate3d(0,0,0)'
        }}
      >
        <main className="flex-grow w-full relative">
            {/* Absolute Decorative Layer */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
               <div className="absolute top-[15%] right-[-5%] w-[30%] h-[30%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.02)_0%,transparent_70%)] blur-3xl opacity-50" />
               <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.02)_0%,transparent_70%)] blur-3xl opacity-50" />
            </div>

            <Hero 
              content={currentContent.hero} 
              isRTL={isRTL} 
              lang={lang}
              setLang={setLang}
            />
            
            <div className="section-divider-line" />
            
            <Strategy isRTL={isRTL} content={currentContent.strategy} />

            <div className="section-divider-line opacity-50" />

            <Automation isRTL={isRTL} content={currentContent.automation} />

            <SectionReveal>
              <div className="section-divider-line" />
              <Services content={currentContent.services} isRTL={isRTL} />
            </SectionReveal>

            <SectionReveal>
              <div className="section-divider-line opacity-70" />
              <Projects content={currentContent.projects} isRTL={isRTL} />
            </SectionReveal>

            <SectionReveal>
              <div className="section-divider-line" />
              <About content={currentContent.about} isRTL={isRTL} />
            </SectionReveal>

            <SectionReveal>
              <div className="section-divider-line opacity-50" />
              <Testimonials content={currentContent.testimonials} isRTL={isRTL} />
            </SectionReveal>

            <SectionReveal>
              <div className="section-divider-line" />
              <Contact content={currentContent.contact} isRTL={isRTL} lang={lang} />
            </SectionReveal>

            <LegalSection content={currentContent.footer} isRTL={isRTL} onOpenModal={openLegalModal} />
        </main>

        <Footer 
          content={currentContent.footer} 
          navContent={currentContent.nav} 
          isRTL={isRTL} 
          phoneNumber={currentContent.contact.info.phone}
          lang={lang}
        />
      </motion.div>
      
      {/* Navbar and Progress Bar are outside the main animated content */}
      {isScrolled && (
          <div 
            className="fixed top-0 left-0 right-0 h-[2.5px] z-[10001] pointer-events-none opacity-80"
          >
            {/* Background Track */}
            <div className="absolute inset-0 bg-white/[0.03]" />
            
            {/* Subdued Professional Gold Progress Bar */}
            <motion.div
              className="h-full relative shadow-[0_1px_10px_rgba(107,79,27,0.4)]"
              style={{ 
                scaleX, 
                transformOrigin: isRTL ? 'right' : 'left',
                background: 'linear-gradient(to right, #4a3611, #8b6e2e, #b8860b, #8b6e2e, #4a3611)'
              }}
            >
              {/* Metallic Sheen Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-sheen-slow" />
              
              {/* Leading Edge Glow */}
              <div 
                className={`absolute top-0 bottom-0 w-8 blur-sm bg-secondary/30 ${isRTL ? 'left-0' : 'right-0'}`} 
              />
            </motion.div>
          </div>
        )}
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          content={currentContent.nav} 
        />
      
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegalModal}
        title={
          legalModal.type === 'privacy'
            ? currentContent.footer.privacyTitle
            : currentContent.footer.imprintTitle
        }
        content={
          legalModal.type === 'privacy'
            ? currentContent.footer.privacyContent
            : currentContent.footer.imprintContent
        }
        isRTL={isRTL}
      />
    </div>
  );
}

const SectionReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full relative"
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      {children}
    </motion.div>
  );
};

export default App;
