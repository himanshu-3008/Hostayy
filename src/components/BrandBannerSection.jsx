'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink } from '../data/properties';

export default function BrandBannerSection() {
  const handleWhatsAppInquiry = () => {
    const msg = "Hi Hostayy, I love the '(feel like home)' philosophy. I'd like to inquire about booking a 1, 2, or 3 BHK serviced apartment for an extended / monthly stay near Yashobhoomi.";
    window.open(getHostayyWhatsAppLink(msg), '_blank');
  };

  return (
    <section className="brand-experience-section" style={{ padding: '50px 0 35px', backgroundColor: '#fdfbf9', position: 'relative' }}>
      <div className="container">
        <div 
          className="brand-experience-card"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e8e2dc',
            boxShadow: '0 20px 60px rgba(25, 22, 40, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Left Column: Official Hostayy Brand Banner Artwork */}
          <div 
            className="brand-experience-visual"
            style={{
              flex: '1 1 500px',
              backgroundColor: '#fff7f7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(255, 77, 77, 0.22)',
                border: '3px solid #ffffff'
              }}
            >
              <img 
                src="/assets/images/hostayy-banner.png" 
                alt="Hostayy (feel like home) Brand Banner" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            <div 
              style={{
                marginTop: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#ffffff',
                padding: '8px 18px',
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                border: '1px solid rgba(185, 156, 135, 0.3)'
              }}
            >
              <img 
                src="/assets/images/hostayy-logo-transparent.png" 
                alt="Hostayy Logo" 
                style={{ width: '22px', height: '22px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#191628', letterSpacing: '0.04em' }}>
                hostayy <span style={{ color: '#FF4D4D', fontStyle: 'italic', fontWeight: 600 }}>(feel like home)</span>
              </span>
            </div>
          </div>

          {/* Right Column: Brand Philosophy & Long-Stay Booking */}
          <div 
            className="brand-experience-content"
            style={{
              flex: '1 1 450px'
            }}
          >
            <div className="section-title text-left sec-title-animation" style={{ marginBottom: '22px' }}>
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">The Hostayy Philosophy</span>
              </div>
              <h2 className="section-title__title brand-experience-title" style={{ lineHeight: '1.25' }}>
                Every Stay Should Truly <br />
                <span>Feel Like Home.</span>
              </h2>
            </div>

            <p style={{ fontSize: '15.5px', color: 'var(--hotelux-gray)', lineHeight: '1.75', marginBottom: '25px' }}>
              True hospitality is more than a room — it is the comforting peace of an entire residence where you can cook your own meals, work seamlessly on high-speed mesh Wi-Fi, and rest with total privacy. From corporate assignments near Yashobhoomi IICC to extended family visits, Hostayy blends genuine home warmth with five-star hotel care.
            </p>

            {/* Value Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff0f0', border: '1px solid #ffd4d4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF4D4D', flexShrink: 0, marginTop: '2px' }}>
                  <i className="fas fa-home" style={{ fontSize: '15px' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 3px', fontSize: '16px', color: '#191628', fontWeight: 700 }}>100% Private Serviced Apartments</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#686a78', lineHeight: '1.5' }}>Independent 1, 2, and 3 BHK apartments with private modular kitchens, dedicated work desks, and quiet bedrooms.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', flexShrink: 0, marginTop: '2px' }}>
                  <i className="fas fa-concierge-bell" style={{ fontSize: '15px' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 3px', fontSize: '16px', color: '#191628', fontWeight: 700 }}>24/7 Dedicated Concierge &amp; Care</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#686a78', lineHeight: '1.5' }}>Personalized welcomes, regular housekeeping, grocery pre-stocking assistance, and 3-minute transit to Yashobhoomi IICC.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', flexShrink: 0, marginTop: '2px' }}>
                  <i className="fas fa-percentage" style={{ fontSize: '15px' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 3px', fontSize: '16px', color: '#191628', fontWeight: 700 }}>Zero Brokerage &amp; Direct Monthly Quotations</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#686a78', lineHeight: '1.5' }}>Save on broker fees and OTA surcharges with direct transparent monthly lease quotations and official GST invoices.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={handleWhatsAppInquiry} 
                className="thm-btn-wa"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i>
                <span>Request Long-Stay Quote</span>
              </button>
              <a href="#room" className="thm-btn">
                <span>View All 1, 2 &amp; 3 BHK Stays</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
