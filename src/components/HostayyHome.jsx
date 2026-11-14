'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import Navbar from './Navbar';
import MobileBottomBar from './MobileBottomBar';
import Footer from './Footer';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

const COVER_SLIDES = [
  {
    id: 'velora',
    title: 'Velora Suite • 1 BHK Curated Residence',
    tag: '3 Mins to Yashobhoomi (IICC) • 750 Sq Ft',
    image: '/assets/images/velora/velora-01.jpg',
    bhk: '1 BHK Suite',
    rating: '4.98 ★'
  },
  {
    id: 'azura',
    title: 'Azura Residence • 2 BHK Executive Suite',
    tag: 'Aerocity Corridor • 1,250 Sq Ft & Balcony',
    image: '/assets/images/azura/azura-01.jpg',
    bhk: '2 BHK Executive',
    rating: '4.99 ★'
  },
  {
    id: 'verde',
    title: 'Verde Signature • 3 BHK Luxury Living',
    tag: 'Prime Golf Belt Dwarka • 1,850 Sq Ft',
    image: '/assets/images/verde/verde-01.jpg',
    bhk: '3 BHK Signature',
    rating: '4.97 ★'
  },
  {
    id: 'kitchen',
    title: 'Chef-Ready Modular Kitchen & Appliances',
    tag: 'Induction, Gas Hob, Microwave, RO Purifier & Cookware',
    image: '/assets/images/velora/velora-07.jpg',
    bhk: 'Modular Kitchen',
    rating: '100% Home Comfort'
  },
  {
    id: 'bedroom',
    title: 'Orthopedic King Bedding & Sanitized Linens',
    tag: '400-TC Egyptian Cotton & Dedicated Workstation',
    image: '/assets/images/azura/azura-05.jpg',
    bhk: 'Master Bedroom',
    rating: 'Five-Star Hygiene'
  }
];

