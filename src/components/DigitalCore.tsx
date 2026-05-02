import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Zap, BrainCircuit, Crown, CheckCircle2, Terminal } from 'lucide-react';
import { Content } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface DigitalCoreProps {
  content: Content['core'];
  isRTL: boolean;
}

// Highly precise syntax highlighter
const highlightCode = (code: string) => {
  let html = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
  html = html.replace(/('([^']*)')/g, '<span style="color:rgba(212,175,55,0.9)">$1</span>');
  html = html.replace(/(\/\/.*)/g, '<span style="color:rgba(255,255,255,0.25); font-style: italic;">$1</span>');
  html = html.replace(/\b(import|from|const|new|await|true|false)\b/g, '<span style="color:rgba(255,255,255,0.9); font-weight: 700">$1</span>');
  html = html.replace(/([a-zA-Z0-9_]+)(?=:)/g, '<span style="color:rgba(255,255,255,0.6)">$1</span>');
  html = html.replace(/([a-zA-Z0-9_]+)(?=\()/g, '<span style="color:rgba(255,255,255,0.9)">$1</span>');
  html = html.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span style="color:rgba(212,175,55,0.9); font-weight: 600">$1</span>');
  html = html.replace(/\n/g, '<br/>').replace(/  /g, '&nbsp;&nbsp;');
  
  return { __html: html };
};

const StatPanel = ({ title, icon: Icon, delay, position }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.6, type: 'spring', bounce: 0.4 }}
    className={`absolute ${position} z-20 bg-[var(--card-bg)] border border-[var(--border-color)] backdrop-blur-xl p-3 md:p-5 rounded-2xl flex items-center gap-3 shadow-[0_15px_40px_rgba(0,0,0,0.6)] whitespace-nowrap hidden lg:flex overflow-hidden group`}
  >
    {/* Premium Glass Reflection */}
    <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-50" />
    <motion.div 
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="p-2.5 bg-secondary/15 border border-secondary/40 rounded-xl text-secondary shadow-[0_0_15px_rgba(212,175,55,0.2)]"
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6" />
    </motion.div>
    <div className="text-left">
      <div className="text-[9px] md:text-[10px] text-gray-300 font-mono tracking-wider">{title}</div>
      <div className="text-xs md:text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
        OPTIMIZED <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
      </div>
    </div>
  </motion.div>
);

