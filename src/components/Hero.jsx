'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink } from '../data/properties';

export default function Hero({ onSelectStay }) {
  const [moveInDate, setMoveInDate] = useState('');
  const [stayDuration, setStayDuration] = useState('1 - 3 Months (Corporate Monthly)');
  const [selectedProperty, setSelectedProperty] = useState('Velora (1-BHK Luxury Suite · 3 mins Yashobhoomi)');
  const [teamCount, setTeamCount] = useState('1 - 2 Guests / Solo Executive');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    window.open(getGuestWhatsAppLink({
      property: selectedProperty,
      moveInDate: moveInDate || 'Flexible / Immediate',
      duration: stayDuration,
      guests: teamCount,
      purpose: 'Long-term / monthly serviced stay near Yashobhoomi IICC'
    }), '_blank');
  };

  const handleRoomClick = (id) => {
    if (onSelectStay) {
      onSelectStay(id);
      const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hotelux Banner One */}
      <section className="banner-one" id="home">
        {/* Hotelux Decorative Shapes */}
        <div className="banner-one__shape-1">
          <img src="/assets/images/hotelux/shapes_banner-one-shape-1.png" alt="" />
        </div>
        <div className="banner-one__shape-2">
          <img src="/assets/images/hotelux/shapes_banner-one-shape-2.png" alt="" />
        </div>

        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            {/* Left Content Column */}
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="banner-one__content-box">
                <div className="banner-one__sub-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <img 
                      src="/assets/images/hostayy-logo-transparent.png" 
                      alt="Hostayy" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                  <span><strong>hostayy</strong> <em style={{ color: '#FF4D4D', fontStyle: 'italic', fontWeight: 600 }}>(feel like home)</em> &bull; Instant Flat Booking &bull; 0% Brokerage</span>
                </div>

                <h1 className="banner-one__title">
                  Book 1, 2 &amp; 3 BHK <span>Serviced Flats Near Yashobhoomi (IICC)</span> With Zero Brokerage.
                </h1>

                <p className="banner-one__text">
                  Handcrafted private serviced apartments in Dwarka Sector 23, just 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Fully furnished with modern modular kitchens, 300 Mbps Wi-Fi, sanitized hotel-grade bedding, and instant WhatsApp booking with Superhost Mohit Chaudhary.
                </p>

                {/* Hotelux Action Buttons */}
                <div className="banner-one__btn-and-review-box">
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <a href="#room" className="thm-btn">
                      <span>Explore 1, 2 &amp; 3 BHK Stays</span>
                      <i className="fa-solid fa-arrow-down" style={{ fontSize: '12px' }}></i>
                    </a>
                    <a 
                      href={getGuestWhatsAppLink({ message: "Hello Mohit, I want to book a serviced flat near Yashobhoomi IICC with Hostayy." })} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="thm-btn thm-btn-wa"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>Instant WhatsApp Booking</span>
                    </a>
                  </div>

                  {/* Clean Host Trust Strip */}
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13px' }}>
                    <i className="fa-solid fa-award" style={{ color: 'var(--hotelux-base)', fontSize: '15px' }}></i>
                    <span><strong>4.98 ★ Superhost</strong> &bull; Serving Yashobhoomi Delegates &amp; Corporate Expats</span>
                  </div>
                </div>

                {/* Long-Stay Privileges & Landmarks Strip */}
                <div className="banner-ota-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginTop: '20px' }}>
                  <span className="banner-ota-label" style={{ fontWeight: 700, color: 'var(--hotelux-base)' }}>Key Landmarks:</span>
                  <span className="banner-ota-pill" style={{ pointerEvents: 'none' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#FF4D4D' }}></i> 3 Mins to Yashobhoomi IICC
                  </span>
                  <span className="banner-ota-pill" style={{ pointerEvents: 'none' }}>
                    <i className="fa-solid fa-plane-departure" style={{ color: '#3B82F6' }}></i> 10 Mins to IGI Airport (T3)
                  </span>
                  <span className="banner-ota-pill" style={{ pointerEvents: 'none' }}>
                    <i className="fa-solid fa-train-subway" style={{ color: '#10B981' }}></i> 5 Mins to Metro Sector 21
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Residences Overview Card (Zero photos on home page, photos appear on click) */}
            <div className="col-12 col-lg-6 col-xl-6">
              <div 
                className="hero-residences-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '16px',
                  padding: '30px 24px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '14px' }}>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--hotelux-base)', fontWeight: 800, display: 'block' }}>
                      CURATED FLATS FOR EXTENDED STAYS
                    </span>
                    <h3 style={{ margin: '2px 0 0', fontSize: '20px', color: '#ffffff', fontFamily: 'var(--hotelux-font-two)' }}>
                      Click Room to View Photos
                    </h3>
                  </div>
                  <span style={{ fontSize: '11.5px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '4px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    <i className="fa-solid fa-circle-check"></i> Available Now
                  </span>
                </div>

                {/* 3 Room Options with Click Trigger */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {/* Velora 1 BHK */}
                  <div 
                    onClick={() => handleRoomClick('velora')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="hero-room-option-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(185, 156, 135, 0.2)', border: '1px solid var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hotelux-base)', fontSize: '16px', flexShrink: 0 }}>
                        <i className="fa-solid fa-door-open"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: '#ffffff', fontWeight: 700 }}>
                          Velora Suite &bull; 1 BHK
                        </h4>
                        <span style={{ fontSize: '12px', color: '#cbd5e1' }}>
                          3 Mins to Yashobhoomi IICC &bull; 750 Sq Ft &bull; Private Kitchen
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#FF4D4D', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <span>View Photos</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px' }}></i>
                    </span>
                  </div>

                  {/* Azura 2 BHK */}
                  <div 
                    onClick={() => handleRoomClick('azura')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="hero-room-option-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(185, 156, 135, 0.2)', border: '1px solid var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hotelux-base)', fontSize: '16px', flexShrink: 0 }}>
                        <i className="fa-solid fa-building"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: '#ffffff', fontWeight: 700 }}>
                          Azura Residence &bull; 2 BHK
                        </h4>
                        <span style={{ fontSize: '12px', color: '#cbd5e1' }}>
                          Aerocity Corridor &bull; 1,250 Sq Ft &bull; Modular Kitchen &amp; Balcony
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#FF4D4D', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <span>View Photos</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px' }}></i>
                    </span>
                  </div>

                  {/* Verde 3 BHK */}
                  <div 
                    onClick={() => handleRoomClick('verde')}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      padding: '14px 16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="hero-room-option-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(185, 156, 135, 0.2)', border: '1px solid var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--hotelux-base)', fontSize: '16px', flexShrink: 0 }}>
                        <i className="fa-solid fa-gem"></i>
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: '#ffffff', fontWeight: 700 }}>
                          Verde Signature &bull; 3 BHK
                        </h4>
                        <span style={{ fontSize: '12px', color: '#cbd5e1' }}>
                          Prime Golf Belt &bull; 1,850 Sq Ft &bull; 3 Private En-Suite Bedrooms
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#FF4D4D', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <span>View Photos</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px' }}></i>
                    </span>
                  </div>
                </div>

                {/* Instant Action Button */}
                <a 
                  href="#room" 
                  className="thm-btn"
                  style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: '13px' }}
                >
                  <i className="fa-solid fa-door-open"></i>
                  <span>View All 1, 2 &amp; 3 BHK Flats</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal OYO-Style Flat Search & Instant Booking Bar */}
      <div className="container">
        <div className="about-two__booking">
          <form onSubmit={handleBookingSubmit}>
            <div className="row" style={{ alignItems: 'flex-end' }}>
              <div className="col-12 col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__left">
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16a34a', fontWeight: 800, display: 'block' }}>
                    <i className="fa-solid fa-circle-check"></i> Instant Booking
                  </span>
                  <h3 className="about-two-booking__title" style={{ fontSize: '18px', margin: '2px 0 0' }}>Search Flats</h3>
                  <span style={{ fontSize: '12px', color: 'var(--hotelux-base)', fontWeight: 600 }}>0% Brokerage &bull; Direct Host</span>
                </div>
              </div>

              {/* City / Location */}
              <div className="col-12 col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#191628', fontWeight: 700, marginBottom: '4px' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#FF4D4D', marginRight: '4px' }}></i> Location / Hub
                  </label>
                  <div style={{ padding: '11px 14px', border: '1px solid #e2dcd5', borderRadius: '6px', background: '#faf8f5', fontSize: '13px', fontWeight: 600, color: '#191628' }}>
                    Dwarka Sector 23 (IICC)
                  </div>
                </div>
              </div>

              {/* Move-in Date Picker */}
              <div className="col-12 col-xl-2 col-lg-2 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#191628', fontWeight: 700, marginBottom: '4px' }}>
                    <i className="fa-solid fa-calendar-days" style={{ color: 'var(--hotelux-base)', marginRight: '4px' }}></i> Move-in Date
                  </label>
                  <input 
                    type="date" 
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2dcd5', borderRadius: '6px', fontSize: '13px', background: '#ffffff', color: '#191628' }}
                  />
                </div>
              </div>

              {/* Stay Duration / Term */}
              <div className="col-12 col-xl-2 col-lg-2 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#191628', fontWeight: 700, marginBottom: '4px' }}>
                    <i className="fa-solid fa-clock" style={{ color: 'var(--hotelux-base)', marginRight: '4px' }}></i> Stay Duration
                  </label>
                  <select 
                    value={stayDuration}
                    onChange={(e) => setStayDuration(e.target.value)}
                    style={{ width: '100%', padding: '11px 12px', border: '1px solid #e2dcd5', borderRadius: '6px', fontSize: '13px', background: '#ffffff', color: '#191628' }}
                  >
                    <option value="1 - 3 Months (Corporate Monthly)">1 - 3 Months (Corporate)</option>
                    <option value="3 - 6 Months (Extended Project)">3 - 6 Months (Extended)</option>
                    <option value="6 - 12 Months (Long Term Lease)">6 - 12 Months (Long Term)</option>
                    <option value="15 - 30 Days (Exhibition / Event)">15 - 30 Days (Exhibition)</option>
                    <option value="Weekly (7 - 14 Days)">Weekly (7 - 14 Days)</option>
                  </select>
                </div>
              </div>

              {/* Flat Selection */}
              <div className="col-12 col-xl-2 col-lg-2 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#191628', fontWeight: 700, marginBottom: '4px' }}>
                    <i className="fa-solid fa-door-open" style={{ color: 'var(--hotelux-base)', marginRight: '4px' }}></i> Flat / BHK
                  </label>
                  <select 
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    style={{ width: '100%', padding: '11px 12px', border: '1px solid #e2dcd5', borderRadius: '6px', fontSize: '13px', background: '#ffffff', color: '#191628' }}
                  >
                    <option value="Velora (1-BHK Luxury Suite · 3 mins Yashobhoomi)">Velora (1 BHK Suite)</option>
                    <option value="Azura (2-BHK Executive · Aerocity Corridor)">Azura (2 BHK Executive)</option>
                    <option value="Verde (3-BHK Signature · Prime Golf Belt)">Verde (3 BHK Signature)</option>
                    <option value="All Configurations (Explore 1, 2 & 3 BHK)">All Configurations</option>
                  </select>
                </div>
              </div>

              {/* Search & Book CTA Button */}
              <div className="col-12 col-xl-2 col-lg-12 col-md-6">
                <div className="about-two-booking__btn-box">
                  <button type="submit" className="thm-btn" style={{ width: '100%', height: '48px', padding: '0 16px', fontSize: '13px', justifyContent: 'center' }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '15px' }}></i>
                    <span>Search &amp; Book</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* OYO-Style Quick Filter Pills */}
        <div 
          className="quick-filter-scroll" 
          style={{ 
            display: 'flex', 
            gap: '10px', 
            overflowX: 'auto', 
            padding: '16px 0 6px', 
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <a href="#room" onClick={() => onSelectStay && onSelectStay(null)} className="quick-filter-chip">
            <i className="fa-solid fa-layer-group"></i> All Residences
          </a>
          <a href="#room" onClick={() => handleRoomClick('velora')} className="quick-filter-chip">
            <i className="fa-solid fa-door-open"></i> 1 BHK Suite (Velora)
          </a>
          <a href="#room" onClick={() => handleRoomClick('azura')} className="quick-filter-chip">
            <i className="fa-solid fa-building"></i> 2 BHK Executive (Azura)
          </a>
          <a href="#room" onClick={() => handleRoomClick('verde')} className="quick-filter-chip">
            <i className="fa-solid fa-gem"></i> 3 BHK Signature (Verde)
          </a>
          <a href="#why-choose" className="quick-filter-chip">
            <i className="fa-solid fa-location-dot" style={{ color: '#ef4444' }}></i> 3 Mins to Yashobhoomi IICC
          </a>
          <span className="quick-filter-chip" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#a7f3d0' }}>
            <i className="fa-solid fa-shield-virus"></i> Sanitised Stays
          </span>
          <span className="quick-filter-chip" style={{ background: '#fef3c7', color: '#b45309', borderColor: '#fde68a' }}>
            <i className="fa-solid fa-badge-percent"></i> 0% Brokerage
          </span>
        </div>

        {/* OYO-Style Consumer Assurance Trust Bar */}
        <div 
          className="oyo-trust-bar" 
          style={{ 
            marginTop: '22px', 
            background: '#ffffff', 
            border: '1px solid #e2dcd5', 
            borderRadius: '12px', 
            padding: '16px 20px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '16px',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#191628' }}>Sanitised Stays</strong>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Hospital-grade hygiene &amp; fresh linens</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-kitchen-set"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#191628' }}>Private Kitchens</strong>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Cook your own meals with gas &amp; RO</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-wifi"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#191628' }}>300 Mbps Wi-Fi</strong>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Optical mesh fiber &amp; work desks</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#191628' }}>Zero Brokerage</strong>
              <span style={{ fontSize: '11px', color: '#64748b' }}>No 15-day broker fee or OTA fee</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#191628' }}>GST Corporate Billing</strong>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Tax credit invoices for business</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
