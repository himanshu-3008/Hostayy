'use client';

import React from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import Navbar from './Navbar';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileBottomBar from './MobileBottomBar';
import Footer from './Footer';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function HostayyHome() {
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
            borderBottom: '1px solid #fed7aa',
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
                      color: '#ea580c', 
                      padding: '7px 18px', 
                      borderRadius: '30px', 
                      fontWeight: 800, 
                      letterSpacing: '0.08em',
                      border: '1.5px solid #fed7aa',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(234, 88, 12, 0.08)'
                    }}
                  >
                    <span className="pulse-dot"></span>
                    FEEL LIKE HOME &bull; PRIME DWARKA SECTOR 23 NEAR YASHOBHOOMI (IICC)
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
                  Welcome to <span style={{ color: '#ea580c' }}>Hostayy</span>
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
                    <div style={{ fontSize: '22px', color: '#ea580c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-star" style={{ color: '#f59e0b', marginRight: '5px' }}></i>4.98★
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>Superhost Hospitality</span>
                  </div>

                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea580c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-shield-halved" style={{ color: '#ea580c', marginRight: '5px' }}></i>0%
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>Brokerage &amp; Hidden Fees</span>
                  </div>

                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea580c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#ea580c', marginRight: '5px' }}></i>3 Mins
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>To Yashobhoomi IICC</span>
                  </div>

                  <div className="luxury-glass-card" style={{ borderRadius: '14px', padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', color: '#ea580c', fontWeight: 800, marginBottom: '2px' }}>
                      <i className="fa-solid fa-money-bill-trend-up" style={{ color: '#16a34a', marginRight: '5px' }}></i>40%+
                    </div>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 700 }}>Higher Landlord Yield</span>
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
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-shield-halved" style={{ color: '#ea580c' }}></i> 100% Guaranteed On-Time Payouts</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-location-dot" style={{ color: '#ea580c' }}></i> 3 Mins to Yashobhoomi (IICC)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-plane-departure" style={{ color: '#ea580c' }}></i> 10 Mins to IGI Airport (T3)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-bed" style={{ color: '#ea580c' }}></i> Velora (1 BHK) &bull; Azura (2 BHK) &bull; Verde (3 BHK)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-handshake" style={{ color: '#16a34a' }}></i> 0% Brokerage &bull; Direct WhatsApp Concierge</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-file-invoice-dollar" style={{ color: '#ea580c' }}></i> Official GST Tax Input Credit</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            {/* Seamless duplicate loop */}
            <span className="hostayy-ticker-item"><i className="fa-solid fa-star" style={{ color: '#f59e0b' }}></i> 4.98★ Superhost Hospitality</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-shield-halved" style={{ color: '#ea580c' }}></i> 100% Guaranteed On-Time Payouts</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-location-dot" style={{ color: '#ea580c' }}></i> 3 Mins to Yashobhoomi (IICC)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-plane-departure" style={{ color: '#ea580c' }}></i> 10 Mins to IGI Airport (T3)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-bed" style={{ color: '#ea580c' }}></i> Velora (1 BHK) &bull; Azura (2 BHK) &bull; Verde (3 BHK)</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
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
            backgroundColor: '#fffaf5', 
            padding: '60px 0 70px' 
          }}
        >
          <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span 
                style={{ 
                  color: '#ea580c', 
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
                    border: '2px solid #fed7aa',
                    borderRadius: '20px',
                    padding: '36px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 36px rgba(234, 88, 12, 0.08)',
                    position: 'relative'
                  }}
                >
                  <div className="card-accent-bar-orange"></div>
                  <div>
                    {/* Badge & Icon Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          background: '#fff7ed', 
                          color: '#ea580c', 
                          padding: '5px 14px', 
                          borderRadius: '20px', 
                          fontWeight: 800, 
                          letterSpacing: '0.06em',
                          border: '1px solid #fed7aa',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="fa-solid fa-bed" style={{ color: '#ea580c' }}></i>
                        GUEST BOOKING PORTAL
                      </span>
                      <div 
                        className="badge-float"
                        style={{ 
                          width: '56px', 
                          height: '56px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', 
                          color: '#ffffff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontSize: '24px',
                          boxShadow: '0 6px 18px rgba(234, 88, 12, 0.35)'
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
                      <span style={{ fontSize: '11px', background: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-door-open" style={{ marginRight: '4px' }}></i>Velora 1 BHK
                      </span>
                      <span style={{ fontSize: '11px', background: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-building" style={{ marginRight: '4px' }}></i>Azura 2 BHK
                      </span>
                      <span style={{ fontSize: '11px', background: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
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
                        background: '#ea580c',
                        color: '#ffffff',
                        border: 'none',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 6px 20px rgba(234, 88, 12, 0.3)'
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
                    border: '2px solid #fed7aa',
                    borderRadius: '20px',
                    padding: '36px 30px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 36px rgba(234, 88, 12, 0.08)',
                    position: 'relative'
                  }}
                >
                  <div className="card-accent-bar-dark"></div>
                  <div>
                    {/* Badge & Icon Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span 
                        style={{ 
                          fontSize: '11px', 
                          background: '#fff7ed', 
                          color: '#ea580c', 
                          padding: '5px 14px', 
                          borderRadius: '20px', 
                          fontWeight: 800, 
                          letterSpacing: '0.06em',
                          border: '1px solid #fed7aa',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <i className="fa-solid fa-house-chimney-user" style={{ color: '#ea580c' }}></i>
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
                        <i className="fa-solid fa-calendar-check" style={{ color: '#ea580c', marginRight: '4px' }}></i>1st-of-Month Payouts
                      </span>
                      <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#111827', border: '1px solid #d1d5db', padding: '3px 10px', borderRadius: '12px', fontWeight: 700 }}>
                        <i className="fa-solid fa-shield-halved" style={{ color: '#ea580c', marginRight: '4px' }}></i>Zero Vacancy Risk
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
            borderTop: '1px solid #fed7aa',
            position: 'relative'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-12 col-lg-6" style={{ marginBottom: '30px' }}>
                <span style={{ color: '#ea580c', fontWeight: 800, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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
                    <i className="fa-solid fa-map-location-dot" style={{ color: '#ea580c', fontSize: '22px', marginTop: '2px' }}></i>
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
                        style={{ color: '#ea580c', fontWeight: 800, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px', textDecoration: 'none' }}
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
                    style={{ background: '#ffffff', borderColor: '#fed7aa', color: '#111827', fontWeight: 700, padding: '12px 22px', fontSize: '13.5px', borderRadius: '8px' }}
                  >
                    <i className="fa-solid fa-phone" style={{ color: '#ea580c' }}></i>
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
                    <i className="fa-solid fa-compass rotating-compass-icon" style={{ color: '#ea580c', fontSize: '20px' }}></i>
                    Dwarka Sector 23 Connectivity Matrix
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                    <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Yashobhoomi (IICC) Sec 25</span>
                      <span style={{ fontSize: '12px', background: '#ea580c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>3 Mins</span>
                    </div>

                    <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>IGI Airport Terminal 3 (T3/T1)</span>
                      <span style={{ fontSize: '12px', background: '#ea580c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>10 Mins</span>
                    </div>

                    <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Sector 21 Metro Interchange</span>
                      <span style={{ fontSize: '12px', background: '#ea580c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>5 Mins</span>
                    </div>

                    <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>18-Hole DDA Golf Course</span>
                      <span style={{ fontSize: '12px', background: '#ea580c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>6 Mins</span>
                    </div>

                    <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Aerocity Worldmark District</span>
                      <span style={{ fontSize: '12px', background: '#ea580c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>12 Mins</span>
                    </div>

                    <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '10px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', color: '#111827', fontWeight: 600 }}>Cyber City Gurugram (Expressway)</span>
                      <span style={{ fontSize: '12px', background: '#ea580c', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>15 Mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Navigation */}
      <MobileBottomBar activePage="home" />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