export const DigitalCore: React.FC<DigitalCoreProps> = ({ content, isRTL }) => {
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const [typedCode, setTypedCode] = useState('');
  const [isIgnited, setIsIgnited] = useState(false);

  // Dynamically generate code based on localized Content
  const codeSnippet = useMemo(() => {
    return `// System Architecture Core Protocol
import { SovereignEngine } from '@elite/core';
import { Intelligence, Security, Render, Velocity } from '@elite/modules';

const empire = new SovereignEngine({
  architect: 'Emad Hadid',
  ${content.features[0].id}: Intelligence.Deploy({
    module: '${content.features[0].title}',
    status: 'Active'
  }),
  ${content.features[1].id}: Velocity.ZeroLatency({
    module: '${content.features[1].title}',
    status: 'Active'
  }),
  ${content.features[2].id}: Security.MilitaryGrade({
    module: '${content.features[2].title}',
    status: 'Active'
  }),
  ${content.features[3].id}: Render.AbsoluteLuxury({
    module: '${content.features[3].title}',
    status: 'Active'
  })
});

// Deploying infrastructure to global edge...
await empire.compile();
empire.ignite();`;
  }, [content]);

  useEffect(() => {
    if (!isTypingStarted) return;
    
    let i = 0;
    const interval = setInterval(() => {
       setTypedCode(codeSnippet.slice(0, i));
       i += 4; // Fast typing speed
       
       if(i >= codeSnippet.length + 4) {
          setTypedCode(codeSnippet);
          clearInterval(interval);
          setTimeout(() => setIsIgnited(true), 800); // 800ms dramatic pause before ignition
       }
    }, 15);
    
    return () => clearInterval(interval);
  }, [isTypingStarted, codeSnippet]);

  return (
    <section className="relative min-h-screen bg-[var(--bg-primary)] py-24 md:py-40 overflow-hidden flex items-center justify-center scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Code Compilation Layout */}
        <motion.div 
          onViewportEnter={() => setIsTypingStarted(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left: Glassmorphism IDE / Code Editor */}
          <SpotlightCard className="w-full relative shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden box-border">
              <div className="relative w-full h-full">
                {/* Fake ambient code glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 blur-[80px] -z-10 transition-opacity duration-1000 ${isIgnited ? 'opacity-100' : 'opacity-0'}`} />

                {/* VSCode/Mac Style Header */}
                <div className="bg-white/[0.03] px-4 py-3 flex items-center border-b border-white/[0.05]" dir="ltr">
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-white/20 border border-white/10"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20 border border-white/10"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20 border border-white/10"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mx-auto mr-auto opacity-70">
                        <Terminal className="w-3 h-3" />
                        <span>core_architecture.ts</span>
                    </div>
                </div>

                {/* Code Typing Body */}
                <div className="p-6 md:p-8 font-mono text-[11px] md:text-sm leading-relaxed md:leading-[1.7] min-h-[450px] md:min-h-[500px]" dir="ltr">
                    <div 
                      dangerouslySetInnerHTML={highlightCode(typedCode)} 
                      className="inline text-left" 
                    />
                    {/* Blinking Cursor */}
                    <motion.span 
                       animate={{ opacity: [1, 0, 1] }} 
                       transition={{ duration: 0.8, repeat: Infinity }} 
                       className="inline-block w-2.5 h-4 md:h-5 bg-secondary ml-1 align-middle"
                    />
                </div>

                {/* Ignite Flash Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isIgnited ? [0, 1, 0] : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 bg-secondary pointer-events-none mix-blend-overlay"
                />
              </div>
          </SpotlightCard>

          {/* Right: The Live Result / The Core */}
          <div className="w-full relative min-h-[450px] md:min-h-[550px] flex items-center justify-center">
              
              {isIgnited ? (
                 <motion.div
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                   className="relative flex items-center justify-center"
                 >
                    {/* The Magnificent Restored Core Orb - Upgraded to Hyper-Realistic Celestial Gyroscope */}
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center scale-90 lg:scale-110" style={{ perspective: 1200 }}>
                      
                      {/* Background Aura */}
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-[-10%] rounded-full bg-secondary/10 blur-[80px]"
                      />

                      {/* Volumetric Light Rays */}
                      <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                         className="absolute inset-[-20%] rounded-full blur-md opacity-30 pointer-events-none"
                         style={{ 
                            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(212,175,55,0.2) 20deg, transparent 40deg, rgba(255,255,255,0.1) 100deg, transparent 150deg, rgba(212,175,55,0.2) 200deg, transparent 240deg, rgba(255,255,255,0.1) 300deg, transparent 360deg)' ,
                            maskImage: 'radial-gradient(circle at center, black 20%, transparent 60%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 60%)'
                         }}
                      />

                      {/* 3D Orbit 1: Outer Gyroscope Ring */}
                      <motion.div 
                        animate={{ rotateZ: 360, rotateX: [70, 70], rotateY: [0, 360] }} 
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} 
                        className="absolute inset-[0%] rounded-full border border-white/20 border-t-secondary border-b-secondary/30 shadow-[0_0_30px_rgba(212,175,55,0.3)_inset]" 
                        style={{ transformStyle: 'preserve-3d' }}
                      />
                      
                      {/* 3D Orbit 2: Middle Reverse Gyroscope Ring */}
                      <motion.div 
                        animate={{ rotateZ: -360, rotateX: [50, 50], rotateY: [360, 0] }} 
                        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} 
                        className="absolute inset-[12%] rounded-full border-[1.5px] border-white/10 border-l-secondary/80 border-r-secondary/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                        style={{ transformStyle: 'preserve-3d' }}
                      />
                      
                      {/* Orbit 3: Inner Energy Shield */}
                      <motion.div 
                        animate={{ 
                          rotateZ: 180, 
                          scale: [1, 1.05, 1],
                        }} 
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} 
                        className="absolute inset-[24%] rounded-full border-2 border-secondary/20 border-t-secondary border-b-white/50 blur-[1px]" 
                      />

                      {/* Shockwave Pulse Emitters */}
                      {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={`pulse-${i}`}
                            animate={{ scale: [0.8, 2], opacity: [0.6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: 'easeOut' }}
                            className="absolute inset-[30%] rounded-full border border-secondary"
                          />
                      ))}

                      {/* The Supermassive Core Nucleus - Developer's Topology Matrix */}
                      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-[var(--bg-secondary)] backdrop-blur-3xl flex items-center justify-center transition-all duration-700 shadow-[0_0_120px_rgba(212,175,55,0.4),inset_0_0_40px_rgba(255,255,255,0.05)] border border-white/10 z-20 overflow-hidden">
                        
                        {/* Dynamic CPU Load Light */}
                        <motion.div 
                          animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
                          className="absolute -inset-4 bg-gradient-to-tr from-secondary/40 via-transparent to-white/10 rounded-full blur-[15px]" 
                        />

                        {/* Immersive Neural/Server Topology Architecture */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0, filter: 'blur(10px)' }}
                          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                          transition={{ type: "spring", bounce: 0.5, duration: 1.5, delay: 0.2 }}
                          className="relative z-10 w-full h-full flex items-center justify-center"
                        >
                          {/* Data Rings */}
                          <svg className="absolute w-[90%] h-[90%]" viewBox="0 0 100 100">
                             <motion.circle animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '50% 50%' }} cx="50" cy="50" r="48" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" strokeDasharray="2 4" />
                             <motion.circle animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '50% 50%' }} cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.2" strokeDasharray="1 2" />
                             {/* Central CPU Hexagon */}
                             <motion.polygon animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '50% 50%' }} points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
                             <motion.polygon animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '50% 50%' }} points="50,25 72,38 72,62 50,75 28,62 28,38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                          </svg>

                          {/* Connection Lines (Microservices interacting) */}
                          <svg className="absolute w-[70%] h-[70%]" viewBox="0 0 100 100">
                            {[...Array(6)].map((_, i) => {
                               const angle1 = (i * 60) * Math.PI / 180;
                               const angle2 = (((i + 2) % 6) * 60) * Math.PI / 180;
                               const x1 = 50 + 40 * Math.cos(angle1);
                               const y1 = 50 + 40 * Math.sin(angle1);
                               const x2 = 50 + 40 * Math.cos(angle2);
                               const y2 = 50 + 40 * Math.sin(angle2);
                               return (
                                 <g key={`connection-${i}`}>
                                   <motion.path
                                      d={`M ${x1} ${y1} L 50 50`}
                                      stroke="rgba(255,215,0,0.8)"
                                      strokeWidth="1.5"
                                      fill="none"
                                      initial={{ pathLength: 0, opacity: 0 }}
                                      animate={{ pathLength: 1, opacity: 1 }}
                                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                   />
                                   <motion.path
                                      d={`M ${x1} ${y1} L ${x2} ${y2}`}
                                      stroke="rgba(212,175,55,0.6)"
                                      strokeWidth="1"
                                      fill="none"
                                      initial={{ pathLength: 0, opacity: 0 }}
                                      animate={{ pathLength: 1, opacity: 1 }}
                                      transition={{ duration: 2, repeat: Infinity, delay: 0.5, repeatType: "reverse", ease: "easeInOut" }}
                                   />
                                   {/* Data Packet flowing to Core */}
                                   <motion.circle 
                                      r="1.5" fill="#fff"
                                      initial={{ cx: x1, cy: y1, opacity: 1 }}
                                      animate={{ cx: 50, cy: 50, opacity: [1, 1, 0] }}
                                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                                      style={{ filter: 'drop-shadow(0 0 2px #fff)' }}
                                   />
                                   {/* Data Packet flowing to peers */}
                                   <motion.circle 
                                      r="1" fill="#d4af37"
                                      initial={{ cx: x1, cy: y1, opacity: 1 }}
                                      animate={{ cx: x2, cy: y2, opacity: [0, 1, 0] }}
                                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                                   />
                                 </g>
                               );
                            })}
                          </svg>

                          {/* Node Endpoints (Servers/Instances) */}
                          {[...Array(6)].map((_, i) => (
                             <div 
                               key={`endpoint-${i}`} 
                               className="absolute w-2 h-2 md:w-3 md:h-3 rounded-sm bg-[var(--bg-secondary)] border border-secondary flex items-center justify-center transform-gpu"
                               style={{
                                 top: `${50 + 35 * Math.sin((i * 60) * Math.PI / 180)}%`,
                                 left: `${50 + 35 * Math.cos((i * 60) * Math.PI / 180)}%`,
                                 transform: 'translate(-50%, -50%) rotate(45deg)',
                                 boxShadow: '0 0 10px rgba(212,175,55,0.5)'
                               }}
                             >
                               <motion.div 
                                 animate={{ opacity: [1, 0.2, 1] }} 
                                 transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                 className="w-1 h-1 bg-white" 
                               />
                             </div>
                          ))}

                          {/* The Apex Processor Core */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-[var(--bg-secondary)] border border-secondary/30 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.8)] z-10 box-border">
                            <motion.div 
                               animate={{ rotateZ: -90, scale: [0.8, 1, 0.8] }}
                               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                               className="w-4 h-4 md:w-6 md:h-6 bg-secondary/20 border border-secondary shadow-[inset_0_0_10px_#d4af37] box-border p-1 flex items-center justify-center"
                            >
                                <div className="w-full h-full bg-white opacity-80 shadow-[0_0_10px_#fff]" />
                            </motion.div>
                          </div>

                        </motion.div>
                      </div>

                      {/* Floating Quantum Data Motes */}
                      {[...Array(12)].map((_, i) => (
                         <motion.div
                           key={`mote-${i}`}
                           animate={{ 
                             rotate: [0, 360],
                             scale: [1, 1.5, 1],
                             opacity: [0.2, 1, 0.2]
                           }}
                           transition={{ duration: 6 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                           className="absolute inset-[-10%] md:inset-[-20%] origin-center pointer-events-none"
                         >
                           <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full absolute top-1/2 left-0 ${i % 2 === 0 ? 'bg-secondary shadow-[0_0_12px_#d4af37]' : 'bg-white shadow-[0_0_12px_#ffffff]'}`} />
                         </motion.div>
                      ))}
                    </div>
                 </motion.div>
              ) : (
                 // Wireframe compiling state mapping
                 <motion.div 
                   animate={{ opacity: [0.3, 0.7, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="flex flex-col items-center gap-6"
                 >
                   <div className="relative flex items-center justify-center w-40 h-40">
                      <div className="w-full h-full border border-white/10 rounded-full border-t-white/30 animate-spin" />
                      <div className="absolute inset-4 border border-white/5 rounded-full border-b-white/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
                      <div className="absolute inset-12 border border-white/5 rounded-full border-l-white/40 animate-spin" style={{ animationDuration: '1.5s' }} />
                   </div>
                   <span className="text-[var(--text-primary)]/40 font-mono text-xs tracking-widest uppercase">Compiling Architecture...</span>
                 </motion.div>
              )}

              {/* Holographic Result Panels */}
              <AnimatePresence>
                {isIgnited && (
                  <>
                     <StatPanel title="MILITARY SECURITY" icon={ShieldAlert} delay={1.2} position="top-[10%] right-[10%] md:-right-[-20px]" />
                     <StatPanel title="HYPER PERFORMANCE" icon={Zap} delay={1.4} position="bottom-[15%] right-[5%] md:right-[-40px]" />
                     <StatPanel title="COGNITIVE SYNC" icon={BrainCircuit} delay={1.6} position="top-[45%] left-0 md:left-[-60px]" />
                  </>
                )}
              </AnimatePresence>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
