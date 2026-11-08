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
          {/* Left Column: Image Frame with Experience Badge */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-two__left">
              <div className="about-two__img-box">
                <div className="about-two__img">
                  <img src="/assets/images/hotelux/resources_about-two-img-1.jpg" alt="Hostayy Luxury Serviced Residence" />
                </div>
                <div className="about-two__experience">
                  <h3>4.98★</h3>
                  <p>Verified Superhost<br /> Hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Points */}
          <div className="col-xl-6 col-lg-6">
            <div className="about-two__right">
              <div className="section-title text-left" style={{ marginBottom: '20px' }}>
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">ABOUT HOSTAYY</span>
                </div>
                <h2 className="section-title__title">
                  Comfort Of Home, <span>Five-Star Service</span> Near Yashobhoomi (IICC)
                </h2>
              </div>

              <p style={{ fontSize: '15.5px', color: 'var(--hotelux-gray)', lineHeight: '1.7', marginBottom: '16px' }}>
                Hostayy was founded with a single mission: provide business travelers, exhibition delegates, and relocating families with premium residences that truly feel like home, while offering property owners a trusted, high-yield management partner in Delhi NCR.
              </p>

              <p style={{ fontSize: '15.5px', color: 'var(--hotelux-gray)', lineHeight: '1.7' }}>
                Standard hotels are cramped and lack self-catering kitchens for extended stays. Unmanaged apartments suffer from inconsistent cleanliness and delayed host support. Located just 3 to 10 minutes from the Yashobhoomi (IICC) Convention Centre and IGI Airport (T3), Hostayy provides turnkey 1, 2, and 3 BHK serviced apartments backed by 24/7 concierge care.
              </p>

              {/* Hotelux Bullet Points */}
              <div className="about-two__points">
                <div className="about-two__point-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span><strong>Curated Configurations:</strong> 1 BHK Luxury Suite, 2 BHK Executive Residence, and 3 BHK Signature Floor.</span>
                </div>
                <div className="about-two__point-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span><strong>Zero Brokerage &amp; Direct Quotations:</strong> Transparent monthly corporate billing with GST input credit and 0% agent commission.</span>
                </div>
                <div className="about-two__point-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span><strong>Turnkey Living Standard:</strong> Fully equipped modular kitchens, 300 Mbps mesh Wi-Fi, 100% power backup, and regular housekeeping.</span>
                </div>
              </div>

              {/* Host Profile Card (Mohit Chaudhary) */}
              <div className="about-host-box">
                <div className="about-host-avatar">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className="about-host-info">
                  <strong>{HOSTAYY_CONFIG.contactName}</strong>
                  <span>Founder &amp; Chief Hospitality Operator</span>
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
                    href={getHostayyWhatsAppLink("Hi Mohit, I found Hostayy online and would like to connect regarding a long-term serviced stay near Yashobhoomi.")} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="thm-btn thm-btn-wa"
                    style={{ padding: '8px 16px', fontSize: '12px' }}
                    title="Direct WhatsApp with Mohit"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
