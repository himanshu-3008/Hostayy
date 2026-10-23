'use client';

import React from 'react';

export default function Comparison() {
  const comparisonRows = [
    {
      label: 'Net Rental Yield & Income',
      without: 'Fixed 3%–4% yield, eroded by inflation & vacancy gaps',
      withText: '8%–14% dynamic yield (40%–80% higher net payout)'
    },
    {
      label: 'Owner Time & Effort',
      without: '15–20 hours/month dealing with tenant calls & rent follow-ups',
      withText: '100% hands-off — We manage all bookings, check-ins & queries'
    },
    {
      label: 'Property Upkeep & Cleanliness',
      without: 'Tenants cause silent wear; deep cleaning only once per year',
      withText: 'Hospital-grade turnover cleaning & pressed 400TC linens'
    },
    {
      label: 'Guest Screening & Asset Safety',
      without: 'High risk of squatting, subletting, or unauthorized parties',
      withText: 'Strict Aadhaar/Passport vetting & zero-party enforcement'
    },
    {
      label: 'OTA Calendar Synchronization',
      without: 'Single platform lock-in or double-booking calendar chaos',
      withText: 'Instant multi-channel sync (Airbnb, Booking.com, VIP direct)'
    },
    {
      label: 'Personal Owner Stay Rights',
      without: 'Zero access for 11–36 months while locked with tenant',
      withText: 'Unlimited personal stays — Block dates anytime via WhatsApp'
    },
    {
      label: 'Payout Timing & Reporting',
      without: 'Chasing delayed cheques with zero itemized transparency',
      withText: 'Guaranteed 1st-of-month bank transfers with ledger audit'
    }
  ];

  return (
    <section className="compare-section" id="comparison" style={{ backgroundColor: '#fcfbfa', padding: '45px 0 55px' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: '45px' }}>
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Performance Comparison</span>
          </div>
          <h2 className="section-title__title title-animation">
            Traditional Leasing versus <span>Hostayy Partnership</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '15px auto 0', color: 'var(--hotelux-gray)', fontSize: '15.5px', lineHeight: '1.7' }}>
            See how turnkey hospitality outperforms traditional 11-month tenant leases and unmanaged vacation rentals in Delhi NCR.
          </p>
        </div>

        <div className="compare-wrap">
          {/* Table Header */}
          <div className="compare-row head">
            <div className="compare-cell">Core Operational Dimension</div>
            <div className="compare-cell without">Traditional Lease / Self-Managing</div>
            <div className="compare-cell with">Turnkey Hostayy Management</div>
          </div>

          {comparisonRows.map((row, idx) => (
            <div key={idx} className="compare-row">
              <div className="compare-cell label">{row.label}</div>
              <div className="compare-cell without">
                <span className="compare-x">✕</span>
                <span>{row.without}</span>
              </div>
              <div className="compare-cell with">
                <span className="compare-check">✓</span>
                <span><strong>{row.withText}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
