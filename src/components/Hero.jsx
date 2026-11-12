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
      <section className="banner-one" id="home" style={{ backgroundColor: '#fcfbfa', padding: '60px 0 50px' }}>
        {/* Hotelux Decorative Shapes */}
        <div className="banner-one__shape-1">
          <img src="/assets/images/hotelux/shapes_banner-one-shape-1.png" alt="" />
        </div>
        <div className="banner-one__shape-2">
          <img src="/assets/images/hotelux/shapes_banner-one-shape-2.png" alt="" />
        </div>

        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            {/* Left Content Column with High Contrast Text */}
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="banner-one__content-box">
                <div className="banner-one__sub-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff7ed', border: '1px solid #fed7aa', padding: '5px 14px', borderRadius: '24px', marginBottom: '16px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                    <img 
                      src="/assets/images/hostayy-logo-transparent.png" 
                      alt="Hostayy" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                  <span style={{ fontSize: '12.5px', color: '#ea580c', fontWeight: 700 }}>
                    hostayy <em style={{ color: '#c2410c', fontStyle: 'italic', fontWeight: 600 }}>(feel like home)</em> &bull; Instant Flat Booking &bull; 0% Brokerage
                  </span>
                </div>

                <h1 className="banner-one__title" style={{ color: '#111827', fontSize: '38px', lineHeight: 1.2, fontWeight: 800, marginBottom: '16px' }}>
                  Book 1, 2 &amp; 3 BHK <span style={{ color: '#ea580c' }}>Serviced Flats Near Yashobhoomi (IICC)</span> With Zero Brokerage.
                </h1>

                <p className="banner-one__text" style={{ color: '#374151', fontSize: '15.5px', lineHeight: 1.75, marginBottom: '24px' }}>
                  Handcrafted private serviced apartments in Dwarka Sector 23, just 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Fully furnished with modern modular kitchens, 300 Mbps Wi-Fi, sanitized hotel-grade bedding, and instant WhatsApp booking with Hostayy Concierge.
                </p>

                {/* Action Buttons */}
                <div className="banner-one__btn-and-review-box">
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <a href="#room" className="thm-btn" style={{ background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}>
                      <span>Explore 1, 2 &amp; 3 BHK Stays</span>
                      <i className="fa-solid fa-arrow-down" style={{ fontSize: '12px' }}></i>
                    </a>
                    <a 
                      href={getGuestWhatsAppLink({ message: "Hello Hostayy, I want to book a serviced flat near Yashobhoomi IICC with Hostayy." })} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="thm-btn thm-btn-wa"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>Instant WhatsApp Booking</span>
                    </a>
                  </div>

                  {/* Clean Host Trust Strip */}
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#1f2937', fontSize: '13px' }}>
                    <i className="fa-solid fa-award" style={{ color: '#b45309', fontSize: '16px' }}></i>
                    <span><strong>4.98 ★ Superhost</strong> &bull; Serving Yashobhoomi Delegates &amp; Corporate Expats</span>
                  </div>
                </div>

                {/* Key Landmarks Strip */}
                <div className="banner-ota-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginTop: '20px' }}>
                  <span className="banner-ota-label" style={{ fontWeight: 800, color: '#111827', fontSize: '12px' }}>Key Landmarks:</span>
                  <span className="banner-ota-pill" style={{ pointerEvents: 'none', background: '#ffffff', color: '#1e293b', border: '1px solid #cbd5e1' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#dc2626' }}></i> 3 Mins to Yashobhoomi IICC
                  </span>
                  <span className="banner-ota-pill" style={{ pointerEvents: 'none', background: '#ffffff', color: '#1e293b', border: '1px solid #cbd5e1' }}>
                    <i className="fa-solid fa-plane-departure" style={{ color: '#0284c7' }}></i> 10 Mins to IGI Airport (T3)
                  </span>
                  <span className="banner-ota-pill" style={{ pointerEvents: 'none', background: '#ffffff', color: '#1e293b', border: '1px solid #cbd5e1' }}>
                    <i className="fa-solid fa-train-subway" style={{ color: '#16a34a' }}></i> 5 Mins to Metro Sector 21
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Residences Overview Card with 100% VISIBLE High-Contrast Text & Photo Previews */}
            <div className="col-12 col-lg-6 col-xl-6">
              <div 
                className="hero-residences-card"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #fed7aa',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  boxShadow: '0 20px 45px rgba(234, 88, 12, 0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid #fed7aa', paddingBottom: '14px' }}>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ea580c', fontWeight: 800, display: 'block' }}>
                      CURATED FLATS FOR EXTENDED STAYS
                    </span>
                    <h3 style={{ margin: '2px 0 0', fontSize: '20px', color: '#111827', fontWeight: 800 }}>
                      Select Room to View Photos
                    </h3>
                  </div>
                  <span style={{ fontSize: '11.5px', background: '#ecfdf5', color: '#059669', padding: '4px 10px', borderRadius: '20px', fontWeight: 700, border: '1px solid #a7f3d0' }}>
                    <i className="fa-solid fa-circle-check"></i> Available Now
                  </span>
                </div>

                {/* 3 Room Options with Thumbnails & 100% Visible Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {/* Velora 1 BHK */}
                  <div 
                    onClick={() => handleRoomClick('velora')}
                    style={{
                      background: '#fffaf5',
                      border: '1px solid #fed7aa',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="hero-room-option-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img 
                        src="/assets/images/velora/velora-05.jpg" 
                        alt="Velora 1 BHK" 
                        style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                      />
                      <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: '#111827', fontWeight: 800 }}>
                          Velora Suite &bull; 1 BHK
                        </h4>
                        <span style={{ fontSize: '12px', color: '#374151', fontWeight: 500 }}>
                          3 Mins to Yashobhoomi IICC &bull; 750 Sq Ft &bull; Private Kitchen
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#ea580c', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                      <span>View Photos</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>
                    </span>
                  </div>

                  {/* Azura 2 BHK */}
                  <div 
                    onClick={() => handleRoomClick('azura')}
                    style={{
                      background: '#fffaf5',
                      border: '1px solid #fed7aa',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="hero-room-option-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img 
                        src="/assets/images/azura/azura-10.jpg" 
                        alt="Azura 2 BHK" 
                        style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                      />
                      <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: '#111827', fontWeight: 800 }}>
                          Azura Residence &bull; 2 BHK
                        </h4>
                        <span style={{ fontSize: '12px', color: '#374151', fontWeight: 500 }}>
                          Aerocity Corridor &bull; 1,250 Sq Ft &bull; Modular Kitchen &amp; Balcony
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#ea580c', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                      <span>View Photos</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>
                    </span>
                  </div>

                  {/* Verde 3 BHK */}
                  <div 
                    onClick={() => handleRoomClick('verde')}
                    style={{
                      background: '#fffaf5',
                      border: '1px solid #fed7aa',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="hero-room-option-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img 
                        src="/assets/images/verde/verde-02.jpg" 
                        alt="Verde 3 BHK" 
                        style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                      />
                      <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: '#111827', fontWeight: 800 }}>
                          Verde Signature &bull; 3 BHK
                        </h4>
                        <span style={{ fontSize: '12px', color: '#374151', fontWeight: 500 }}>
                          Prime Golf Belt &bull; 1,850 Sq Ft &bull; 3 Private En-Suite Bedrooms
                        </span>
                      </div>
                    </div>
                    <span style={{ fontSize: '12px', color: '#ea580c', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                      <span>View Photos</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }}></i>
                    </span>
                  </div>
                </div>

                {/* Instant Action Button */}
                <a 
                  href="#room" 
                  className="thm-btn"
                  style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: '13px', background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}
                >
                  <i className="fa-solid fa-door-open"></i>
                  <span>View All 1, 2 &amp; 3 BHK Flats</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal OYO / Booking.com Style Flat Search & Instant Booking Bar */}
      <div className="container">
        <div className="about-two__booking" style={{ background: '#ffffff', border: '1.5px solid #fed7aa', boxShadow: '0 10px 30px rgba(234, 88, 12, 0.08)' }}>
          <form onSubmit={handleBookingSubmit}>
            <div className="row" style={{ alignItems: 'flex-end' }}>
              <div className="col-12 col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__left">
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16a34a', fontWeight: 800, display: 'block' }}>
                    <i className="fa-solid fa-circle-check"></i> Instant Booking
                  </span>
                  <h3 className="about-two-booking__title" style={{ fontSize: '18px', margin: '2px 0 0', color: '#111827', fontWeight: 800 }}>Search Flats</h3>
                  <span style={{ fontSize: '12px', color: '#ea580c', fontWeight: 700 }}>0% Brokerage &bull; Direct Host</span>
                </div>
              </div>

              {/* City / Location */}
              <div className="col-12 col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111827', fontWeight: 800, marginBottom: '4px' }}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#ea580c', marginRight: '4px' }}></i> Location / Hub
                  </label>
                  <div style={{ padding: '11px 14px', border: '1px solid #fed7aa', borderRadius: '6px', background: '#fffaf5', fontSize: '13px', fontWeight: 700, color: '#111827' }}>
                    Dwarka Sector 23 (IICC)
                  </div>
                </div>
              </div>

              {/* Move-in Date Picker */}
              <div className="col-12 col-xl-2 col-lg-2 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111827', fontWeight: 800, marginBottom: '4px' }}>
                    <i className="fa-solid fa-calendar-days" style={{ color: '#ea580c', marginRight: '4px' }}></i> Move-in Date
                  </label>
                  <input 
                    type="date" 
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #fed7aa', borderRadius: '6px', fontSize: '13px', background: '#ffffff', color: '#111827', fontWeight: 600 }}
                  />
                </div>
              </div>

              {/* Stay Duration / Term */}
              <div className="col-12 col-xl-2 col-lg-2 col-md-6">
                <div className="about-two-booking__input-box">
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111827', fontWeight: 800, marginBottom: '4px' }}>
                    <i className="fa-solid fa-clock" style={{ color: '#ea580c', marginRight: '4px' }}></i> Stay Duration
                  </label>
                  <select 
                    value={stayDuration}
                    onChange={(e) => setStayDuration(e.target.value)}
                    style={{ width: '100%', padding: '11px 12px', border: '1px solid #fed7aa', borderRadius: '6px', fontSize: '13px', background: '#ffffff', color: '#111827', fontWeight: 600 }}
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
                  <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#111827', fontWeight: 800, marginBottom: '4px' }}>
                    <i className="fa-solid fa-door-open" style={{ color: '#ea580c', marginRight: '4px' }}></i> Flat / BHK
                  </label>
                  <select 
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    style={{ width: '100%', padding: '11px 12px', border: '1px solid #fed7aa', borderRadius: '6px', fontSize: '13px', background: '#ffffff', color: '#111827', fontWeight: 600 }}
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
                  <button type="submit" className="thm-btn" style={{ width: '100%', height: '48px', padding: '0 16px', fontSize: '13px', justifyContent: 'center', background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '15px' }}></i>
                    <span>Search &amp; Book</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Filter Pills */}
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
          <a href="#room" onClick={() => onSelectStay && onSelectStay(null)} className="quick-filter-chip" style={{ color: '#111827', fontWeight: 700, border: '1px solid #fed7aa', background: '#ffffff' }}>
            <i className="fa-solid fa-layer-group" style={{ color: '#ea580c' }}></i> All Residences
          </a>
          <a href="#room" onClick={() => handleRoomClick('velora')} className="quick-filter-chip" style={{ color: '#111827', fontWeight: 700, border: '1px solid #fed7aa', background: '#ffffff' }}>
            <i className="fa-solid fa-door-open" style={{ color: '#ea580c' }}></i> 1 BHK Suite (Velora)
          </a>
          <a href="#room" onClick={() => handleRoomClick('azura')} className="quick-filter-chip" style={{ color: '#111827', fontWeight: 700, border: '1px solid #fed7aa', background: '#ffffff' }}>
            <i className="fa-solid fa-building" style={{ color: '#ea580c' }}></i> 2 BHK Executive (Azura)
          </a>
          <a href="#room" onClick={() => handleRoomClick('verde')} className="quick-filter-chip" style={{ color: '#111827', fontWeight: 700, border: '1px solid #fed7aa', background: '#ffffff' }}>
            <i className="fa-solid fa-gem" style={{ color: '#ea580c' }}></i> 3 BHK Signature (Verde)
          </a>
          <a href="#why-choose" className="quick-filter-chip" style={{ color: '#111827', fontWeight: 700, border: '1px solid #fed7aa', background: '#ffffff' }}>
            <i className="fa-solid fa-location-dot" style={{ color: '#ea580c' }}></i> 3 Mins to Yashobhoomi IICC
          </a>
          <span className="quick-filter-chip" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#a7f3d0', fontWeight: 700 }}>
            <i className="fa-solid fa-shield-virus"></i> Sanitised Stays
          </span>
          <span className="quick-filter-chip" style={{ background: '#fff7ed', color: '#c2410c', borderColor: '#fed7aa', fontWeight: 700 }}>
            <i className="fa-solid fa-badge-percent"></i> 0% Brokerage
          </span>
        </div>

        {/* Consumer Assurance Trust Bar */}
        <div 
          className="oyo-trust-bar" 
          style={{ 
            marginTop: '22px', 
            background: '#ffffff', 
            border: '1.5px solid #fed7aa', 
            borderRadius: '12px', 
            padding: '16px 20px',
            boxShadow: '0 4px 20px rgba(234, 88, 12, 0.04)',
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
              <strong style={{ display: 'block', fontSize: '13px', color: '#111827', fontWeight: 800 }}>Sanitised Stays</strong>
              <span style={{ fontSize: '11.5px', color: '#475569' }}>Hospital-grade hygiene &amp; fresh linens</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-kitchen-set"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#111827', fontWeight: 800 }}>Private Kitchens</strong>
              <span style={{ fontSize: '11.5px', color: '#475569' }}>Cook your own meals with gas &amp; RO</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-wifi"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#111827', fontWeight: 800 }}>300 Mbps Wi-Fi</strong>
              <span style={{ fontSize: '11.5px', color: '#475569' }}>Optical mesh fiber &amp; work desks</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#111827', fontWeight: 800 }}>Zero Brokerage</strong>
              <span style={{ fontSize: '11.5px', color: '#475569' }}>No 15-day broker fee or OTA fee</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', flexShrink: 0, fontSize: '15px' }}>
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '13px', color: '#111827', fontWeight: 800 }}>GST Corporate Billing</strong>
              <span style={{ fontSize: '11.5px', color: '#475569' }}>Tax credit invoices for business</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
