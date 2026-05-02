
import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface LegalSectionProps {
  content: Content['footer'];
  isRTL: boolean;
  onOpenModal: (type: 'privacy' | 'imprint') => void;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ content, isRTL, onOpenModal }) => {
  return (
    <section className="py-12 border-t border-secondary/10 bg-[var(--bg-secondary)]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-xs font-black uppercase tracking-[0.2em]"
        >
          © {new Date().getFullYear()} Emad Hadid. {content.rights}
        </motion.p>
        
        <div className="flex items-center gap-10">
          <button
            onClick={() => onOpenModal('privacy')}
            className="text-gray-400 hover:text-secondary text-xs font-black uppercase tracking-[0.3em] transition-colors duration-300"
          >
            {content.privacy}
          </button>
          <button
            onClick={() => onOpenModal('imprint')}
            className="text-gray-400 hover:text-secondary text-xs font-black uppercase tracking-[0.3em] transition-colors duration-300"
          >
            {content.imprint}
          </button>
        </div>
      </div>
    </section>
  );
};
