
import React from 'react';
import { Content } from '../types';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  content: Content['footer'];
  navContent: Content['nav'];
  isRTL: boolean;
  phoneNumber: string;
  lang: string;
}

export const Footer: React.FC<FooterProps> = ({ content, navContent, isRTL, phoneNumber, lang }) => {
  const contactMessage = lang === 'ar' 
    ? 'مرحباً عماد، أود مناقشة مشروع جديد معك.' 
    : (lang.startsWith('de') 
      ? 'Guten Tag, ich möchte ein Projekt mit Ihnen besprechen.' 
      : 'Hello, I would like to discuss a project with you.');
  
  const emailSubject = lang === 'ar' 
    ? 'مناقشة مشروع جديد' 
    : (lang.startsWith('de') 
      ? 'Projektanfrage' 
      : 'Project Discussion');

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber.replace(/[^0-9]/g, '')}&text=${encodeURIComponent(contactMessage)}`;

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-secondary)] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative z-10">
        <div className="luxury-glass-card rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.8)] border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* 1. Brand Identity */}
          <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`cursor-pointer inline-block ${isRTL ? 'text-right' : 'text-left'}`} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div dir="ltr">
                <span className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tighter block mb-1">
                  <span className="text-secondary">Emad</span> Hadid
                </span>
                <motion.span 
                  className={`text-[8px] font-bold text-secondary/60 uppercase tracking-[0.4em] block ${isRTL ? 'text-right' : 'text-left'}`}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    y: [0, -1, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {lang.startsWith('de') ? 'Digitale Lösungen' : 'DIGITALE EXZELLENZ'}
                </motion.span>
              </div>
            </div>
            <p className={`text-sm leading-relaxed text-[var(--text-secondary)] max-w-xs font-light ${isRTL ? 'mr-0 ml-auto' : ''}`}>
              {content.description}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
               {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                 <div 
                   key={i} 
                   className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-secondary/20 flex items-center justify-center text-[var(--text-secondary)] hover:text-secondary transition-all cursor-pointer"
                 >
                   <Icon size={18} />
                 </div>
               ))}
            </div>

            {/* AI Digital Signature */}
            <div className="pt-8 border-t border-secondary/10">
              <motion.div 
                className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/5 border border-secondary/20 rounded-xl"
                animate={{ 
                  borderColor: ["rgba(212, 175, 55, 0.1)", "rgba(212, 175, 55, 0.4)", "rgba(212, 175, 55, 0.1)"],
                  boxShadow: ["0 0 0px rgba(212, 175, 55, 0)", "0 0 20px rgba(212, 175, 55, 0.1)", "0 0 0px rgba(212, 175, 55, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-secondary"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">
                  {isRTL ? 'توقيع رقمي موثق بالذكاء الاصطناعي' : 'AI-Verified Digital Signature'}
                </span>
              </motion.div>
            </div>
          </div>

          {/* 3. Contact Info */}
          <div className="space-y-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 group">
                    <MapPin size={18} className="text-secondary mt-1 shrink-0" />
                    <span className="leading-relaxed">Britzer Damm 152,<br/>12347 Berlin, Germany</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 group">
                    <Mail size={18} className="text-secondary shrink-0" />
                    <a
                      href={`mailto:info@emadhadid.de?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(contactMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--text-primary)] transition-all truncate"
                      dir="ltr"
                    >
                      info@emadhadid.de
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Phone size={18} className="text-secondary shrink-0" />
                    <a 
                      href="tel:+4917656657466" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--text-primary)] transition-all" 
                      dir="ltr"
                    >
                      +49 176 56657466
                    </a>
                  </div>
                </div>
             </div>
          </div>
          
        </div>

        {/* Professional WhatsApp ShortcutIcon - Absolutely Positioned to maintain footer height */}
        <div className={`absolute bottom-[100px] ${isRTL ? 'left-6 sm:left-10 lg:left-12' : 'right-6 sm:right-10 lg:right-12'} z-20`}>
           <motion.a
             href={whatsappUrl}
             target="_blank"
             rel="noopener noreferrer"
             animate={{ 
               scale: [1, 1.05, 1],
             }}
             transition={{ 
               duration: 2,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             whileHover={{ scale: 1.15 }}
             aria-label="WhatsApp"
             className="group block relative"
           >
             <div className="w-[50px] h-[50px] bg-secondary/10 backdrop-blur-md rounded-full flex items-center justify-center border border-secondary/20 group-hover:border-secondary/50 transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] overflow-hidden relative">
               {/* Inner Shimmer Effect */}
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                 animate={{ 
                   left: ['-150%', '150%'] 
                 }}
                 transition={{ 
                   duration: 3, 
                   repeat: Infinity, 
                   ease: "linear",
                   repeatDelay: 1
                 }}
               />
               
               <MessageCircle size={25} className="text-secondary transition-colors duration-500 relative z-10" />
             </div>
           </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[var(--text-secondary)] opacity-60 text-[10px] uppercase tracking-[0.2em]">
             © {new Date().getFullYear()} Emad Hadid. {content.rights}
           </div>
           <div className="text-secondary/30 font-black uppercase tracking-[0.3em] text-[8px]">
              {lang.startsWith('de') ? 'Software & KI aus Berlin' : 'BERLIN PROGRAMMING • DIGITAL EXCELLENCE'}
           </div>
        </div>
      </div>
     </div>
    </footer>
  );
};
