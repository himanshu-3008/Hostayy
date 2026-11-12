'use client';

import React from 'react';
import { HOSTAYY_PROPERTIES, HOSTAYY_CONFIG, getGuestWhatsAppLink } from '../data/properties';
import PropertyCard from './PropertyCard';
import StayShowcase from './StayShowcase';

export default function StaysSection({ selectedStayId, setSelectedStayId, onOpenModal, onOpenLightbox }) {
  const activeProp = HOSTAYY_PROPERTIES.find(p => p.id === selectedStayId);

  const handleSelectStay = (id) => {
    setSelectedStayId(id);
    if (id) {
      setTimeout(() => {
        const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <section className="our-rooms-two ambient-glow-wrapper luxury-grid-bg" id="room" style={{ backgroundColor: '#ffffff', padding: '65px 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <div className="section-title text-center" style={{ marginBottom: '32px' }}>
          <div className="section-title__tagline-box">
            <span 
              className="section-title__tagline" 
              style={{ 
                color: '#ea580c', 
                fontWeight: 800, 
                letterSpacing: '0.08em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 247, 237, 0.95)',
                padding: '7px 18px',
                borderRadius: '30px',
                border: '1.5px solid #fed7aa',
                boxShadow: '0 4px 12px rgba(234, 88, 12, 0.08)'
              }}
            >
              <span className="pulse-dot-orange"></span>
              12 VERIFIED HD PHOTOS &bull; CLICK ANY SUITE FOR INTERACTIVE TOUR
            </span>
          </div>
          <h2 className="section-title__title" style={{ color: '#111827', fontSize: '34px', margin: '10px 0 12px', fontWeight: 800 }}>
            1, 2 &amp; 3 BHK <span style={{ color: '#ea580c' }}>Serviced Residences</span>
          </h2>
          <p className="section-title__text" style={{ maxWidth: '740px', margin: '0 auto', color: '#374151', fontSize: '15px', lineHeight: 1.7 }}>
            Sanitised, 100% private turnkey residences located 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Fully equipped with modular kitchens, 300 Mbps Wi-Fi, work desks, and instant WhatsApp booking with zero brokerage. Click any room option below to explore verified photos and floor specifications.
          </p>

          {/* Prominent Physical Address Strip with Verified Concierge Badge */}
          <div style={{ marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fffaf5', border: '1.5px solid #fed7aa', padding: '8px 18px', borderRadius: '30px', fontSize: '13px', color: '#111827', boxShadow: '0 2px 8px rgba(234, 88, 12, 0.06)', flexWrap: 'wrap', justifyContent: 'center' }}>
              <i className="fa-solid fa-map-location-dot" style={{ color: '#ea580c', fontSize: '15px' }}></i>
              <span><strong>Official Address:</strong> {HOSTAYY_CONFIG.address}</span>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(HOSTAYY_CONFIG.address)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#ea580c', fontWeight: 800, marginLeft: '4px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i> View Map
              </a>
            </div>
            <span className="badge-float" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#ecfdf5', color: '#16a34a', border: '1px solid #a7f3d0', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>
              <i className="fa-solid fa-circle-check"></i> Superhost Verified Premises
            </span>
          </div>
        </div>

        {/* Room Option Filter Tabs */}
        <div className="our-rooms-filter-wrap" style={{ marginBottom: '36px' }}>
          <div className="our-rooms-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === null ? 'active' : ''}`}
              onClick={() => setSelectedStayId(null)}
              style={{ transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <i className="fa-solid fa-layer-group" style={{ marginRight: '6px' }}></i> All Residences (3)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'velora' ? 'active' : ''}`}
              onClick={() => handleSelectStay('velora')}
              style={{ transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <i className="fa-solid fa-door-open" style={{ marginRight: '6px' }}></i> 1 BHK Suite (Velora &bull; 3 Mins Yashobhoomi)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'azura' ? 'active' : ''}`}
              onClick={() => handleSelectStay('azura')}
              style={{ transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i> 2 BHK Residence (Azura &bull; Aerocity Corridor)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'verde' ? 'active' : ''}`}
              onClick={() => handleSelectStay('verde')}
              style={{ transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <i className="fa-solid fa-gem" style={{ marginRight: '6px' }}></i> 3 BHK Signature (Verde &bull; Prime Golf Belt)
            </button>
          </div>
        </div>

        {/* Dynamic Photo Luxury Showcase Container (Appears when room option is clicked) */}
        {activeProp && (
          <div id="stay-showcase-container" style={{ marginBottom: '45px', scrollMarginTop: '100px' }}>
            <StayShowcase 
              prop={activeProp} 
              onOpenLightbox={onOpenLightbox} 
              onClose={() => setSelectedStayId(null)} 
            />
          </div>
        )}

        {/* 3-Property Card Grid (1 BHK, 2 BHK, 3 BHK) */}
        <div className="row">
          {HOSTAYY_PROPERTIES.map(prop => (
            <div key={prop.id} className="col-12 col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
              <PropertyCard 
                prop={prop} 
                onSelectStay={handleSelectStay}
                onOpenModal={onOpenModal}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          ))}
        </div>

        {/* Corporate & Long-Term Extended Stay Privileges Banner */}
        <div 
          className="corporate-privileges-banner luxury-glass-card"
          style={{ 
            borderRadius: '16px',
            padding: '36px 28px',
            marginTop: '20px', 
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(234, 88, 12, 0.07)'
          }}
        >
          <div style={{ marginBottom: '10px' }}>
            <span style={{ fontSize: '11px', background: '#fff7ed', color: '#ea580c', border: '1px solid #fed7aa', padding: '4px 12px', borderRadius: '20px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Corporate &amp; Relocation Privileges
            </span>
          </div>
          <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '24px', marginBottom: '10px', color: '#111827', fontWeight: 800 }}>
            Exhibition Delegates, Expat Relocations &amp; Extended Corporate Stays
          </h3>
          <p style={{ color: '#374151', fontSize: '14.5px', maxWidth: '720px', margin: '0 auto 20px', lineHeight: 1.65 }}>
            Attending an exhibition or conference at Yashobhoomi (IICC)? Relocating to Delhi NCR? Hostayy offers flexible monthly and multi-month serviced apartments with zero brokerage, GST input credit, daily housekeeping, and 24/7 dedicated host assistance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out directly for a long-term / monthly serviced stay quotation near Yashobhoomi IICC." })} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-wa" 
              style={{ padding: '12px 24px', fontSize: '13px' }}
              title="Direct WhatsApp with Mohit"
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
              <span>Request Long-Term Quotation on WhatsApp</span>
            </a>
            <a 
              href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
              className="thm-btn thm-btn-outline" 
              style={{ padding: '12px 22px', fontSize: '13px', borderColor: '#ea580c', color: '#ea580c', background: '#ffffff', fontWeight: 700 }}
            >
              <i className="fa-solid fa-phone" style={{ marginRight: '6px' }}></i>
              <span>Call Host: {HOSTAYY_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
