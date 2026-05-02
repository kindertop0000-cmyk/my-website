
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Content, Language } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: content.home },
    { id: 'automation', label: content.automation },
    { id: 'services', label: content.services },
    { id: 'projects', label: content.projects },
    { id: 'about', label: content.about },
    { id: 'contact', label: content.contact },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 pointer-events-auto bg-[var(--nav-bg)] backdrop-blur-xl border-b ${
      scrolled ? 'border-[#8b6e2e]/40' : 'border-transparent'
    } ${
      (scrolled || isOpen) ? 'py-4' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div 
            className="w-12 h-12 rounded-full bg-white border border-secondary/20 flex items-center justify-center overflow-hidden transition-all duration-500 relative shadow-none group-hover:border-secondary/40"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="https://emadhadid.de/favicon.png"
              alt="Emad Hadid Logo"
              className="w-full h-full object-cover relative z-0"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-[var(--text-primary)] tracking-tighter block drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" dir="ltr">
              <span className="text-secondary">Emad</span> Hadid
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="text-[var(--text-secondary)] hover:text-secondary text-[11px] font-bold uppercase transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-[var(--border-color)] pl-4 ml-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-6 py-2.5 bg-secondary/10 border border-secondary/30 text-secondary text-[11px] font-bold uppercase rounded-full hover:bg-secondary hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)] cursor-pointer"
            >
              {content.getQuote}
            </a>
          </div>
        </div>

      {/* Mobile Menu Button Wrapper */}
      <div className="lg:hidden">
        <button 
          className="text-secondary p-2 w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full bg-[var(--bg-primary)] backdrop-blur-3xl z-[-1] lg:hidden flex flex-col items-center justify-center gap-5 p-6 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center gap-5 w-full -mt-12">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-[var(--text-primary)] text-2xl font-bold uppercase hover:text-secondary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="w-full max-w-xs py-4 bg-secondary text-black font-bold uppercase rounded-full text-center cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                {content.getQuote}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
