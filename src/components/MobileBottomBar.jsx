'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink } from '../data/properties';

export default function MobileBottomBar({ portalMode = 'booking', setPortalMode }) {
  const handleBookingSwitch = (e) => {
    if (setPortalMode) {
      setPortalMode('booking');
      const el = document.getElementById('room') || document.getElementById('home');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleListingSwitch = (e) => {
    if (setPortalMode) {
      setPortalMode('listing');
      const el = document.getElementById('patron');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="mobile-bottom-bar" aria-label="Mobile Quick Action Bar">
      <div className="mobile-bottom-bar__inner">
        {/* Call Host */}
        <a 
          href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
          className="mobile-bar-item call-action"
          title="Direct Call to Mohit Chaudhary"
        >
          <div className="mobile-bar-icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <span>Call Host</span>
        </a>

        {/* Customer Flat Booking Portal Toggle */}
        <button 
          type="button"
          onClick={handleBookingSwitch}
          className={`mobile-bar-item guest-action ${portalMode === 'booking' ? 'active-bar-tab' : ''}`}
          title="Book 1, 2 & 3 BHK Serviced Flats"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <div className="mobile-bar-icon" style={{ backgroundColor: portalMode === 'booking' ? '#ea580c' : '#f3f4f6', color: portalMode === 'booking' ? '#ffffff' : '#111827' }}>
            <i className="fa-solid fa-bed"></i>
          </div>
          <span style={{ color: portalMode === 'booking' ? '#ea580c' : '#111827', fontWeight: portalMode === 'booking' ? 800 : 600 }}>
            Book Flats
          </span>
        </button>

        {/* Property Owner Listing Portal Toggle */}
        <button 
          type="button"
          onClick={handleListingSwitch}
          className={`mobile-bar-item owner-action ${portalMode === 'listing' ? 'active-bar-tab' : ''}`}
          title="List Property with Hostayy Patron"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <div className="mobile-bar-icon" style={{ backgroundColor: portalMode === 'listing' ? '#ea580c' : '#f3f4f6', color: portalMode === 'listing' ? '#ffffff' : '#111827' }}>
            <i className="fa-solid fa-house-chimney-user"></i>
          </div>
          <span style={{ color: portalMode === 'listing' ? '#ea580c' : '#111827', fontWeight: portalMode === 'listing' ? 800 : 600 }}>
            List Property
          </span>
        </button>
      </div>
    </aside>
  );
}
