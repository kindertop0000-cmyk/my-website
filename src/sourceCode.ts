
export const sourceFiles = {
  // ... (keeping other files the same)
  'src/components/Hero.tsx': `import React from 'react';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';
import { Content, Language } from '../types';

interface HeroProps {
  content: Content['hero'];
  isRTL: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Hero: React.FC<HeroProps> = ({ content, isRTL, lang, setLang }) => {
  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'ar', label: 'AR', native: 'العربية' },
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'de', label: 'DE', native: 'Deutsch' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-32 md:pt-0"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 w-full text-center py-20">
        <div data-aos="zoom-out" data-aos-duration="2500">
          
          {/* Royal Badge */}
          <div className="flex justify-center mb-10 md:mb-14 pointer-events-none select-none">
            <div className={\`animate-luxury-drift inline-flex items-center gap-4 px-8 py-3 rounded-full border border-secondary/30 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(212,175,55,0.4)] \${isRTL ? 'flex-row-reverse' : 'flex-row'} relative group\`}>
               <Crown size={16} className="text-secondary drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
               <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-secondary/90 whitespace-nowrap">
                 Royal Digital Architecture
               </span>
               <span className="absolute inset-0 border border-secondary/20 rounded-full animate-pulse-slow"></span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex justify-center mb-10 md:mb-12" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-flex items-center gap-2 bg-black/30 p-2 rounded-full border border-white/5 backdrop-blur-2xl shadow-2xl">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={\`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden \${
                    lang === l.code 
                      ? 'bg-secondary text-black shadow-[0_0_30px_rgba(212,175,55,0.6)]' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                  }\`}
                >
                  <span className="relative z-10">{l.native}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* MASSIVE TITLES RESTORED */}
          <h1 className={\`text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black mb-8 md:mb-12 leading-[1.1] md:leading-[0.9] tracking-tighter text-white \${isRTL ? 'font-arabic' : 'font-luxury-serif italic'}\`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-secondary via-white to-secondary/60 animate-text-shine bg-[length:200%_auto] block drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]">
              {content.title}
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-400 mb-12 md:mb-20 max-w-5xl mx-auto leading-relaxed font-light px-4 tracking-wide">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center relative z-30">
            {/* CTA Button - Redesigned to be Rounded and Elegant */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group relative px-10 py-5 bg-gradient-to-r from-secondary via-[#eecf6d] to-secondary bg-[length:200%_auto] text-black font-black text-xs md:text-sm uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.6)] hover:bg-right"
            >
              {/* Internal Glow */}
              <div className="absolute inset-0 rounded-full border border-white/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                {content.cta}
                <ArrowRight className={\`w-5 h-5 transition-transform duration-300 \${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}\`} />
              </span>
            </a>
            
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="text-white/50 hover:text-secondary font-black text-xs md:text-sm uppercase tracking-[0.4em] border-b border-transparent hover:border-secondary pb-2 transition-all duration-500"
            >
              {content.explore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};`,
// ... (rest of sourceFiles content stays here as specified in the original file)
};