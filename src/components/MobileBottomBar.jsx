'use client';

import React from 'react';
import Link from 'next/link';
import { HOSTAYY_CONFIG } from '../data/properties';

export default function MobileBottomBar({ activePage = 'home', portalMode }) {
  const currentPage = activePage || (portalMode === 'listing' ? 'listing' : 'booking');

  return (
    <aside className="mobile-bottom-bar" aria-label="Mobile Navigation Bar">
      <div className="mobile-bottom-bar__inner">
        {/* 1. Home */}
        <Link 
          href="/" 
          className={`mobile-bar-item ${currentPage === 'home' ? 'active-bar-tab' : ''}`}
          title="Hostayy Home"
          style={{ textDecoration: 'none' }}
        >
          <div className="mobile-bar-icon" style={{ backgroundColor: currentPage === 'home' ? '#ea580c' : '#f3f4f6', color: currentPage === 'home' ? '#ffffff' : '#111827' }}>
            <i className="fa-solid fa-house"></i>
          </div>
          <span style={{ color: currentPage === 'home' ? '#ea580c' : '#111827', fontWeight: currentPage === 'home' ? 800 : 600 }}>
            Home
          </span>
        </Link>

        {/* 2. Customer Flat Booking Page */}
        <Link 
          href="/book"
          className={`mobile-bar-item guest-action ${currentPage === 'booking' ? 'active-bar-tab' : ''}`}
          title="Book 1, 2 & 3 BHK Serviced Flats"
          style={{ textDecoration: 'none' }}
        >
          <div className="mobile-bar-icon" style={{ backgroundColor: currentPage === 'booking' ? '#ea580c' : '#f3f4f6', color: currentPage === 'booking' ? '#ffffff' : '#111827' }}>
            <i className="fa-solid fa-bed"></i>
          </div>
          <span style={{ color: currentPage === 'booking' ? '#ea580c' : '#111827', fontWeight: currentPage === 'booking' ? 800 : 600 }}>
            Book Flats
          </span>
        </Link>

        {/* 3. Property Owner Listing Page */}
        <Link 
          href="/list-property"
          className={`mobile-bar-item owner-action ${currentPage === 'listing' ? 'active-bar-tab' : ''}`}
          title="List Property with Hostayy Patron"
          style={{ textDecoration: 'none' }}
        >
          <div className="mobile-bar-icon" style={{ backgroundColor: currentPage === 'listing' ? '#ea580c' : '#f3f4f6', color: currentPage === 'listing' ? '#ffffff' : '#111827' }}>
            <i className="fa-solid fa-house-chimney-user"></i>
          </div>
          <span style={{ color: currentPage === 'listing' ? '#ea580c' : '#111827', fontWeight: currentPage === 'listing' ? 800 : 600 }}>
            List Property
          </span>
        </Link>

        {/* 4. Call Host */}
        <a 
          href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
          className="mobile-bar-item call-action"
          title="Direct Call to Mohit Chaudhary"
          style={{ textDecoration: 'none' }}
        >
          <div className="mobile-bar-icon" style={{ backgroundColor: '#f3f4f6', color: '#111827' }}>
            <i className="fa-solid fa-phone"></i>
          </div>
          <span style={{ color: '#111827', fontWeight: 600 }}>
            Call Host
          </span>
        </a>
      </div>
    </aside>
  );
}
