'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function Navbar({ onSelectStay, activePage = 'home', portalMode, setPortalMode }) {
  // Support both activePage and legacy portalMode
  const currentPage = activePage || (portalMode === 'listing' ? 'listing' : 'booking');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('stays');
  const [staysDropdownOpen, setStaysDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setStaysDropdownOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setStaysDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectStay = (stayId) => {
    setActiveTab('stays');
    setStaysDropdownOpen(false);
    if (onSelectStay) {
      onSelectStay(stayId);
    }
    // Scroll smoothly down to the stays section on the website
    setTimeout(() => {
      const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  return (
    <header className="agoda-header" id="booking-header">
      {/* Top Tier: Clean Agoda-Inspired White Navigation Bar */}
      <div className="agoda-header-top" style={{ padding: '12px 0' }}>
        <div className="container">
          <div className="agoda-header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            
            {/* Left: Hostayy Logo */}
            <Link href="/" className="agoda-brand-logo" aria-label="Hostayy.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff7ed', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #fed7aa', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.15)', flexShrink: 0 }}>
                <img 
                  src="/assets/images/hostayy-logo-transparent.png" 
                  alt="Hostayy Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <span style={{ fontSize: '25px', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', fontFamily: 'var(--hotelux-font-two), sans-serif' }}>
                  Hostayy<span style={{ color: '#ea580c' }}>.com</span>
                </span>
                <span style={{ display: 'block', fontSize: '11px', color: '#64748b', fontStyle: 'italic', fontWeight: 600 }}>
                  (feel like home)
                </span>
              </div>
            </Link>

            {/* Center: Agoda-Inspired Navigation Links with Micro-Badges */}
            <nav className="agoda-center-nav d-none d-lg-flex" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Link 
                href="/book" 
                className={`agoda-nav-link ${currentPage === 'booking' ? 'active' : ''}`}
                style={{ position: 'relative' }}
              >
                <i className="fa-solid fa-bed" style={{ color: '#ea580c' }}></i>
                <span>Hotels &amp; Homes</span>
                <span className="agoda-micro-badge">Bundle &amp; save!</span>
              </Link>

              <Link 
                href="/book#velora" 
                onClick={() => handleSelectStay('velora')}
                className="agoda-nav-link"
              >
                <i className="fa-solid fa-door-open" style={{ color: '#ea580c', fontSize: '12px' }}></i>
                <span>1 BHK Velora</span>
              </Link>

              <Link 
                href="/book#azura" 
                onClick={() => handleSelectStay('azura')}
                className="agoda-nav-link"
                style={{ position: 'relative' }}
              >
                <i className="fa-solid fa-building" style={{ color: '#ea580c', fontSize: '12px' }}></i>
                <span>2 BHK Azura</span>
                <span className="agoda-micro-badge" style={{ background: '#ea580c' }}>New!</span>
              </Link>

              <Link 
                href="/book#verde" 
                onClick={() => handleSelectStay('verde')}
                className="agoda-nav-link"
              >
                <i className="fa-solid fa-gem" style={{ color: '#ea580c', fontSize: '12px' }}></i>
                <span>3 BHK Verde</span>
              </Link>

              <Link 
                href="/list-property" 
                className={`agoda-nav-link ${currentPage === 'listing' ? 'active' : ''}`}
                style={{ position: 'relative' }}
              >
                <i className="fa-solid fa-house-chimney-user" style={{ color: '#ea580c' }}></i>
                <span>Hostayy Patron</span>
                <span className="agoda-micro-badge" style={{ background: '#16a34a' }}>Earn 40%+</span>
              </Link>
            </nav>

            {/* Right: Agoda-Style Utility Controls */}
            <div className="agoda-utility-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Rounded List Your Place Button */}
              <Link 
                href="/list-property"
                className="agoda-list-btn"
                title="List your apartment with Hostayy Patron"
              >
                List your place
              </Link>

              {/* Currency & Flag */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 700, color: '#374151', padding: '5px 8px' }}>
                <span role="img" aria-label="India Flag" style={{ fontSize: '17px' }}>🇮🇳</span>
                <span>Rs.</span>
              </div>

              {/* 24/7 Concierge Support */}
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
                title={`24/7 Concierge Support: ${HOSTAYY_CONFIG.displayPhone}`}
                style={{ color: '#64748b', fontSize: '17px', display: 'inline-flex', alignItems: 'center', padding: '6px', textDecoration: 'none' }}
              >
                <i className="fa-regular fa-circle-question"></i>
              </a>

              {/* Booking CTA Pill */}
              <Link 
                href="/book"
                className="d-none d-sm-inline-flex"
                style={{ background: '#fff7ed', color: '#ea580c', border: '1.5px solid #fed7aa', fontWeight: 800, padding: '7px 18px', borderRadius: '24px', textDecoration: 'none', fontSize: '13px', transition: 'all 0.2s ease' }}
              >
                Book Flat
              </Link>

              {/* Direct WhatsApp Concierge CTA */}
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Hostayy, I want to book a serviced flat near Yashobhoomi IICC with Hostayy." })}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#16a34a', color: '#ffffff', fontWeight: 700, padding: '7px 16px', borderRadius: '24px', textDecoration: 'none', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 2px 8px rgba(22, 163, 74, 0.25)' }}
                title="Chat with Hostayy on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="d-none d-md-inline">WhatsApp</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button 
                type="button" 
                className="d-lg-none"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                style={{ background: 'transparent', border: 'none', color: '#111827', fontSize: '22px', cursor: 'pointer', padding: '6px' }}
              >
                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tier (For /book and /list-property pages) */}
      {currentPage !== 'home' && (
        <div className={`bcom-subnav-strip ${staysDropdownOpen ? 'dropdown-open' : ''}`} style={{ backgroundColor: '#fffaf5', borderTop: '1px solid #fed7aa', borderBottom: '1px solid #fed7aa', padding: '8px 0', overflow: staysDropdownOpen ? 'visible' : 'auto', scrollbarWidth: 'none' }}>
          <div className="container" style={{ overflow: 'visible' }}>
            <div className="bcom-pills-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', overflow: 'visible' }}>
            
            {/* SUBNAV FOR BOOKING PAGE */}
            {currentPage === 'booking' && (
              <>
                {/* STAYS OPTION WITH BED SIGN (Dropdown menu for 1, 2 & 3 BHK stays) */}
                <div className="bcom-stays-dropdown-wrapper" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
                  <button 
                    type="button" 
                    className={`bcom-pill bcom-stays-toggle ${activeTab === 'stays' || staysDropdownOpen ? 'active' : ''}`}
                    onClick={() => setStaysDropdownOpen(!staysDropdownOpen)}
                    aria-expanded={staysDropdownOpen}
                    title="Click to view our 1, 2 & 3 BHK Serviced Flats"
                    style={{
                      color: '#ffffff',
                      border: '1.5px solid #ea580c',
                      background: '#ea580c',
                      fontWeight: 800,
                      padding: '7px 18px',
                      borderRadius: '30px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      outline: 'none',
                      boxShadow: '0 2px 8px rgba(234, 88, 12, 0.25)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fa-solid fa-bed" style={{ fontSize: '14px', color: '#ffffff' }}></i>
                    <span style={{ color: '#ffffff' }}>Stays</span>
                    <i 
                      className="fa-solid fa-chevron-down" 
                      style={{ 
                        fontSize: '11px', 
                        color: '#ffffff',
                        transition: 'transform 0.25s ease',
                        transform: staysDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    ></i>
                  </button>

                  {/* DROPDOWN MENU: List of all 3 Stays */}
                  {staysDropdownOpen && (
                    <div 
                      className="bcom-stays-dropdown-menu"
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)',
                        left: 0,
                        zIndex: 9999,
                        width: '320px',
                        background: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 18px 45px rgba(0, 0, 0, 0.22)',
                        border: '1.5px solid #fed7aa',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ padding: '6px 8px 6px', borderBottom: '1px solid #fed7aa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="bcom-dropdown-header-title" style={{ fontSize: '10.5px', fontWeight: 800, color: '#ea580c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Select a Flat to Explore
                        </span>
                        <span style={{ fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                          0% Brokerage
                        </span>
                      </div>

                      {/* Stay 1: Velora 1 BHK */}
                      <div 
                        onClick={() => handleSelectStay('velora')}
                        className="bcom-dropdown-stay-item"
                        title="Explore Velora Suite (1 BHK)"
                      >
                        <img 
                          src="/assets/images/velora/velora-05.jpg" 
                          alt="Velora 1 BHK" 
                          style={{ width: '46px', height: '46px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                            <h4 style={{ margin: 0, fontSize: '13.5px', fontWeight: 800, color: '#111827' }}>
                              Velora Suite
                            </h4>
                            <span className="bcom-stay-tag" style={{ fontSize: '11px', background: '#ea580c', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                              1 BHK
                            </span>
                          </div>
                          <p className="bcom-stay-desc" style={{ margin: '2px 0 0', fontSize: '11.5px', color: '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            3 Mins to Yashobhoomi IICC &bull; 750 Sq Ft
                          </p>
                        </div>
                      </div>

                      {/* Stay 2: Azura 2 BHK */}
                      <div 
                        onClick={() => handleSelectStay('azura')}
                        className="bcom-dropdown-stay-item"
                        title="Explore Azura Residence (2 BHK)"
                      >
                        <img 
                          src="/assets/images/azura/azura-10.jpg" 
                          alt="Azura 2 BHK" 
                          style={{ width: '46px', height: '46px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                            <h4 style={{ margin: 0, fontSize: '13.5px', fontWeight: 800, color: '#111827' }}>
                              Azura Residence
                            </h4>
                            <span className="bcom-stay-tag" style={{ fontSize: '11px', background: '#ea580c', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                              2 BHK
                            </span>
                          </div>
                          <p className="bcom-stay-desc" style={{ margin: '2px 0 0', fontSize: '11.5px', color: '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            Aerocity Corridor &bull; 1,250 Sq Ft &bull; Balcony
                          </p>
                        </div>
                      </div>

                      {/* Stay 3: Verde 3 BHK */}
                      <div 
                        onClick={() => handleSelectStay('verde')}
                        className="bcom-dropdown-stay-item"
                        title="Explore Verde Signature (3 BHK)"
                      >
                        <img 
                          src="/assets/images/verde/verde-03.jpg" 
                          alt="Verde 3 BHK" 
                          style={{ width: '46px', height: '46px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                            <h4 style={{ margin: 0, fontSize: '13.5px', fontWeight: 800, color: '#111827' }}>
                              Verde Signature
                            </h4>
                            <span className="bcom-stay-tag" style={{ fontSize: '11px', background: '#ea580c', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                              3 BHK
                            </span>
                          </div>
                          <p className="bcom-stay-desc" style={{ margin: '2px 0 0', fontSize: '11.5px', color: '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            Prime Golf Belt &bull; 1,850 Sq Ft &bull; Luxury
                          </p>
                        </div>
                      </div>

                      {/* View All Option Button */}
                      <button
                        type="button"
                        onClick={() => handleSelectStay(null)}
                        className="bcom-dropdown-all-btn"
                        style={{
                          marginTop: '4px',
                          padding: '9px',
                          borderRadius: '6px',
                          border: 'none',
                          background: '#ea580c',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          width: '100%',
                          transition: 'background 0.2s ease'
                        }}
                      >
                        <i className="fa-solid fa-list" style={{ color: '#ffffff' }}></i>
                        <span style={{ color: '#ffffff' }}>View All 1, 2 &amp; 3 BHK Flats</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Key Location Pill */}
                <a 
                  href="#why-choose" 
                  className={`bcom-pill ${activeTab === 'location' ? 'active' : ''}`}
                  onClick={() => setActiveTab('location')}
                  style={{
                    color: activeTab === 'location' ? '#ffffff' : '#374151',
                    border: '1px solid #fed7aa',
                    background: activeTab === 'location' ? '#ea580c' : '#ffffff',
                    fontWeight: 700,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-landmark" style={{ color: activeTab === 'location' ? '#ffffff' : '#ea580c' }}></i>
                  <span>3 Mins Yashobhoomi IICC</span>
                </a>

                {/* Verified Address Pill */}
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(HOSTAYY_CONFIG.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bcom-pill"
                  title="Official Physical Address: Hostayy, Block A, Dwarka Sector 23, New Delhi - 110077"
                  style={{
                    color: '#374151',
                    border: '1px solid #fed7aa',
                    background: '#ffffff',
                    fontWeight: 700,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-map-location-dot" style={{ color: '#ea580c' }}></i>
                  <span>Dwarka Sector 23 Address</span>
                </a>

                {/* Contact Pill */}
                <a 
                  href="#contact" 
                  className={`bcom-pill ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                  style={{
                    color: activeTab === 'contact' ? '#ffffff' : '#374151',
                    border: '1px solid #fed7aa',
                    background: activeTab === 'contact' ? '#ea580c' : '#ffffff',
                    fontWeight: 700,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-phone" style={{ color: activeTab === 'contact' ? '#ffffff' : '#ea580c' }}></i>
                  <span>Contact Host</span>
                </a>

                {/* Direct Link to Property Listing */}
                <Link
                  href="/list-property"
                  className="bcom-pill"
                  style={{
                    color: '#ea580c',
                    border: '1.5px solid #ea580c',
                    background: '#fff7ed',
                    fontWeight: 800,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '13px',
                    textDecoration: 'none'
                  }}
                >
                  <i className="fa-solid fa-house-chimney-user"></i>
                  <span>List Your Property &rarr;</span>
                </Link>
              </>
            )}

            {/* SUBNAV FOR LISTING PAGE */}
            {currentPage === 'listing' && (
              <>
                <a 
                  href="#patron" 
                  className={`bcom-pill ${activeTab === 'patron' ? 'active' : ''}`}
                  onClick={() => setActiveTab('patron')}
                  style={{
                    color: '#ffffff',
                    border: '1.5px solid #ea580c',
                    background: '#ea580c',
                    fontWeight: 800,
                    padding: '7px 18px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-house-chimney-user"></i>
                  <span>Hostayy Patron</span>
                </a>

                <a 
                  href="#comparison" 
                  className={`bcom-pill ${activeTab === 'comparison' ? 'active' : ''}`}
                  onClick={() => setActiveTab('comparison')}
                  style={{
                    color: activeTab === 'comparison' ? '#ffffff' : '#374151',
                    border: '1px solid #fed7aa',
                    background: activeTab === 'comparison' ? '#ea580c' : '#ffffff',
                    fontWeight: 700,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-scale-balanced" style={{ color: activeTab === 'comparison' ? '#ffffff' : '#ea580c' }}></i>
                  <span>Earnings Comparison</span>
                </a>

                <a 
                  href="#process" 
                  className={`bcom-pill ${activeTab === 'process' ? 'active' : ''}`}
                  onClick={() => setActiveTab('process')}
                  style={{
                    color: activeTab === 'process' ? '#ffffff' : '#374151',
                    border: '1px solid #fed7aa',
                    background: activeTab === 'process' ? '#ea580c' : '#ffffff',
                    fontWeight: 700,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-list-check" style={{ color: activeTab === 'process' ? '#ffffff' : '#ea580c' }}></i>
                  <span>Onboarding Steps</span>
                </a>

                <a 
                  href="#faq" 
                  className={`bcom-pill ${activeTab === 'faq' ? 'active' : ''}`}
                  onClick={() => setActiveTab('faq')}
                  style={{
                    color: activeTab === 'faq' ? '#ffffff' : '#374151',
                    border: '1px solid #fed7aa',
                    background: activeTab === 'faq' ? '#ea580c' : '#ffffff',
                    fontWeight: 700,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-regular fa-circle-question" style={{ color: activeTab === 'faq' ? '#ffffff' : '#ea580c' }}></i>
                  <span>Landlord FAQs</span>
                </a>

                {/* Direct Link to Guest Booking */}
                <Link
                  href="/book"
                  className="bcom-pill"
                  style={{
                    color: '#ea580c',
                    border: '1.5px solid #ea580c',
                    background: '#fff7ed',
                    fontWeight: 800,
                    padding: '7px 16px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '13px',
                    textDecoration: 'none'
                  }}
                >
                  <i className="fa-solid fa-bed"></i>
                  <span>&larr; Book Serviced Flats</span>
                </Link>
              </>
            )}

            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="bcom-mobile-drawer" style={{ background: '#ffffff', borderTop: '1px solid #fed7aa', padding: '20px', boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}>
          <div className="bcom-mobile-drawer-inner">
            {/* Mobile Portal Mode Switcher */}
            <div className="bcom-mobile-portal-switcher" style={{ display: 'flex', gap: '8px', marginBottom: '18px', background: '#fff7ed', padding: '4px', borderRadius: '12px', border: '1px solid #fed7aa' }}>
              <Link 
                href="/book"
                onClick={() => setMobileOpen(false)}
                className={`bcom-mobile-portal-btn ${currentPage === 'booking' ? 'active' : ''}`}
                style={{ 
                  textDecoration: 'none',
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: currentPage === 'booking' ? '#ea580c' : 'transparent',
                  color: currentPage === 'booking' ? '#ffffff' : '#374151',
                  fontWeight: 800
                }}
              >
                <i className="fa-solid fa-bed" style={{ marginRight: '6px' }}></i>
                <span>Book Flats</span>
              </Link>
              <Link 
                href="/list-property"
                onClick={() => setMobileOpen(false)}
                className={`bcom-mobile-portal-btn ${currentPage === 'listing' ? 'active' : ''}`}
                style={{ 
                  textDecoration: 'none',
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: currentPage === 'listing' ? '#ea580c' : 'transparent',
                  color: currentPage === 'listing' ? '#ffffff' : '#374151',
                  fontWeight: 800
                }}
              >
                <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '6px' }}></i>
                <span>List Property</span>
              </Link>
            </div>

            <div className="bcom-mobile-links" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <Link href="/" onClick={() => setMobileOpen(false)} style={{ color: '#111827', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
                <i className="fa-solid fa-house" style={{ marginRight: '10px', color: '#ea580c' }}></i> Home (About Hostayy)
              </Link>
              <Link href="/book" onClick={() => setMobileOpen(false)} style={{ color: '#111827', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
                <i className="fa-solid fa-bed" style={{ marginRight: '10px', color: '#ea580c' }}></i> Book Serviced Flats
              </Link>
              <Link href="/list-property" onClick={() => setMobileOpen(false)} style={{ color: '#111827', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}>
                <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '10px', color: '#ea580c' }}></i> List Your Property (Patron)
              </Link>

              <div style={{ paddingLeft: '14px', borderLeft: '2px solid #fed7aa', display: 'flex', flexDirection: 'column', gap: '10px', margin: '4px 0' }}>
                <button 
                  type="button" 
                  onClick={() => { setMobileOpen(false); handleSelectStay('velora'); }}
                  className="mobile-sublink"
                  style={{ background: 'none', border: 'none', color: '#374151', textAlign: 'left', fontSize: '14px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
                >
                  &bull; 1 BHK Velora Suite
                </button>
                <button 
                  type="button" 
                  onClick={() => { setMobileOpen(false); handleSelectStay('azura'); }}
                  className="mobile-sublink"
                  style={{ background: 'none', border: 'none', color: '#374151', textAlign: 'left', fontSize: '14px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
                >
                  &bull; 2 BHK Azura Residence
                </button>
                <button 
                  type="button" 
                  onClick={() => { setMobileOpen(false); handleSelectStay('verde'); }}
                  className="mobile-sublink"
                  style={{ background: 'none', border: 'none', color: '#374151', textAlign: 'left', fontSize: '14px', fontWeight: 600, cursor: 'pointer', padding: 0 }}
                >
                  &bull; 3 BHK Verde Signature
                </button>
              </div>
            </div>

            <div className="bcom-mobile-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Hostayy, I want to inquire about Hostayy serviced residences / listing my property." })}
                target="_blank"
                rel="noopener noreferrer"
                className="bcom-drawer-btn wa-drawer-btn"
                onClick={() => setMobileOpen(false)}
                style={{ background: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '10px', textAlign: 'center', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                className="bcom-drawer-btn call-drawer-btn"
                onClick={() => setMobileOpen(false)}
                style={{ background: '#fff7ed', color: '#ea580c', border: '1.5px solid #fed7aa', padding: '12px', borderRadius: '10px', textAlign: 'center', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <i className="fa-solid fa-phone"></i> Call Host ({HOSTAYY_CONFIG.displayPhone})
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
