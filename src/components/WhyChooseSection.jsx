'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink } from '../data/properties';

export default function WhyChooseSection() {
  const handleConsultation = () => {
    window.open(getHostayyWhatsAppLink("Hi Mohit (Hostayy), I'm exploring luxury stays in Delhi NCR. I'd love to learn more about Hostayy's bespoke services."), '_blank');
  };

  return (
    <section className="why-choose-one" id="why-choose">
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px 0' }}>
          {/* Left Column: Text & Features */}
          <div className="col-xl-6 col-lg-6" style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            <div className="why-choose-one__left" style={{ paddingRight: '30px' }}>
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Why Choose Hostayy</span>
                </div>
                <h2 className="section-title__title title-animation">
                  Reason For Choosing Our <br />
                  Luxury <span>Residences</span>
                </h2>
              </div>
              <p className="why-choose-one__text" style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--hotelux-gray)', marginBottom: '32px' }}>
                From handpicked 5-star private estates to 24/7 dedicated concierge service — we deliver bespoke luxury, unmatched privacy, and seamless turnkey hospitality.
              </p>

              <ul className="why-choose-one__list list-unstyled" style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                <li style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-shield-alt" style={{ color: 'var(--hotelux-base)', fontSize: '28px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '20px', color: 'var(--hotelux-black)', marginBottom: '8px' }}>
                      Direct Booking Privileges & 0% Fees
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--hotelux-gray)', lineHeight: '1.6', margin: 0 }}>
                      Save up to 18% in OTA service commissions. Enjoy guaranteed best rates, flexible check-ins, and direct host accountability.
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-concierge-bell" style={{ color: 'var(--hotelux-base)', fontSize: '28px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '20px', color: 'var(--hotelux-black)', marginBottom: '8px' }}>
                      24/7 Dedicated Concierge Support
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--hotelux-gray)', lineHeight: '1.6', margin: 0 }}>
                      From private chef curations and private cinema screenings to seamless airport transfers — our on-ground team is at your beck and call.
                    </p>
                  </div>
                </li>
              </ul>

              <ul className="why-choose-one__points list-unstyled" style={{ listStyle: 'none', padding: 0, margin: '0 0 35px', display: 'flex', flexWrap: 'wrap', gap: '16px 30px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="icon" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-check" style={{ color: '#fff', fontSize: '10px' }}></i>
                  </div>
                  <p style={{ margin: 0, fontSize: '14.5px', fontWeight: 600, color: 'var(--hotelux-black)' }}>
                    Handpicked 4.98★ Superhost properties
                  </p>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="icon" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--hotelux-base)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fas fa-check" style={{ color: '#fff', fontSize: '10px' }}></i>
                  </div>
                  <p style={{ margin: 0, fontSize: '14.5px', fontWeight: 600, color: 'var(--hotelux-black)' }}>
                    Bespoke privacy for families & VIPs
                  </p>
                </li>
              </ul>

              <div className="why-choose-one__btn-box" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="#room" className="thm-btn">
                  Explore Residences
                </a>
                <button 
                  type="button" 
                  onClick={handleConsultation} 
                  className="thm-btn-wa"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <i className="fab fa-whatsapp"></i> Chat with Concierge
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hotelux Images & Floating Emblem */}
          <div className="col-xl-6 col-lg-6" style={{ flex: '0 0 50%', maxWidth: '50%' }}>
            <div className="why-choose-one__right" style={{ position: 'relative', paddingLeft: '40px' }}>
              <div className="why-choose-one__img" style={{ position: 'relative', overflow: 'hidden', borderRadius: '0px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                <img 
                  src="/assets/images/hotelux/resources_why-choose-one-img-1.jpg" 
                  alt="Hostayy Luxury Estate Interior"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div className="why-choose-one__img-2" style={{ position: 'absolute', bottom: '-40px', left: '0px', width: '240px', boxShadow: '0 15px 35px rgba(0,0,0,0.15)', border: '6px solid #fff' }}>
                <img 
                  src="/assets/images/hotelux/resources_why-choose-one-img-2.jpg" 
                  alt="Luxury Bedroom"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Floating Hotelux Rating Card */}
              <div 
                className="why-choose-one__hotel-info"
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '20px',
                  backgroundColor: 'rgba(25, 22, 40, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '24px 30px',
                  border: '1px solid var(--hotelux-base)',
                  textAlign: 'center',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                }}
              >
                <h3 className="why-choose-one__hotel-name" style={{ fontFamily: 'var(--hotelux-font-two)', color: '#fff', fontSize: '24px', margin: '0 0 6px' }}>
                  Hostayy
                </h3>
                <div className="why-choose-one__hotel-ratting" style={{ color: 'var(--hotelux-base)', fontSize: '14px', marginBottom: '6px' }}>
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                </div>
                <p className="why-choose-one__sub-title" style={{ margin: 0, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#c4c2cb' }}>
                  Superhost Collection
                </p>
              </div>

              {/* Play video / WhatsApp trigger */}
              <div className="why-choose-one__video-link" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <button 
                  type="button" 
                  onClick={handleConsultation}
                  className="video-popup" 
                  aria-label="Direct Concierge"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <div className="why-choose-one__video-icon" style={{ backgroundColor: 'var(--hotelux-base)' }}>
                    <i className="fab fa-whatsapp"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
