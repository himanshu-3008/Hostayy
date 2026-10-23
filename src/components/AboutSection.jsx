'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink } from '../data/properties';

export default function AboutSection() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText(HOSTAYY_CONFIG.displayPhone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(() => {});
  };

  return (
    <section className="about-two" id="about">
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          {/* Left Column: Hotelux Image Frame with Gold Experience Badge */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-two__left">
              <div className="about-two__img-box">
                <div className="about-two__img">
                  <img src="/assets/images/hotelux/resources_about-two-img-1.jpg" alt="Hostayy Luxury Estate" />
                </div>
                <div className="about-two__experience">
                  <h3>4.98★</h3>
                  <p>Verified Superhost<br /> Hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hotelux Story, Points & Host Profile */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-two__right">
              <div className="section-title text-left" style={{ marginBottom: '20px' }}>
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">ABOUT HOSTAYY</span>
                </div>
                <h2 className="section-title__title">
                  Discover A Sanctuary Of Discretion And Luxury In <span>Delhi NCR</span>
                </h2>
              </div>

              <p style={{ fontSize: '15.5px', color: 'var(--hotelux-gray)', lineHeight: '1.7', marginBottom: '16px' }}>
                Hostayy was born out of a clear realization: Delhi travelers deserve residences that feel warm and genuine, while property owners deserve a trustworthy partner who operates their property like a serious luxury business.
              </p>

              <p style={{ fontSize: '15.5px', color: 'var(--hotelux-gray)', lineHeight: '1.7' }}>
                Standard hotels are cramped and impersonal for family wedding parties and executive delegations. Unmanaged vacation rentals suffer from inconsistent hygiene and delayed service. Hostayy bridges the gap with handcrafted private residences paired with five-star hotel care.
              </p>

              {/* Hotelux Bullet Points */}
              <div className="about-two__points">
                <div className="about-two__point-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span><strong>Aesthetic Distinction:</strong> Velora 6-BHK Cinema Villa, Verde 8-BHK Pool Estate, Azura 4-BHK Penthouse.</span>
                </div>
                <div className="about-two__point-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span><strong>Direct VIP Pricing:</strong> Guaranteed 10–15% lower rates than Airbnb & Booking.com with 0% platform surcharge.</span>
                </div>
                <div className="about-two__point-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span><strong>Turnkey Hospitality:</strong> Strict Aadhaar guest screening, 24/7 dedicated concierge, and hospital-grade housekeeping.</span>
                </div>
              </div>

              {/* Host Profile Card (Mohit Chaudhary) */}
              <div className="about-host-box">
                <div className="about-host-avatar">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className="about-host-info">
                  <strong>{HOSTAYY_CONFIG.contactName}</strong>
                  <span>Founder & Chief Hospitality Operator</span>
                  <div style={{ fontSize: '12.5px', color: 'var(--hotelux-gray)', marginTop: '3px' }}>
                    <a href={`mailto:${HOSTAYY_CONFIG.email}`} style={{ color: 'var(--hotelux-base)', fontWeight: 600 }}>
                      <i className="fa-solid fa-envelope" style={{ marginRight: '5px' }}></i>{HOSTAYY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="about-host-contact">
                  <a 
                    href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`} 
                    className="thm-btn thm-btn-outline"
                    style={{ padding: '8px 16px', fontSize: '12px' }}
                    title="Call Mohit directly"
                  >
                    <i className="fa-solid fa-phone"></i>
                    <span>{HOSTAYY_CONFIG.displayPhone}</span>
                  </a>

                  <a 
                    href={getHostayyWhatsAppLink("Hi Mohit, I found Hostayy online and would like to connect.")} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="thm-btn thm-btn-wa"
                    style={{ padding: '8px 16px', fontSize: '12px' }}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>

                  <button 
                    type="button" 
                    onClick={copyPhone}
                    style={{ background: 'none', border: 'none', color: 'var(--hotelux-base)', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}
                    title="Copy phone number"
                  >
                    <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i> {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
