'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, getOwnerWhatsAppLink } from '../data/properties';

export default function PatronSection() {
  const [bhkType, setBhkType] = useState('2 BHK');
  const [estMonthlyGross, setEstMonthlyGross] = useState(140000);
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerLocation, setOwnerLocation] = useState('Dwarka Sector 23 (Near Yashobhoomi)');
  const [ownerConfig, setOwnerConfig] = useState('2 BHK');

  // Calculation parameters based on OYO Patron yield benchmarks
  const managementFee = Math.round(estMonthlyGross * 0.15); // Performance-based 15% operations fee
  const netOwnerPayout = estMonthlyGross - managementFee;
  const annualGross = estMonthlyGross * 12;
  const annualNet = netOwnerPayout * 12;

  // Traditional lease comparison benchmark
  const traditionalMonthlyRent = {
    '1 BHK': 24000,
    '2 BHK': 38000,
    '3 BHK': 58000,
    '4+ BHK / Villa': 90000
  }[bhkType] || 38000;

  const traditionalAnnualRent = traditionalMonthlyRent * 11; // 11-month lease with 1-month typical vacancy
  const annualNetSurplus = annualNet - traditionalAnnualRent;

  const handleBhkChange = (type, defaultGross) => {
    setBhkType(type);
    setEstMonthlyGross(defaultGross);
  };

  const handleLeadFormSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Mohit (Hostayy Patron), I want to list my property with Hostayy.
