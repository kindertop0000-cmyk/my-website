
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  isRTL: boolean;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content, isRTL }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#050505] border border-secondary/20 rounded-3xl p-10 md:p-16 shadow-[0_0_100px_rgba(212,175,55,0.1)] overflow-y-auto max-h-[85vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-500 hover:text-secondary transition-colors"
            >
              <X size={32} />
            </button>

            <h2 className={`text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter text-[var(--text-primary)] ${isRTL ? 'font-arabic' : 'font-luxury-serif italic'}`}>
              {title}
            </h2>

            <div className={`text-gray-400 text-lg md:text-xl leading-relaxed font-light whitespace-pre-wrap ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
