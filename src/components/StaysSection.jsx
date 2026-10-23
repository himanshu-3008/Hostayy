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
            <span className="section-title__tagline">OUR SIGNATURE RESIDENCES</span>
          </div>
          <h2 className="section-title__title">
            Our Rooms & <span>Suites</span>
          </h2>
          <p className="section-title__text" style={{ maxWidth: '680px', margin: '14px auto 0' }}>
            Handcrafted cinema villas, botanical farm retreats, and executive penthouses across South Delhi and Chhatarpur. Direct VIP bookings save 10–15% OTA commissions with zero platform surcharges.
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
              <i className="fa-solid fa-clapperboard" style={{ marginRight: '6px' }}></i> Velora (6 BHK • 17 Photos)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'verde' ? 'active' : ''}`}
              onClick={() => setSelectedStayId('verde')}
            >
              <i className="fa-solid fa-tree" style={{ marginRight: '6px' }}></i> Verde (8 BHK • 19 Photos)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${selectedStayId === 'azura' ? 'active' : ''}`}
              onClick={() => setSelectedStayId('azura')}
            >
              <i className="fa-solid fa-gem" style={{ marginRight: '6px' }}></i> Azura (4 BHK • 18 Photos)
            </button>
          </div>
        </div>

        {/* Dynamic 5-Photo Luxury Showcase Container */}
        {activeProp && (
          <div id="stay-showcase-container" style={{ marginBottom: '45px' }}>
            <StayShowcase 
              prop={activeProp} 
              onOpenLightbox={onOpenLightbox} 
              onClose={() => setSelectedStayId(null)} 
            />
          </div>
        )}

        {/* 3-Property Card Grid in Hotelux Layout */}
        <div className="row">
          {HOSTAYY_PROPERTIES.map(prop => (
            <div key={prop.id} className="col-xl-4 col-lg-4 col-md-6">
              <PropertyCard 
                prop={prop} 
                onSelectStay={(id) => setSelectedStayId(id)}
                onOpenModal={onOpenModal}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          ))}
        </div>

        {/* Verified Global OTA Badges Banner */}
        <div style={{ background: 'var(--hotelux-primary)', border: '1px solid var(--hotelux-border)', padding: '36px 30px', marginTop: '40px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '22px', marginBottom: '8px', color: 'var(--hotelux-black)' }}>
            Also Listed Across Major Global Booking Platforms
          </h3>
          <p style={{ color: 'var(--hotelux-gray)', fontSize: '14.5px', maxWidth: '660px', margin: '0 auto 20px' }}>
            Prefer booking through an Online Travel Agency? Our residences are active on Airbnb and Booking.com with verified guest reviews. For best rates without OTA platform fees, book directly with Mohit Chaudhary on WhatsApp.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a 
              href={HOSTAYY_CONFIG.bookingUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-outline" 
              style={{ padding: '12px 24px', fontSize: '12px' }}
              title="Open Hostayy on Booking.com"
            >
              <i className="fa-solid fa-hotel" style={{ color: '#003580', fontSize: '15px' }}></i>
              <span>Booking.com</span>
            </a>
            <a 
              href={HOSTAYY_CONFIG.airbnbVeloraUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-outline" 
              style={{ padding: '12px 24px', fontSize: '12px' }}
              title="Open Velora on Airbnb"
            >
              <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F', fontSize: '15px' }}></i>
              <span>Velora Airbnb</span>
            </a>
            <a 
              href={HOSTAYY_CONFIG.airbnbAzuraUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-outline" 
              style={{ padding: '12px 24px', fontSize: '12px' }}
              title="Open Azura on Airbnb"
            >
              <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F', fontSize: '15px' }}></i>
              <span>Azura Airbnb</span>
            </a>
            <a 
              href={getGuestWhatsAppLink({ message: "Hello Mohit, I'm reaching out directly to book with 0% OTA fees. Please share available dates and direct VIP rates." })} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-wa" 
              style={{ padding: '12px 24px', fontSize: '12px' }}
              title="Direct WhatsApp with Mohit"
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '15px' }}></i>
              <span>WhatsApp Direct VIP (Save 15%)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
