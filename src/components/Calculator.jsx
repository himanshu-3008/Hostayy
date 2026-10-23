'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink } from '../data/properties';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('calc');
  const [nights, setNights] = useState(22);
  const [rate, setRate] = useState(6500);

  // Guest booking tab states
  const [selectedStay, setSelectedStay] = useState('Velora by Hostayy (6 Rooms • South Delhi)');
  const [guestCount, setGuestCount] = useState('7 - 12 Guests');
  const [stayPurpose, setStayPurpose] = useState('Family Holiday');

  // Calculations
  const monthlyGross = nights * rate;
  const otaFeeSaved = Math.round(monthlyGross * 0.18);
  const annualGross = monthlyGross * 12;
  const annualSaved = otaFeeSaved * 12;

  const sendYieldToWhatsApp = () => {
    const msg = `Hi Mohit (Hostayy), I used the Yield Calculator on your website. Here are my projections:
- Occupancy: ${nights} Nights / month
- Nightly Rate: ₹${rate.toLocaleString('en-IN')}
- Projected Monthly Revenue: ₹${monthlyGross.toLocaleString('en-IN')}
- Annual Revenue: ₹${annualGross.toLocaleString('en-IN')}
- Estimated Annual OTA Commission Saved: ₹${annualSaved.toLocaleString('en-IN')}

Please share an official feasibility assessment for my property in Delhi NCR.`;
    window.open(getHostayyWhatsAppLink(msg), '_blank');
  };

  const sendQuickGuestBooking = () => {
    const msg = `Hi Hostayy, I'd like to check VIP direct availability:
- Property: ${selectedStay}
- Guests: ${guestCount}
- Occasion: ${stayPurpose}

Please share available dates and direct VIP rates.`;
    window.open(getHostayyWhatsAppLink(msg), '_blank');
  };

  return (
    <section className="calc-section" id="calculator" style={{ backgroundColor: '#fff', padding: '45px 0 55px' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: '45px' }}>
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Financial Projections</span>
          </div>
          <h2 className="section-title__title title-animation">
            Property Yield &amp; <span>Savings Estimator</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '15px auto 0', color: 'var(--hotelux-gray)', fontSize: '15.5px', lineHeight: '1.7' }}>
            Evaluate projected monthly revenues, occupancy yields, and direct booking savings with Hostayy's turnkey short-term rental management across Delhi NCR.
          </p>
        </div>

        <div className="tab-widget">
          {/* Dual Tab Switcher */}
          <div className="tab-bar">
            <button 
              className={`tab-btn ${activeTab === 'calc' ? 'active' : ''}`}
              onClick={() => setActiveTab('calc')}
            >
              <i className="fa-solid fa-calculator"></i>
              <span>Property Yield Calculator</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'book' ? 'active' : ''}`}
              onClick={() => setActiveTab('book')}
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Direct Stay VIP Reservation</span>
            </button>
          </div>

          <div className="tab-panel-wrap">
            {/* Tab 1: Yield & Commission Calculator (For Owners) */}
            {activeTab === 'calc' && (
              <div className="tab-panel active">
                <div className="tabcalc-controls">
                  {/* Slider 1: Occupancy Nights */}
                  <div className="tabcalc-field">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span className="tabcalc-field-label">Occupied Nights Per Month</span>
                      <div className="tabcalc-field-val">{nights} Nights</div>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="30" 
                      value={nights} 
                      step="1" 
                      className="tabcalc-slider"
                      onChange={(e) => setNights(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748B', marginTop: '6px' }}>
                      <span>10 Nights (Min)</span>
                      <span>22 Nights (Average)</span>
                      <span>30 Nights (Full)</span>
                    </div>
                  </div>

                  {/* Slider 2: Average Nightly Rate */}
                  <div className="tabcalc-field">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span className="tabcalc-field-label">Average Nightly Villa / Suite Rate</span>
                      <div className="tabcalc-field-val">₹{rate.toLocaleString('en-IN')} / night</div>
                    </div>
                    <input 
                      type="range" 
                      min="5500" 
                      max="7000" 
                      value={rate} 
                      step="100" 
                      className="tabcalc-slider"
                      onChange={(e) => setRate(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748B', marginTop: '6px' }}>
                      <span>₹5,500 (Base VIP)</span>
                      <span>₹6,500 (Average)</span>
                      <span>₹7,000 (Peak Rate)</span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Result Card */}
                <div className="tabcalc-result">
                  <div className="tabcalc-result-label">Estimated Monthly Owner Revenue</div>
                  <div className="tabcalc-result-val">₹{monthlyGross.toLocaleString('en-IN')} <span>/ month</span></div>
                  <div className="tabcalc-result-sub">
                    🎉 Includes ₹{otaFeeSaved.toLocaleString('en-IN')}/mo saved on 18% OTA platform commissions
                  </div>
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed rgba(16, 185, 129, 0.3)', display: 'flex', justifyContent: 'space-around', fontSize: '13px', flexWrap: 'wrap', gap: '8px' }}>
                    <div><span style={{ color: 'var(--text-muted)' }}>Projected Annual Net:</span> <b style={{ color: 'var(--text-primary)' }}>₹{annualGross.toLocaleString('en-IN')} / yr</b></div>
                    <div><span style={{ color: 'var(--text-muted)' }}>Annual Saved Fees:</span> <b style={{ color: 'var(--accent)' }}>₹{annualSaved.toLocaleString('en-IN')} / yr</b></div>
                  </div>
                </div>

                <div style={{ marginTop: '22px', textAlign: 'center' }}>
                  <button className="btn-primary btn-xl" style={{ width: '100%', justifyContent: 'center' }} onClick={sendYieldToWhatsApp}>
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }}></i>
                    <span>Get Official Property Feasibility on WhatsApp</span>
                  </button>
                  <div style={{ fontSize: '12px', color: '#64748B', marginTop: '8px' }}>
                    Direct consultation with Mohit Chaudhary • Guaranteed 24-hr feasibility assessment
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Direct Stay VIP Reservation (For Guests) */}
            {activeTab === 'book' && (
              <div className="tab-panel active">
                <div className="tabcalc-controls">
                  <div className="tabcalc-field">
                    <span className="tabcalc-field-label">Select Preferred Residence</span>
                    <select 
                      className="form-select" 
                      style={{ marginTop: '6px', width: '100%' }}
                      value={selectedStay}
                      onChange={(e) => setSelectedStay(e.target.value)}
                    >
                      <option value="Velora by Hostayy (6 Rooms • South Delhi)">Velora by Hostayy (6 Rooms • South Delhi)</option>
                      <option value="Verde by Hostayy (8 Rooms • Chhatarpur)">Verde by Hostayy (8 Rooms • Chhatarpur)</option>
                      <option value="Azura by Hostayy (4 Rooms • South Delhi)">Azura by Hostayy (4 Rooms • South Delhi)</option>
                      <option value="Flexible / Suggest Best Available">Flexible / Suggest Best Available for My Dates</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="tabcalc-field">
                      <span className="tabcalc-field-label">Guest Count</span>
                      <select 
                        className="form-select" 
                        style={{ marginTop: '6px', width: '100%' }}
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                      >
                        <option value="2 - 6 Guests">2 – 6 Guests (Couples / Small)</option>
                        <option value="7 - 12 Guests">7 – 12 Guests (Family Reunion)</option>
                        <option value="13 - 22 Guests">13 – 22 Guests (Grand Group)</option>
                      </select>
                    </div>
                    <div className="tabcalc-field">
                      <span className="tabcalc-field-label">Occasion / Stay Type</span>
                      <select 
                        className="form-select" 
                        style={{ marginTop: '6px', width: '100%' }}
                        value={stayPurpose}
                        onChange={(e) => setStayPurpose(e.target.value)}
                      >
                        <option value="Family Holiday">Family Holiday</option>
                        <option value="Yashobhoomi IICC Convention">Yashobhoomi IICC Event</option>
                        <option value="Wedding Gathering">Wedding / Gathering</option>
                        <option value="Corporate Offsite">Corporate Offsite</option>
                        <option value="Transit Flight Layover">Transit / Flight Layover</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 77, 77, 0.06)', border: '1px solid rgba(255, 77, 77, 0.2)', borderRadius: '14px', padding: '16px 20px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <i className="fa-solid fa-gift text-coral" style={{ fontSize: '1.4rem' }}></i>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Direct Booking VIP Guarantee:</strong> Receive 10–15% lower rates than Airbnb/Booking.com, free early luggage drop-off, and direct host coordination with Mohit Chaudhary.
                    </div>
                  </div>
                </div>

                <button 
                  className="btn-primary btn-xl" 
                  style={{ width: '100%', justifyContent: 'center', background: 'var(--wa-green)', boxShadow: '0 10px 30px var(--wa-glow)' }} 
                  onClick={sendQuickGuestBooking}
                >
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.25rem' }}></i>
                  <span>Check VIP Availability on WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
