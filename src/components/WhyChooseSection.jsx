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
    <section className="why-choose-one" id="why-choose" style={{ padding: '70px 0', backgroundColor: '#fcfbfa' }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          {/* Left Column: Text & Features & Physical Address */}
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="why-choose-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>STRATEGIC LOCATION &amp; ADVANTAGES</span>
                </div>
                <h2 className="section-title__title title-animation" style={{ color: '#111827' }}>
                  The Preferred Choice Near <br />
                  <span style={{ color: '#ea580c' }}>Yashobhoomi (IICC)</span>
                </h2>
              </div>
              <p className="why-choose-one__text" style={{ fontSize: '15.5px', lineHeight: '1.8', color: '#374151', marginBottom: '24px' }}>
                Located in prime Dwarka Sector 23, Hostayy provides turnkey 1, 2, and 3 BHK serviced residences engineered for corporate executives, exhibition delegates, and relocating families seeking extended stays without hotel constraints.
              </p>

              <ul className="why-choose-one__list list-unstyled" style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                <li style={{ display: 'flex', gap: '18px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-location-dot" style={{ color: '#ea580c', fontSize: '26px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '19px', color: '#111827', marginBottom: '6px', fontWeight: 700 }}>
                      3 Minutes to Yashobhoomi IICC &amp; 10 Mins to Airport
                    </h3>
                    <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                      Skip the chaotic Delhi traffic. Quick seamless access to Asia's largest convention centre, IGI Airport (T3), and the Airport Express Metro Line.
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '18px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-percent" style={{ color: '#ea580c', fontSize: '26px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '19px', color: '#111827', marginBottom: '6px', fontWeight: 700 }}>
                      Zero Brokerage &amp; Direct Corporate Quotations
                    </h3>
                    <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                      No 15-day broker commission and no 18% OTA markups. Transparent all-inclusive monthly billing with GST input tax credit for businesses.
                    </p>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '18px', marginBottom: '20px', alignItems: 'flex-start' }}>
                  <div className="icon" style={{ flexShrink: 0 }}>
                    <i className="fas fa-kitchen-set" style={{ color: '#ea580c', fontSize: '26px' }}></i>
                  </div>
                  <div className="content">
                    <h3 style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '19px', color: '#111827', marginBottom: '6px', fontWeight: 700 }}>
                      Home Comfort: Kitchens, 300 Mbps Wi-Fi &amp; Laundry
                    </h3>
                    <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                      Fully equipped modular kitchens, automatic washing machines, ergonomic work desks, and regular housekeeping tailored for 1-12 month stays.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="why-choose-one__btn-box" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <a href="#room" className="thm-btn" style={{ background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}>
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

              {/* Official Physical Address Card */}
              <div 
                className="why-choose-address-card"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #fed7aa',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  boxShadow: '0 6px 18px rgba(234, 88, 12, 0.06)'
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ea580c', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ea580c', fontWeight: 800, display: 'block' }}>
                    OFFICIAL HOSTAYY RESIDENCE ADDRESS
                  </span>
                  <strong style={{ fontSize: '15px', color: '#111827', display: 'block', margin: '3px 0 4px', fontWeight: 800 }}>
                    {HOSTAYY_CONFIG.address}
                  </strong>
                  <p style={{ margin: 0, fontSize: '12.5px', color: '#374151', lineHeight: 1.5 }}>
                    Dwarka Sector 23, New Delhi &bull; 3 mins to Yashobhoomi (IICC) Sector 25 &bull; 10 mins to IGI Airport (T3/T1) &bull; 5 mins to Dwarka Sector 21 Metro Interchange
                  </p>
                  <div style={{ marginTop: '10px' }}>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(HOSTAYY_CONFIG.address)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: '12.5px', color: '#ea580c', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Open Location in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Landmark Proximity Card & Images */}
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="why-choose-one__right" style={{ position: 'relative', marginLeft: 0 }}>
              {/* Landmark Connectivity Grid Card */}
              <div 
                className="why-choose-connectivity-card"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #fed7aa',
                  borderRadius: '12px',
                  boxShadow: '0 20px 50px rgba(234, 88, 12, 0.08)',
                  marginBottom: '20px',
                  padding: '24px 22px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', borderBottom: '1px solid #fed7aa', paddingBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', fontSize: '18px', flexShrink: 0 }}>
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '17px', color: '#111827', fontWeight: 800 }}>Dwarka Sector 23 Connectivity Matrix</h4>
                    <span style={{ fontSize: '12px', color: '#374151', fontWeight: 500 }}>Strategic Proximity to Major Delhi NCR Hubs</span>
                  </div>
                </div>

                <div className="why-choose-connectivity-grid">
                  {landmarkItems.map((lm, idx) => (
                    <div key={idx} className="why-choose-connectivity-item" style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '8px', padding: '10px 12px' }}>
                      <div className="why-choose-lm-left" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <i className={`fa-solid ${lm.icon}`} style={{ color: '#ea580c', fontSize: '13px' }}></i>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                          {lm.name}
                        </span>
                      </div>
                      <span className="why-choose-lm-time" style={{ fontSize: '11.5px', fontWeight: 800, color: '#ffffff', background: '#ea580c', padding: '4px 10px', borderRadius: '12px', border: '1px solid #ea580c', flexShrink: 0, whiteSpace: 'nowrap' }}>
                        {lm.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Profile & Rating Strip (Solid Orange with Pure White Text) */}
              <div 
                className="why-choose-host-strip"
                style={{
                  background: '#ea580c',
                  color: '#ffffff',
                  borderRadius: '10px',
                  border: '1px solid #c2410c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '16px 20px',
                  boxShadow: '0 8px 24px rgba(234, 88, 12, 0.25)'
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 3px', color: '#ffffff', fontSize: '16px', fontWeight: 800 }}>
                    Mohit Chaudhary &bull; Hostayy
                  </h4>
                  <p style={{ margin: 0, fontSize: '12.5px', color: '#fff7ed', fontWeight: 600 }}>
                    4.98 ★ Superhost &bull; Serving Yashobhoomi Delegates &amp; Expats
                  </p>
                </div>
                <a 
                  href={`tel:${HOSTAYY_CONFIG.whatsappNumber}`}
                  className="thm-btn"
                  style={{ padding: '8px 18px', fontSize: '12px', background: '#ffffff', color: '#ea580c', borderColor: '#ffffff', fontWeight: 800 }}
                >
                  <i className="fa-solid fa-phone" style={{ marginRight: '6px', color: '#ea580c' }}></i>
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
