'use client';

import React, { useState, useEffect } from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getHostayyWhatsAppLink, getGuestWhatsAppLink } from '../data/properties';

export default function Hero({ onSelectStay }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('Velora (6-BHK Cinema Villa)');
  const [guestCount, setGuestCount] = useState('8-12 Guests');

  const heroSlides = [
    {
      propId: 'velora',
      name: 'Velora by Hostayy',
      sub: '6-BHK Grand Cinema Villa · South Delhi',
      src: '/assets/images/velora/velora-05.jpg',
      tariff: '₹6,500 / Night'
    },
    {
      propId: 'verde',
      name: 'Verde by Hostayy',
      sub: '8-BHK Botanical Pool Estate · Chhatarpur',
      src: '/assets/images/verde/verde-01.jpg',
      tariff: '₹7,000 / Night'
    },
    {
      propId: 'azura',
      name: 'Azura by Hostayy',
      sub: '4-BHK Executive Penthouse · South Delhi',
      src: '/assets/images/azura/azura-01.jpg',
      tariff: '₹5,500 / Night'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
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
      checkIn: checkIn || 'Flexible Dates',
      checkOut: checkOut || 'Flexible Dates',
      guests: guestCount
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
                  <span><strong>hostayy</strong> <em style={{ color: '#FF4D4D', fontStyle: 'italic', fontWeight: 600 }}>(feel like home)</em> · 0% OTA Fees Guaranteed</span>
                </div>

                <h1 className="banner-one__title">
                  Book Your <span>Luxury Private Residence</span> In Delhi NCR With <span>Five-Star Care.</span>
                </h1>

                <p className="banner-one__text">
                  Discover a sanctuary where bespoke comfort meets discreet five-star hospitality. Curated cinema villas, botanical pool estates, and designer penthouses across South Delhi and Chhatarpur for weddings, corporate offsites, and Yashobhoomi IICC delegations.
                </p>

                {/* Hotelux Action Buttons & Review Strip */}
                <div className="banner-one__btn-and-review-box">
                  <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    <a href="#room" className="thm-btn">
                      <span>Explore Stays</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <a 
                      href={getGuestWhatsAppLink({ message: "I'm inquiring about direct VIP booking rates for Hostayy residences." })} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="thm-btn thm-btn-wa"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>WhatsApp VIP</span>
                    </a>
                  </div>

                  {/* Hotelux Review Box with Real Avatars */}
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
                      <h4>Customer Satisfied</h4>
                      <p>4.98 ★ (Superhost Rating)</p>
                    </div>
                  </div>
                </div>

                {/* Direct Global OTA Redirection Links */}
                <div className="banner-ota-links">
                  <span className="banner-ota-label">Also listed on:</span>
                  <a href={HOSTAYY_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer" className="banner-ota-pill" title="Open Hostayy on Booking.com">
                    <i className="fa-solid fa-hotel" style={{ color: '#003580' }}></i> Booking.com
                  </a>
                  <a href={HOSTAYY_CONFIG.airbnbVeloraUrl} target="_blank" rel="noopener noreferrer" className="banner-ota-pill" title="Open Velora on Airbnb">
                    <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F' }}></i> Velora Airbnb
                  </a>
                  <a href={HOSTAYY_CONFIG.airbnbAzuraUrl} target="_blank" rel="noopener noreferrer" className="banner-ota-pill" title="Open Azura on Airbnb">
                    <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F' }}></i> Azura Airbnb
                  </a>
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
                      <h3>{currentSlide.name}</h3>
                      <p>{currentSlide.sub}</p>
                    </div>
                    <span style={{ background: 'var(--hotelux-base)', color: '#ffffff', padding: '6px 14px', fontWeight: 700, fontSize: '13px' }}>
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

      {/* Hotelux Horizontal Check Availability Bar (.about-two__booking) */}
      <div className="container">
        <div className="about-two__booking">
          <form onSubmit={handleBookingSubmit}>
            <div className="row" style={{ alignItems: 'flex-end' }}>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__left">
                  <h3 className="about-two-booking__title">Check Direct Availability</h3>
                  <span style={{ fontSize: '12px', color: 'var(--hotelux-base)', fontWeight: 600 }}>0% OTA Commission</span>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <p className="about-two-booking__input-title">
                    <i className="fa-regular fa-calendar-days"></i> Check In
                  </p>
                  <input 
                    type="date" 
                    className="about-two-booking__input-field" 
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <p className="about-two-booking__input-title">
                    <i className="fa-regular fa-calendar-days"></i> Check Out
                  </p>
                  <input 
                    type="date" 
                    className="about-two-booking__input-field" 
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="about-two-booking__input-box">
                  <p className="about-two-booking__input-title">
                    <i className="fa-solid fa-hotel"></i> Select Residence
                  </p>
                  <select 
                    className="about-two-booking__input-field"
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                  >
                    <option value="Velora (6-BHK Cinema Villa)">Velora · 6-BHK Cinema Villa (South Delhi)</option>
                    <option value="Verde (8-BHK Pool Estate)">Verde · 8-BHK Botanical Estate (Chhatarpur)</option>
                    <option value="Azura (4-BHK Penthouse)">Azura · 4-BHK Executive Penthouse (South Delhi)</option>
                  </select>
                </div>
              </div>

              <div className="col-xl-3 col-lg-12 col-md-12">
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button type="submit" className="thm-btn" style={{ width: '100%', height: '48px', padding: '0 20px', fontSize: '13px' }}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '16px' }}></i>
                    <span>Check VIP Rates</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
