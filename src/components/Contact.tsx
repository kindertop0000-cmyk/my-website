
import React, { useState } from 'react';
import { Mail, Phone, Zap, Loader2, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Content } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ContactProps {
  content: Content['contact'];
  isRTL: boolean;
  lang: string;
}

const BespokeChatIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="M8 12h.01" />
    <path d="M12 12h.01" />
    <path d="M16 12h.01" />
  </svg>
);

export const Contact: React.FC<ContactProps> = ({ content, isRTL, lang }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const whatsappNumber = "4917656657466";
  const emailAddress = "info@emadhadid.de";
  const phoneNumber = "+4917656657466";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    
    // Construct email content
    const subject = encodeURIComponent(isRTL ? `استفسار بخصوص تعاون تقني من ${formData.name}` : (lang.startsWith('de') ? `Projektanfrage von ${formData.name}` : `Project Inquiry from ${formData.name}`));
    const body = encodeURIComponent(
      isRTL 
      ? `الاسم: ${formData.name}\r\nالبريد الإلكتروني: ${formData.email}\r\n\r\nالرسالة:\r\n${formData.message}`
      : `\u200EName: ${formData.name}\r\nE-Mail: ${formData.email}\r\n\r\nNachricht:\r\n${formData.message}`
    );
    
    // Open default mail client safely bypassing iframe restrictions
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success animation
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 md:py-48 bg-transparent relative overflow-hidden scroll-mt-24 w-full">
      
      {/* Background Decor - High Contrast - Removed as requested */}

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        
        <div 
          className="text-center mb-20 md:mb-40"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-secondary font-black text-xs md:text-sm tracking-[0.6em] uppercase whitespace-nowrap">Global Direct Communication</span>
            <div className="w-12 h-[1px] bg-secondary"></div>
          </div>
          <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black text-[var(--text-primary)] mb-10 leading-[1.2] tracking-normal whitespace-pre-line ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? (
              <span className="flex flex-col items-center justify-center text-center">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block mb-2 text-white/90 text-3xl md:text-5xl font-bold tracking-tight"
                >
                  لنبدأ رحلة
                </motion.span>
                <div className="relative group inline-block">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-secondary bg-clip-text text-transparent bg-gradient-to-br from-secondary via-[#fcd34d] to-secondary relative z-10 text-3xl md:text-5xl font-black"
                    style={{ 
                      textShadow: isRTL ? '0 0 10px rgba(212, 175, 55, 0.2), 0 0 1px rgba(212, 175, 55, 0.5)' : 'none',
                      filter: isRTL ? 'drop-shadow(0 15px 30px rgba(0,0,0,0.5))' : 'none'
                    }}
                  >
                    مشروعك الرقمي
                  </motion.span>
                  
                  {/* Decorative Elements */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent origin-center"
                  />
                  <div className="absolute -inset-x-8 -inset-y-4 bg-secondary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </span>
            ) : content.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-xl md:text-4xl max-w-5xl mx-auto font-light leading-relaxed italic px-4 whitespace-pre-line">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
          
          <div className="lg:col-span-5 space-y-8">
            
            {/* Professional Email Card - NATIVE MAIL PROTOCOL */}
            <SpotlightCard className="rounded-[2.5rem] md:rounded-[3rem]">
              <a 
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(lang === 'ar' ? 'مناقشة مشروع جديد' : (lang.startsWith('de') ? 'Projektanfrage' : 'Project Discussion'))}&body=${encodeURIComponent(lang === 'ar' ? 'مرحباً عماد، أود مناقشة مشروع جديد معك.' : (lang.startsWith('de') ? 'Guten Tag, ich möchte ein Projekt mit Ihnen besprechen.' : 'Hello, I would like to discuss a project with you.'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-12 bg-[var(--card-bg)] rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl relative z-20 h-full transition-all duration-500 hover:bg-white/[0.05] hover:border-secondary/40"
              >
                <div className="mb-6 md:mb-10">
                  <div className="bg-secondary p-4 md:p-6 rounded-2xl text-black inline-block relative overflow-hidden group-hover:scale-105 transition-transform duration-500 animate-icon-neon-glow">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 relative z-10" strokeWidth={2.5} />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-2 md:mb-3 uppercase tracking-tighter">
                  {isRTL ? 'البريد الرسمي' : 'Official Mail'}
                </h3>
                <p className="text-secondary text-base md:text-lg font-bold mb-6 md:mb-8 opacity-80" dir="ltr">{emailAddress}</p>
                <div className="flex items-center gap-3 text-[var(--text-primary)]/40 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-[var(--text-primary)] transition-colors">
                  <span>{isRTL ? 'اضغط للمراسلة فوراً' : 'Tap to Email Instantly'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </a>
            </SpotlightCard>

            {/* Professional WhatsApp Card - NATIVE WHATSAPP PROTOCOL */}
            <SpotlightCard className="rounded-[2.5rem] md:rounded-[3rem]">
              <a 
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(lang === 'ar' ? 'مرحباً عماد، أود مناقشة مشروع جديد معك.' : (lang.startsWith('de') ? 'Guten Tag, ich möchte ein Projekt mit Ihnen besprechen.' : 'Hello, I would like to discuss a project with you.'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-12 bg-[var(--card-bg)] rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 active:scale-95 shadow-2xl relative z-20 h-full"
              >
                <div className="mb-6 md:mb-10">
                  <div className="bg-secondary p-4 md:p-6 rounded-2xl text-black inline-block relative overflow-hidden group-hover:scale-105 transition-transform duration-500 animate-icon-neon-glow">
                    <BespokeChatIcon className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-2 md:mb-3 uppercase tracking-tighter">
                  {isRTL ? 'واتساب مباشر' : 'Live WhatsApp'}
                </h3>
                <p className="text-secondary text-base md:text-lg font-bold mb-6 md:mb-8 opacity-80">{isRTL ? 'رد ذكي واستجابة سريعة' : 'Instant Collaboration'}</p>
                <div className="flex items-center gap-3 text-[var(--text-primary)]/40 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-[var(--text-primary)] transition-colors">
                  <span>{isRTL ? 'ابدأ المحادثة الآن' : 'Start Chat Now'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </a>
            </SpotlightCard>

            {/* Professional Phone Card - NATIVE TEL PROTOCOL */}
            <SpotlightCard className="rounded-[2.5rem] md:rounded-[3rem]">
              <a 
                href={`tel:${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-12 bg-[var(--card-bg)] rounded-[2rem] md:rounded-[3rem] border border-white/10 hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 active:scale-95 shadow-2xl relative z-20 h-full"
              >
                <div className="mb-6 md:mb-10">
                  <div className="bg-secondary p-4 md:p-6 rounded-2xl text-black inline-block relative overflow-hidden group-hover:scale-105 transition-transform duration-500 animate-icon-neon-glow">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] mb-2 md:mb-3 uppercase tracking-tighter">
                  {isRTL ? 'اتصال صوتي' : 'Direct Voice Call'}
                </h3>
                <p className="text-secondary text-base md:text-lg font-bold mb-6 md:mb-8 opacity-80" dir="ltr">{phoneNumber}</p>
                <div className="flex items-center gap-3 text-[var(--text-primary)]/40 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] group-hover:text-[var(--text-primary)] transition-colors">
                  <span>{isRTL ? 'اتصل بمكتبنا الآن' : 'Dial Support Line'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </a>
            </SpotlightCard>

          </div>

          {/* Inquiry Form Side */}
          <div 
            className="lg:col-span-7"
          >
            <SpotlightCard className="h-full rounded-[2rem] md:rounded-[4rem]">
              <div className="relative bg-[var(--card-bg)] rounded-[2rem] md:rounded-[4rem] p-6 md:p-20 h-full border border-white/10 shadow-2xl">
                
                {status === 'success' && (
                  <div className="absolute inset-0 bg-[var(--bg-primary)]/98 z-50 flex flex-col items-center justify-center p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500 rounded-[2rem] md:rounded-[4rem]">
                    <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                       <Zap className="text-secondary animate-pulse" size={48} />
                    </div>
                    <h4 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-tighter">
                      {isRTL ? 'تم الإرسال بنجاح' : 'Success Received'}
                    </h4>
                    <p className="text-[var(--text-secondary)] text-lg md:text-2xl mb-12 max-w-md leading-relaxed">
                      {isRTL ? 'شكراً لثقتك. سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال 24 ساعة.' : 'Your vision is now in our hands. We will respond within 24 hours to begin the journey.'}
                    </p>
                    <button onClick={resetForm} className="px-12 py-6 bg-secondary text-black font-black rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl">
                      {isRTL ? 'إرسال طلب جديد' : 'Send Another Inquiry'}
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-6 mb-16 relative z-10">
                   <div className="p-4 bg-secondary rounded-2xl text-black animate-icon-neon-glow relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                      <Zap size={28} fill="currentColor" className="relative z-10" />
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                   </div>
                   <h3 className="text-2xl md:text-4xl font-black text-[var(--text-primary)] uppercase tracking-tighter">
                     {isRTL ? 'ابدأ مشروعك الآن' : 'Initiate Extraordinary Project'}
                   </h3>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-10 flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label htmlFor="form-name" className="text-xs font-black text-secondary uppercase tracking-[0.3em] ml-2 block">{content.form.name}</label>
                      <input 
                        id="form-name"
                        required
                        className="w-full bg-[var(--bg-secondary)] border border-white/5 rounded-3xl px-8 py-5 text-[var(--text-primary)] text-lg focus:border-secondary focus:bg-[var(--bg-secondary)]/[0.8] outline-none transition-all shadow-inner"
                        placeholder="Emad Hadid"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="form-email" className="text-xs font-black text-secondary uppercase tracking-[0.3em] ml-2 block">{content.form.email}</label>
                      <input 
                        id="form-email"
                        required
                        type="email"
                        className="w-full bg-[var(--bg-secondary)] border border-white/5 rounded-3xl px-8 py-5 text-[var(--text-primary)] text-lg focus:border-secondary focus:bg-[var(--bg-secondary)]/[0.8] outline-none transition-all shadow-inner"
                        placeholder="office@emadhadid.de"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="form-message" className="text-xs font-black text-secondary uppercase tracking-[0.3em] ml-2 block">{content.form.message}</label>
                    <textarea 
                      id="form-message"
                      required
                      rows={6}
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl px-8 py-6 text-[var(--text-primary)] text-lg focus:border-secondary focus:bg-[var(--bg-secondary)]/[0.8] outline-none resize-none shadow-inner"
                      placeholder={isRTL ? 'صف لنا تفاصيل مشروعك القادم...' : 'Tell us about the masterpiece you want to build...'}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="flex justify-center mt-8">
                    <motion.button 
                      disabled={status === 'sending'}
                      type="submit"
                      className="group relative px-12 py-5 bg-[var(--bg-primary)] text-[var(--text-primary)] font-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-[0.95] border border-secondary/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Gold hover overlay */}
                      <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <span className="relative flex items-center justify-center gap-3 z-10 text-[var(--text-primary)] group-hover:text-black transition-colors duration-500">
                        {status === 'sending' ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        <span className={`uppercase tracking-[0.2em] text-sm md:text-base font-black ${isRTL ? 'font-arabic tracking-normal text-lg' : ''}`}>
                          {content.form.submit}
                        </span>
                      </span>

                      {/* Moving light shimmer effect */}
                      <div className="absolute -left-[100%] top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
                    </motion.button>
                  </div>
                </form>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
