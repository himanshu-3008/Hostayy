'use client';

import React, { useState } from 'react';

export default function ProcessAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Consultation & Feasibility',
      desc: 'Hostayy conducts an on-site evaluation of your apartment or estate in Delhi NCR, reviews Yashobhoomi and corporate demand trends, and provides a clear monthly revenue projection.'
    },
    {
      num: '02',
      title: 'Styling & Professional Photography',
      desc: 'Our hospitality team styles your space to high-end serviced standards, installs high-thread-count linens, and commissions professional HDR architectural photography.'
    },
    {
      num: '03',
      title: 'Corporate Onboarding & Monthly Payouts',
      desc: 'We place your property across direct corporate networks, exhibition delegates, and global platforms, manage daily housekeeping, and wire your net payouts directly on the 1st of every month.'
    }
  ];

  const faqs = [
    {
      q: 'How close are Hostayy serviced residences to Yashobhoomi (IICC)?',
      a: 'All our residences are located in Dwarka Sector 23, situated just 3 to 5 minutes by car or short walk from Yashobhoomi (IICC - India International Convention & Expo Centre) in Sector 25, and only 10 minutes from IGI Airport Terminal 3.'
    },
    {
      q: 'Are Hostayy apartments available for monthly and long-term corporate leases?',
      a: 'Yes! We specialize in flexible monthly, multi-month, and annual corporate leases for 1, 2, and 3 BHK apartments. All-inclusive quotations cover modular kitchen appliances, 300 Mbps mesh Wi-Fi, regular housekeeping, power backup, and utility management with zero brokerage.'
    },
    {
      q: 'Can companies receive GST invoices for corporate tax and input credit?',
      a: 'Yes, absolutely. We issue formal GST-compliant business invoices for all corporate and business stays so your organization can claim full input tax credit (ITC) and process company reimbursements smoothly.'
    },
    {
      q: 'Are the kitchens fully equipped for daily self-catering and cooking?',
      a: 'Every 1, 2, and 3 BHK residence features a fully functional modular kitchen complete with induction/gas stoves, microwave oven, refrigerator, RO drinking water purifier, cookware, and dinnerware.'
    },
    {
      q: 'How do I request a custom long-stay quotation?',
      a: 'Simply click "Request Long-Stay Quote" on any residence or message Hostayy on WhatsApp at +91 9217680108 with your move-in date, expected duration, and team size. We share real-time quotations, floor layouts, and photos within minutes.'
    }
  ];

  return (
    <section className="section-pad" id="how-it-works" style={{ backgroundColor: '#fff', padding: '90px 0' }}>
      <div className="container">
        {/* Process Header */}
        <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: '45px' }}>
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">OPERATIONAL PROCESS</span>
          </div>
          <h2 className="section-title__title title-animation">
            The Three-Step <span>Onboarding Journey</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '15px auto 0', color: 'var(--hotelux-gray)', fontSize: '15.5px', lineHeight: '1.7' }}>
            From initial property feasibility to hands-off monthly payouts, we ensure transparent, high-performance property management.
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
            <span className="section-tag" style={{ color: 'var(--hotelux-base)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, fontSize: '12px' }}>
              Common Enquiries
            </span>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: 'var(--hotelux-font-two)' }}>
              Frequently Asked Questions
            </h3>
            <p className="section-subtitle" style={{ color: 'var(--hotelux-gray)', fontSize: '15px' }}>
              Everything you need to know about reserving a 1, 2, or 3 BHK residence near Yashobhoomi or partnering your property with Hostayy.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`} style={{ marginBottom: '14px', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                  <button 
                    className="faq-question" 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 22px', background: isOpen ? '#fcfbfa' : '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 600, fontSize: '15.5px', color: '#191628' }}
                  >
                    <span>{faq.q}</span>
                    <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ color: 'var(--hotelux-base)', fontSize: '14px' }}></i>
                  </button>
                  {isOpen && (
                    <div className="faq-answer" style={{ padding: '16px 22px 22px', backgroundColor: '#fcfbfa', borderTop: '1px solid #f1f5f9', color: '#475569', fontSize: '14.5px', lineHeight: '1.7' }}>
                      <p style={{ margin: 0 }}>{faq.a}</p>
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
