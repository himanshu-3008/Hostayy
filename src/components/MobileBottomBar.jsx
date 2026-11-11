'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function MobileBottomBar() {
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

        {/* Guest Flat Booking WhatsApp */}
        <a 
          href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to book / request a quote for a 1, 2, or 3 BHK serviced flat near Yashobhoomi with Hostayy." })}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item guest-action"
          title="Book Flat on WhatsApp"
        >
          <div className="mobile-bar-icon wa-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <span>Book Flat</span>
        </a>

        {/* Property Owner Patron Portal */}
        <a 
          href="#patron" 
          className="mobile-bar-item owner-action"
          title="List Property with Hostayy Patron"
        >
          <div className="mobile-bar-icon owner-icon">
            <i className="fa-solid fa-house-chimney-user"></i>
          </div>
          <span>List Property</span>
        </a>
      </div>
    </aside>
  );
}
