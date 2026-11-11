'use client';

import React from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function Footer({ onSelectStay }) {
  return (
    <footer className="site-footer-two">
      <div className="container">
        <div className="site-footer-two__top">
          <div className="row">
            {/* Column 1: Brand Info & Badges */}
            <div className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
              <a href="#home" className="brand-logo-hotelux" style={{ marginBottom: '20px', display: 'inline-flex', textDecoration: 'none' }}>
                <div className="brand-emblem-wrap" style={{ backgroundColor: '#ffffff', borderRadius: '50%', padding: '6px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src="/assets/images/hostayy-logo-transparent.png" 
                    alt="Hostayy Logo" 
                    className="brand-logo-img"
                  />
                </div>
                <div className="brand-text-hotelux">
                  <h2 style={{ color: '#ffffff' }}>hostayy</h2>
                  <span className="brand-slogan" style={{ color: '#fed7aa' }}>(feel like home)</span>
                </div>
              </a>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#c4c2cb', marginBottom: '20px' }}>
                Curated 1, 2, and 3 BHK serviced apartments located 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Managed with five-star turnkey hotel operations and zero brokerage for long-term and corporate monthly stays.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'rgba(234, 88, 12, 0.2)', border: '1px solid #ea580c', padding: '5px 12px', color: '#ea580c', fontWeight: 700 }}>
                  <i className="fa-solid fa-award" style={{ marginRight: '5px' }}></i> Superhost Hospitality 4.98★
                </span>
                <span style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '5px 12px', color: '#ffffff', fontWeight: 600 }}>
                  <i className="fa-solid fa-shield-halved" style={{ marginRight: '5px' }}></i> 0% Brokerage
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-xl-2 col-lg-2 col-md-6" style={{ marginBottom: '30px' }}>
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#room">Book Serviced Flats</a></li>
                <li><a href="#services">Services &amp; Amenities</a></li>
                <li><a href="#why-choose">Why Hostayy</a></li>
                <li><a href="#patron" style={{ color: '#ea580c', fontWeight: 700 }}>Hostayy Patron (List Property)</a></li>
                <li><a href="#contact">Contact &amp; Quotations</a></li>
              </ul>
            </div>

            {/* Column 3: Our Residences */}
            <div className="col-xl-3 col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <h4 className="footer-widget-title">Residences Near Yashobhoomi</h4>
              <ul className="footer-links-list">
                {HOSTAYY_PROPERTIES.map(prop => (
                  <li key={prop.id}>
                    <a 
                      href="#room" 
                      onClick={(e) => {
                        if (onSelectStay) onSelectStay(prop.id);
                      }}
                    >
                      {prop.name} ({prop.bhk})
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--hotelux-base)', display: 'block', marginBottom: '6px' }}>
                    <i className="fa-solid fa-location-dot" style={{ marginRight: '6px' }}></i> Prime Connectivity
                  </span>
                  <span style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, display: 'block' }}>
                    3 mins to Yashobhoomi IICC • 10 mins to IGI Airport (T3)
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Official Host Contact */}
            <div className="col-xl-3 col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <h4 className="footer-widget-title">Official Contact</h4>
              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-user-tie"></i>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '15px' }}>{HOSTAYY_CONFIG.contactName}</strong>
                  <span style={{ fontSize: '12px', color: 'var(--hotelux-base)' }}>Founder &amp; Chief Hospitality Operator</span>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-phone"></i>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} style={{ color: '#ffffff', fontSize: '14px', fontWeight: 600 }}>
                    {HOSTAYY_CONFIG.displayPhone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-envelope"></i>
                <a href={`mailto:${HOSTAYY_CONFIG.email}`} style={{ color: '#c4c2cb', fontSize: '13.5px' }}>
                  {HOSTAYY_CONFIG.email}
                </a>
              </div>

              <div style={{ marginTop: '16px' }}>
                <a 
                  href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out from the website footer to inquire about monthly stay rates near Yashobhoomi." })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thm-btn thm-btn-wa"
                  style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-flex' }}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="site-footer-two__bottom">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col-md-6">
              <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
                &copy; {new Date().getFullYear()} Hostayy Hospitality. All rights reserved. Serviced Apartments near Yashobhoomi IICC &amp; Delhi NCR.
              </p>
            </div>
            <div className="col-md-6" style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
                Managed by Mohit Chaudhary &bull; Zero Brokerage Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
