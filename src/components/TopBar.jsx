'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink } from '../data/properties';

export default function TopBar() {
  return (
    <div className="main-menu-two__top">
      <div className="container">
        <div className="main-menu-two__top-inner">
          {/* Left contact info */}
          <ul className="main-menu-two__contact-list">
            <li className="topbar-phone-item">
              <i className="fa-solid fa-phone"></i>
              <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}>{HOSTAYY_CONFIG.displayPhone}</a>
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out from the website top bar to inquire about long-term / monthly serviced stay availability near Yashobhoomi." })} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="top-bar-wa-badge"
                title="Direct WhatsApp Concierge"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp Concierge
              </a>
            </li>
            <li className="topbar-email-item">
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${HOSTAYY_CONFIG.email}`}>{HOSTAYY_CONFIG.email}</a>
            </li>
          </ul>

          {/* Right timing */}
          <div className="main-menu-two__top-right">
            <div className="main-menu-two__top-time">
              <i className="fa-solid fa-clock"></i>
              <span>Mon - Sun: 24/7 Dedicated Concierge Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
