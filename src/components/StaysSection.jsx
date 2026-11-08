'use client';

import React from 'react';
import { HOSTAYY_PROPERTIES, HOSTAYY_CONFIG, getGuestWhatsAppLink } from '../data/properties';
import PropertyCard from './PropertyCard';
import StayShowcase from './StayShowcase';

export default function StaysSection({ selectedStayId, setSelectedStayId, onOpenModal, onOpenLightbox }) {
  const activeProp = HOSTAYY_PROPERTIES.find(p => p.id === selectedStayId);

  return (
    <section className="our-rooms-two" id="room">
      <div className="container">
        {/* Hotelux Section Title */}
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">SERVICED APARTMENTS NEAR YASHOBHOOMI (IICC)</span>
          </div>
          <h2 className="section-title__title">
            1, 2 &amp; 3 BHK <span>Furnished Long-Term Stays</span>
          </h2>
          <p className="section-title__text" style={{ maxWidth: '720px', margin: '14px auto 0' }}>
            Fully furnished luxury serviced apartments located in Dwarka Sector 23, just 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Fully equipped with modular kitchens, 300 Mbps mesh Wi-Fi, and 0% brokerage for monthly &amp; corporate leasing.
          </p>
        </div>

        {/* Hotelux Category Filter Tabs */}
        <div className="our-rooms-filter-wrap">
          <div className="our-rooms-tabs">
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === null ? 'active' : ''}`}
              onClick={() => setSelectedStayId(null)}
            >
              <i className="fa-solid fa-layer-group" style={{ marginRight: '6px' }}></i> All Residences (3)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'velora' ? 'active' : ''}`}
              onClick={() => setSelectedStayId('velora')}
            >
              <i className="fa-solid fa-door-open" style={{ marginRight: '6px' }}></i> 1 BHK Suite (Velora · 3 Mins Yashobhoomi)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'azura' ? 'active' : ''}`}
              onClick={() => setSelectedStayId('azura')}
            >
              <i className="fa-solid fa-building" style={{ marginRight: '6px' }}></i> 2 BHK Residence (Azura · Aerocity Corridor)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'verde' ? 'active' : ''}`}
              onClick={() => setSelectedStayId('verde')}
            >
              <i className="fa-solid fa-gem" style={{ marginRight: '6px' }}></i> 3 BHK Signature (Verde · Prime Golf Belt)
            </button>
          </div>
        </div>

        {/* Dynamic Photo Luxury Showcase Container */}
        {activeProp && (
          <div id="stay-showcase-container" style={{ marginBottom: '45px' }}>
            <StayShowcase 
              prop={activeProp} 
              onOpenLightbox={onOpenLightbox} 
              onClose={() => setSelectedStayId(null)} 
            />
          </div>
        )}

        {/* 3-Property Card Grid in Hotelux Layout (1 BHK, 2 BHK, 3 BHK) */}
        <div className="row">
          {HOSTAYY_PROPERTIES.map(prop => (
            <div key={prop.id} className="col-xl-4 col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
              <PropertyCard 
                prop={prop} 
                onSelectStay={(id) => setSelectedStayId(id)}
                onOpenModal={onOpenModal}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          ))}
        </div>

        {/* Corporate & Long-Term Extended Stay Privileges Banner */}
        <div 
          className="corporate-privileges-banner"
          style={{ 
            background: 'var(--hotelux-primary)', 
            border: '1px solid var(--hotelux-border)', 
            marginTop: '30px', 
            textAlign: 'center' 
          }}
        >
          <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '24px', marginBottom: '8px', color: 'var(--hotelux-black)' }}>
            Exhibition Delegates, Expat Relocations &amp; Extended Corporate Stays
          </h3>
          <p style={{ color: 'var(--hotelux-gray)', fontSize: '15px', maxWidth: '720px', margin: '0 auto 20px', lineHeight: '1.6' }}>
            Attending an exhibition or conference at Yashobhoomi (IICC)? Relocating to Delhi NCR? Hostayy offers flexible monthly and multi-month serviced apartments with zero brokerage, GST input credit, daily housekeeping, and 24/7 dedicated host assistance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out directly for a long-term / monthly serviced stay quotation near Yashobhoomi IICC." })} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-wa" 
              style={{ padding: '14px 28px', fontSize: '13px' }}
              title="Direct WhatsApp with Mohit"
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
              <span>Request Long-Term Quotation on WhatsApp</span>
            </a>
            <a 
              href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
              className="thm-btn thm-btn-outline" 
              style={{ padding: '14px 24px', fontSize: '13px' }}
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
