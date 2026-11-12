'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, getHostayyWhatsAppLink, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('calc');
  const [bhkType, setBhkType] = useState('2 BHK Executive');
  const [estMonthlyGross, setEstMonthlyGross] = useState(140000);

  // Guest booking tab states
  const [selectedStay, setSelectedStay] = useState('Velora · 1 BHK (3 mins to Yashobhoomi IICC)');
  const [stayDuration, setStayDuration] = useState('1 - 3 Months (Corporate Monthly)');
  const [occupants, setOccupants] = useState('1 - 2 Guests / Solo Executive');

  // Calculations for owner yield
  const managementFee = Math.round(estMonthlyGross * 0.15); // Performance-based 15% like Cheap&Luxury
  const netOwnerPayout = estMonthlyGross - managementFee;
  const annualGross = estMonthlyGross * 12;
  const annualNet = netOwnerPayout * 12;

  const sendYieldToWhatsApp = () => {
    window.open(getOwnerWhatsAppLink({
      location: "Delhi NCR / Dwarka",
      propertyType: bhkType,
      monthlyYield: `Est. Gross: ₹${estMonthlyGross.toLocaleString('en-IN')}/mo (Net Payout: ₹${netOwnerPayout.toLocaleString('en-IN')}/mo)`,
      message: `Projected Annual Net Payout: ₹${annualNet.toLocaleString('en-IN')}/yr. I would like an official feasibility assessment to partner my property with Hostayy.`
    }), '_blank');
  };

  const sendQuickGuestBooking = () => {
    window.open(getGuestWhatsAppLink({
      property: selectedStay,
      duration: stayDuration,
      guests: occupants,
      purpose: 'Long-term / monthly serviced stay near Yashobhoomi IICC'
    }), '_blank');
  };

  const handleBhkChange = (type, defaultGross) => {
    setBhkType(type);
    setEstMonthlyGross(defaultGross);
  };

  return (
    <section className="calc-section" id="calculator" style={{ backgroundColor: '#fff', padding: '50px 0 60px' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1" style={{ marginBottom: '40px' }}>
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">FINANCIAL PROJECTIONS &amp; ESTIMATOR</span>
          </div>
          <h2 className="section-title__title title-animation">
            Monthly Yield &amp; <span>Long-Stay Estimator</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '14px auto 0', color: 'var(--hotelux-gray)', fontSize: '15px', lineHeight: '1.7' }}>
            Evaluate projected monthly returns for property owners or request custom corporate leasing packages for 1, 2, and 3 BHK residences near Yashobhoomi (IICC).
          </p>
        </div>

        <div className="tab-widget" style={{ maxWidth: '820px', margin: '0 auto' }}>
          {/* Dual Tab Switcher */}
          <div className="tab-bar">
            <button 
              className={`tab-btn ${activeTab === 'calc' ? 'active' : ''}`}
              onClick={() => setActiveTab('calc')}
            >
              <i className="fa-solid fa-calculator"></i>
              <span>Property Owner Yield Estimator</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'book' ? 'active' : ''}`}
              onClick={() => setActiveTab('book')}
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Guest Long-Stay Quotation</span>
            </button>
          </div>

          <div className="tab-panel-wrap">
            {/* Tab 1: Yield & Commission Calculator (For Owners) */}
            {activeTab === 'calc' && (
              <div className="tab-panel active calc-tab-panel">
                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#191628', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Select Property Configuration
                  </label>
                  <div className="bhk-calc-selector-grid" style={{ gap: '10px' }}>
                    {[
                      { label: '1 BHK Suite', gross: 85000 },
                      { label: '2 BHK Executive', gross: 140000 },
                      { label: '3 BHK Signature', gross: 220000 },
                      { label: '4+ BHK / Villa', gross: 320000 }
                    ].map(item => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleBhkChange(item.label, item.gross)}
                        className={`calc-bhk-btn ${bhkType === item.label ? 'active' : ''}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="tabcalc-controls" style={{ marginBottom: '25px' }}>
                  <div className="tabcalc-field">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                      <span className="tabcalc-field-label" style={{ fontWeight: 600, color: '#191628' }}>Estimated Monthly Gross Revenue</span>
                      <div className="tabcalc-field-val" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--hotelux-base)' }}>
                        ₹{estMonthlyGross.toLocaleString('en-IN')} / mo
                      </div>
                    </div>
                    <input 
                      type="range" 
                      min="60000" 
                      max="450000" 
                      value={estMonthlyGross} 
                      step="5000" 
                      className="tabcalc-slider"
                      onChange={(e) => setEstMonthlyGross(Number(e.target.value))}
                      style={{ width: '100%' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748B', marginTop: '6px' }}>
                      <span>₹60,000 (Min)</span>
                      <span>₹2,00,000 (Average)</span>
                      <span>₹4,50,000 (Prime)</span>
                    </div>
                  </div>
                </div>

                {/* Output Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Monthly Net Payout (15% Ops)</span>
                    <strong style={{ display: 'block', fontSize: '1.4rem', color: '#10b981', marginTop: '4px' }}>
                      ₹{netOwnerPayout.toLocaleString('en-IN')}
                    </strong>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>Direct to your bank on the 1st</span>
                  </div>

                  <div style={{ background: '#fdfbf9', border: '1px solid #f2ece6', padding: '16px', borderRadius: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase' }}>Estimated Annual Net</span>
                    <strong style={{ display: 'block', fontSize: '1.4rem', color: 'var(--hotelux-black)', marginTop: '4px' }}>
                      ₹{annualNet.toLocaleString('en-IN')}
                    </strong>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>40%–80% higher than traditional leases</span>
                  </div>
                </div>

                <button 
                  type="button"
                  className="thm-btn thm-btn-wa" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '14px' }} 
                  onClick={sendYieldToWhatsApp}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Send Projection &amp; Discuss Partnership with Mohit</span>
                </button>
              </div>
            )}

            {/* Tab 2: Long-Term Quotation for Guests */}
            {activeTab === 'book' && (
              <div className="tab-panel active calc-tab-panel">
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#191628', marginBottom: '6px' }}>
                    Select Residence Configuration
                  </label>
                  <select 
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                    value={selectedStay}
                    onChange={(e) => setSelectedStay(e.target.value)}
                  >
                    <option value="Velora · 1 BHK (3 mins to Yashobhoomi IICC)">Velora · 1 BHK Luxury Suite (3 Mins to Yashobhoomi)</option>
                    <option value="Azura · 2 BHK (Aerocity / Yashobhoomi Corridor)">Azura · 2 BHK Executive Residence (Aerocity Corridor)</option>
                    <option value="Verde · 3 BHK (Prime Golf Belt / Yashobhoomi)">Verde · 3 BHK Signature Floor (Prime Golf Belt)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#191628', marginBottom: '6px' }}>
                    Expected Stay Duration
                  </label>
                  <select 
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                    value={stayDuration}
                    onChange={(e) => setStayDuration(e.target.value)}
                  >
                    <option value="1 - 3 Months (Corporate Monthly)">1 - 3 Months (Corporate Monthly)</option>
                    <option value="3 - 6 Months (Extended Project Stay)">3 - 6 Months (Extended Project Stay)</option>
                    <option value="6 - 12 Months (Long Term Lease)">6 - 12 Months (Long Term Lease)</option>
                    <option value="15 - 30 Days (Exhibition / Event Stay)">15 - 30 Days (Exhibition / Event Stay)</option>
                    <option value="Weekly (7 - 14 Days)">Weekly (7 - 14 Days)</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#191628', marginBottom: '6px' }}>
                    Occupants / Team Members
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. 1 Executive, or 2 Adults + 1 Child" 
                    value={occupants}
                    onChange={(e) => setOccupants(e.target.value)}
                    style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}
                  />
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px 18px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px', color: '#475569' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#10b981', marginRight: '6px' }}></i>
                  All-inclusive monthly quotations include: 300 Mbps mesh Wi-Fi, daily housekeeping, electricity/water, 100% power backup &amp; zero brokerage.
                </div>

                <button 
                  type="button"
                  className="thm-btn thm-btn-wa" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '14px' }} 
                  onClick={sendQuickGuestBooking}
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Request Custom Long-Stay Quotation on WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
