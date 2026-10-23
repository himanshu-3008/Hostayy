'use client';

import React, { useState } from 'react';

export default function ProcessAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Property Inspection & Feasibility',
      desc: 'Mohit Chaudhary conducts an on-site walkthrough of your residence, analyzes neighbourhood demand dynamics, and provides a clear monthly revenue projection.'
    },
    {
      num: '02',
      title: '5-Star Styling & Photoshoot',
      desc: 'Our interior team stages your space with boutique aesthetics, high-thread-count linens, and commissions professional HDR architectural photography.'
    },
    {
      num: '03',
      title: 'Global Launch & Passive Income',
      desc: 'We publish your home across Airbnb, Booking.com, and our direct VIP channels, vet every guest, manage daily cleaning, and wire your profits on the 1st of every month.'
    }
  ];

  const faqs = [
    {
      q: 'How does Hostayy generate higher rental income than traditional 11-month leases?',
      a: 'Short-term and executive corporate rentals operate on dynamic nightly pricing rather than fixed monthly rents. By targeting corporate travelers, wedding groups, transit flyers, and attendees of exhibitions at Yashobhoomi IICC, Hostayy achieves significantly higher effective revenue per square foot while maintaining high occupancy.'
    },
    {
      q: 'How are prospective guests screened before they check in?',
      a: 'Safety and property preservation are our highest priorities. All guests must provide valid government identification (Aadhaar, Passport) prior to receiving access codes. We screen guest profiles on Airbnb, verify the exact purpose of stay, enforce strict noise curfews, and reject unauthorized local parties.'
    },
    {
      q: 'Can I use my property for personal stay or family visits?',
      a: 'Yes, absolutely! Unlike traditional 11-month leases where your property is locked away, as a Hostayy partner you can block dates for personal or family usage whenever needed with advance notice.'
    },
    {
      q: 'How do I enquire about booking a stay for my family or group?',
      a: 'Simply click the "Enquire on WhatsApp" button on any property card or use our contact form. Our direct WhatsApp concierge will immediately confirm real-time availability, share configuration photos, and offer direct booking rates without OTA service fees.'
    },
    {
      q: 'What if something breaks or needs maintenance during a stay?',
      a: 'Our on-ground maintenance team in Delhi conducts preventative inspections before each check-in. If an unexpected issue arises, our local technicians resolve it promptly. Minor routine repairs are managed seamlessly within our service package.'
    }
  ];

  return (
    <section className="section-pad" id="how-it-works" style={{ backgroundColor: '#fff', padding: '90px 0' }}>
      <div className="container">
        {/* Process Header */}
        <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: '45px' }}>
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Operational Process</span>
          </div>
          <h2 className="section-title__title title-animation">
            The Three-Step <span>Onboarding Journey</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '15px auto 0', color: 'var(--hotelux-gray)', fontSize: '15.5px', lineHeight: '1.7' }}>
            From initial feasibility to your first monthly payout, we make onboarding seamless, transparent, and completely hands-off.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="steps-grid" style={{ marginBottom: '80px' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="section-head" style={{ marginBottom: '30px' }}>
            <span className="section-tag">Common Enquiries</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Frequently Asked Questions
            </h3>
            <p className="section-subtitle">
              Everything you need to know about reserving a residence or partnering your property with Hostayy.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button 
                    className="faq-question" 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  {isOpen && (
                    <div className="faq-answer" style={{ display: 'block' }}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
