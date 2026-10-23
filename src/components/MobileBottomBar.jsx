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

        {/* Guest Booking WhatsApp */}
        <a 
          href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to book a luxury stay with Hostayy directly." })}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item guest-action"
          title="Book Luxury Residence (Guest)"
        >
          <div className="mobile-bar-icon wa-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <span>Book Stay</span>
        </a>

        {/* Property Owner WhatsApp */}
        <a 
          href={getOwnerWhatsAppLink({ location: "Delhi NCR", message: "Hello Mohit, I am a property owner and I want to list/register my residence with Hostayy." })}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item owner-action"
          title="Register Property (Owner)"
        >
          <div className="mobile-bar-icon owner-icon">
            <i className="fa-solid fa-key"></i>
          </div>
          <span>List Property</span>
        </a>
      </div>
    </aside>
  );
}
