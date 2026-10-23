'use client';

import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aditya & Ritu Mehra',
      location: 'Wedding Family Gathering · Velora Villa',
      rating: 5,
      text: 'We booked Velora by Hostayy for our sister’s wedding in South Delhi. Having 6 en-suite rooms and the private cinema lounge made it unforgettable. Mohit and his team took care of daily housekeeping seamlessly!'
    },
    {
      name: 'Dr. Sameer Kapoor',
      location: 'Corporate Offsite & Retreat · Verde Estate',
      rating: 5,
      text: 'Verde is hands down the best botanical estate in Chhatarpur. The private swimming pool and expansive lawns gave our team total privacy. Direct WhatsApp booking saved us thousands in OTA commissions.'
    },
    {
      name: 'Kavita Singhal',
      location: 'Exhibition Attendee · Yashobhoomi IICC',
      rating: 5,
      text: 'Stayed at Azura penthouse for an international convention at Yashobhoomi. Just 10 mins away with 300 Mbps mesh internet, immaculate bedrooms, and hotel-grade cleanliness. Superhost hospitality at its finest.'
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
                <span className="section-title__tagline">Client Feedback</span>
              </div>
              <h2 className="section-title__title">
                Happy Guest Reviews About <span>Our Residences</span>
              </h2>
              <p className="section-title__text" style={{ marginTop: '16px' }}>
                Verified 5-star ratings across Airbnb and Booking.com from multi-generational families, diplomats, and corporate delegations.
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
