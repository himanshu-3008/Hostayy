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
    <header className="bcom-header" id="booking-header" style={{ backgroundColor: '#ea384c' }}>
      {/* Top Tier: Logo & Dual-Portal Mode Switcher & User Utility Bar */}
      <div className="bcom-header-top" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.22)', padding: '10px 0' }}>
        <div className="container">
          <div className="bcom-top-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            
            {/* Left: hostayy Logo (Highlighted Luxury Capsule, Crisp Wordmark) */}
            <Link 
              href="/" 
              className="bcom-brand-logo bcom-brand-logo-highlighted" 
              aria-label="hostayy" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.18)',
                border: '1.5px solid rgba(255, 255, 255, 0.5)',
                padding: '5px 18px 5px 6px',
                borderRadius: '40px',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.18)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease'
              }}
            >
              <div 
                className="bcom-logo-emblem" 
                style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '50%', 
                  background: '#ffffff', 
                  padding: '4px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  boxShadow: '0 0 0 2.5px rgba(255, 255, 255, 0.95), 0 4px 14px rgba(0, 0, 0, 0.25)', 
                  flexShrink: 0 
                }}
              >
                <img 
                  src="/assets/images/hostayy-logo-transparent.png" 
                  alt="hostayy Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="bcom-logo-text-wrap" style={{ lineHeight: 1 }}>
                <span 
                  className="bcom-logo-text" 
                  style={{ 
                    fontSize: '30px', 
                    fontWeight: 900, 
                    color: '#ffffff', 
                    letterSpacing: '-0.03em', 
                    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", 
                    textTransform: 'lowercase',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.35)'
                  }}
                >
                  hostayy
                </span>
              </div>
            </Link>

            {/* Center: Dual-Portal Segment Switcher (Customers/Booking vs Property Listing) */}
            <div className="bcom-portal-switcher" role="tablist" aria-label="Portal Navigation" style={{ position: 'relative' }}>
              {/* Sliding Pill Background with Smooth Swipe Transition */}
              <div 
                className="portal-sliding-pill" 
                style={{
                  position: 'absolute',
                  top: '3px',
                  bottom: '3px',
                  left: currentPage === 'listing' ? 'calc(50% + 2px)' : '3px',
                  width: 'calc(50% - 5px)',
                  background: '#ffffff',
                  borderRadius: '26px',
                  transition: 'left 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  zIndex: 1,
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  pointerEvents: 'none'
                }}
              />
              <Link
                href="/book"
                className={`bcom-portal-btn ${currentPage === 'booking' ? 'active' : ''}`}
                title="Explore and book 1, 2 & 3 BHK serviced flats"
                role="tab"
                aria-selected={currentPage === 'booking'}
                style={{ 
                  position: 'relative',
                  zIndex: 2,
                  textDecoration: 'none',
                  background: 'transparent',
                  color: currentPage === 'booking' ? '#ea384c' : '#ffffff',
                  transition: 'color 0.25s ease'
                }}
              >
                <i className="fa-solid fa-bed" style={{ color: currentPage === 'booking' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}></i>
                <span style={{ color: currentPage === 'booking' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}>Book Flats</span>
              </Link>
              
              <Link
                href="/list-property"
                className={`bcom-portal-btn ${currentPage === 'listing' ? 'active' : ''}`}
                title="List your apartment with hostayy Patron for guaranteed rental yields"
                role="tab"
                aria-selected={currentPage === 'listing'}
                style={{ 
                  position: 'relative',
                  zIndex: 2,
                  textDecoration: 'none',
                  background: 'transparent',
                  color: currentPage === 'listing' ? '#ea384c' : '#ffffff',
                  transition: 'color 0.25s ease'
                }}
              >
                <i className="fa-solid fa-house-chimney-user" style={{ color: currentPage === 'listing' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}></i>
                <span style={{ color: currentPage === 'listing' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}>List Property</span>
              </Link>
            </div>

            {/* Right: Actions, Direct WhatsApp & Mobile Menu */}
            <div className="bcom-utility-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Toggle to Property Listing (hostayy Patron) - Desktop */}
              <Link 
                href="/list-property"
                className="bcom-list-prop-link d-none-mobile"
                title="List your apartment with hostayy Patron"
                style={{ background: 'transparent', color: '#ffffff', fontSize: '13.5px', fontWeight: 700, textDecoration: 'none', padding: '6px 14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.45)' }}
              >
                <span>List your property</span>
              </Link>

              {/* Booking CTA Button (Solid White Button with Coral Red Text) - Desktop */}
              <Link 
                href="/book"
                className="bcom-action-btn register-btn d-none-mobile"
                title="Explore 1, 2 &amp; 3 BHK Serviced Flats"
                style={{ background: '#ffffff', color: '#ea384c', fontWeight: 800, padding: '7px 18px', borderRadius: '12px', textDecoration: 'none', fontSize: '13.5px', boxShadow: '0 2px 10px rgba(0,0,0,0.12)' }}
              >
                Book Flat
              </Link>

              {/* Direct WhatsApp Concierge CTA */}
              <a 
                href={getGuestWhatsAppLink({ message: "Hello hostayy, I want to book a serviced flat near Yashobhoomi IICC with hostayy." })}
                target="_blank"
                rel="noopener noreferrer"
                className="bcom-action-btn wa-btn"
                title="Chat with hostayy on WhatsApp"
                style={{ background: '#16a34a', color: '#ffffff', fontWeight: 700, padding: '7px 14px', borderRadius: '12px', textDecoration: 'none', fontSize: '13.5px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="d-none-sm">WhatsApp</span>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button 
                type="button" 
                className="bcom-mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '24px', cursor: 'pointer', padding: '6px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tier: Booking.com Style Pills Strip */}
      <div className={`bcom-subnav-strip ${staysDropdownOpen ? 'dropdown-open' : ''}`} style={{ padding: '8px 0', overflow: staysDropdownOpen ? 'visible' : 'auto', scrollbarWidth: 'none' }}>
        <div className="container" style={{ overflow: 'visible' }}>
          <div className="bcom-pills-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', overflow: 'visible' }}>
            
            {/* SUBNAV FOR HOME PAGE */}
            {currentPage === 'home' && (
              <>
                <Link 
                  href="/" 
                  className="bcom-pill active"
                  style={{
                    color: '#ffffff',
                    border: '1.5px solid #ffffff',
                    background: 'rgba(255, 255, 255, 0.22)',
                    fontWeight: 800,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-house-chimney"></i>
                  <span>About hostayy</span>
                </Link>

                <Link 
                  href="/book" 
                  className="bcom-pill"
                  style={{
                    color: '#ffffff',
                    border: '1px solid transparent',
                    background: 'transparent',
                    fontWeight: 700,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-bed"></i>
                  <span>Book Serviced Flats &rarr;</span>
                </Link>

                <Link 
                  href="/list-property" 
                  className="bcom-pill"
                  style={{
                    color: '#ffffff',
                    border: '1px solid transparent',
                    background: 'transparent',
                    fontWeight: 700,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-house-chimney-user"></i>
                  <span>List Your Property &rarr;</span>
                </Link>

                <div 
                  className="bcom-pill"
                  title="Official Physical Address"
                  style={{
                    color: '#fecdd3',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    background: 'rgba(0, 0, 0, 0.12)',
                    fontWeight: 700,
                    padding: '7px 14px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12.5px'
                  }}
                >
                  <i className="fa-solid fa-map-location-dot" style={{ color: '#fecdd3' }}></i>
                  <span>Dwarka Sector 23 Address</span>
                </div>

                <a 
                  href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
                  className="bcom-pill"
                  style={{
                    color: '#ffffff',
                    border: '1px solid transparent',
                    background: 'transparent',
                    fontWeight: 700,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Contact Host</span>
                </a>
              </>
            )}

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
                      border: (activeTab === 'stays' || staysDropdownOpen) ? '1.5px solid #ffffff' : '1px solid transparent',
                      background: (activeTab === 'stays' || staysDropdownOpen) ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                      fontWeight: 800,
                      padding: '7px 16px',
                      borderRadius: '30px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      outline: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <i className="fa-solid fa-bed" style={{ fontSize: '14px', color: '#ffffff' }}></i>
                    <span>Stays</span>
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
                        border: '1.5px solid #fecdd3',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ padding: '6px 8px 6px', borderBottom: '1px solid #fecdd3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="bcom-dropdown-header-title" style={{ fontSize: '10.5px', fontWeight: 800, color: '#ea384c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
                            <span className="bcom-stay-tag" style={{ fontSize: '11px', background: '#ea384c', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
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
                            <span className="bcom-stay-tag" style={{ fontSize: '11px', background: '#ea384c', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
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
                            <span className="bcom-stay-tag" style={{ fontSize: '11px', background: '#ea384c', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
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
                          background: '#ea384c',
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
                    color: '#ffffff',
                    border: activeTab === 'location' ? '1.5px solid #ffffff' : '1px solid transparent',
                    background: activeTab === 'location' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                    fontWeight: activeTab === 'location' ? 800 : 600,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-landmark"></i>
                  <span>3 Mins Yashobhoomi IICC</span>
                </a>

                {/* Verified Address Pill */}
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(HOSTAYY_CONFIG.address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bcom-pill"
                  title="Official Physical Address: hostayy, Block A, Dwarka Sector 23, New Delhi - 110077"
                  style={{
                    color: '#fecdd3',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    background: 'rgba(0, 0, 0, 0.12)',
                    fontWeight: 700,
                    padding: '7px 14px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none',
                    fontSize: '12.5px'
                  }}
                >
                  <i className="fa-solid fa-map-location-dot" style={{ color: '#fecdd3' }}></i>
                  <span>Dwarka Sector 23 Address</span>
                </a>

                {/* Contact Pill */}
                <a 
                  href="#contact" 
                  className={`bcom-pill ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                  style={{
                    color: '#ffffff',
                    border: activeTab === 'contact' ? '1.5px solid #ffffff' : '1px solid transparent',
                    background: activeTab === 'contact' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                    fontWeight: activeTab === 'contact' ? 800 : 600,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Contact Host</span>
                </a>

                {/* Direct Link to Property Listing */}
                <Link
                  href="/list-property"
                  className="bcom-pill"
                  style={{
                    color: '#fecdd3',
                    border: '1px dashed rgba(255, 255, 255, 0.6)',
                    background: 'rgba(0, 0, 0, 0.15)',
                    fontWeight: 700,
                    padding: '7px 15px',
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
                    border: activeTab === 'patron' ? '1.5px solid #ffffff' : '1px solid transparent',
                    background: activeTab === 'patron' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                    fontWeight: activeTab === 'patron' ? 800 : 600,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-house-chimney-user"></i>
                  <span>hostayy Patron</span>
                </a>

                <a 
                  href="#comparison" 
                  className={`bcom-pill ${activeTab === 'comparison' ? 'active' : ''}`}
                  onClick={() => setActiveTab('comparison')}
                  style={{
                    color: '#ffffff',
                    border: activeTab === 'comparison' ? '1.5px solid #ffffff' : '1px solid transparent',
                    background: activeTab === 'comparison' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                    fontWeight: activeTab === 'comparison' ? 800 : 600,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-scale-balanced"></i>
                  <span>Earnings Comparison</span>
                </a>

                <a 
                  href="#process" 
                  className={`bcom-pill ${activeTab === 'process' ? 'active' : ''}`}
                  onClick={() => setActiveTab('process')}
                  style={{
                    color: '#ffffff',
                    border: activeTab === 'process' ? '1.5px solid #ffffff' : '1px solid transparent',
                    background: activeTab === 'process' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                    fontWeight: activeTab === 'process' ? 800 : 600,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-solid fa-list-check"></i>
                  <span>Onboarding Steps</span>
                </a>

                <a 
                  href="#faq" 
                  className={`bcom-pill ${activeTab === 'faq' ? 'active' : ''}`}
                  onClick={() => setActiveTab('faq')}
                  style={{
                    color: '#ffffff',
                    border: activeTab === 'faq' ? '1.5px solid #ffffff' : '1px solid transparent',
                    background: activeTab === 'faq' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                    fontWeight: activeTab === 'faq' ? 800 : 600,
                    padding: '7px 15px',
                    borderRadius: '30px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
                >
                  <i className="fa-regular fa-circle-question"></i>
                  <span>Landlord FAQs</span>
                </a>

                {/* Direct Link to Guest Booking */}
                <Link
                  href="/book"
                  className="bcom-pill"
                  style={{
                    color: '#ffffff',
                    border: '1px dashed rgba(255, 255, 255, 0.6)',
                    background: 'rgba(0, 0, 0, 0.15)',
                    fontWeight: 700,
                    padding: '7px 15px',
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

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="bcom-mobile-drawer" style={{ background: '#c41c33', padding: '22px 18px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="bcom-mobile-drawer-inner">
            {/* Mobile Portal Mode Switcher */}
            <div className="bcom-mobile-portal-switcher" style={{ position: 'relative', display: 'flex', gap: '8px', marginBottom: '18px', background: 'rgba(0, 0, 0, 0.22)', padding: '5px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
              {/* Sliding Pill on Mobile */}
              <div 
                className="mobile-portal-sliding-pill"
                style={{
                  position: 'absolute',
                  top: '5px',
                  bottom: '5px',
                  left: currentPage === 'listing' ? 'calc(50% + 4px)' : '5px',
                  width: 'calc(50% - 9px)',
                  background: '#ffffff',
                  borderRadius: '10px',
                  transition: 'left 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  zIndex: 1,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  pointerEvents: 'none'
                }}
              />
              <Link 
                href="/book"
                onClick={() => setMobileOpen(false)}
                className={`bcom-mobile-portal-btn ${currentPage === 'booking' ? 'active' : ''}`}
                style={{ 
                  position: 'relative',
                  zIndex: 2,
                  flex: 1,
                  textDecoration: 'none',
                  borderRadius: '10px',
                  background: 'transparent',
                  color: currentPage === 'booking' ? '#ea384c' : '#ffffff',
                  fontWeight: 800,
                  transition: 'color 0.25s ease'
                }}
              >
                <i className="fa-solid fa-bed" style={{ marginRight: '6px', color: currentPage === 'booking' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}></i>
                <span style={{ color: currentPage === 'booking' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}>Book Flats</span>
              </Link>
              <Link 
                href="/list-property"
                onClick={() => setMobileOpen(false)}
                className={`bcom-mobile-portal-btn ${currentPage === 'listing' ? 'active' : ''}`}
                style={{ 
                  position: 'relative',
                  zIndex: 2,
                  flex: 1,
                  textDecoration: 'none',
                  borderRadius: '10px',
                  background: 'transparent',
                  color: currentPage === 'listing' ? '#ea384c' : '#ffffff',
                  fontWeight: 800,
                  transition: 'color 0.25s ease'
                }}
              >
                <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '6px', color: currentPage === 'listing' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}></i>
                <span style={{ color: currentPage === 'listing' ? '#ea384c' : '#ffffff', transition: 'color 0.25s ease' }}>List Property</span>
              </Link>
            </div>

            <div className="bcom-mobile-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
              <Link href="/" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-house" style={{ marginRight: '10px', width: '20px' }}></i> Home (About hostayy)
              </Link>
              <Link href="/book" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-bed" style={{ marginRight: '10px', width: '20px' }}></i> Book Serviced Flats
              </Link>
              <Link href="/list-property" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '10px', width: '20px' }}></i> List Your Property (Patron)
              </Link>

              {currentPage === 'booking' && (
                <div style={{ paddingLeft: '14px', borderLeft: '2px solid #fecdd3', display: 'flex', flexDirection: 'column', gap: '8px', margin: '4px 0' }}>
                  <button 
                    type="button" 
                    onClick={() => { setMobileOpen(false); handleSelectStay('velora'); }}
                    className="mobile-sublink"
                    style={{ background: 'none', border: 'none', color: '#fecdd3', textAlign: 'left', fontSize: '13.5px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    &bull; Velora Suite (1 BHK)
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setMobileOpen(false); handleSelectStay('azura'); }}
                    className="mobile-sublink"
                    style={{ background: 'none', border: 'none', color: '#fecdd3', textAlign: 'left', fontSize: '13.5px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    &bull; Azura Residence (2 BHK)
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setMobileOpen(false); handleSelectStay('verde'); }}
                    className="mobile-sublink"
                    style={{ background: 'none', border: 'none', color: '#fecdd3', textAlign: 'left', fontSize: '13.5px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    &bull; Verde Signature (3 BHK)
                  </button>
                </div>
              )}
            </div>

            <div className="bcom-mobile-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={getGuestWhatsAppLink({ message: "Hello hostayy, I want to inquire about hostayy serviced residences / listing my property." })}
                target="_blank"
                rel="noopener noreferrer"
                className="bcom-drawer-btn wa-drawer-btn"
                onClick={() => setMobileOpen(false)}
                style={{ background: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '12px', textAlign: 'center', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> Chat on WhatsApp
              </a>
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                className="bcom-drawer-btn call-drawer-btn"
                onClick={() => setMobileOpen(false)}
                style={{ 
                  background: '#ffffff', 
                  color: '#ea384c', 
                  padding: '12px 16px', 
                  borderRadius: '12px', 
                  textAlign: 'center', 
                  fontWeight: 800, 
                  textDecoration: 'none', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '10px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.16)'
                }}
              >
                <i className="fa-solid fa-phone" style={{ fontSize: '16px', color: '#ea384c' }}></i>
                <span style={{ color: '#ea384c', fontWeight: 800, fontSize: '15px', letterSpacing: '0.2px' }}>
                  Call Host ({HOSTAYY_CONFIG.displayPhone})
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
