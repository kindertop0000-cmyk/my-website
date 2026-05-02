
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Content } from '../types';

interface TestimonialsProps {
  content: Content['testimonials'];
  isRTL: boolean;
}

import { SpotlightCard } from './SpotlightCard';

export const Testimonials: React.FC<TestimonialsProps> = ({ content, isRTL }) => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-[var(--bg-primary)]/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-[var(--text-primary)]"
          >
            {content.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <SpotlightCard
              key={index}
              className="p-12 rounded-[2rem] relative group overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-secondary/40"
            >
              {/* Internal Accent Lighting */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-x-20 top-[-50%] h-[150%] w-[150%] bg-gradient-to-b from-secondary/5 to-transparent blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0 pointer-events-none" />

              <Quote className={`text-secondary/20 absolute top-8 w-12 h-12 group-hover:text-secondary/40 transition-colors duration-500 ${isRTL ? 'left-8 scale-x-[-1]' : 'right-8'}`} />
              
              <div className={`flex gap-1 mb-6 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-secondary text-secondary" />
                ))}
              </div>

              <p className={`text-gray-200 text-lg italic mb-8 leading-relaxed font-light ${isRTL ? 'text-right' : 'text-left'}`}>
                "{item.quote}"
              </p>

              <div className={`flex items-center gap-4 relative ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="relative group/avatar">
                  {/* Luxury Aura - Breathing Glow (Permanent but subtle) */}
                  <div className="absolute -inset-4 bg-secondary/15 rounded-full blur-2xl animate-pulse group-hover:bg-secondary/50 transition-all duration-1000" />
                  
                  {/* Kinetic Ring - High-end Border */}
                  <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-secondary/80 via-transparent to-white/60 animate-spin-slow opacity-90 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                  
                  {/* Core Image Container */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-secondary/40 z-10 shadow-[0_0_25px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-shadow duration-500">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-125"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Sweeping Laser Sheen - Only on Group Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none z-20" />
                  </div>

                  {/* Exterior Glow Flare - Interaction only */}
                  <div className="absolute -inset-2 bg-secondary blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                </div>
                <div>
                  <h4 className="text-[var(--text-primary)] font-black uppercase tracking-widest text-sm group-hover:text-secondary transition-colors duration-500">{item.name}</h4>
                  <p className="text-secondary/70 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">{item.role}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
