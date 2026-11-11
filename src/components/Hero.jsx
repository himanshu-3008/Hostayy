'use client';

import React, { useState, useEffect } from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getGuestWhatsAppLink } from '../data/properties';

export default function Hero({ onSelectStay }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [moveInDate, setMoveInDate] = useState('');
  const [stayDuration, setStayDuration] = useState('1 - 3 Months (Corporate Monthly)');
  const [selectedProperty, setSelectedProperty] = useState('Velora (1-BHK Luxury Suite · 3 mins Yashobhoomi)');
  const [teamCount, setTeamCount] = useState('1 - 2 Guests / Solo Executive');

  const heroSlides = [
    {
      propId: 'velora',
      name: 'Velora by Hostayy',
      bhk: '1 BHK',
      sub: '1-BHK Luxury Suite · 3 mins to Yashobhoomi IICC (Dwarka Sector 23)',
      src: '/assets/images/velora/velora-05.jpg',
      tariff: 'Monthly Quotation on Request'
    },
    {
      propId: 'azura',
      name: 'Azura by Hostayy',
      bhk: '2 BHK',
      sub: '2-BHK Executive Residence · 4 mins to Yashobhoomi & Aerocity Corridor',
      src: '/assets/images/azura/azura-10.jpg',
      tariff: 'Corporate Long-Stay Quote'
    },
    {
      propId: 'verde',
      name: 'Verde by Hostayy',
      bhk: '3 BHK',
      sub: '3-BHK Signature Residence · 3 mins to Yashobhoomi & DDA Golf Course',
      src: '/assets/images/verde/verde-02.jpg',
      tariff: 'Custom Long-Stay Tariff'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4800);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

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

  const currentSlide = heroSlides[slideIndex];

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
            <div className="col-xl-6 col-lg-6">
              <div className="banner-one__content-box">
                <div className="banner-one__sub-title" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <img 
                      src="/assets/images/hostayy-logo-transparent.png" 
                      alt="Hostayy" 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  </div>
                  <span><strong>hostayy</strong> <em style={{ color: '#FF4D4D', fontStyle: 'italic', fontWeight: 600 }}>(feel like home)</em> · Instant Flat Booking · 0% Brokerage</span>
                </div>

                <h1 className="banner-one__title">
                  Book 1, 2 &amp; 3 BHK <span>Serviced Flats Near Yashobhoomi (IICC)</span> With Zero Brokerage.
                </h1>

                <p className="banner-one__text">
                  Handcrafted private serviced apartments in Dwarka Sector 23, just 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Fully furnished with modern modular kitchens, 300 Mbps Wi-Fi, sanitized hotel-grade bedding, and instant WhatsApp booking with Superhost Mohit Chaudhary.
                </p>

                {/* Hotelux Action Buttons & Review Strip */}
                <div className="banner-one__btn-and-review-box">
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <a href="#room" className="thm-btn">
                      <span>Book a Flat Now</span>
                      <i className="fa-solid fa-arrow-right"></i>
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

                  {/* Review Box */}
                  <div className="banner-one__review-box">
                    <ul className="clearfix">
                      <li>
                        <div className="img-box">
                          <img src="/assets/images/hotelux/resources_banner-one-review-1-1.jpg" alt="Hostayy Guest" />
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img src="/assets/images/hotelux/resources_banner-one-review-1-2.jpg" alt="Hostayy Guest" />
                        </div>
                      </li>
                      <li>
                        <div className="img-box">
                          <img src="/assets/images/hotelux/resources_banner-one-review-1-3.jpg" alt="Hostayy Guest" />
                        </div>
                      </li>
                    </ul>
                    <div className="text-box">
                      <h4>Verified Superhost</h4>
                      <p>4.98 ★ (Expat &amp; Corporate Stays)</p>
                    </div>
                  </div>
                </div>

                {/* Long-Stay Privileges & Landmarks Strip */}
                <div className="banner-ota-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
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

            {/* Right Diagonal Hero Slider */}
            <div className="col-xl-6 col-lg-6">
              <div className="banner-one__slider-outer">
                <div 
                  className="banner-one__slider"
                  onClick={() => onSelectStay && onSelectStay(currentSlide.propId)}
                  title="Click to view full photo showcase"
                >
                  <img src={currentSlide.src} alt={currentSlide.name} />
                  <div className="banner-one__slider-caption">
                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--hotelux-base)', fontWeight: 800, display: 'block' }}>
                        {currentSlide.bhk} SERVICED RESIDENCE
                      </span>
                      <h3>{currentSlide.name}</h3>
                      <p>{currentSlide.sub}</p>
                    </div>
                    <span className="banner-slider-tariff-badge">
                      {currentSlide.tariff}
                    </span>
                  </div>
                </div>

                <button type="button" className="banner-slider-nav-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button type="button" className="banner-slider-nav-btn next" onClick={nextSlide} aria-label="Next Slide">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
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
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__left">
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16a34a', fontWeight: 800, display: 'block' }}>
                    <i className="fa-solid fa-circle-check"></i> Instant Booking
                  </span>
                  <h3 className="about-two-booking__title" style={{ fontSize: '18px', margin: '2px 0 0' }}>Search Flats</h3>
                  <span style={{ fontSize: '12px', color: 'var(--hotelux-base)', fontWeight: 600 }}>0% Brokerage · Direct Host</span>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <p className="about-two-booking__input-title">
                    <i className="fa-regular fa-calendar-days"></i> Move-in Date
                  </p>
                  <input 
                    type="date" 
                    className="about-two-booking__input-field" 
                    value={moveInDate}
                    onChange={(e) => setMoveInDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <p className="about-two-booking__input-title">
                    <i className="fa-solid fa-clock-rotate-left"></i> Stay Duration
                  </p>
                  <select 
                    className="about-two-booking__input-field"
                    value={stayDuration}
                    onChange={(e) => setStayDuration(e.target.value)}
                  >
                    <option value="1 - 3 Months (Corporate Monthly)">1 - 3 Months (Corporate Monthly)</option>
                    <option value="3 - 6 Months (Extended Project Stay)">3 - 6 Months (Extended Project Stay)</option>
                    <option value="6 - 12 Months (Long Term Lease)">6 - 12 Months (Long Term Lease)</option>
                    <option value="15 - 30 Days (Exhibition / Event Stay)">15 - 30 Days (Exhibition / Event Stay)</option>
                    <option value="Weekly (7 - 14 Days)">Weekly (7 - 14 Days)</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <p className="about-two-booking__input-title">
                    <i className="fa-solid fa-hotel"></i> Select Flat / BHK
                  </p>
                  <select 
                    className="about-two-booking__input-field"
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                  >
                    <option value="Velora (1-BHK Luxury Suite · 3 mins Yashobhoomi)">Velora · 1 BHK (3 mins to Yashobhoomi IICC)</option>
                    <option value="Azura (2-BHK Executive Residence · Aerocity Corridor)">Azura · 2 BHK (Aerocity / Yashobhoomi Corridor)</option>
                    <option value="Verde (3-BHK Signature Residence · Prime Golf Belt)">Verde · 3 BHK (Dwarka Sector 23 Prime / Golf Course)</option>
                    <option value="All Flats (Flexible Availability)">All Flats (Suggest Best Available)</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-2 col-lg-12 col-md-12">
                <button type="submit" className="thm-btn" style={{ width: '100%', height: '48px', padding: '0 16px', fontSize: '13px', justifyContent: 'center' }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* OYO-Style Quick Filter Pills Row */}
        <div className="hero-quick-filters" style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Popular:
          </span>
          <a href="#room" className="quick-filter-chip">
            <i className="fa-solid fa-layer-group"></i> All Flats (3)
          </a>
          <a href="#room" onClick={() => onSelectStay && onSelectStay('velora')} className="quick-filter-chip">
            <i className="fa-solid fa-door-open"></i> 1 BHK Suite (Velora)
          </a>
          <a href="#room" onClick={() => onSelectStay && onSelectStay('azura')} className="quick-filter-chip">
            <i className="fa-solid fa-building"></i> 2 BHK Executive (Azura)
          </a>
          <a href="#room" onClick={() => onSelectStay && onSelectStay('verde')} className="quick-filter-chip">
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
