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
                  <span className="brand-slogan" style={{ color: '#FF6B6B' }}>(feel like home)</span>
                </div>
              </a>
              <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#c4c2cb', marginBottom: '20px' }}>
                Boutique private villas, botanical pool estates, and designer penthouses across Delhi NCR. Managed with five-star turnkey hotel operations and direct 0% OTA booking advantage.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'rgba(185, 156, 135, 0.15)', border: '1px solid var(--hotelux-base)', padding: '5px 12px', color: 'var(--hotelux-base)', fontWeight: 700 }}>
                  <i className="fa-solid fa-award" style={{ marginRight: '5px' }}></i> Airbnb Superhost 4.98★
                </span>
                <span style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '5px 12px', color: '#ffffff', fontWeight: 600 }}>
                  <i className="fa-solid fa-shield-halved" style={{ marginRight: '5px' }}></i> 100% Verified
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-xl-2 col-lg-2 col-md-6" style={{ marginBottom: '30px' }}>
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#room">Our Residences</a></li>
                <li><a href="#services">Services & Amenities</a></li>
                <li><a href="#calculator">Yield Calculator</a></li>
                <li><a href="#about">About Hostayy</a></li>
                <li><a href="#contact">Contact & Feasibility</a></li>
              </ul>
            </div>

            {/* Column 3: Our Residences & Direct OTA Redirects */}
            <div className="col-xl-3 col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
              <h4 className="footer-widget-title">Our Residences</h4>
              <ul className="footer-links-list">
                {HOSTAYY_PROPERTIES.map(prop => (
                  <li key={prop.id}>
                    <a 
                      href="#room" 
                      onClick={(e) => {
                        if (onSelectStay) onSelectStay(prop.id);
                      }}
                    >
                      {prop.name}
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <a href={HOSTAYY_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#93C5FD' }}>
                    <i className="fa-solid fa-hotel" style={{ marginRight: '8px', color: '#60A5FA' }}></i> Booking.com
                  </a>
                </li>
                <li>
                  <a href={HOSTAYY_CONFIG.airbnbVeloraUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FCA5A5' }}>
                    <i className="fa-brands fa-airbnb" style={{ marginRight: '8px', color: '#F87171' }}></i> Velora Airbnb
                  </a>
                </li>
                <li>
                  <a href={HOSTAYY_CONFIG.airbnbAzuraUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#FCA5A5' }}>
                    <i className="fa-brands fa-airbnb" style={{ marginRight: '8px', color: '#F87171' }}></i> Azura Airbnb
                  </a>
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
                  <span style={{ fontSize: '12px', color: 'var(--hotelux-base)' }}>Founder & Chief Hospitality Operator</span>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-phone"></i>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                    {HOSTAYY_CONFIG.displayPhone}
                  </a>
                  <a 
                    href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out from the website footer to book a luxury residence." })}
                    target="_blank"
                    rel="noreferrer"
                    className="top-bar-wa-badge"
                    title="Guest Booking WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Guest VIP
                  </a>
                  <a 
                    href={getOwnerWhatsAppLink({ location: "Delhi NCR", message: "Hello Mohit, I'm reaching out from the website footer to register my property with Hostayy." })}
                    target="_blank"
                    rel="noreferrer"
                    className="top-bar-wa-badge owner-badge"
                    title="Property Owner WhatsApp"
                    style={{ backgroundColor: '#191628', border: '1px solid var(--hotelux-base)', color: 'var(--hotelux-base)' }}
                  >
                    <i className="fa-solid fa-key"></i> List Property
                  </a>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-envelope"></i>
                <a href={`mailto:${HOSTAYY_CONFIG.email}`} style={{ color: 'var(--hotelux-base)', fontWeight: 600 }}>
                  {HOSTAYY_CONFIG.email}
                </a>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-location-dot"></i>
                <span>{HOSTAYY_CONFIG.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="site-footer-two__bottom">
          <p>
            © {new Date().getFullYear()} Hostayy Hospitality Private Limited. Contact: <a href="mailto:C.mohit@hostayy.com">C.mohit@hostayy.com</a> · +91 9217680108
          </p>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <a href="#home">Privacy Policy</a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <a href="#home">Terms of Service</a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <a href="#home">House Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
