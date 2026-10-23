'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink } from '../data/properties';

export default function TopBar() {
  return (
    <div className="main-menu-two__top">
      <div className="container">
        <div className="main-menu-two__top-inner">
          {/* Left contact list */}
          <ul className="main-menu-two__contact-list">
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}>{HOSTAYY_CONFIG.displayPhone}</a>
              <a 
                href={getHostayyWhatsAppLink("Hi Mohit, I'm reaching out directly from Hostayy website.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="top-bar-wa-badge"
                title="Chat on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${HOSTAYY_CONFIG.email}`}>{HOSTAYY_CONFIG.email}</a>
            </li>
            <li className="d-none-sm">
              <i className="fa-solid fa-location-dot"></i>
              <span>{HOSTAYY_CONFIG.address}</span>
            </li>
          </ul>

          {/* Right timing and OTA links */}
          <div className="main-menu-two__top-right">
            <div className="main-menu-two__top-time">
              <i className="fa-solid fa-clock"></i>
              <span>Mon - Sun: 24/7 Dedicated Concierge</span>
            </div>
            <div className="top-ota-links">
              <a href={HOSTAYY_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer" className="top-ota-link" title="Hostayy on Booking.com">
                <i className="fa-solid fa-hotel" style={{ color: '#003580' }}></i> Booking.com
              </a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <a href={HOSTAYY_CONFIG.airbnbVeloraUrl} target="_blank" rel="noopener noreferrer" className="top-ota-link" title="Velora on Airbnb">
                <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F' }}></i> Velora
              </a>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
              <a href={HOSTAYY_CONFIG.airbnbAzuraUrl} target="_blank" rel="noopener noreferrer" className="top-ota-link" title="Azura on Airbnb">
                <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F' }}></i> Azura
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
