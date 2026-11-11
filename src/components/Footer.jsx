'use client';

import React from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function Footer({ onSelectStay }) {
  return (
    <footer className="site-footer-two" style={{ backgroundColor: '#111827', color: '#ffffff' }}>
      <div className="container">
        <div className="site-footer-two__top">
          <div className="row">
            {/* Column 1: Brand Info & Badges */}
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 footer-col" style={{ marginBottom: '28px' }}>
              <a href="#home" className="brand-logo-hotelux" style={{ marginBottom: '18px', display: 'inline-flex', textDecoration: 'none' }}>
                <div className="brand-emblem-wrap" style={{ backgroundColor: '#ffffff', borderRadius: '50%', padding: '6px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img 
                    src="/assets/images/hostayy-logo-transparent.png" 
                    alt="Hostayy Logo" 
                    className="brand-logo-img"
                  />
                </div>
                <div className="brand-text-hotelux">
                  <h2 style={{ color: '#ffffff', fontWeight: 800, margin: 0, fontSize: '24px' }}>hostayy</h2>
                  <span className="brand-slogan" style={{ color: '#fed7aa', fontWeight: 600, fontSize: '12px' }}>(feel like home)</span>
                </div>
              </a>
              <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#ffffff', marginBottom: '18px', fontWeight: 400 }}>
                Curated 1, 2, and 3 BHK serviced apartments located 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Managed with five-star turnkey hotel operations and zero brokerage for long-term and corporate monthly stays.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'rgba(234, 88, 12, 0.25)', border: '1px solid #ea580c', padding: '5px 12px', color: '#ffffff', fontWeight: 700, borderRadius: '4px' }}>
                  <i className="fa-solid fa-award" style={{ marginRight: '6px', color: '#fed7aa' }}></i> Superhost Hospitality 4.98★
                </span>
                <span style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '5px 12px', color: '#ffffff', fontWeight: 700, borderRadius: '4px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ marginRight: '6px', color: '#ffffff' }}></i> 0% Brokerage
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 footer-col" style={{ marginBottom: '28px' }}>
              <h4 className="footer-widget-title" style={{ color: '#ffffff', fontWeight: 700 }}>Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home" style={{ color: '#ffffff', fontWeight: 500 }}>Home</a></li>
                <li><a href="#room" style={{ color: '#ffffff', fontWeight: 500 }}>Book Serviced Flats</a></li>
                <li><a href="#services" style={{ color: '#ffffff', fontWeight: 500 }}>Services &amp; Amenities</a></li>
                <li><a href="#why-choose" style={{ color: '#ffffff', fontWeight: 500 }}>Why Hostayy</a></li>
                <li><a href="#patron" style={{ color: '#ea580c', fontWeight: 700 }}>Hostayy Patron (List Property)</a></li>
                <li><a href="#contact" style={{ color: '#ffffff', fontWeight: 500 }}>Contact &amp; Quotations</a></li>
              </ul>
            </div>

            {/* Column 3: Our Residences */}
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 footer-col" style={{ marginBottom: '28px' }}>
              <h4 className="footer-widget-title" style={{ color: '#ffffff', fontWeight: 700 }}>Residences Near Yashobhoomi</h4>
              <ul className="footer-links-list">
                {HOSTAYY_PROPERTIES.map(prop => (
                  <li key={prop.id}>
                    <a 
                      href="#room" 
                      onClick={(e) => {
                        if (onSelectStay) onSelectStay(prop.id);
                      }}
                      style={{ color: '#ffffff', fontWeight: 500 }}
                    >
                      {prop.name} ({prop.bhk})
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '12px', color: '#ea580c', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                    <i className="fa-solid fa-location-dot" style={{ marginRight: '6px', color: '#ea580c' }}></i> Prime Connectivity
                  </span>
                  <span style={{ fontSize: '12.5px', color: '#ffffff', lineHeight: 1.5, display: 'block', fontWeight: 500 }}>
                    3 mins to Yashobhoomi IICC • 10 mins to IGI Airport (T3)
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Official Host Contact */}
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 footer-col" style={{ marginBottom: '28px' }}>
              <h4 className="footer-widget-title" style={{ color: '#ffffff', fontWeight: 700 }}>Official Contact</h4>
              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-user-tie" style={{ color: '#ea580c' }}></i>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '15px', fontWeight: 700 }}>{HOSTAYY_CONFIG.contactName}</strong>
                  <span style={{ fontSize: '12px', color: '#fed7aa', fontWeight: 600 }}>Founder &amp; Chief Hospitality Operator</span>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-phone" style={{ color: '#ea580c' }}></i>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>
                    {HOSTAYY_CONFIG.displayPhone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-envelope" style={{ color: '#ea580c' }}></i>
                <a href={`mailto:${HOSTAYY_CONFIG.email}`} style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: 600 }}>
                  {HOSTAYY_CONFIG.email}
                </a>
              </div>

              <div style={{ marginTop: '16px' }}>
                <a 
                  href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out from the website footer to inquire about monthly stay rates near Yashobhoomi." })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thm-btn footer-wa-btn"
                  style={{ padding: '10px 18px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ea580c', color: '#ffffff', borderColor: '#ea580c', fontWeight: 800, borderRadius: '6px' }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '15px', color: '#ffffff' }}></i>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="site-footer-two__bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '22px', marginTop: '6px' }}>
          <div className="row" style={{ alignItems: 'center', width: '100%', margin: 0 }}>
            <div className="col-12 col-md-6 footer-bottom-left" style={{ padding: 0 }}>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#ffffff', fontWeight: 500, lineHeight: 1.6 }}>
                &copy; {new Date().getFullYear()} Hostayy Hospitality. All rights reserved. Serviced Apartments near Yashobhoomi IICC &amp; Delhi NCR.
              </p>
            </div>
            <div className="col-12 col-md-6 footer-bottom-right" style={{ padding: 0 }}>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#ffffff', fontWeight: 500, lineHeight: 1.6 }}>
                Managed by Mohit Chaudhary &bull; Zero Brokerage Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
