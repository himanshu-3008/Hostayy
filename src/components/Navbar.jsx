'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink } from '../data/properties';

export default function Navbar({ onSelectStay }) {
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

  const handleRoomTab = (id, tabName) => {
    setActiveTab(tabName);
    if (onSelectStay) {
      onSelectStay(id);
    }
    const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="bcom-header" id="booking-header" style={{ backgroundColor: '#ea580c' }}>
      {/* Top Tier: Logo & User Utility Bar (Orange & White Theme) */}
      <div className="bcom-header-top" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.22)', padding: '12px 0 10px' }}>
        <div className="container">
          <div className="bcom-top-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Left: Hostayy Logo */}
            <a href="#home" className="bcom-brand-logo" aria-label="Hostayy.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div className="bcom-logo-emblem" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ffffff', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                <img 
                  src="/assets/images/hostayy-logo-transparent.png" 
                  alt="Hostayy Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="bcom-logo-text-wrap" style={{ lineHeight: 1.15 }}>
                <span className="bcom-logo-text" style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', fontFamily: 'var(--hotelux-font-two), sans-serif' }}>
                  Hostayy<span className="bcom-logo-dot" style={{ color: '#fed7aa' }}>.com</span>
                </span>
                <span className="bcom-logo-slogan" style={{ display: 'block', fontSize: '11px', color: '#ffffff', fontStyle: 'italic', fontWeight: 500, opacity: 0.9 }}>
                  (feel like home)
                </span>
              </div>
            </a>

            {/* Right: Booking.com Style Utility Items (White on Orange) */}
            <div className="bcom-utility-row" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Currency Pill */}
              <button type="button" className="bcom-util-btn" title="Currency: Indian Rupee" style={{ background: 'transparent', border: 'none', color: '#ffffff', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 700, fontSize: '14px' }}>
                <span className="bcom-currency-tag" style={{ color: '#ffffff' }}>INR</span>
              </button>

              {/* Country Flag */}
              <div className="bcom-flag-wrap" title="India (Dwarka Sector 23 / Delhi NCR)" style={{ display: 'inline-flex', alignItems: 'center', fontSize: '20px' }}>
                <span className="bcom-flag-icon" role="img" aria-label="India Flag">🇮🇳</span>
              </div>

              {/* Help & 24/7 Support */}
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
                className="bcom-util-btn bcom-help-btn"
                title={`24/7 Concierge Support: ${HOSTAYY_CONFIG.displayPhone}`}
                style={{ color: '#ffffff', fontSize: '18px', display: 'inline-flex', alignItems: 'center' }}
              >
                <i className="fa-regular fa-circle-question"></i>
              </a>

              {/* List Your Property (Hostayy Patron) */}
              <a 
                href="#patron" 
                className="bcom-list-prop-link"
                title="List your apartment with Hostayy Patron"
                style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700, textDecoration: 'none', padding: '7px 12px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.4)' }}
              >
                <span>List your property</span>
              </a>

              {/* Booking CTA Button (Solid White Button with Orange Text) */}
              <a 
                href="#room" 
                className="bcom-action-btn register-btn"
                title="Explore 1, 2 &amp; 3 BHK Serviced Flats"
                style={{ background: '#ffffff', color: '#ea580c', fontWeight: 800, padding: '8px 18px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                Book Flat
              </a>

              {/* Direct WhatsApp Concierge CTA */}
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to book a serviced flat near Yashobhoomi IICC with Hostayy." })}
                target="_blank"
                rel="noopener noreferrer"
                className="bcom-action-btn wa-btn"
                title="Chat with Mohit on WhatsApp"
                style={{ background: '#16a34a', color: '#ffffff', fontWeight: 700, padding: '8px 14px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
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
                style={{ background: 'transparent', border: 'none', color: '#ffffff', fontSize: '22px', cursor: 'pointer', padding: '6px' }}
              >
                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tier: Booking.com Style Pills Strip */}
      <div className={`bcom-subnav-strip ${staysDropdownOpen ? 'dropdown-open' : ''}`} style={{ padding: '10px 0', overflow: staysDropdownOpen ? 'visible' : 'auto', scrollbarWidth: 'none' }}>
        <div className="container" style={{ overflow: 'visible' }}>
          <div className="bcom-pills-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap', overflow: 'visible' }}>
            
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
                  padding: '8px 18px',
                  borderRadius: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontSize: '13.5px',
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
                      src="/assets/images/verde/verde-02.jpg" 
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
                        Prime Golf Belt &bull; 1,850 Sq Ft &bull; 3 En-Suite Baths
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action: View All Stays */}
                  <button 
                    type="button"
                    onClick={() => handleSelectStay(null)}
                    className="bcom-dropdown-all-btn"
                  >
                    <i className="fa-solid fa-arrow-down" style={{ fontSize: '11px' }}></i>
                    <span>Scroll to Stays Section (All Flats)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Strategic Location / Yashobhoomi IICC */}
            <a 
              href="#why-choose" 
              className={`bcom-pill ${activeTab === 'location' ? 'active' : ''}`}
              onClick={() => setActiveTab('location')}
              style={{
                color: '#ffffff',
                border: activeTab === 'location' ? '1.5px solid #ffffff' : '1px solid transparent',
                background: activeTab === 'location' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                fontWeight: activeTab === 'location' ? 800 : 600,
                padding: '8px 16px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '13.5px'
              }}
            >
              <i className="fa-solid fa-landmark"></i>
              <span>3 Mins Yashobhoomi IICC</span>
            </a>

            {/* Amenities & Standards */}
            <a 
              href="#services" 
              className={`bcom-pill ${activeTab === 'amenities' ? 'active' : ''}`}
              onClick={() => setActiveTab('amenities')}
              style={{
                color: '#ffffff',
                border: activeTab === 'amenities' ? '1.5px solid #ffffff' : '1px solid transparent',
                background: activeTab === 'amenities' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                fontWeight: activeTab === 'amenities' ? 800 : 600,
                padding: '8px 16px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '13.5px'
              }}
            >
              <i className="fa-solid fa-kitchen-set"></i>
              <span>Amenities</span>
            </a>

            {/* Hostayy Patron (Owners) */}
            <a 
              href="#patron" 
              className={`bcom-pill ${activeTab === 'patron' ? 'active' : ''}`}
              onClick={() => setActiveTab('patron')}
              style={{
                color: '#ffffff',
                border: activeTab === 'patron' ? '1.5px solid #ffffff' : '1px solid transparent',
                background: activeTab === 'patron' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                fontWeight: activeTab === 'patron' ? 800 : 600,
                padding: '8px 16px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '13.5px'
              }}
            >
              <i className="fa-solid fa-house-chimney-user"></i>
              <span>Hostayy Patron</span>
            </a>

            {/* Contact Host */}
            <a 
              href="#contact" 
              className={`bcom-pill ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
              style={{
                color: '#ffffff',
                border: activeTab === 'contact' ? '1.5px solid #ffffff' : '1px solid transparent',
                background: activeTab === 'contact' ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
                fontWeight: activeTab === 'contact' ? 800 : 600,
                padding: '8px 16px',
                borderRadius: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '13.5px'
              }}
            >
              <i className="fa-solid fa-phone"></i>
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="bcom-mobile-drawer" style={{ background: '#9a3412', padding: '20px' }}>
          <div className="bcom-mobile-drawer-inner">
            <div className="bcom-mobile-links" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <a href="#home" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
                <i className="fa-solid fa-house"></i> Home
              </a>
              <a href="#room" onClick={() => { setMobileOpen(false); handleSelectStay(null); }} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
                <i className="fa-solid fa-bed"></i> Stays (All Serviced Flats)
              </a>
              <button 
                type="button" 
                onClick={() => { setMobileOpen(false); handleSelectStay('velora'); }}
                className="mobile-sublink"
                style={{ background: 'none', border: 'none', color: '#fed7aa', textAlign: 'left', fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}
              >
                &bull; 1 BHK Suite (Velora)
              </button>
              <button 
                type="button" 
                onClick={() => { setMobileOpen(false); handleSelectStay('azura'); }}
                className="mobile-sublink"
                style={{ background: 'none', border: 'none', color: '#fed7aa', textAlign: 'left', fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}
              >
                &bull; 2 BHK Executive (Azura)
              </button>
              <button 
                type="button" 
                onClick={() => { setMobileOpen(false); handleSelectStay('verde'); }}
                className="mobile-sublink"
                style={{ background: 'none', border: 'none', color: '#fed7aa', textAlign: 'left', fontSize: '14px', paddingLeft: '20px', cursor: 'pointer' }}
              >
                &bull; 3 BHK Signature (Verde)
              </button>
              <a href="#services" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
                <i className="fa-solid fa-kitchen-set"></i> Amenities &amp; Standards
              </a>
              <a href="#why-choose" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
                <i className="fa-solid fa-map-location-dot"></i> Yashobhoomi Connectivity
              </a>
              <a href="#patron" onClick={() => setMobileOpen(false)} style={{ color: '#fed7aa', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                <i className="fa-solid fa-house-chimney-user"></i> Hostayy Patron (List Property)
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)} style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
                <i className="fa-solid fa-envelope"></i> Contact Concierge
              </a>
            </div>

            <div className="bcom-mobile-actions" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to book a serviced flat near Yashobhoomi IICC with Hostayy." })}
                target="_blank"
                rel="noopener noreferrer"
                className="bcom-drawer-btn wa-drawer-btn"
                onClick={() => setMobileOpen(false)}
                style={{ background: '#16a34a', color: '#ffffff', padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: 700, textDecoration: 'none' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Book Flat on WhatsApp
              </a>
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                className="bcom-drawer-btn call-drawer-btn"
                onClick={() => setMobileOpen(false)}
                style={{ background: '#ffffff', color: '#ea580c', padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: 800, textDecoration: 'none' }}
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
