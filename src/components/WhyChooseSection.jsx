'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getGuestWhatsAppLink } from '../data/properties';

export default function WhyChooseSection() {
  const handleConsultation = () => {
    window.open(getGuestWhatsAppLink({
      message: "Hello Mohit, I'm exploring long-term serviced apartments near Yashobhoomi IICC. I'd love to learn more about Hostayy's 1, 2, and 3 BHK residences."
    }), '_blank');
  };

  const landmarkItems = [
    { name: "Yashobhoomi (IICC) Sector 25", time: "3 Mins", icon: "fa-landmark" },
    { name: "IGI Airport Terminal 3 (T3/T1)", time: "10 Mins", icon: "fa-plane-departure" },
    { name: "Dwarka Sector 21 Metro Interchange", time: "5 Mins", icon: "fa-train-subway" },
    { name: "18-Hole DDA Golf Course Dwarka", time: "6 Mins", icon: "fa-golf-ball-tee" },
    { name: "Aerocity & Worldmark Business District", time: "12 Mins", icon: "fa-briefcase" },
    { name: "Cyber City Gurugram (via Expressway)", time: "15 Mins", icon: "fa-road" }
  ];

  return (
    <section className="why-choose-one" id="why-choose" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          {/* Left Column: Text & Features */}
          <div className="col-xl-6 col-lg-6">
            <div className="why-choose-one__left" style={{ paddingRight: '20px' }}>
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">STRATEGIC LOCATION &amp; ADVANTAGES</span>
                </div>
                <h2 className="section-title__title title-animation">
                  The Preferred Choice Near <br />
                  <span>Yashobhoomi (IICC)</span>
                </h2>
              </div>
              <p className="why-choose-one__text" style={{ fontSize: '15.5px', lineHeight: '1.8', color: 'var(--hotelux-gray)', marginBottom: '28px' }}>
                Located in prime Dwarka Sector 23, Hostayy provides turnkey 1, 2, and 3 BHK serviced residences engineered for corporate executives, exhibition delegates, and relocating families seeking extended stays without hotel constraints.
              </p>

              <ul className="why-choose-one__list list-unstyled" style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                <li style={{ display: 'flex', gap: '18px', marginBottom: '22px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-location-dot" style={{ color: 'var(--hotelux-base)', fontSize: '26px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '19px', color: 'var(--hotelux-black)', marginBottom: '6px' }}>
                      3 Minutes to Yashobhoomi IICC &amp; 10 Mins to Airport
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--hotelux-gray)', lineHeight: '1.6', margin: 0 }}>
                      Skip the chaotic Delhi traffic. Quick seamless access to Asia's largest convention centre, IGI Airport (T3), and the Airport Express Metro Line.
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '18px', marginBottom: '22px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-percent" style={{ color: 'var(--hotelux-base)', fontSize: '26px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '19px', color: 'var(--hotelux-black)', marginBottom: '6px' }}>
                      Zero Brokerage &amp; Direct Corporate Quotations
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--hotelux-gray)', lineHeight: '1.6', margin: 0 }}>
                      No 15-day broker commission and no 18% OTA markups. Transparent all-inclusive monthly billing with GST input tax credit for businesses.
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '18px', marginBottom: '22px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-kitchen-set" style={{ color: 'var(--hotelux-base)', fontSize: '26px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '19px', color: 'var(--hotelux-black)', marginBottom: '6px' }}>
                      Home Comfort: Kitchens, 300 Mbps Wi-Fi &amp; Laundry
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--hotelux-gray)', lineHeight: '1.6', margin: 0 }}>
                      Fully equipped modular kitchens, automatic washing machines, ergonomic work desks, and regular housekeeping tailored for 1-12 month stays.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="why-choose-one__btn-box" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <a href="#room" className="thm-btn">
                  Explore 1, 2 &amp; 3 BHK Stays
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

          {/* Right Column: Strategic Landmark Proximity Card & Images */}
          <div className="col-xl-6 col-lg-6">
            <div className="why-choose-one__right" style={{ position: 'relative' }}>
              {/* Landmark Connectivity Grid Card */}
              <div 
                style={{
                  background: '#ffffff',
                  border: '2px solid var(--hotelux-border)',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 20px 50px rgba(25, 22, 40, 0.1)',
                  marginBottom: '25px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #f1ece7', paddingBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF4D4D', fontSize: '18px' }}>
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '18px', color: '#191628', fontWeight: 700 }}>Dwarka Sector 23 Connectivity Matrix</h4>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Strategic Proximity to Major Delhi NCR Hubs</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                  {landmarkItems.map((lm, idx) => (
                    <div key={idx} style={{ background: '#fbf9f7', border: '1px solid #eee8e2', padding: '12px 14px', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <i className={`fa-solid ${lm.icon}`} style={{ color: 'var(--hotelux-base)', fontSize: '16px' }}></i>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#191628', background: '#ffffff', padding: '2px 8px', borderRadius: '12px', border: '1px solid #e2dcd5' }}>
                          {lm.time}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155', lineHeight: 1.35 }}>
                        {lm.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Profile & Rating Strip */}
              <div 
                style={{
                  background: 'rgba(25, 22, 40, 0.95)',
                  color: '#ffffff',
                  padding: '20px 24px',
                  borderRadius: '10px',
                  border: '1px solid var(--hotelux-base)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 3px', color: '#ffffff', fontSize: '16px', fontWeight: 700 }}>
                    Mohit Chaudhary &bull; Hostayy
                  </h4>
                  <p style={{ margin: 0, fontSize: '12.5px', color: '#cbd5e1' }}>
                    4.98 ★ Superhost &bull; Serving Yashobhoomi Delegates &amp; Expats
                  </p>
                </div>
                <a 
                  href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                  className="thm-btn thm-btn-outline"
                  style={{ padding: '8px 16px', fontSize: '12px', color: 'var(--hotelux-base)', borderColor: 'var(--hotelux-base)' }}
                >
                  <i className="fa-solid fa-phone" style={{ marginRight: '6px' }}></i>
                  <span>Call {HOSTAYY_CONFIG.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
