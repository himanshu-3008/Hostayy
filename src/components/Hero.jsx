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
                  <span><strong>hostayy</strong> <em style={{ color: '#FF4D4D', fontStyle: 'italic', fontWeight: 600 }}>(feel like home)</em> · 0% Brokerage · 0% OTA Fees</span>
                </div>

                <h1 className="banner-one__title">
                  1, 2 &amp; 3 BHK <span>Serviced Apartments Near Yashobhoomi (IICC)</span> With Five-Star Care.
                </h1>

                <p className="banner-one__text">
                  Handcrafted private serviced residences in Dwarka Sector 23, just 3 to 10 minutes from Yashobhoomi (IICC) Convention Centre and IGI Airport (T3). Fully furnished with modern modular kitchens, 300 Mbps Wi-Fi, and personalized concierge care for monthly corporate and extended residential stays.
                </p>

                {/* Hotelux Action Buttons & Review Strip */}
                <div className="banner-one__btn-and-review-box">
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <a href="#room" className="thm-btn">
                      <span>Explore 1, 2 &amp; 3 BHK</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a 
                      href={getGuestWhatsAppLink({ message: "Hello Mohit, I am inquiring about a monthly / long-term quotation for a serviced apartment near Yashobhoomi IICC." })} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="thm-btn thm-btn-wa"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>Request Long-Stay Quote</span>
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
                    <span style={{ background: 'var(--hotelux-base)', color: '#ffffff', padding: '8px 16px', fontWeight: 700, fontSize: '13px', borderRadius: '4px' }}>
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

      {/* Horizontal Long-Term Quotation & Availability Bar */}
      <div className="container">
        <div className="about-two__booking">
          <form onSubmit={handleBookingSubmit}>
            <div className="row" style={{ alignItems: 'flex-end' }}>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__left">
                  <h3 className="about-two-booking__title">Request Long-Stay Quote</h3>
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
                    <i className="fa-solid fa-hotel"></i> Select Apartment
                  </p>
                  <select 
                    className="about-two-booking__input-field"
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                  >
                    <option value="Velora (1-BHK Luxury Suite · 3 mins Yashobhoomi)">Velora · 1 BHK (3 mins to Yashobhoomi IICC)</option>
                    <option value="Azura (2-BHK Executive Residence · Aerocity Corridor)">Azura · 2 BHK (Aerocity / Yashobhoomi Corridor)</option>
                    <option value="Verde (3-BHK Signature Residence · Prime Golf Belt)">Verde · 3 BHK (Dwarka Sector 23 Prime / Golf Course)</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-2 col-lg-12 col-md-12">
                <button type="submit" className="thm-btn" style={{ width: '100%', height: '48px', padding: '0 16px', fontSize: '13px', justifyContent: 'center' }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
                  <span>Get Quotation</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