export default function HostayyHome() {
  const [currentCoverIdx, setCurrentCoverIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 35;

  const nextCover = () => {
    setCurrentCoverIdx((prev) => (prev + 1) % COVER_SLIDES.length);
  };

  const prevCover = () => {
    setCurrentCoverIdx((prev) => (prev - 1 + COVER_SLIDES.length) % COVER_SLIDES.length);
  };

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      // Swiped left -> next cover photo
      nextCover();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev cover photo
      prevCover();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const activeSlide = COVER_SLIDES[currentCoverIdx];

  return (
    <div className="hostayy-app">
      {/* Top Bar & Booking.com-Inspired Header */}
      <TopBar />
      <Navbar activePage="home" />

      <main>
        {/* =================================================================
            HERO: ABOUT HOSTAYY (Brand Story & Vision)
            ================================================================= */}
        <section 
          className="hostayy-home-hero ambient-glow-wrapper luxury-grid-bg" 
          style={{ 
            backgroundColor: '#ffffff', 
            padding: '65px 0 45px',
            borderBottom: '1px solid #fecdd3',
            position: 'relative'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-12 col-lg-8 offset-lg-2 text-center">
                {/* Brand Badge with Live Pulsing Dot */}
                <div style={{ marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      fontSize: '12px', 
                      background: 'rgba(255, 247, 237, 0.95)', 
                      color: '#ea384c', 
                      padding: '7px 18px', 
                      borderRadius: '30px', 
                      fontWeight: 800, 
                      letterSpacing: '0.08em',
                      border: '1.5px solid #fecdd3',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(234, 56, 76, 0.08)'
                    }}
                  >
                    <span className="pulse-dot"></span>
                    PRIME DWARKA SECTOR 23 NEAR YASHOBHOOMI (IICC)
                  </span>
                </div>

                {/* Hero Title */}
                <h1 
                  style={{ 
                    fontSize: 'clamp(32px, 4.8vw, 50px)', 
                    color: '#111827', 
                    fontWeight: 800, 
                    lineHeight: 1.18,
                    marginBottom: '18px',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Welcome to <span style={{ color: '#ea384c' }}>Hostayy</span>
                </h1>

                {/* Mission Subtitle */}
                <p 
                  style={{ 
                    fontSize: 'clamp(15px, 2vw, 18px)', 
                    color: '#374151', 
                    lineHeight: 1.7, 
                    fontWeight: 500,
                    maxWidth: '780px',
                    margin: '0 auto 28px'
                  }}
                >
                  Hostayy bridges the gap between cramped hotel rooms and unmanaged rental apartments. Headquartered in Dwarka Sector 23, New Delhi, we engineer five-star turnkey serviced residences for extended stays and deliver guaranteed high-yield property management for residential apartment owners.
                </p>

                {/* 4 Brand Pillars with Glassmorphism & Hover Lift */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
                    gap: '14px',
                    marginBottom: '36px'
                  }}
                >
                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea384c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-star" style={{ color: '#f59e0b', marginRight: '5px' }}></i>4.98★
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>Superhost Hospitality</span>
                  </div>

                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea384c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-shield-halved" style={{ color: '#ea384c', marginRight: '5px' }}></i>0%
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>Brokerage &amp; Hidden Fees</span>
                  </div>

                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea384c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#ea384c', marginRight: '5px' }}></i>3 Mins
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>To Yashobhoomi IICC</span>
                  </div>

                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea384c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-money-bill-trend-up" style={{ color: '#16a34a', marginRight: '5px' }}></i>40%+
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>Higher Landlord Yield</span>
                  </div>
                </div>

                {/* Swipeable Cover Photo Slider for Phone and Desktop */}
                <div 
                  className="hostayy-cover-slider luxury-glass-card"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '2px solid #fecdd3',
                    background: '#ffffff',
                    boxShadow: '0 16px 45px rgba(234, 56, 76, 0.1)',
                    position: 'relative',
                    marginTop: '24px'
                  }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div style={{ position: 'relative', height: 'clamp(260px, 45vw, 420px)', width: '100%', overflow: 'hidden' }}>
                    <img 
                      src={activeSlide.image} 
                      alt={activeSlide.title}
                      className="hostayy-cover-img"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'all 0.4s ease',
                        imageRendering: '-webkit-optimize-contrast',
                        filter: 'contrast(1.05) brightness(1.03) saturate(1.05)'
                      }}
                    />
                    
                    {/* Clear-view Gradient Overlay & Info Pill (Top half 100% crystal clear) */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.65) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '18px 20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <span style={{ fontSize: '11.5px', background: 'rgba(234, 56, 76, 0.95)', color: '#ffffff', padding: '4px 14px', borderRadius: '12px', fontWeight: 800 }}>
                          {activeSlide.bhk}
                        </span>
                      </div>

                      <div style={{ textAlign: 'left' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ color: '#f59e0b', fontSize: '12px', fontWeight: 800, background: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: '8px' }}>
                            {activeSlide.rating}
                          </span>
                          <span style={{ color: '#fecdd3', fontSize: '12px', fontWeight: 600 }}>
                            {activeSlide.tag}
                          </span>
                        </div>
                        <h3 style={{ color: '#ffffff', fontSize: 'clamp(17px, 2.8vw, 24px)', fontWeight: 800, margin: '0 0 12px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                          {activeSlide.title}
                        </h3>
                        <Link 
                          href="/book" 
                          className="thm-btn" 
                          style={{ padding: '8px 20px', fontSize: '12.5px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                          <span>Explore This Residence</span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>

                    {/* Prev / Next Arrows */}
                    <button 
                      type="button" 
                      onClick={prevCover}
                      aria-label="Previous Cover Slide"
                      style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.9)', border: 'none', color: '#111827', cursor: 'pointer', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    >
                      <i className="fa-solid fa-chevron-left" style={{ fontSize: '14px' }}></i>
                    </button>
                    <button 
                      type="button" 
                      onClick={nextCover}
                      aria-label="Next Cover Slide"
                      style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.9)', border: 'none', color: '#111827', cursor: 'pointer', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    >
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '14px' }}></i>
                    </button>
                  </div>

                  {/* Bottom Thumbnail Bar & Dots */}
                  <div style={{ background: '#fff5f6', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {COVER_SLIDES.map((slide, idx) => (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => setCurrentCoverIdx(idx)}
                          style={{
                            width: idx === currentCoverIdx ? '28px' : '9px',
                            height: '9px',
                            borderRadius: '5px',
                            background: idx === currentCoverIdx ? '#ea384c' : '#fecdd3',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'all 0.25s ease'
                          }}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 600 }}>
                      Photo {currentCoverIdx + 1} of {COVER_SLIDES.length} &bull; Slide on screen to change
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            ANIMATED LIVE TRUST MARQUEE RIBBON
            ================================================================= */}
        <div className="hostayy-ticker-wrap">
          <div className="hostayy-ticker-track">
            <span className="hostayy-ticker-item"><i className="fa-solid fa-star" style={{ color: '#f59e0b' }}></i> 4.98★ Superhost Hospitality</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-shield-halved" style={{ color: '#ea384c' }}></i> 100% Guaranteed On-Time Payouts</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-location-dot" style={{ color: '#ea384c' }}></i> 3 Mins to Yashobhoomi (IICC)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-plane-departure" style={{ color: '#ea384c' }}></i> 10 Mins to IGI Airport (T3)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-bed" style={{ color: '#ea384c' }}></i> Velora (1 BHK) &bull; Azura (2 BHK) &bull; Verde (3 BHK)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-handshake" style={{ color: '#16a34a' }}></i> 0% Brokerage &bull; Direct WhatsApp Concierge</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-file-invoice-dollar" style={{ color: '#ea384c' }}></i> Official GST Tax Input Credit</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            {/* Seamless duplicate loop */}
            <span className="hostayy-ticker-item"><i className="fa-solid fa-star" style={{ color: '#f59e0b' }}></i> 4.98★ Superhost Hospitality</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-shield-halved" style={{ color: '#ea384c' }}></i> 100% Guaranteed On-Time Payouts</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-location-dot" style={{ color: '#ea384c' }}></i> 3 Mins to Yashobhoomi (IICC)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-plane-departure" style={{ color: '#ea384c' }}></i> 10 Mins to IGI Airport (T3)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-bed" style={{ color: '#ea384c' }}></i> Velora (1 BHK) &bull; Azura (2 BHK) &bull; Verde (3 BHK)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea384c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-handshake" style={{ color: '#16a34a' }}></i> 0% Brokerage &bull; Direct WhatsApp Concierge</span>
          </div>
        </div>

        {/* =================================================================
            THE TWO MAIN PORTAL OPTIONS (The Central Core of Page 1)
            Option 1: Book Serviced Flats (Guests & Corporates)
            Option 2: List Your Property (Apartment Owners & Patron)
            ================================================================= */}
        <section 
          className="hostayy-portal-options-section" 
          style={{ 
            backgroundColor: '#fff5f6', 
            padding: '60px 0 70px' 
          }}
        >
          <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span 
                style={{ 
                  color: '#ea384c', 
                  fontWeight: 800, 
                  letterSpacing: '0.08em', 
                  fontSize: '12px', 
                  textTransform: 'uppercase' 
                }}
              >
                SELECT YOUR HOSTAYY PORTAL
              </span>
              <h2 
                style={{ 
                  color: '#111827', 
                  fontSize: 'clamp(24px, 3.5vw, 36px)', 
                  fontWeight: 800, 
                  margin: '8px 0 12px' 
                }}
              >
                How Can We Serve You Today?
              </h2>
              <p 
                style={{ 
                  color: '#374151', 
                  fontSize: '15px', 
                  maxWidth: '640px', 
                  margin: '0 auto', 
                  lineHeight: 1.6 
                }}
              >
                Choose whether you are looking to book a curated serviced residence for your extended stay, or looking to partner your apartment for guaranteed monthly rental yields.
              </p>
            </div>

            {/* The 2 High-Contrast Gateway Cards */}
            <div className="row g-4 justify-content-center">
              
              {/* OPTION 1: BOOK SERVICED FLATS */}
              <div className="col-12 col-md-6 col-lg-6">
                <div 
                  className="portal-decision-card luxury-glass-card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #fecdd3',
                    borderRadius: '20px',
                    padding: '36px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 36px rgba(234, 56, 76, 0.08)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="card-accent-bar-orange"></div>
                  <div>
                    {/* Badge & Icon Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          background: '#fff1f2', 
                          color: '#ea384c', 
                          padding: '5px 14px', 
                          borderRadius: '20px', 
                          fontWeight: 800, 
                          letterSpacing: '0.06em',
                          border: '1px solid #fecdd3',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="fa-solid fa-bed" style={{ color: '#ea384c' }}></i>
                        GUEST BOOKING PORTAL
                      </span>
                      <div 
                        className="badge-float"
                        style={{ 
                          width: '56px', 
                          height: '56px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #ea384c 0%, #c41c33 100%)', 
                          color: '#ffffff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontSize: '24px',
                          boxShadow: '0 6px 18px rgba(234, 56, 76, 0.35)'
                        }}
                      >
                        <i className="fa-solid fa-bed"></i>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 style={{ fontSize: '26px', color: '#111827', fontWeight: 800, margin: '0 0 10px' }}>
                      Book Serviced Flats
                    </h3>

                    {/* Suite Category Badges (Designer Element) */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      <span style={{ fontSize: '11px', background: '#fff1f2', color: '#ea384c', border: '1px solid #fecdd3', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-door-open" style={{ marginRight: '4px' }}></i>Velora 1 BHK
                      </span>
                      <span style={{ fontSize: '11px', background: '#fff1f2', color: '#ea384c', border: '1px solid #fecdd3', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-building" style={{ marginRight: '4px' }}></i>Azura 2 BHK
                      </span>
                      <span style={{ fontSize: '11px', background: '#fff1f2', color: '#ea384c', border: '1px solid #fecdd3', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-gem" style={{ marginRight: '4px' }}></i>Verde 3 BHK
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{ color: '#374151', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '22px' }}>
                      Curated 1, 2, and 3 BHK turnkey residences in Dwarka Sector 23 with modular kitchens, 300 Mbps Wi-Fi, work desks, and five-star housekeeping just 3 minutes from Yashobhoomi IICC.
                    </p>

                    {/* Feature Checklist */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Velora 1 BHK, Azura 2 BHK &amp; Verde 3 BHK Suites</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Click room options to view full verified 12 HD photo tours</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Instant WhatsApp concierge booking with 0% brokerage</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Corporate GST tax invoicing &amp; monthly lease flexibility</span>
                      </li>
                    </ul>
                  </div>

                  {/* Primary CTA */}
                  <div>
                    <Link 
                      href="/book"
                      className="thm-btn"
                      style={{
                        width: '100%',
                        padding: '14px 20px',
                        fontSize: '14.5px',
                        fontWeight: 800,
                        textAlign: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        background: '#ea384c',
                        color: '#ffffff',
                        border: 'none',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 6px 20px rgba(234, 56, 76, 0.3)'
                      }}
                    >
                      <i className="fa-solid fa-bed" style={{ color: '#ffffff' }}></i>
                      <span style={{ color: '#ffffff' }}>Explore Flats &amp; View Photos &rarr;</span>
                    </Link>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '12px', color: '#374151', marginTop: '8px', fontWeight: 500 }}>
                      Instant WhatsApp confirmation &bull; Verified physical address
                    </span>
                  </div>
                </div>
              </div>

              {/* OPTION 2: LIST YOUR PROPERTY */}
              <div className="col-12 col-md-6 col-lg-6">
                <div 
                  className="portal-decision-card luxury-glass-card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '2px solid #fecdd3',
                    borderRadius: '20px',
                    padding: '36px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 36px rgba(234, 56, 76, 0.08)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="card-accent-bar-dark"></div>
                  <div>
                    {/* Badge & Icon Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          background: '#fff1f2', 
                          color: '#ea384c', 
                          padding: '5px 14px', 
                          borderRadius: '20px', 
                          fontWeight: 800, 
                          letterSpacing: '0.06em',
                          border: '1px solid #fecdd3',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="fa-solid fa-house-chimney-user" style={{ color: '#ea384c' }}></i>
                        PROPERTY OWNER PORTAL
                      </span>
                      <div 
                        className="badge-float"
                        style={{ 
                          width: '56px', 
                          height: '56px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)', 
                          color: '#ffffff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontSize: '24px',
                          boxShadow: '0 6px 18px rgba(17, 24, 39, 0.35)'
                        }}
                      >
                        <i className="fa-solid fa-house-chimney-user"></i>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 style={{ fontSize: '26px', color: '#111827', fontWeight: 800, margin: '0 0 10px' }}>
                      List Your Property
                    </h3>

                    {/* Patron Advantage Badges (Designer Element) */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                      <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#111827', border: '1px solid #d1d5db', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-arrow-trend-up" style={{ color: '#16a34a', marginRight: '4px' }}></i>+40% Yield
                      </span>
                      <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#111827', border: '1px solid #d1d5db', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-calendar-check" style={{ color: '#ea384c', marginRight: '4px' }}></i>1st-of-Month Payouts
                      </span>
                      <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#111827', border: '1px solid #d1d5db', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-shield-halved" style={{ color: '#ea384c', marginRight: '4px' }}></i>Zero Vacancy Risk
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{ color: '#374151', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '22px' }}>
                      Partner your residential apartment with Hostayy Patron. Transform your home into a high-yield hospitality asset with 100% on-time guaranteed monthly payouts and turnkey care.
                    </p>

                    {/* Feature Checklist */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Earn up to 40%+ higher monthly income vs traditional rent</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Interactive rental yield calculator with instant projection</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Five-star hotel maintenance, deep cleaning &amp; asset upkeep</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#111827', fontWeight: 600 }}>
                        <i className="fa-solid fa-circle-check" style={{ color: '#16a34a', fontSize: '15px' }}></i>
                        <span>Zero tenant disputes, zero vacancy risk &amp; corporate delegates</span>
                      </li>
                    </ul>
                  </div>

                  {/* Primary CTA */}
                  <div>
                    <Link 
                      href="/list-property"
                      className="thm-btn"
                      style={{
                        width: '100%',
                        padding: '14px 20px',
                        fontSize: '14.5px',
                        fontWeight: 800,
                        textAlign: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        background: '#111827',
                        color: '#ffffff',
                        border: 'none',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 6px 20px rgba(17, 24, 39, 0.3)'
                      }}
                    >
                      <i className="fa-solid fa-house-chimney-user" style={{ color: '#ffffff' }}></i>
                      <span style={{ color: '#ffffff' }}>List Your Property with Patron &rarr;</span>
                    </Link>
                    <span style={{ display: 'block', textAlign: 'center', fontSize: '12px', color: '#374151', marginTop: '8px', fontWeight: 500 }}>
                      Free property audit &bull; 48-hour feasibility assessment
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================
            STRATEGIC LOCATION & VERIFIED PHYSICAL ADDRESS
            ================================================================= */}
        <section 
          className="hostayy-location-section ambient-glow-wrapper" 
          style={{ 
            backgroundColor: '#ffffff', 
            padding: '65px 0',
            borderTop: '1px solid #fecdd3',
            position: 'relative'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-12 col-lg-6" style={{ marginBottom: '30px' }}>
                <span style={{ color: '#ea384c', fontWeight: 800, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  STRATEGIC PRIME LOCATION
                </span>
                <h2 style={{ fontSize: '30px', color: '#111827', fontWeight: 800, margin: '8px 0 14px' }}>
                  Positioned in Prime Dwarka Sector 23
                </h2>
                <p style={{ color: '#374151', fontSize: '15px', lineHeight: 1.7, marginBottom: '20px' }}>
                  Whether traveling for global exhibitions at Yashobhoomi (IICC) or partnering your real estate asset in Delhi NCR, Hostayy places you at the epicenter of southwest Delhi’s most connected corridor.
                </p>

                {/* Official Address Strip */}
                <div 
                  className="luxury-glass-card"
                  style={{ 
                    borderRadius: '14px', 
                    padding: '18px 22px',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fa-solid fa-map-location-dot" style={{ color: '#ea384c', fontSize: '22px', marginTop: '2px' }}></i>
                    <div>
                      <strong style={{ color: '#111827', fontSize: '14.5px', display: 'block', fontWeight: 800 }}>
                        Official Verified Address
                      </strong>
                      <span style={{ color: '#374151', fontSize: '13.5px', display: 'block', marginTop: '2px' }}>
                        {HOSTAYY_CONFIG.address}
                      </span>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(HOSTAYY_CONFIG.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#ea384c', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', textDecoration: 'none' }}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i> Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a 
                    href={getGuestWhatsAppLink({ message: "Hello Hostayy, I want to inquire about Hostayy serviced residences." })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thm-btn"
                    style={{ background: '#16a34a', borderColor: '#16a34a', color: '#ffffff', fontWeight: 700, padding: '12px 22px', fontSize: '13.5px', borderRadius: '8px', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)' }}
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: '#ffffff' }}></i>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a 
                    href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                    className="thm-btn"
                    style={{ background: '#ffffff', borderColor: '#fecdd3', color: '#111827', fontWeight: 700, padding: '12px 22px', fontSize: '13.5px', borderRadius: '8px' }}
                  >
                    <i className="fa-solid fa-phone" style={{ color: '#ea384c' }}></i>
                    <span>Call Host Concierge</span>
                  </a>
                </div>
              </div>

              {/* Connectivity Matrix */}
              <div className="col-12 col-lg-6">
                <div 
                  className="luxury-glass-card"
                  style={{ 
                    borderRadius: '16px', 
                    padding: '26px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                  }}
                >
                  <h4 style={{ fontSize: '18px', color: '#111827', fontWeight: 800, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="fa-solid fa-compass rotating-compass-icon" style={{ color: '#ea384c', fontSize: '20px' }}></i>
                    Dwarka Sector 23 Connectivity Matrix
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    <div style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Yashobhoomi (IICC) Sec 25</span>
                      <span style={{ fontSize: '12px', background: '#ea384c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>3 Mins</span>
                    </div>

                    <div style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>IGI Airport Terminal 3 (T3/T1)</span>
                      <span style={{ fontSize: '12px', background: '#ea384c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>10 Mins</span>
                    </div>

                    <div style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Sector 21 Metro Interchange</span>
                      <span style={{ fontSize: '12px', background: '#ea384c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>5 Mins</span>
                    </div>

                    <div style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>18-Hole DDA Golf Course</span>
                      <span style={{ fontSize: '12px', background: '#ea384c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>6 Mins</span>
                    </div>

                    <div style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Aerocity Worldmark District</span>
                      <span style={{ fontSize: '12px', background: '#ea384c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>12 Mins</span>
                    </div>

                    <div style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Cyber City Gurugram (Expressway)</span>
                      <span style={{ fontSize: '12px', background: '#ea384c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>15 Mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Mobile Bottom Navigation */}
      <MobileBottomBar activePage="home" />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

