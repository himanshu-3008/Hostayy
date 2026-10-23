'use client';

import React from 'react';
import { getHostayyWhatsAppLink } from '../data/properties';

export default function FloatingWhatsApp() {
  return (
    <div className="floating-wa-wrapper">
      <a 
        href={getHostayyWhatsAppLink("Hi Hostayy, I'm interested in booking a stay. Please share details.")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-wa-btn" 
        id="floating-whatsapp-btn"
        aria-label="Direct WhatsApp Concierge"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="wa-unread-badge">1</span>
      </a>
      <div className="wa-tooltip">
        <strong>Direct WhatsApp Concierge</strong>
        <span>10-15% Lower Direct Rates</span>
      </div>
    </div>
  );
}
