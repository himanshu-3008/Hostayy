'use client';

import React from 'react';
import { getHostayyWhatsAppLink } from '../data/properties';

export default function ServicesSection() {
  const services = [
    {
      icon: 'fa-solid fa-clapperboard',
      title: '4K Private Cinema Villa',
      desc: 'Exclusive Dolby Atmos cinema lounge in Velora (South Delhi) with 150-inch laser projection and plush recliner seating.'
    },
    {
      icon: 'fa-solid fa-water-ladder',
      title: 'Botanical Pool & Lawns',
      desc: 'Private outdoor swimming pool and sprawling botanical gardens at Verde (Chhatarpur) for family reunions and wedding gatherings.'
    },
    {
      icon: 'fa-solid fa-broom',
      title: '5-Star Hotel Turnkey Clean',
      desc: 'Dedicated on-ground housekeeping, hospital-grade sanitization, and 400-thread-count pressed Egyptian cotton linens.'
    },
    {
      icon: 'fa-solid fa-wifi',
      title: '300 Mbps Mesh Wi-Fi',
      desc: 'Enterprise dual-band mesh Wi-Fi covering every en-suite room, lounge, and outdoor patio for uninterrupted video meetings.'
    },
    {
      icon: 'fa-solid fa-utensils',
      title: 'Private Chef on Demand',
      desc: 'Fully equipped modular kitchens with gas ranges, microwave, air fryer, and verified in-house chef coordination.'
    },
    {
      icon: 'fa-solid fa-plane-departure',
      title: 'Airport & Yashobhoomi Concierge',
      desc: '10–15 mins to IGI Airport (T3), Aerocity, and Yashobhoomi IICC with seamless chauffeur and luggage coordination.'
    }
  ];

  return (
    <section className="services-two" id="services">
      <div className="container">
        <div className="row" style={{ alignItems: 'flex-start', marginBottom: '40px' }}>
          <div className="col-xl-4 col-lg-5">
            <div className="section-title text-left" style={{ marginBottom: '20px' }}>
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Our Services</span>
              </div>
              <h2 className="section-title__title">
                Check Out Our Awesome <span>Services</span>
              </h2>
            </div>
            <p className="services-two__text-1" style={{ fontSize: '15px', color: 'var(--hotelux-gray)', lineHeight: '1.7' }}>
              Hostayy delivers turnkey boutique hotel operations within the seclusion of a private luxury estate in Delhi NCR.
            </p>
            <div style={{ marginTop: '24px' }}>
              <a 
                href={getHostayyWhatsAppLink("Hi Mohit, I'd like to learn more about the amenities and services at Hostayy residences.")}
                target="_blank"
                rel="noopener noreferrer"
                className="thm-btn thm-btn-black"
              >
                <span>Request Concierge</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7">
            <div className="row">
              {services.map((srv, idx) => (
                <div key={idx} className="col-md-6" style={{ marginBottom: '24px' }}>
                  <div className="services-two__single">
                    <div className="services-two__icon">
                      <i className={srv.icon}></i>
                    </div>
                    <h3 className="services-two__title">{srv.title}</h3>
                    <p className="services-two__desc">{srv.desc}</p>
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
