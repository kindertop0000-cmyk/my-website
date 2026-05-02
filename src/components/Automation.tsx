import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Share2, Bot, Layers, Network, ArrowRight } from 'lucide-react';

interface AutomationProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; desc: string }[];
    cta: string;
  };
  isRTL: boolean;
}

import { SpotlightCard } from './SpotlightCard';

const ProfessionalLabelText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`overflow-hidden ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export const Automation: React.FC<AutomationProps> = ({ content, isRTL }) => {
  return (
    <section id="automation" className="relative py-24 md:py-32 overflow-hidden bg-[var(--bg-primary)]">
      {/* Visual Background - Animated Connections */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 10 20 Q 50 10 90 20"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 10 80 Q 50 90 90 80"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.path
            d="M 20 10 Q 10 50 20 90"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left: Content */}
          <div className="flex-1 space-y-8">
            <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20"
              >
                <Zap className="w-3 h-3 text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                  {content.subtitle}
                </span>
              </div>
              
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-2xl sm:text-4xl md:text-7xl font-light leading-tight text-secondary break-words relative pb-4 ${isRTL ? 'font-arabic tracking-normal' : 'tracking-[0.1em] uppercase'}`}
                  style={{ hyphens: 'auto' }}
                >
                  <span className="relative z-10">{content.title}</span>
                  
                  {/* Decorative underline with passing light effect */}
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    className={`h-px w-32 bg-secondary mt-4 block relative overflow-hidden ${isRTL ? 'ml-auto origin-right' : 'origin-left'}`}
                  >
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full"
                    />
                  </motion.div>

                  {/* Passing Ghost Text (Marquee element) */}
                  <div className={`absolute -top-12 ${isRTL ? 'right-0' : 'left-0'} opacity-[0.03] select-none pointer-events-none whitespace-nowrap overflow-hidden w-full hidden md:block`}>
                    <motion.span
                      animate={{ x: isRTL ? ['20%', '-20%'] : ['-20%', '20%'] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="text-white text-9xl font-black uppercase tracking-widest inline-block"
                    >
                      {content.title} {content.title}
                    </motion.span>
                  </div>
                </motion.h2>
              </div>
              
              <p
                className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
              >
                {content.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature, index) => (
                <SpotlightCard
                  key={index}
                  className={`relative p-8 rounded-[2rem] overflow-hidden group shadow-lg ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <div className="h-full">
                    {/* 1. Technical Corner Brackets */}
                    <div className="absolute top-0 right-0 p-4 z-10">
                      <div className="w-8 h-8 border-t border-r border-secondary/20 group-hover:border-secondary/60 rounded-tr-xl transition-colors duration-700" />
                    </div>

                    <div className="absolute bottom-0 left-0 p-4 z-10">
                      <div className="w-8 h-8 border-b border-l border-secondary/20 group-hover:border-secondary/60 rounded-bl-xl transition-colors duration-700" />
                    </div>

                    {/* 2. Content */}
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 transition-all duration-500 border border-[var(--border-color)] group-hover:bg-secondary/20 group-hover:scale-105 ${isRTL ? 'ml-auto' : ''}`}>
                        {index === 0 && <Bot className="w-7 h-7 text-secondary" />}
                        {index === 1 && <Network className="w-7 h-7 text-secondary" />}
                        {index === 2 && <Share2 className="w-7 h-7 text-secondary" />}
                        {index === 3 && <Layers className="w-7 h-7 text-secondary" />}
                      </div>
                      
                      <h3 
                        className="font-black text-xl mb-3 tracking-tight text-[var(--text-primary)] group-hover:text-secondary transition-colors"
                      >
                        {feature.title}
                      </h3>
                      
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-light group-hover:text-[var(--text-primary)] transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-auto px-6 md:px-8 py-2 md:py-2.5 bg-gradient-to-r from-secondary via-[#fcd34d] to-secondary bg-[length:200%_auto] text-black font-black text-[10px] md:text-xs uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:bg-right flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 mix-blend-multiply pointer-events-none rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 mix-blend-multiply pointer-events-none rounded-full border border-black/20"></div>
                <div className="absolute inset-0 shadow-[inset_0_0px_20px_rgba(0,0,0,0.6)] pointer-events-none rounded-full"></div>
                
                <span className="relative z-10 font-black">
                  {content.cta}
                </span>
                <ArrowRight 
                  className={`relative z-10 w-3 h-3 md:w-4 md:h-4 transition-transform duration-500 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>

          {/* Right: The "n8n-style" Visual Node Graph */}
          <div className="flex-1 relative w-full max-w-2xl aspect-square lg:aspect-auto h-[500px] group/viz">
             {/* Technical Grid Background */}
             <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(var(--border-color)_1px,transparent_1px)] [background-size:20px_20px] rounded-[3rem]"></div>
             
             {/* Central SVG Layer for complex gold lines */}
             <div className="absolute inset-0 z-0 opacity-60">
                <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
                  {/* Background Scanning Lines */}
                  <motion.line 
                    x1="0" y1="0" x2="500" y2="0" 
                    stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.3"
                    animate={{ y: [0, 500, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  {[...Array(5)].map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M ${50 + i * 80} ${0} Q 250 250 ${450 - i * 80} 500`}
                      stroke="#d4af37"
                      strokeWidth="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  {/* Rotating Technical Rings */}
                  <motion.circle 
                    cx="250" cy="250" r="120" 
                    stroke="#d4af37" strokeWidth="0.5" strokeDasharray="10,20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle 
                    cx="250" cy="250" r="135" 
                    stroke="#d4af37" strokeWidth="0.2" strokeDasharray="2,5"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle 
                    cx="250" cy="250" r="160" 
                    stroke="#d4af37" strokeWidth="0.1"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'transform, opacity' }}
                  />

                  {/* Data flow bursts - More intense */}
                  {[...Array(6)].map((_, i) => (
                    <motion.circle
                      key={`pulse-${i}`}
                      r="2"
                      fill="#d4af37"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        offsetDistance: ["0%", "100%"]
                      }}
                      transition={{ 
                        duration: i % 2 === 0 ? 1.8 : 2.2, 
                        repeat: Infinity, 
                        delay: i * 0.6,
                        ease: "linear"
                      }}
                      style={{
                        offsetPath: `path('M 250 250 L ${Math.cos(i * 60 * Math.PI/180) * 250 + 250} ${Math.sin(i * 60 * Math.PI/180) * 250 + 250}')`,
                        willChange: 'offset-distance'
                      }}
                    />
                  ))}
                </svg>
             </div>
 
             {/* Central Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(212,175,55,0.2)", 
                      "0 0 60px rgba(212,175,55,0.6)", 
                      "0 0 20px rgba(212,175,55,0.2)"
                    ],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative group cursor-pointer"
                >
                   {/* Outer complex ring */}
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute -inset-8 border border-secondary/20 border-dashed rounded-full"
                   />
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className="absolute -inset-4 border border-secondary/40 rounded-full"
                   />

                   <div className="w-24 h-24 rounded-3xl bg-secondary flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <Cpu className="w-12 h-12 text-black" />
                      {/* Scanning sweep effect */}
                      <motion.div 
                        animate={{ 
                          top: ["-10%", "110%"],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "linear"
                        }}
                        className="absolute left-0 right-0 h-[2px] bg-white/40 shadow-[0_0_10px_white]"
                      />
                   </div>
                </motion.div>
             </div>
 
             {/* Connection Pulses & Outer Nodes */}
             {[...Array(6)].map((_, i) => {
               const angle = (i * 60) * (Math.PI / 180);
               const radius = 180;
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius;
 
               return (
                 <React.Fragment key={i}>
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-1/2 w-[180px] h-[1px] origin-left z-10" style={{ transform: `rotate(${i * 60}deg)` }}>
                       <div className="w-full h-full bg-secondary/10 relative overflow-hidden">
                          <motion.div 
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 0.8 + (i * 0.2), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                            className="absolute inset-y-0 w-32 bg-secondary/60 blur-md shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                          />
                       </div>
                    </div>
 
                    {/* Outer Node */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.3 + (i * 0.1) }}
                      whileHover={{ scale: 1.2, borderColor: '#d4af37', boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}
                      className="absolute w-14 h-14 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] z-20 flex items-center justify-center backdrop-blur-md cursor-pointer transition-all duration-300"
                      style={{ 
                        left: `calc(50% + ${x}px)`, 
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                       {/* Mock App Icons - Themed consistently */}
                       <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                         i % 3 === 0 ? 'bg-secondary/20 text-secondary' : 
                         i % 3 === 1 ? 'bg-blue-500/20 text-blue-400' : 
                         'bg-purple-500/20 text-purple-400'
                       }`}>
                         {i === 0 && <Share2 className="w-4 h-4" />}
                         {i === 1 && <Bot className="w-4 h-4" />}
                         {i === 2 && <Layers className="w-4 h-4" />}
                         {i === 3 && <Network className="w-4 h-4" />}
                         {i === 4 && <Zap className="w-4 h-4" />}
                         {i === 5 && <Cpu className="w-4 h-4" />}
                       </div>
                    </motion.div>
                 </React.Fragment>
               );
             })}
 
             {/* Floating Label Boxes */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="absolute top-[10%] left-[15%] p-4 rounded-xl bg-[var(--bg-secondary)]/60 border border-secondary/30 backdrop-blur-xl text-[10px] font-mono z-30 min-w-[180px] shadow-2xl"
             >
               <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-secondary animate-pulse" />
               <ProfessionalLabelText text='IF trigger.event == "new_lead"' delay={0.2} className="text-[var(--text-primary)]" />
               <ProfessionalLabelText text='EXECUTE AI_Analysis' delay={0.4} className="text-secondary font-bold" />
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="absolute bottom-[15%] right-[10%] p-4 rounded-xl bg-[var(--bg-secondary)]/60 border border-secondary/30 backdrop-blur-xl text-[10px] font-mono z-30 min-w-[180px] shadow-2xl"
             >
               <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-secondary animate-pulse" />
               <ProfessionalLabelText text='Status: Synchronizing...' delay={0.6} className="text-[var(--text-primary)]" />
               <ProfessionalLabelText text='Efficiency: 100%' delay={0.8} className="text-secondary font-bold" />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
