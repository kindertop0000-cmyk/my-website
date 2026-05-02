import React from 'react';

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    width={size} 
    height={size}
    className={className}
  >
    <defs>
      {/* High-End Gold Gradient for the Outer Ring */}
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="25%" stopColor="#FBEE95" />
        <stop offset="50%" stopColor="#E6B12E" />
        <stop offset="75%" stopColor="#FBEE95" />
        <stop offset="100%" stopColor="#996515" />
      </linearGradient>

      {/* Luxury Red Gradient for the Text */}
      <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF1A1A" />
        <stop offset="100%" stopColor="#8B0000" />
      </linearGradient>

      {/* Soft Golden Glow around the ring */}
      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
        <feFlood floodColor="#D4AF37" floodOpacity="0.4" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Lighting Reflection Effect */}
      <radialGradient id="ringShine" cx="35%" cy="35%" r="50%" fx="35%" fy="35%">
        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>

      {/* Text Clarity and Sharpness Filter */}
      <filter id="textClarity" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur" />
        <feOffset dx="0.3" dy="0.3" result="offset" />
        <feFlood floodColor="black" floodOpacity="0.3" />
        <feComposite in2="offset" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* The Gold Outer Ring with Glow */}
    <circle cx="50" cy="50" r="48" fill="none" stroke="url(#goldGradient)" strokeWidth="3.2" />
    
    {/* Subtle Shine on the Gold Ring */}
    <circle cx="50" cy="50" r="48" fill="none" stroke="url(#ringShine)" strokeWidth="3.2" strokeOpacity="0.4" />

    {/* Pure White Luxury Inner Background */}
    <circle cx="50" cy="50" r="46.4" fill="#FFFFFF" />

    {/* The Name - Centered with Red Script/Serif Style */}
    <text 
      x="50" 
      y="51" 
      fontFamily="'Playfair Display', serif" 
      fontStyle="italic" 
      fontWeight="700" 
      fontSize="13.2" 
      fill="url(#redGradient)" 
      textAnchor="middle" 
      dominantBaseline="middle"
      style={{ letterSpacing: '0.01em' }}
    >
      Emad Hadid
    </text>

    {/* Inner Micro-Definition Rim */}
    <circle cx="50" cy="50" r="46.4" fill="none" stroke="#D4AF37" strokeWidth="0.2" strokeOpacity="0.2" />
  </svg>
);

