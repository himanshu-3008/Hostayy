'use client';

import React from 'react';
import { getGuestWhatsAppLink, HOSTAYY_CONFIG } from '../data/properties';

export default function ServicesSection() {
  const services = [
    {
      icon: 'fa-solid fa-couch',
      title: '1, 2 & 3 BHK Fully Furnished Residences',
      desc: 'Turnkey designer apartments with plush king orthopedic bedding, bespoke living lounges, ample storage, and ambient LED lighting.'
    },
    {
      icon: 'fa-solid fa-kitchen-set',
      title: 'Fully Equipped Modular Kitchens',
      desc: 'Induction & gas hobs, microwave oven, refrigerator, RO drinking water purifier, toaster, electric kettle, cookware, and full dinnerware.'
    },
    {
      icon: 'fa-solid fa-wifi',
      title: '300+ Mbps Enterprise Mesh Wi-Fi',
      desc: 'Dual-band ultra-low-latency optical fiber mesh Wi-Fi covering all rooms and balconies, paired with dedicated ergonomic work desks.'
    },
    {
      icon: 'fa-solid fa-broom',
      title: 'Hotel-Grade Housekeeping & Linens',
      desc: 'Regular sanitization turnover, sanitized 400-thread-count Egyptian cotton linens, fresh plush towels, and hospital-grade hygiene.'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: '3 Mins to Yashobhoomi IICC & Airport',
      desc: 'Prime Dwarka Sector 23 location: 3 mins to Yashobhoomi IICC, 10 mins to IGI Airport (T3), and 5 mins to Sector 21 Metro Interchange.'
    },
    {
      icon: 'fa-solid fa-file-invoice-dollar',
      title: 'Corporate Invoicing & GST Credit',
      desc: 'Official business invoicing with GST tax input credit for registered companies, exhibition organizers, and international delegates.'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Smart Keyless Access & 24/7 Security',
      desc: 'Digital smart lock check-in, Aadhaar/Passport-verified screening, CCTV-secured premises, and 100% automatic power backup.'
    },
    {
      icon: 'fa-solid fa-shirt',
      title: 'In-House Laundry & Home Comforts',
      desc: 'Fully automatic washing machines, steam iron and ironing board, grocery pre-stocking assistance, and on-call cook coordination.'
    }
  ];

  return (
    <section className="services-two" id="services">
      <div className="container">
        <div className="row" style={{ alignItems: 'flex-start', marginBottom: '40px' }}>
          {/* Left Column */}
          <div className="col-xl-4 col-lg-5">
            <div className="section-title text-left" style={{ marginBottom: '20px' }}>
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">COMPREHENSIVE SERVICES</span>
              </div>
              <h2 className="section-title__title">
                Turnkey Living For <span>Long-Term &amp; Corporate Stays</span>
              </h2>
            </div>
            <p className="services-two__text-1" style={{ fontSize: '15px', color: 'var(--hotelux-gray)', lineHeight: '1.75' }}>
              Hostayy bridges the gap between cramped hotel rooms and unmanaged rental apartments. Experience fully serviced 1, 2, and 3 BHK residences with complete home comfort, five-star hotel hygiene, and 0% brokerage.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div style={{ marginTop: '20px', marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--hotelux-black)', fontWeight: 600 }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--hotelux-base)' }}></i>
                <span>Zero Brokerage &amp; Zero Hidden Fees</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--hotelux-black)', fontWeight: 600 }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--hotelux-base)' }}></i>
                <span>Flexible Leases (1 to 12+ Months)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--hotelux-black)', fontWeight: 600 }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--hotelux-base)' }}></i>
                <span>Walking/Short Drive to Yashobhoomi IICC</span>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <a 
                href={getGuestWhatsAppLink({ message: "Hello Mohit, I'd like to request a long-term corporate / monthly serviced stay proposal near Yashobhoomi." })}
                target="_blank"
                rel="noopener noreferrer"
                className="thm-btn thm-btn-wa"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>Request Corporate Quotation</span>
              </a>
            </div>
          </div>

          {/* Right Column Services Grid */}
          <div className="col-xl-8 col-lg-7">
            <div className="row">
              {services.map((srv, idx) => (
                <div key={idx} className="col-md-6" style={{ marginBottom: '24px' }}>
                  <div className="services-two__single" style={{ height: '100%' }}>
                    <div className="services-two__icon">
                      <i className={srv.icon}></i>
                    </div>
                    <h3 className="services-two__title" style={{ fontSize: '18px', marginBottom: '8px' }}>{srv.title}</h3>
                    <p className="services-two__desc" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>{srv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
