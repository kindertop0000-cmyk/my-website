import React, { useRef } from 'react';
import { Target, Lightbulb, Code2, Rocket } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Language, Content } from '../types';

interface StrategyProps {
  isRTL: boolean;
  content: Content['strategy'];
}

interface MagneticCardProps {
  step: { title: string; desc: string };
  icon: React.ReactNode;
  idx: number;
  isRTL: boolean;
}

import { SpotlightCard } from './SpotlightCard';

const MagneticCard: React.FC<MagneticCardProps> = ({ step, icon, idx, isRTL }) => {
  return (
    <div
      className="group relative h-full rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden flex flex-col p-12 transition-all duration-700"
    >
      <div className="relative z-10 flex-grow">
        <div 
          className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500 border border-white/5"
        >
          {icon}
        </div>
        <motion.h3 
          className="text-2xl font-black mb-6 uppercase tracking-tight"
          initial={{ color: "var(--text-primary)" }}
          whileInView={{ color: "rgba(212, 175, 55, 1)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, delay: idx * 0.2 }}
        >
          {step.title}
        </motion.h3>
        <p className="text-[var(--text-secondary)] font-light text-base leading-relaxed group-hover:text-[var(--text-primary)] transition-colors duration-500">{step.desc}</p>
      </div>

      <div 
        className={`relative z-10 mt-10 flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-secondary/60 transition-all duration-700 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <span className="w-16 h-[1px] bg-secondary/30"></span>
        DIGITAL ADVANTAGE
      </div>
    </div>
  );
};

export const Strategy: React.FC<StrategyProps> = ({ isRTL, content }) => {
  const icons = [
    <Target className="w-10 h-10" />,
    <Lightbulb className="w-10 h-10" />,
    <Code2 className="w-10 h-10" />,
    <Rocket className="w-10 h-10" />
  ];

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary font-black text-[10px] tracking-[0.5em] uppercase mb-4 block">{content.subtitle}</span>
          <h2 className={`${isRTL ? 'text-[2rem] md:text-[3.375rem]' : 'text-4xl md:text-6xl'} font-black text-[var(--text-primary)] tracking-tighter`}>
            {content.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.steps.map((step, idx) => (
            <MagneticCard key={idx} step={step} icon={icons[idx]} idx={idx} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
};
