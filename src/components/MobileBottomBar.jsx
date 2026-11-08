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
          href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to request a long-term / monthly serviced stay quotation near Yashobhoomi with Hostayy." })}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item guest-action"
          title="Request Long-Stay Quote (Guest)"
        >
          <div className="mobile-bar-icon wa-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <span>Get Quote</span>
        </a>

        {/* Property Owner WhatsApp */}
        <a 
          href={getOwnerWhatsAppLink({ location: "Delhi NCR", message: "Hello Mohit, I am a property owner and I want to list/register my residence with Hostayy." })}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item owner-action"
          title="Partner Property (Owner)"
        >
          <div className="mobile-bar-icon owner-icon">
            <i className="fa-solid fa-key"></i>
          </div>
          <span>Partner</span>
        </a>
      </div>
    </aside>
  );
}
