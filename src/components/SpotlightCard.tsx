import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "",
  spotlightColor = "rgba(212, 175, 55, 0.15)"
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const mouseXSpring = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch, { passive: true });
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isTouch) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Disable all complex GPU tracking on mobile to prevent crashes
  const activeOpacity = isHovered ? 1 : 0;

  const backgroundTemplate = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseXSpring}px ${mouseYSpring}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

  const maskImageTemplate = useMotionTemplate`
    radial-gradient(
      220px circle at ${mouseXSpring}px ${mouseYSpring}px,
      white,
      transparent
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: isTouch ? 0 : -4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden transition-[box-shadow,border-color] duration-500 lg:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[var(--card-bg)] backdrop-blur-md border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Premium Glass Reflection */}
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-50" />
      
      {/* Background Shimmer Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] pointer-events-none"
        style={{ skewX: -20 }}
      />

      {/* Spotlight Effect (Desktop Only) */}
      {!isTouch && (
        <>
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-inherit z-10 transition-opacity duration-500"
            style={{
              opacity: activeOpacity,
              background: backgroundTemplate,
            }}
          />

          <motion.div
            className="pointer-events-none absolute -inset-px rounded-inherit z-30 transition-opacity duration-500"
            style={{
              opacity: activeOpacity,
              maskImage: maskImageTemplate,
              WebkitMaskImage: maskImageTemplate,
            }}
          >
            <div className="absolute inset-0 rounded-inherit border-[1.5px] border-secondary/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
          </motion.div>
        </>
      )}

      {/* Simple border highlight for mobile */}
      {isTouch && (
         <div className="absolute inset-0 rounded-inherit group-hover:border-secondary/10 transition-colors duration-300 pointer-events-none" />
      )}

      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
};
