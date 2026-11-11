'use client';

import React from 'react';
import { HOSTAYY_CONFIG } from '../data/properties';

export default function TopBar() {
  return (
    <div className="main-menu-two__top">
      <div className="container">
        <div className="main-menu-two__top-inner">
          {/* Left contact info */}
          <ul className="main-menu-two__contact-list">
            <li className="topbar-phone-item">
              <i className="fa-solid fa-phone" style={{ color: '#FF4D4D', fontSize: '12px' }}></i>
              <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}>{HOSTAYY_CONFIG.displayPhone}</a>
            </li>
            <li className="topbar-location-item d-none-sm">
              <i className="fa-solid fa-location-dot" style={{ color: '#FF4D4D', fontSize: '12px' }}></i>
              <span>Dwarka Sector 23 &bull; 3 Mins to Yashobhoomi (IICC)</span>
            </li>
          </ul>

          {/* Right clean concierge info */}
          <div className="main-menu-two__top-right">
            <div className="main-menu-two__top-time">
              <i className="fa-solid fa-award" style={{ color: '#b99c87' }}></i>
              <span>4.98★ Superhost &bull; 0% Brokerage</span>
            </div>
            <div className="topbar-email-clean d-none-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginLeft: '16px' }}>
              <i className="fa-solid fa-envelope" style={{ color: '#FF4D4D', fontSize: '12px' }}></i>
              <a href={`mailto:${HOSTAYY_CONFIG.email}`} style={{ color: '#cbd5e1', fontSize: '12.5px', textDecoration: 'none' }}>
                {HOSTAYY_CONFIG.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
