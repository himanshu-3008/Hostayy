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
          title="hostayy Home"
          style={{ textDecoration: 'none' }}
        >
          <div 
            className="mobile-bar-icon" 
            style={{ 
              backgroundColor: currentPage === 'home' ? '#ea384c' : '#f3f4f6', 
              color: currentPage === 'home' ? '#ffffff' : '#111827',
              transform: currentPage === 'home' ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: currentPage === 'home' ? '0 4px 12px rgba(234, 56, 76, 0.28)' : 'none'
            }}
          >
            <i className="fa-solid fa-house"></i>
          </div>
          <span style={{ color: currentPage === 'home' ? '#ea384c' : '#111827', fontWeight: currentPage === 'home' ? 800 : 600, transition: 'all 0.25s ease' }}>
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
          <div 
            className="mobile-bar-icon" 
            style={{ 
              backgroundColor: currentPage === 'booking' ? '#ea384c' : '#f3f4f6', 
              color: currentPage === 'booking' ? '#ffffff' : '#111827',
              transform: currentPage === 'booking' ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: currentPage === 'booking' ? '0 4px 12px rgba(234, 56, 76, 0.28)' : 'none'
            }}
          >
            <i className="fa-solid fa-bed"></i>
          </div>
          <span style={{ color: currentPage === 'booking' ? '#ea384c' : '#111827', fontWeight: currentPage === 'booking' ? 800 : 600, transition: 'all 0.25s ease' }}>
            Book Flats
          </span>
        </Link>

        {/* 3. Property Owner Listing Page */}
        <Link 
          href="/list-property"
          className={`mobile-bar-item owner-action ${currentPage === 'listing' ? 'active-bar-tab' : ''}`}
          title="List Property with hostayy Patron"
          style={{ textDecoration: 'none' }}
        >
          <div 
            className="mobile-bar-icon" 
            style={{ 
              backgroundColor: currentPage === 'listing' ? '#ea384c' : '#f3f4f6', 
              color: currentPage === 'listing' ? '#ffffff' : '#111827',
              transform: currentPage === 'listing' ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              boxShadow: currentPage === 'listing' ? '0 4px 12px rgba(234, 56, 76, 0.28)' : 'none'
            }}
          >
            <i className="fa-solid fa-house-chimney-user"></i>
          </div>
          <span style={{ color: currentPage === 'listing' ? '#ea384c' : '#111827', fontWeight: currentPage === 'listing' ? 800 : 600, transition: 'all 0.25s ease' }}>
            List Property
          </span>
        </Link>

        {/* 4. Call Host */}
        <a 
          href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
          className="mobile-bar-item call-action"
          title="Direct Call to hostayy Concierge"
          style={{ textDecoration: 'none' }}
        >
          <div 
            className="mobile-bar-icon" 
            style={{ 
              backgroundColor: '#f3f4f6', 
              color: '#111827',
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <i className="fa-solid fa-phone"></i>
          </div>
          <span style={{ color: '#111827', fontWeight: 600, transition: 'all 0.25s ease' }}>
            Call Host
          </span>
        </a>
      </div>
    </aside>
  );
}
