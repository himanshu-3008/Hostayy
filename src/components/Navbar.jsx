'use client';

import React, { useState, useEffect } from 'react';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function Navbar({ onSelectStay }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('stays');

  const handleRoomTab = (id, tabName) => {
    setActiveTab(tabName);
    if (onSelectStay) {
      onSelectStay(id);
    }
    const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="bcom-header" id="booking-header">
      {/* Top Tier: Logo & User Utility Bar (Modeled on Booking.com) */}
      <div className="bcom-header-top">
        <div className="container">
          <div className="bcom-top-inner">
            {/* Left: Hostayy Logo */}
            <a href="#home" className="bcom-brand-logo" aria-label="Hostayy.com">
              <div className="bcom-logo-emblem">
                <img 
                  src="/assets/images/hostayy-logo-transparent.png" 
                  alt="Hostayy Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="bcom-logo-text-wrap">
                <span className="bcom-logo-text">
                  Hostayy<span className="bcom-logo-dot">.com</span>
                </span>
                <span className="bcom-logo-slogan">(feel like home)</span>
              </div>
            </a>

            {/* Right: Booking.com Style Utility Items */}
            <div className="bcom-utility-row">
              {/* Currency Pill */}
              <button type="button" className="bcom-util-btn" title="Currency: Indian Rupee">
                <span className="bcom-currency-tag">INR</span>
              </button>

              {/* Country Flag */}
              <div className="bcom-flag-wrap" title="India (Dwarka Sector 23 / Delhi NCR)">
                <span className="bcom-flag-icon" role="img" aria-label="India Flag">🇮🇳</span>
              </div>

              {/* Help & 24/7 Support */}
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
                className="bcom-util-btn bcom-help-btn"
                title={`24/7 Concierge Support: ${HOSTAYY_CONFIG.displayPhone}`}
              >
                <i className="fa-regular fa-circle-question"></i>
              </a>

              {/* List Your Property (Hostayy Patron) */}
              <a 
                href="#patron" 
                className="bcom-list-prop-link"
                title="List your apartment with Hostayy Patron"
              >
                <span>List your property</span>
              </a>

              {/* Booking CTA Button (Booking.com Sign in / Register style) */}
              <a 
                href="#room" 
                className="bcom-action-btn register-btn"
                title="Explore 1, 2 &amp; 3 BHK Serviced Flats"
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
              >
                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tier: Booking.com Icon Pills Strip */}
      <div className="bcom-subnav-strip">
        <div className="container">
          <div className="bcom-pills-row">
            {/* Stays / All Flats */}
            <a 
              href="#room" 
              className={`bcom-pill ${activeTab === 'stays' ? 'active' : ''}`}
              onClick={() => { setActiveTab('stays'); if (onSelectStay) onSelectStay(null); }}
            >
              <i className="fa-solid fa-bed"></i>
              <span>Serviced Flats</span>
            </a>

            {/* 1 BHK Suite (Velora) */}
            <button 
              type="button" 
              className={`bcom-pill ${activeTab === 'velora' ? 'active' : ''}`}
              onClick={() => handleRoomTab('velora', 'velora')}
            >
              <i className="fa-solid fa-door-open"></i>
              <span>1 BHK Suite (Velora)</span>
            </button>

            {/* 2 BHK Executive (Azura) */}
            <button 
              type="button" 
              className={`bcom-pill ${activeTab === 'azura' ? 'active' : ''}`}
              onClick={() => handleRoomTab('azura', 'azura')}
            >
              <i className="fa-solid fa-building"></i>
              <span>2 BHK Executive (Azura)</span>
            </button>

            {/* 3 BHK Signature (Verde) */}
            <button 
              type="button" 
              className={`bcom-pill ${activeTab === 'verde' ? 'active' : ''}`}
              onClick={() => handleRoomTab('verde', 'verde')}
            >
              <i className="fa-solid fa-gem"></i>
              <span>3 BHK Signature (Verde)</span>
            </button>

            {/* Strategic Location / Yashobhoomi IICC */}
            <a 
              href="#why-choose" 
              className={`bcom-pill ${activeTab === 'location' ? 'active' : ''}`}
              onClick={() => setActiveTab('location')}
            >
              <i className="fa-solid fa-landmark"></i>
              <span>3 Mins Yashobhoomi IICC</span>
            </a>

            {/* Amenities & Services */}
            <a 
              href="#services" 
              className={`bcom-pill ${activeTab === 'amenities' ? 'active' : ''}`}
              onClick={() => setActiveTab('amenities')}
            >
              <i className="fa-solid fa-kitchen-set"></i>
              <span>Amenities</span>
            </a>

            {/* Hostayy Patron (Owners) */}
            <a 
              href="#patron" 
              className={`bcom-pill ${activeTab === 'patron' ? 'active' : ''}`}
              onClick={() => setActiveTab('patron')}
            >
              <i className="fa-solid fa-house-chimney-user"></i>
              <span>Hostayy Patron</span>
            </a>

            {/* Contact Host */}
            <a 
              href="#contact" 
              className={`bcom-pill ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <i className="fa-solid fa-phone"></i>
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="bcom-mobile-drawer">
          <div className="bcom-mobile-drawer-inner">
            <div className="bcom-mobile-links">
              <a href="#home" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-house"></i> Home
              </a>
              <a href="#room" onClick={() => { setMobileOpen(false); if (onSelectStay) onSelectStay(null); }}>
                <i className="fa-solid fa-bed"></i> Book Serviced Flats
              </a>
              <button 
                type="button" 
                onClick={() => { setMobileOpen(false); handleRoomTab('velora', 'velora'); }}
                className="mobile-sublink"
              >
                &bull; 1 BHK Suite (Velora)
              </button>
              <button 
                type="button" 
                onClick={() => { setMobileOpen(false); handleRoomTab('azura', 'azura'); }}
                className="mobile-sublink"
              >
                &bull; 2 BHK Executive (Azura)
              </button>
              <button 
                type="button" 
                onClick={() => { setMobileOpen(false); handleRoomTab('verde', 'verde'); }}
                className="mobile-sublink"
              >
                &bull; 3 BHK Signature (Verde)
              </button>
              <a href="#services" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-kitchen-set"></i> Amenities &amp; Standards
              </a>
              <a href="#why-choose" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-map-location-dot"></i> Yashobhoomi Connectivity
              </a>
              <a href="#patron" onClick={() => setMobileOpen(false)} style={{ color: '#FFD700', fontWeight: 700 }}>
                <i className="fa-solid fa-house-chimney-user"></i> Hostayy Patron (List Property)
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                <i className="fa-solid fa-envelope"></i> Contact Concierge
              </a>
            </div>

            <div className="bcom-mobile-actions">
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to book a serviced flat near Yashobhoomi IICC with Hostayy." })}
                target="_blank"
                rel="noopener noreferrer"
                className="bcom-drawer-btn wa-drawer-btn"
                onClick={() => setMobileOpen(false)}
              >
                <i className="fa-brands fa-whatsapp"></i> Book Flat on WhatsApp
              </a>
              <a 
                href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                className="bcom-drawer-btn call-drawer-btn"
                onClick={() => setMobileOpen(false)}
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
