
import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);
  
  const ringConfig = { damping: 15, stiffness: 100, mass: 0.8 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    // Disable entirely on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] hidden lg:block">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Main Dot */}
            <motion.div
              className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full z-[10002] mix-blend-difference"
              style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
            />
            
            {/* Outer Ring */}
            <motion.div
              className="fixed top-0 left-0 rounded-full border border-secondary/50 z-[10001]"
              style={{ 
                x: ringX, 
                y: ringY, 
                translateX: '-50%', 
                translateY: '-50%',
                width: isHovering ? 60 : 30,
                height: isHovering ? 60 : 30,
                backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
              }}
              animate={{
                scale: isClicking ? 0.8 : 1,
                opacity: isVisible ? 1 : 0,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            />

            {/* Magnetic Pulse when hovering */}
            {isHovering && (
              <motion.div
                className="fixed top-0 left-0 w-20 h-20 rounded-full border border-secondary/20 z-[10000]"
                style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