Name: ${ownerName || 'Property Owner'}
Phone: ${ownerPhone || 'Not provided'}
Location: ${ownerLocation}
Configuration: ${ownerConfig}
Please arrange a free property audit and revenue feasibility report.`;
    
    window.open(getOwnerWhatsAppLink({
      location: ownerLocation,
      propertyType: ownerConfig,
      message
    }), '_blank');
  };

  const sendYieldToWhatsApp = () => {
    window.open(getOwnerWhatsAppLink({
      location: "Delhi NCR / Dwarka",
      propertyType: bhkType,
      monthlyYield: `Est. Gross: ₹${estMonthlyGross.toLocaleString('en-IN')}/mo (Net Payout: ₹${netOwnerPayout.toLocaleString('en-IN')}/mo)`,
      message: `Projected Annual Net Payout: ₹${annualNet.toLocaleString('en-IN')}/yr (Extra ₹${annualNetSurplus.toLocaleString('en-IN')}/yr vs traditional lease). I would like to schedule a free Hostayy Patron property audit.`
    }), '_blank');
  };

  const comparisonRows = [
    {
      dimension: 'Monthly Rental Yield',
      traditional: 'Fixed ₹25K–₹55K/month. Zero inflation upside.',
      hostayy: '₹45K–₹1.45L+/month. Dynamic revenue with up to 2.5x net payout.'
    },
    {
      dimension: 'Tenant Inconvenience',
      traditional: '15–20 hours/month spent chasing rent, dealing with complaints & repairs.',
      hostayy: '100% Hands-off. Turnkey housekeeping, guest check-in & linen care.'
    },
    {
      dimension: 'Property Upkeep',
      traditional: 'Unchecked wear & tear. Painting & cleaning only once in 1–2 years.',
      hostayy: 'Hospital-grade sanitization & 400TC pressed linens after every single stay.'
    },
    {
      dimension: 'Tenant Screening',
      traditional: 'Risk of unauthorized subletting, non-paying tenants, or lock-in disputes.',
      hostayy: 'Strict Aadhaar/Passport verification, vetted MNC corporate executives & zero-party policy.'
    },
    {
      dimension: 'Payout Regularity',
      traditional: 'Delayed payments, bounced cheques, and awkward rent follow-ups.',
      hostayy: 'Guaranteed 1st-of-month bank transfers with full digital itemized statement.'
    },
    {
      dimension: 'Personal Owner Stays',
      traditional: 'Zero access for 11 to 36 months while locked with a tenant.',
      hostayy: 'Unlimited personal stays. Block dates anytime via WhatsApp for family visits.'
    }
  ];

  return (
    <section className="patron-section" id="patron">
      <div className="container">
        {/* Patron Hero Banner modeled on patron.oyorooms.com */}
        <div className="patron-hero-card">
          <div className="patron-hero-badge">
            <i className="fa-solid fa-house-chimney-user"></i>
            <span>HOSTAYY PATRON &bull; PROPERTY OWNER PARTNERSHIP</span>
          </div>

          <h2 className="patron-hero-title">
            Partner Your Apartment With Hostayy <br />
            <span>Earn Up to 2.5x Higher Rental Income</span>
          </h2>

          <p className="patron-hero-desc">
            Modelled on the world-class OYO Patron benchmark. Transform your 1, 2, or 3 BHK flat into a premium corporate serviced residence near Yashobhoomi (IICC) and IGI Airport. We handle 100% of guest management, cleaning, and maintenance while you receive guaranteed monthly payouts.
          </p>

          {/* Quick Metrics Bar */}
          <div className="patron-metrics-row">
            <div className="patron-metric-box">
              <strong>1.8x – 2.5x</strong>
              <span>Higher Net Yield vs 11-Mo Lease</span>
            </div>
            <div className="patron-metric-box">
              <strong>100%</strong>
              <span>Hands-Off Turnkey Operations</span>
            </div>
            <div className="patron-metric-box">
              <strong>0% Squatting</strong>
              <span>Vetted Corporate &amp; Expat Guests</span>
            </div>
            <div className="patron-metric-box">
              <strong>1st of Month</strong>
              <span>Guaranteed Direct Bank Payouts</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Hostayy Patron */}
        <div className="patron-pillars-header">
          <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>WHY PROPERTY OWNERS CHOOSE HOSTAYY PATRON</span>
          <h3 style={{ color: '#111827', fontWeight: 800 }}>Engineered to Maximize Returns While Protecting Your Asset</h3>
        </div>

        <div className="patron-pillars-grid">
          <div className="patron-pillar-card" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
            <div className="pillar-icon-box" style={{ background: '#ecfdf5', color: '#10b981' }}>
              <i className="fa-solid fa-chart-line-up"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>Higher Revenue &amp; Dynamic Pricing</h4>
            <p style={{ color: '#374151' }}>
              Unlike traditional fixed leases, our dynamic pricing algorithms capture premium nightly &amp; monthly corporate demand driven by Yashobhoomi IICC conventions and airport proximity.
            </p>
          </div>

          <div className="patron-pillar-card" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
            <div className="pillar-icon-box" style={{ background: '#fff7ed', color: '#ea580c' }}>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>100% Hands-Off Operations</h4>
            <p style={{ color: '#374151' }}>
              No more tenant phone calls or maintenance headaches. We manage 400TC linen turnover, daily housekeeping, 24/7 guest check-in, key handover, and proactive repairs.
            </p>
          </div>

          <div className="patron-pillar-card" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
            <div className="pillar-icon-box" style={{ background: '#eff6ff', color: '#3b82f6' }}>
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>Strict ID Vetting &amp; Asset Safety</h4>
            <p style={{ color: '#374151' }}>
              Mandatory government ID verification (Aadhaar/Passport), corporate guest profiles, zero-party tolerance, and a comprehensive property damage protection guarantee.
            </p>
          </div>

          <div className="patron-pillar-card" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
            <div className="pillar-icon-box" style={{ background: '#fff7ed', color: '#ea580c' }}>
              <i className="fa-solid fa-vault"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>Guaranteed 1st-of-Month Payouts</h4>
            <p style={{ color: '#374151' }}>
              Earn with total peace of mind. Receive automated direct bank deposits by the 1st of every calendar month accompanied by a fully transparent digital performance ledger.
            </p>
          </div>
        </div>

        {/* 3-Step Simple Onboarding Process (OYO Patron Pattern) */}
        <div className="patron-onboarding-wrap" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
          <div className="patron-pillars-header text-center" style={{ marginBottom: '32px' }}>
            <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>3-STEP SIMPLE ONBOARDING</span>
            <h3 style={{ color: '#111827', fontWeight: 800 }}>From Registration to First Monthly Payout in 48 Hours</h3>
          </div>

          <div className="patron-steps-grid">
            <div className="patron-step-card" style={{ background: '#fffaf5', border: '1px solid #fed7aa' }}>
              <div className="step-num-badge" style={{ background: '#ea580c', color: '#ffffff' }}>1</div>
              <h4 style={{ color: '#111827', fontWeight: 800 }}>Share Property Details</h4>
              <p style={{ color: '#374151' }}>Tell us your apartment location in Delhi NCR/Dwarka and BHK configuration via WhatsApp or our online form.</p>
            </div>

            <div className="patron-step-card" style={{ background: '#fffaf5', border: '1px solid #fed7aa' }}>
              <div className="step-num-badge" style={{ background: '#ea580c', color: '#ffffff' }}>2</div>
              <h4 style={{ color: '#111827', fontWeight: 800 }}>Free On-Site Audit &amp; Projection</h4>
              <p style={{ color: '#374151' }}>Superhost Mohit Chaudhary conducts a personalized property audit and provides an exact revenue feasibility report.</p>
            </div>

            <div className="patron-step-card" style={{ background: '#fffaf5', border: '1px solid #fed7aa' }}>
              <div className="step-num-badge" style={{ background: '#ea580c', color: '#ffffff' }}>3</div>
              <h4 style={{ color: '#111827', fontWeight: 800 }}>Go Live &amp; Start Earning</h4>
              <p style={{ color: '#374151' }}>We stage your flat, take architectural photography, onboard corporate clients, and transfer your first payout on the 1st.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Yield Estimator & Owner Lead Form Grid */}
        <div className="patron-calculator-lead-grid">
          {/* Left Column: Interactive Yield Estimator */}
          <div className="patron-calc-card" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                <i className="fa-solid fa-calculator"></i>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '18px', color: '#111827', fontWeight: 800 }}>Hostayy Patron Yield Estimator</h4>
                <span style={{ fontSize: '12px', color: '#374151', fontWeight: 500 }}>Calculate your projected monthly net earnings</span>
              </div>
            </div>

            {/* BHK Selector */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#111827', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Select Configuration
              </label>
              <div className="patron-bhk-pills">
                {[
                  { label: '1 BHK', gross: 85000 },
                  { label: '2 BHK', gross: 140000 },
                  { label: '3 BHK', gross: 220000 },
                  { label: '4+ BHK / Villa', gross: 320000 }
                ].map(item => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleBhkChange(item.label, item.gross)}
                    className={`patron-bhk-btn ${bhkType === item.label ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Range Slider */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#374151' }}>Estimated Monthly Gross Revenue</span>
                <span style={{ fontSize: '17px', fontWeight: 800, color: '#ea580c' }}>
                  ₹{estMonthlyGross.toLocaleString('en-IN')} / mo
                </span>
              </div>
              <input 
                type="range" 
                min="60000" 
                max="450000" 
                value={estMonthlyGross} 
                step="5000" 
                className="tabcalc-slider"
                onChange={(e) => setEstMonthlyGross(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#ea580c' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#374151', marginTop: '6px' }}>
                <span>₹60,000 (Min)</span>
                <span>₹1,80,000 (Avg)</span>
                <span>₹4,50,000 (Prime)</span>
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="patron-calc-results">
              <div className="patron-result-item highlight" style={{ background: '#ea580c', border: '1px solid #c2410c', color: '#ffffff' }}>
                <span className="res-label" style={{ color: '#ffffff', opacity: 0.95, fontWeight: 700 }}>Monthly Net Bank Payout</span>
                <strong className="res-val" style={{ color: '#ffffff', fontWeight: 800 }}>₹{netOwnerPayout.toLocaleString('en-IN')}</strong>
                <span className="res-note" style={{ color: '#fff7ed', fontWeight: 500 }}>Direct transfer on 1st of every month</span>
              </div>

              <div className="patron-result-item" style={{ background: '#fffaf5', border: '1px solid #fed7aa' }}>
                <span className="res-label" style={{ color: '#374151', fontWeight: 700 }}>Annual Net Projection</span>
                <strong className="res-val" style={{ color: '#111827', fontWeight: 800 }}>₹{annualNet.toLocaleString('en-IN')}</strong>
                <span className="res-note" style={{ color: '#374151' }}>Zero broker fees or vacancy loss</span>
              </div>
            </div>

            {/* Extra Net Income vs Traditional Rent */}
            <div className="patron-surplus-banner" style={{ background: '#fff7ed', border: '1px solid #fed7aa' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ea580c', fontWeight: 800 }}>
                  PATRON ADVANTAGE
                </span>
                <p style={{ margin: '2px 0 0', fontSize: '13.5px', color: '#111827', fontWeight: 700 }}>
                  You earn approx. <span style={{ color: '#16a34a', fontWeight: 800 }}>+₹{annualNetSurplus.toLocaleString('en-IN')} extra/year</span> vs traditional lease!
                </p>
              </div>
            </div>

            <button 
              type="button"
              className="thm-btn-wa" 
              style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '14px', marginTop: '16px' }} 
              onClick={sendYieldToWhatsApp}
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>Send Projection to Mohit Chaudhary</span>
            </button>
          </div>

          {/* Right Column: Fast Callback & Property Registration Form */}
          <div className="patron-lead-card" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '18px', color: '#111827', fontWeight: 800 }}>List Your Property (Patron)</h4>
                <span style={{ fontSize: '12px', color: '#374151', fontWeight: 500 }}>Request a free feasibility inspection &amp; earnings plan</span>
              </div>
            </div>

            <form onSubmit={handleLeadFormSubmit} className="patron-lead-form">
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Rajesh Kumar" 
                  value={ownerName} 
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="patron-input"
                  style={{ border: '1px solid #fed7aa', color: '#111827' }}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                  Phone / WhatsApp Number
                </label>
                <input 
                  type="tel" 
                  placeholder="e.g. +91 98765 43210" 
                  value={ownerPhone} 
                  onChange={(e) => setOwnerPhone(e.target.value)}
                  className="patron-input"
                  style={{ border: '1px solid #fed7aa', color: '#111827' }}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                  Property Location in Delhi NCR
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Sector 23 Dwarka, Aerocity Corridor, etc." 
                  value={ownerLocation} 
                  onChange={(e) => setOwnerLocation(e.target.value)}
                  className="patron-input"
                  style={{ border: '1px solid #fed7aa', color: '#111827' }}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                  Apartment Configuration
                </label>
                <select 
                  value={ownerConfig} 
                  onChange={(e) => setOwnerConfig(e.target.value)}
                  className="patron-input"
                  style={{ border: '1px solid #fed7aa', color: '#111827' }}
                >
                  <option value="1 BHK Serviced Apartment">1 BHK Serviced Apartment</option>
                  <option value="2 BHK Executive Flat">2 BHK Executive Flat</option>
                  <option value="3 BHK Signature Floor">3 BHK Signature Floor</option>
                  <option value="4+ BHK Luxury Villa / Penthouse">4+ BHK Luxury Villa / Penthouse</option>
                  <option value="Entire Residential Floor / Multi-unit">Entire Floor / Multiple Units</option>
                </select>
              </div>

              <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', padding: '12px 14px', borderRadius: '8px', marginBottom: '18px', fontSize: '12px', color: '#374151', lineHeight: 1.5 }}>
                <i className="fa-solid fa-lock" style={{ color: '#16a34a', marginRight: '6px' }}></i>
                Strict owner privacy. Your details are shared only with founder Mohit Chaudhary for direct consultation.
              </div>

              <button 
                type="submit" 
                className="thm-btn" 
                style={{ width: '100%', justifyContent: 'center', padding: '14px 20px', fontSize: '14px', background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}
              >
                <i className="fa-solid fa-paper-plane"></i>
                <span>Submit &amp; Schedule Free Audit</span>
              </button>
            </form>
          </div>
        </div>

        {/* Traditional 11-Month Lease vs Hostayy Patron Comparison Table */}
        <div className="patron-comparison-wrap">
          <div className="patron-pillars-header text-center" style={{ marginBottom: '28px' }}>
            <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>PERFORMANCE BENCHMARK</span>
            <h3 style={{ color: '#111827', fontWeight: 800 }}>Traditional 11-Month Lease vs. Hostayy Patron Partnership</h3>
          </div>

          <div className="compare-wrap">
            <div className="compare-row head" style={{ background: '#ea580c', color: '#ffffff' }}>
              <div className="compare-cell" style={{ color: '#ffffff' }}>Operational Dimension</div>
              <div className="compare-cell without" style={{ color: '#ffffff' }}>Traditional 11-Month Tenant Lease</div>
              <div className="compare-cell with" style={{ color: '#ffffff' }}>Hostayy Patron Partnership</div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div key={idx} className="compare-row">
                <div className="compare-cell label" style={{ color: '#111827', fontWeight: 700 }}>{row.dimension}</div>
                <div className="compare-cell without" style={{ color: '#374151' }}>
                  <span className="compare-x">✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className="compare-cell with" style={{ color: '#111827' }}>
                  <span className="compare-check" style={{ color: '#16a34a' }}>✓</span>
                  <span><strong>{row.hostayy}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Personal Stays Privilege Strip */}
        <div className="patron-owner-stay-strip" style={{ background: '#fffaf5', border: '1.5px solid #fed7aa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
              <i className="fa-solid fa-umbrella-beach"></i>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', color: '#111827', fontWeight: 800 }}>
                Unlimited Personal Stays for Property Owners
              </h4>
              <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#374151' }}>
                Visiting Delhi with your family? Enjoy free personal stays in your own apartment anytime it isn't booked. Simply message Mohit on WhatsApp to block your dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

