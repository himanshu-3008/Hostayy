'use client';

import React from 'react';
import Link from 'next/link';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function Footer({ onSelectStay }) {
  return (
    <footer className="site-footer-two" style={{ backgroundColor: '#111827', color: '#ffffff' }}>
      <div className="container">
        <div className="site-footer-two__top">
          <div className="row">
            {/* Column 1: Brand Info & Badges */}
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 footer-col" style={{ marginBottom: '28px' }}>
              <Link href="/" className="brand-logo-hotelux" style={{ marginBottom: '18px', display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <div className="brand-emblem-wrap" style={{ backgroundColor: '#ffffff', borderRadius: '50%', padding: '4px', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 0 2.5px rgba(255, 255, 255, 0.85), 0 4px 16px rgba(0, 0, 0, 0.4)' }}>
                  <img 
                    src="/assets/images/hostayy-logo-transparent.png" 
                    alt="hostayy Logo" 
                    className="brand-logo-img"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="brand-text-hotelux">
                  <h2 style={{ color: '#ffffff', fontWeight: 900, margin: 0, fontSize: '28px', letterSpacing: '-0.03em', fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.5)', textTransform: 'lowercase' }}>hostayy</h2>
                </div>
              </Link>
              <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#ffffff', marginBottom: '18px', fontWeight: 400 }}>
                Curated 1, 2, and 3 BHK serviced apartments located 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Managed with five-star turnkey hotel operations and zero brokerage for long-term and corporate monthly stays.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'rgba(234, 56, 76, 0.25)', border: '1px solid #ea384c', padding: '5px 12px', color: '#ffffff', fontWeight: 700, borderRadius: '4px' }}>
                  <i className="fa-solid fa-award" style={{ marginRight: '6px', color: '#fecdd3' }}></i> Superhost Hospitality 4.98★
                </span>
                <span style={{ fontSize: '12px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '5px 12px', color: '#ffffff', fontWeight: 700, borderRadius: '4px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ marginRight: '6px', color: '#ffffff' }}></i> 0% Brokerage
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-12 col-md-6 col-lg-2 col-xl-2 footer-col" style={{ marginBottom: '28px' }}>
              <h4 className="footer-widget-title" style={{ color: '#ffffff', fontWeight: 700 }}>Pages &amp; Portals</h4>
              <ul className="footer-links-list">
                <li><Link href="/" style={{ color: '#ffffff', fontWeight: 500, textDecoration: 'none' }}>About hostayy (Home)</Link></li>
                <li><Link href="/book" style={{ color: '#fecdd3', fontWeight: 700, textDecoration: 'none' }}>Book Serviced Flats &rarr;</Link></li>
                <li><Link href="/list-property" style={{ color: '#ea384c', fontWeight: 700, textDecoration: 'none' }}>hostayy Patron (List Property) &rarr;</Link></li>
                <li><a href={`https://maps.google.com/?q=${encodeURIComponent(HOSTAYY_CONFIG.address)}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 500, textDecoration: 'none' }}>Dwarka Sector 23 Map</a></li>
                <li><a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} style={{ color: '#ffffff', fontWeight: 500, textDecoration: 'none' }}>Concierge Hotline</a></li>
              </ul>
            </div>

            {/* Column 3: Our Residences */}
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 footer-col" style={{ marginBottom: '28px' }}>
              <h4 className="footer-widget-title" style={{ color: '#ffffff', fontWeight: 700 }}>Residences Near Yashobhoomi</h4>
              <ul className="footer-links-list">
                {HOSTAYY_PROPERTIES.map(prop => (
                  <li key={prop.id}>
                    <Link 
                      href={`/book#${prop.id}`}
                      style={{ color: '#ffffff', fontWeight: 500, textDecoration: 'none' }}
                    >
                      {prop.name} ({prop.bhk})
                    </Link>
                  </li>
                ))}
                <li style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '12px', color: '#ea384c', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                    <i className="fa-solid fa-location-dot" style={{ marginRight: '6px', color: '#ea384c' }}></i> Prime Connectivity
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
                <i className="fa-solid fa-user-tie" style={{ color: '#ea384c' }}></i>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', fontSize: '15px', fontWeight: 700 }}>{HOSTAYY_CONFIG.contactName}</strong>
                  <span style={{ fontSize: '12px', color: '#fecdd3', fontWeight: 600 }}>Hospitality &amp; Property Operations</span>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-phone" style={{ color: '#ea384c' }}></i>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>
                    {HOSTAYY_CONFIG.displayPhone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item-hotelux">
                <i className="fa-solid fa-envelope" style={{ color: '#ea384c' }}></i>
                <a href={`mailto:${HOSTAYY_CONFIG.email}`} style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: 600 }}>
                  {HOSTAYY_CONFIG.email}
                </a>
              </div>

              <div style={{ marginTop: '16px' }}>
                <a 
                  href={getGuestWhatsAppLink({ message: "Hello hostayy, I'm reaching out from the website footer to inquire about monthly stay rates near Yashobhoomi." })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thm-btn footer-wa-btn"
                  style={{ padding: '10px 18px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ea384c', color: '#ffffff', borderColor: '#ea384c', fontWeight: 800, borderRadius: '6px' }}
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
                &copy; {new Date().getFullYear()} hostayy Hospitality. All rights reserved. Serviced Apartments near Yashobhoomi IICC &amp; Delhi NCR.
              </p>
            </div>
            <div className="col-12 col-md-6 footer-bottom-right" style={{ padding: 0 }}>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#ffffff', fontWeight: 500, lineHeight: 1.6 }}>
                Managed by hostayy Hospitality &bull; Zero Brokerage Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
