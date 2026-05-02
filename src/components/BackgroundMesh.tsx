import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const BackgroundMesh: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--bg-primary)]"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      {/* High-Performance Static Luxury Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--mesh-color-1)_0%,transparent_50%),radial-gradient(circle_at_bottom_left,var(--mesh-color-2)_0%,transparent_50%)]" />
      
      {/* Central Ambient Light Wash */}
      <div className="absolute inset-x-0 top-0 h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_80%)]" />

      {/* Stable Ambient Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-5%] w-[70%] h-[70%] bg-secondary/5 blur-[180px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -30, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] right-[-5%] w-[70%] h-[70%] bg-secondary/8 blur-[180px] rounded-full" 
      />
      
      {/* Active Digital Glow - Center Accent */}
      <motion.div
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-secondary/10 blur-[200px] rounded-full"
      />

      {/* Floating Star/Particle Dust */}
      {[...Array(8)].map((_, i) => (
        <motion.div
           key={`particle-${i}`}
           initial={{ opacity: 0, y: 0 }}
           animate={{ 
             opacity: [0, 0.4, 0],
             y: [-20, -100],
             x: [0, (i % 2 === 0 ? 20 : -20)]
           }}
           transition={{
             duration: 10 + i * 2,
             repeat: Infinity,
             delay: i * 3,
             ease: "linear"
           }}
           className="absolute w-0.5 h-0.5 bg-secondary/40 rounded-full blur-[0.5px]"
           style={{
             top: `${15 + (i * 10)}%`,
             left: `${10 + (Math.random() * 80)}%`
           }}
        />
      ))}

      {/* Subtle Light Streaks */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          x: [-100, 100]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-[2px]"
      />
      <motion.div
        animate={{
          opacity: [0.02, 0.06, 0.02],
          x: [100, -100]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/15 to-transparent blur-[2px]"
      />

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03] pointer-events-none" />
    </div>
  );
};

