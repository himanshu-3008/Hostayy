'use client';

import React, { useState } from 'react';
import { getGuestWhatsAppLink, getOwnerWhatsAppLink, HOSTAYY_CONFIG } from '../data/properties';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleGuestClick = () => {
    window.open(getGuestWhatsAppLink({
      message: "I am reaching out via your 24/7 WhatsApp concierge to check luxury stay availability in Delhi NCR."
    }), '_blank');
    setIsOpen(false);
  };

  const handleOwnerClick = () => {
    window.open(getOwnerWhatsAppLink({
      location: "Delhi NCR",
      message: "I am a property owner and I want to register/list my residence with Hostayy for turnkey short-term rental management."
    }), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="floating-wa-wrapper" style={{ zIndex: 9999 }}>
      {/* Interactive Choice Popup */}
      {isOpen && (
        <div 
          className="wa-choice-popup"
          style={{
            position: 'absolute',
            bottom: '75px',
            right: '0',
            width: '320px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(25, 22, 40, 0.22)',
            border: '1.5px solid rgba(185, 156, 135, 0.35)',
            overflow: 'hidden',
            animation: 'fadeInUp 0.3s ease forwards'
          }}
        >
          {/* Header */}
          <div 
            style={{
              backgroundColor: '#191628',
              color: '#ffffff',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid var(--hotelux-base)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px' }}>
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '14.5px', fontWeight: 700, color: '#fff' }}>Hostayy 24/7 Concierge</h4>
                <span style={{ fontSize: '11px', color: '#b99c87', letterSpacing: '0.04em' }}>Mohit Chaudhary · Online</span>
              </div>
            </div>
            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer', padding: '4px' }}
              aria-label="Close"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '18px 20px' }}>
            <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: '#585b6b', lineHeight: '1.5' }}>
              Please select how you would like to connect with our host team on WhatsApp:
            </p>

            {/* Option 1: Guest */}
            <button
              type="button"
              onClick={handleGuestClick}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                backgroundColor: '#f0fdf4',
                border: '1.5px solid #25D366',
                borderRadius: '10px',
                marginBottom: '10px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(37, 211, 102, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', flexShrink: 0 }}>
                <i className="fas fa-bed"></i>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '14px', color: '#14532d', fontWeight: 700 }}>
                  🏨 I Want To Book A Stay
                </strong>
                <span style={{ fontSize: '12px', color: '#166534' }}>
                  Guest Booking · Direct 0% OTA Fees
                </span>
              </div>
            </button>

            {/* Option 2: Owner */}
            <button
              type="button"
              onClick={handleOwnerClick}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                backgroundColor: '#fbf9f6',
                border: '1.5px solid var(--hotelux-base)',
                borderRadius: '10px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(185, 156, 135, 0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#191628', border: '1px solid var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hotelux-base)', fontSize: '16px', flexShrink: 0 }}>
                <i className="fas fa-key"></i>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '14px', color: '#191628', fontWeight: 700 }}>
                  🔑 I Want To Register My Property
                </strong>
                <span style={{ fontSize: '12px', color: '#78716c' }}>
                  Property Owner · Turnkey Yield Partnership
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="floating-wa-btn" 
        id="floating-whatsapp-btn"
        aria-label="Direct WhatsApp Concierge"
      >
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-brands fa-whatsapp"}></i>
        {!isOpen && <span className="wa-unread-badge">1</span>}
      </button>

      {!isOpen && (
        <div className="wa-tooltip">
          <strong>24/7 WhatsApp Concierge</strong>
          <span>Guests & Property Owners</span>
        </div>
      )}
    </div>
  );
}
