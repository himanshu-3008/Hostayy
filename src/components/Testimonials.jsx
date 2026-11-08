'use client';

import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aditya & Neha Malhotra',
      location: 'Corporate Relocation · Velora 1 BHK Suite',
      rating: 5,
      text: 'Stayed at Velora for two months while transitioning to Delhi NCR. Having a fully equipped modular kitchen with microwave and RO made daily living so easy. Only 3 minutes from Yashobhoomi IICC and 10 mins to T3. Mohit’s team handled daily cleaning seamlessly!'
    },
    {
      name: 'Marcus Vance',
      location: 'International Trade Exhibitor · Azura 2 BHK Executive',
      rating: 5,
      text: 'Our delegation booked Azura for a major 3-week conference at Yashobhoomi. The 300 Mbps mesh Wi-Fi was rock-solid for remote presentations, the two king en-suite bedrooms gave us complete privacy, and booking directly with Hostayy saved us over 18% in fees.'
    },
    {
      name: 'Dr. Sameer & Shalini Kapoor',
      location: 'Extended Family Stay · Verde 3 BHK Signature',
      rating: 5,
      text: 'Verde was exceptional for our family during an extended stay in Dwarka near the Golf Course. Expansive living hall, wrap-around balconies, and high-end chef kitchen. Zero brokerage and total peace of mind.'
    }
  ];

  return (
    <section className="testimonial-two" id="testimonial" style={{ padding: '60px 0 50px' }}>
      <div className="container">
        <div className="row" style={{ alignItems: 'flex-start' }}>
          {/* Left Title Column */}
          <div className="col-xl-4 col-lg-5">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">CLIENT FEEDBACK</span>
              </div>
              <h2 className="section-title__title">
                Verified Guest Reviews About <span>Our Residences</span>
              </h2>
              <p className="section-title__text" style={{ marginTop: '16px' }}>
                4.98 ★ Superhost rating from Yashobhoomi exhibition delegates, corporate assignees, and relocating families.
              </p>
            </div>
          </div>

          {/* Right Review Cards Column */}
          <div className="col-xl-8 col-lg-7">
            <div className="row">
              {reviews.map((rev, idx) => (
                <div key={idx} className="col-md-12" style={{ marginBottom: '24px' }}>
                  <div className="testimonial-two__single">
                    <div className="testimonial-two__quote">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <p className="testimonial-two__text">"{rev.text}"</p>
                    <div className="testimonial-two__author">
                      <div>
                        <h4>{rev.name}</h4>
                        <p>{rev.location}</p>
                      </div>
                      <div className="testimonial-two__stars">
                        {[...Array(rev.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
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
