'use client';

import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [stage, setStage] = useState('entering'); // 'entering' | 'visible' | 'exiting' | 'done'

  useEffect(() => {
    // Stage 1: Reveal logo and name
    const timer1 = setTimeout(() => {
      setStage('visible');
    }, 80);

    // Stage 2: Begin smooth exit transition after 1.35 seconds
    const timer2 = setTimeout(() => {
      setStage('exiting');
    }, 1350);

    // Stage 3: Completely remove from DOM after exit animation finishes
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === 'done') return null;

  const isExiting = stage === 'exiting';

  return (
    <div 
      className={`hostayy-splash-overlay ${isExiting ? 'splash-fade-out' : ''}`}
      aria-label="hostayy Welcome Screen"
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.03)' : 'scale(1)',
        filter: isExiting ? 'blur(3px)' : 'none',
        transition: 'opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s ease',
        pointerEvents: isExiting ? 'none' : 'auto',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Background soft ambient radial aura */}
      <div 
        style={{
          position: 'absolute',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(234, 56, 76, 0.07) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          animation: 'hostayyAuraPulse 2s ease-in-out infinite alternate'
        }}
      />

      {/* Centered Brand Capsule */}
      <div 
        className="hostayy-splash-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: 'hostayySplashPopIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) both',
          position: 'relative',
          zIndex: 2,
          padding: '0 20px'
        }}
      >
        {/* hostayy circular emblem / logo */}
        <div 
          className="hostayy-splash-logo-wrap"
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '2.5px solid #fecdd3',
            boxShadow: '0 14px 40px rgba(234, 56, 76, 0.2), 0 2px 10px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            marginBottom: '18px',
            animation: 'hostayyLogoPulse 1.6s ease-in-out infinite alternate'
          }}
        >
          <img 
            src="/assets/images/hostayy-logo-transparent.png" 
            alt="hostayy logo" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain' 
            }}
          />
        </div>

        {/* hostayy brand name directly below the logo */}
        <h1 
          className="hostayy-splash-title"
          style={{
            margin: 0,
            fontFamily: "var(--font-brand, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(36px, 8vw, 48px)',
            fontWeight: 800,
            color: '#ea384c',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            textTransform: 'lowercase'
          }}
        >
          hostayy
        </h1>

        {/* Refined Luxury Tagline */}
        <span 
          style={{
            display: 'block',
            marginTop: '8px',
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#4b5563',
            letterSpacing: '2.5px',
            textTransform: 'uppercase'
          }}
        >
          Curated Serviced Residences
        </span>

        {/* Minimal Luxury Progress Line Indicator */}
        <div 
          style={{
            width: '130px',
            height: '3px',
            background: 'rgba(234, 56, 76, 0.15)',
            borderRadius: '4px',
            marginTop: '24px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div 
            className="hostayy-splash-progress-bar"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, #ea384c, #c41c33)',
              borderRadius: '4px',
              animation: 'hostayyProgressFill 1.35s cubic-bezier(0.22, 1, 0.36, 1) forwards'
            }}
          />
        </div>
      </div>
    </div>
  );
}

