'use client';

import React, { useState, useEffect } from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink } from '../data/properties';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`main-menu main-menu-two ${scrolled ? 'stricky-fixed' : ''}`}>
      <div className="container">
        <div className="main-menu-two__wrapper-inner">
          {/* Official Hostayy Luxury Brand Logo with Breathing Room */}
          <a href="#home" className="brand-logo-hotelux" aria-label="Hostayy - Feel like home" style={{ marginRight: '36px', flexShrink: 0 }}>
            <div className="brand-emblem-wrap">
              <img 
                src="/assets/images/hostayy-logo-transparent.png" 
                alt="Hostayy Logo" 
                className="brand-logo-img"
              />
            </div>
            <div className="brand-text-hotelux">
              <h2>hostayy</h2>
              <span className="brand-slogan">(feel like home)</span>
            </div>
          </a>

          {/* Navigation Menu List (Spacious & Clean) */}
          <ul className={`main-menu__list ${mobileOpen ? 'mobile-open' : ''}`} style={{ gap: '26px' }}>
            <li>
              <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#room" onClick={() => setMobileOpen(false)}>Residences</a>
            </li>
            <li>
              <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
            </li>
            <li>
              <a href="#calculator" onClick={() => setMobileOpen(false)}>Yield</a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </li>
          </ul>

          {/* Right Action Block: Phone Call & Host Concierge */}
          <div className="main-menu-two__right" style={{ flexShrink: 0 }}>
            <div className="main-menu-two__call" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--hotelux-primary)', border: '1.5px solid var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hotelux-base)' }}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div style={{ lineHeight: 1.25 }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--hotelux-base)', fontWeight: 700, letterSpacing: '0.08em', display: 'block' }}>Host Concierge</span>
                <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} style={{ display: 'block', fontSize: '15px', fontWeight: 700, color: 'var(--hotelux-black)' }}>
                  {HOSTAYY_CONFIG.displayPhone}
                </a>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button" 
              className="mobile-nav-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
