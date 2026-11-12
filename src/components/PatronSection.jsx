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
        <div className="patron-onboarding-wrap" id="process" style={{ background: '#ffffff', border: '1.5px solid #fed7aa' }}>
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

        {/* Traditional 11-Month Lease vs Hostayy Patron Comparison Table */}
        <div className="patron-comparison-wrap" id="comparison">
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
