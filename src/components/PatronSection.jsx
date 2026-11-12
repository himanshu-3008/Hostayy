'use client';

import React from 'react';
import { HOSTAYY_CONFIG, getOwnerWhatsAppLink } from '../data/properties';

export default function PatronSection() {
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
    <section className="patron-section ambient-glow-wrapper luxury-grid-bg" id="patron" style={{ position: 'relative', padding: '65px 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Patron Hero Banner modeled on patron.oyorooms.com */}
        <div className="patron-hero-card luxury-glass-card" style={{ position: 'relative', borderRadius: '24px', padding: '45px 36px', boxShadow: '0 16px 45px rgba(234, 88, 12, 0.08)' }}>
          <div className="card-accent-bar-dark"></div>
          
          <div className="patron-hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-shield-halved badge-float" style={{ color: '#ea580c', fontSize: '15px' }}></i>
            <span>HOSTAYY PATRON &bull; OYO PATRON BENCHMARK &bull; PROPERTY OWNER PARTNERSHIP</span>
          </div>

          <h2 className="patron-hero-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.25, margin: '14px 0 16px' }}>
            Partner Your Apartment With Hostayy <br />
            <span style={{ color: '#ea580c' }}>Earn Up to 2.5x Higher Rental Income</span>
          </h2>

          <p className="patron-hero-desc" style={{ color: '#374151', fontSize: '15.5px', lineHeight: 1.7, maxWidth: '780px' }}>
            Modelled on the world-class OYO Patron benchmark. Transform your 1, 2, or 3 BHK flat into a premium corporate serviced residence near Yashobhoomi (IICC) and IGI Airport. We handle 100% of guest management, cleaning, and maintenance while you receive guaranteed monthly payouts.
          </p>

          {/* Quick Metrics Bar */}
          <div className="patron-metrics-row">
            <div className="patron-metric-box luxury-glass-card" style={{ borderRadius: '12px' }}>
              <strong style={{ color: '#ea580c' }}>1.8x – 2.5x</strong>
              <span>Higher Net Yield vs 11-Mo Lease</span>
            </div>
            <div className="patron-metric-box luxury-glass-card" style={{ borderRadius: '12px' }}>
              <strong style={{ color: '#16a34a' }}>100%</strong>
              <span>Hands-Off Turnkey Operations</span>
            </div>
            <div className="patron-metric-box luxury-glass-card" style={{ borderRadius: '12px' }}>
              <strong style={{ color: '#ea580c' }}>0% Squatting</strong>
              <span>Vetted Corporate &amp; Expat Guests</span>
            </div>
            <div className="patron-metric-box luxury-glass-card" style={{ borderRadius: '12px' }}>
              <strong style={{ color: '#111827' }}>1st of Month</strong>
              <span>Guaranteed Direct Bank Payouts</span>
            </div>
          </div>
        </div>

        {/* Animated Performance Marquee Strip (Designer Element) */}
        <div className="hostayy-ticker-wrap" style={{ margin: '30px 0 45px', borderRadius: '14px' }}>
          <div className="hostayy-ticker-track">
            <span className="hostayy-ticker-item"><i className="fa-solid fa-money-bill-trend-up" style={{ color: '#16a34a' }}></i> +40% Higher Rental Yield vs Traditional Lease</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-calendar-check" style={{ color: '#ea580c' }}></i> 100% Payouts Guaranteed on 1st of Every Month</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-shield-halved" style={{ color: '#16a34a' }}></i> Zero Vacancy Loss &bull; Complete Damage Protection</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-hotel" style={{ color: '#ea580c' }}></i> Turnkey 5-Star Hotel Care &bull; 400TC Pressed Linens</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-umbrella-beach" style={{ color: '#ea580c' }}></i> Unlimited Free Personal Stays for Property Owners</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            {/* Seamless loop */}
            <span className="hostayy-ticker-item"><i className="fa-solid fa-money-bill-trend-up" style={{ color: '#16a34a' }}></i> +40% Higher Rental Yield vs Traditional Lease</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-calendar-check" style={{ color: '#ea580c' }}></i> 100% Payouts Guaranteed on 1st of Every Month</span>
            <span className="hostayy-ticker-item" style={{ color: '#ea580c' }}>&bull;</span>
            <span className="hostayy-ticker-item"><i className="fa-solid fa-shield-halved" style={{ color: '#16a34a' }}></i> Zero Vacancy Loss &bull; Complete Damage Protection</span>
          </div>
        </div>

        {/* 4 Core Pillars of Hostayy Patron */}
        <div className="patron-pillars-header">
          <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>WHY PROPERTY OWNERS CHOOSE HOSTAYY PATRON</span>
          <h3 style={{ color: '#111827', fontWeight: 800 }}>Engineered to Maximize Returns While Protecting Your Asset</h3>
        </div>

        <div className="patron-pillars-grid">
          <div className="patron-pillar-card luxury-glass-card" style={{ borderRadius: '14px', padding: '24px' }}>
            <div className="pillar-icon-box" style={{ background: '#ecfdf5', color: '#10b981' }}>
              <i className="fa-solid fa-chart-line-up"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>Higher Revenue &amp; Dynamic Pricing</h4>
            <p style={{ color: '#374151' }}>
              Unlike traditional fixed leases, our dynamic pricing algorithms capture premium nightly &amp; monthly corporate demand driven by Yashobhoomi IICC conventions and airport proximity.
            </p>
          </div>

          <div className="patron-pillar-card luxury-glass-card" style={{ borderRadius: '14px', padding: '24px' }}>
            <div className="pillar-icon-box" style={{ background: '#fff7ed', color: '#ea580c' }}>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>100% Hands-Off Operations</h4>
            <p style={{ color: '#374151' }}>
              No more tenant phone calls or maintenance headaches. We manage 400TC linen turnover, daily housekeeping, 24/7 guest check-in, key handover, and proactive repairs.
            </p>
          </div>

          <div className="patron-pillar-card luxury-glass-card" style={{ borderRadius: '14px', padding: '24px' }}>
            <div className="pillar-icon-box" style={{ background: '#eff6ff', color: '#3b82f6' }}>
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <h4 style={{ color: '#111827', fontWeight: 800 }}>Strict ID Vetting &amp; Asset Safety</h4>
            <p style={{ color: '#374151' }}>
              Mandatory government ID verification (Aadhaar/Passport), corporate guest profiles, zero-party tolerance, and a comprehensive property damage protection guarantee.
            </p>
          </div>

          <div className="patron-pillar-card luxury-glass-card" style={{ borderRadius: '14px', padding: '24px' }}>
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
        <div className="patron-onboarding-wrap luxury-glass-card" id="process" style={{ borderRadius: '20px', padding: '40px 32px' }}>
          <div className="patron-pillars-header text-center" style={{ marginBottom: '32px' }}>
            <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span className="pulse-dot"></span> 3-STEP SIMPLE ONBOARDING
            </span>
            <h3 style={{ color: '#111827', fontWeight: 800 }}>From Registration to First Monthly Payout in 48 Hours</h3>
          </div>

          <div className="patron-steps-grid">
            <div className="patron-step-card luxury-glass-card" style={{ borderRadius: '14px', padding: '26px 22px' }}>
              <div className="step-num-badge" style={{ background: '#ea580c', color: '#ffffff', width: '42px', height: '42px', fontSize: '18px' }}>01</div>
              <h4 style={{ color: '#111827', fontWeight: 800 }}>Share Property Details</h4>
              <p style={{ color: '#374151' }}>Tell us your apartment location in Delhi NCR/Dwarka and BHK configuration via WhatsApp or our online form.</p>
            </div>

            <div className="patron-step-card luxury-glass-card" style={{ borderRadius: '14px', padding: '26px 22px' }}>
              <div className="step-num-badge" style={{ background: '#ea580c', color: '#ffffff', width: '42px', height: '42px', fontSize: '18px' }}>02</div>
              <h4 style={{ color: '#111827', fontWeight: 800 }}>Free On-Site Audit &amp; Projection</h4>
              <p style={{ color: '#374151' }}>Superhost Mohit Chaudhary conducts a personalized property audit and provides an exact revenue feasibility report.</p>
            </div>

            <div className="patron-step-card luxury-glass-card" style={{ borderRadius: '14px', padding: '26px 22px' }}>
              <div className="step-num-badge" style={{ background: '#ea580c', color: '#ffffff', width: '42px', height: '42px', fontSize: '18px' }}>03</div>
              <h4 style={{ color: '#111827', fontWeight: 800 }}>Go Live &amp; Start Earning</h4>
              <p style={{ color: '#374151' }}>We stage your flat, take architectural photography, onboard corporate clients, and transfer your first payout on the 1st.</p>
            </div>
          </div>
        </div>

        {/* Traditional 11-Month Lease vs Hostayy Patron Comparison Table */}
        <div className="patron-comparison-wrap" id="comparison">
          <div className="patron-pillars-header text-center" style={{ marginBottom: '28px' }}>
            <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>PERFORMANCE BENCHMARK</span>
            <h3 style={{ color: '#111827', fontWeight: 800 }}>Traditional 11-Month Lease vs. Hostayy Patron Partnership</h3>
          </div>

          <div className="compare-wrap" style={{ borderRadius: '16px', border: '2px solid #fed7aa', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
            <div className="compare-row head" style={{ background: '#ea580c', color: '#ffffff' }}>
              <div className="compare-cell" style={{ color: '#ffffff', fontWeight: 800 }}>Operational Dimension</div>
              <div className="compare-cell without" style={{ color: '#ffffff', fontWeight: 800 }}>Traditional 11-Month Tenant Lease</div>
              <div className="compare-cell with" style={{ color: '#ffffff', fontWeight: 800, background: 'rgba(0, 0, 0, 0.15)' }}>
                <span>Hostayy Patron Partnership</span>
                <span style={{ fontSize: '10px', background: '#ffffff', color: '#ea580c', padding: '2px 8px', borderRadius: '10px', marginLeft: '6px', fontWeight: 800 }}>★ RECOMMENDED</span>
              </div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div key={idx} className="compare-row" style={{ borderBottom: idx < comparisonRows.length - 1 ? '1px solid #fed7aa' : 'none' }}>
                <div className="compare-cell label" style={{ color: '#111827', fontWeight: 700 }}>{row.dimension}</div>
                <div className="compare-cell without" style={{ color: '#4b5563' }}>
                  <span className="compare-x" style={{ color: '#ef4444', fontWeight: 800, marginRight: '6px' }}>✕</span>
                  <span>{row.traditional}</span>
                </div>
                <div className="compare-cell with" style={{ color: '#111827', background: 'rgba(254, 215, 170, 0.12)' }}>
                  <span className="compare-check" style={{ color: '#16a34a', fontWeight: 800, marginRight: '6px' }}>✓</span>
                  <span><strong>{row.hostayy}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Personal Stays Privilege Strip */}
        <div className="patron-owner-stay-strip luxury-glass-card" style={{ borderRadius: '16px', padding: '24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              className="badge-float"
              style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff7ed', border: '1.5px solid #fed7aa', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}
            >
              <i className="fa-solid fa-umbrella-beach"></i>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '17px', color: '#111827', fontWeight: 800 }}>
                Unlimited Personal Stays for Property Owners
              </h4>
              <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#374151' }}>
                Visiting Delhi with your family? Enjoy free personal stays in your own apartment anytime it isn't booked. Simply message Mohit on WhatsApp to block your dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
