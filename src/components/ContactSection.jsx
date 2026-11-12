'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getHostayyWhatsAppLink, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function ContactSection({ initialTab = 'guest' }) {
  const [activeFormTab, setActiveFormTab] = useState(initialTab);

  React.useEffect(() => {
    setActiveFormTab(initialTab);
  }, [initialTab]);

  // Owner Form State
  const [ownerData, setOwnerData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    config: '2 BHK / 3 BHK Serviced Apartment',
    furnishing: 'Fully Furnished (Ready to list)',
    arrangement: 'Currently Vacant',
    notes: ''
  });

  // Guest Form State (Focused on Long-Term Quotations)
  const [guestData, setGuestData] = useState({
    name: '',
    phone: '',
    stay: 'Velora · 1 BHK (3 mins to Yashobhoomi IICC)',
    moveIn: '',
    duration: '1 - 3 Months (Corporate Monthly)',
    guests: '1 - 2 Guests / Solo Executive',
    notes: ''
  });

  const handleOwnerSubmit = (e) => {
    e.preventDefault();
    window.open(getOwnerWhatsAppLink({
      name: `${ownerData.name} (Phone: ${ownerData.phone}, Email: ${ownerData.email})`,
      location: ownerData.location,
      propertyType: ownerData.furnishing,
      bedrooms: ownerData.config,
      message: `Current Arrangement: ${ownerData.arrangement}. Notes: ${ownerData.notes || 'None'}. I would like to partner my property with Hostayy for turnkey short-term / corporate rental management.`
    }), '_blank');
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
    window.open(getGuestWhatsAppLink({
      property: guestData.stay,
      moveInDate: guestData.moveIn || 'Flexible / Immediate',
      duration: guestData.duration,
      guests: guestData.guests,
      purpose: 'Long-term / monthly serviced stay near Yashobhoomi IICC',
      message: `Guest: ${guestData.name} (${guestData.phone}). Requirements / Notes: ${guestData.notes || 'None'}`
    }), '_blank');
  };

  return (
    <section className="contact-two section-pad" id="contact" style={{ backgroundColor: '#ffffff', padding: '90px 0' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline" style={{ color: '#ea580c', fontWeight: 800 }}>CONNECT &amp; INQUIRE</span>
          </div>
          <h2 className="section-title__title" style={{ color: '#111827' }}>
            Connect With Our <span style={{ color: '#ea580c' }}>Concierge</span>
          </h2>
          <p className="section-title__text" style={{ maxWidth: '640px', margin: '14px auto 0', color: '#374151' }}>
            Looking for a 1, 2, or 3 BHK long-term serviced apartment near Yashobhoomi (IICC) or seeking turnkey property management for your residence? Mohit Chaudhary responds directly on WhatsApp.
          </p>
        </div>

        {/* Dual Tab Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
          <div className="our-rooms-tabs" style={{ background: '#ffffff', border: '1px solid #fed7aa', borderRadius: '30px', padding: '4px' }}>
            <button 
              type="button" 
              className={`our-rooms-tab-btn ${activeFormTab === 'guest' ? 'active' : ''}`}
              onClick={() => setActiveFormTab('guest')}
              style={{
                background: activeFormTab === 'guest' ? '#ea580c' : 'transparent',
                color: activeFormTab === 'guest' ? '#ffffff' : '#111827',
                border: 'none',
                fontWeight: 700,
                padding: '8px 18px',
                borderRadius: '30px',
                cursor: 'pointer'
              }}
            >
              <i className="fa-solid fa-suitcase" style={{ marginRight: '6px' }}></i> Long-Stay Quotation (Guest)
            </button>
            <button 
              type="button" 
              className={`our-rooms-tab-btn ${activeFormTab === 'owner' ? 'active' : ''}`}
              onClick={() => setActiveFormTab('owner')}
              style={{
                background: activeFormTab === 'owner' ? '#ea580c' : 'transparent',
                color: activeFormTab === 'owner' ? '#ffffff' : '#111827',
                border: 'none',
                fontWeight: 700,
                padding: '8px 18px',
                borderRadius: '30px',
                cursor: 'pointer'
              }}
            >
              <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '6px' }}></i> Partner Property (Owner)
            </button>
          </div>
        </div>

        {/* Guest Long-Stay Form */}
        {activeFormTab === 'guest' && (
          <div className="form-box" style={{ background: '#fffaf5', border: '1.5px solid #fed7aa', borderRadius: '16px', padding: '32px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: '#ea580c', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                For Corporate Guests &amp; Relocating Families
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '4px', fontWeight: 800 }}>
                Request Custom Long-Stay Quotation
              </h3>
              <p style={{ color: '#374151', fontSize: '0.92rem' }}>
                Select your preferred 1, 2, or 3 BHK residence near Yashobhoomi. We will prepare an all-inclusive monthly quotation with zero brokerage and send photos directly to your WhatsApp.
              </p>
            </div>

            <form onSubmit={handleGuestSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Vikram Malhotra" 
                    value={guestData.name}
                    onChange={(e) => setGuestData({ ...guestData, name: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">WhatsApp / Phone Number *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="e.g. +91 98111 22334" 
                    value={guestData.phone}
                    onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Residence Configuration *</label>
                  <select 
                    className="form-select" 
                    value={guestData.stay}
                    onChange={(e) => setGuestData({ ...guestData, stay: e.target.value })}
                    required
                  >
                    <option value="Velora · 1 BHK (3 mins to Yashobhoomi IICC)">Velora · 1 BHK Luxury Suite (3 Mins to Yashobhoomi)</option>
                    <option value="Azura · 2 BHK (Aerocity / Yashobhoomi Corridor)">Azura · 2 BHK Executive Residence (Aerocity Corridor)</option>
                    <option value="Verde · 3 BHK (Prime Golf Belt / Yashobhoomi)">Verde · 3 BHK Signature Floor (Prime Golf Belt)</option>
                    <option value="Flexible / Suggest Best Available">Flexible / Suggest Best Available</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Approximate Move-In Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    value={guestData.moveIn}
                    onChange={(e) => setGuestData({ ...guestData, moveIn: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Expected Stay Duration</label>
                  <select 
                    className="form-select"
                    value={guestData.duration}
                    onChange={(e) => setGuestData({ ...guestData, duration: e.target.value })}
                  >
                    <option value="1 - 3 Months (Corporate Monthly)">1 - 3 Months (Corporate Monthly)</option>
                    <option value="3 - 6 Months (Extended Project Stay)">3 - 6 Months (Extended Project Stay)</option>
                    <option value="6 - 12 Months (Long Term Lease)">6 - 12 Months (Long Term Lease)</option>
                    <option value="15 - 30 Days (Exhibition / Event Stay)">15 - 30 Days (Exhibition / Event Stay)</option>
                    <option value="Weekly (7 - 14 Days)">Weekly (7 - 14 Days)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Occupants / Team Members</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. 1 Executive or 2 Adults + 1 Child" 
                    value={guestData.guests}
                    onChange={(e) => setGuestData({ ...guestData, guests: e.target.value })}
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label">Company Name, Purpose of Stay or Special Requirements</label>
                  <textarea 
                    className="form-textarea" 
                    rows="2" 
                    placeholder="e.g. Exhibiting at Yashobhoomi IICC, corporate relocation, GST invoice required, cook needed..."
                    value={guestData.notes}
                    onChange={(e) => setGuestData({ ...guestData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="thm-btn" style={{ padding: '14px 34px', fontSize: '1rem', cursor: 'pointer', background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}>
                <i className="fa-brands fa-whatsapp"></i> Request Custom Quotation on WhatsApp
              </button>
            </form>
          </div>
        )}

        {/* Owner Form */}
        {activeFormTab === 'owner' && (
          <div className="form-box" style={{ background: '#fffaf5', border: '1.5px solid #fed7aa', borderRadius: '16px', padding: '32px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: '#ea580c', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                For Property Owners
              </span>
              <h3 style={{ fontSize: '1.6rem', color: '#111827', marginTop: '4px', fontWeight: 800 }}>
                List Your Property for Turnkey Hospitality
              </h3>
              <p style={{ color: '#374151', fontSize: '0.92rem' }}>
                Partner your 1, 2, 3 BHK or luxury villa with Hostayy. Enjoy performance-based 15% revenue share, 0% fixed setup fees, and 40%–80% higher net yield than traditional tenants.
              </p>
            </div>

            <form onSubmit={handleOwnerSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Owner Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Anil Sharma" 
                    value={ownerData.name}
                    onChange={(e) => setOwnerData({ ...ownerData, name: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="e.g. +91 98765 43210" 
                    value={ownerData.phone}
                    onChange={(e) => setOwnerData({ ...ownerData, phone: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Property Location &amp; Sector *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Dwarka Sector 23, Aerocity, Vasant Kunj" 
                    value={ownerData.location}
                    onChange={(e) => setOwnerData({ ...ownerData, location: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Property Configuration</label>
                  <select 
                    className="form-select" 
                    value={ownerData.config}
                    onChange={(e) => setOwnerData({ ...ownerData, config: e.target.value })}
                  >
                    <option value="1 BHK Serviced Apartment">1 BHK Serviced Apartment</option>
                    <option value="2 BHK Executive Apartment">2 BHK Executive Apartment</option>
                    <option value="3 BHK Luxury Residence">3 BHK Luxury Residence</option>
                    <option value="4+ BHK Penthouse / Villa">4+ BHK Penthouse / Villa</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Furnishing Status</label>
                  <select 
                    className="form-select" 
                    value={ownerData.furnishing}
                    onChange={(e) => setOwnerData({ ...ownerData, furnishing: e.target.value })}
                  >
                    <option value="Fully Furnished (Ready to host)">Fully Furnished (Ready to host)</option>
                    <option value="Semi-Furnished (Needs soft furnishings)">Semi-Furnished (Needs soft furnishings)</option>
                    <option value="Unfurnished (Needs full setup)">Unfurnished (Needs full setup)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Current Property Status</label>
                  <select 
                    className="form-select" 
                    value={ownerData.arrangement}
                    onChange={(e) => setOwnerData({ ...ownerData, arrangement: e.target.value })}
                  >
                    <option value="Currently Vacant">Currently Vacant</option>
                    <option value="Self-managing on Airbnb/OTAs">Self-managing on Airbnb/OTAs</option>
                    <option value="Leased to long-term tenant (lease ending soon)">Leased to long-term tenant (lease ending soon)</option>
                  </select>
                </div>

                <div className="form-group full">
                  <label className="form-label">Property Highlights or Notes</label>
                  <textarea 
                    className="form-textarea" 
                    rows="2" 
                    placeholder="Tell us about special amenities (e.g. modular kitchen, elevator, near Yashobhoomi/metro, power backup)..."
                    value={ownerData.notes}
                    onChange={(e) => setOwnerData({ ...ownerData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <button type="submit" className="thm-btn" style={{ padding: '14px 32px', fontSize: '1rem', cursor: 'pointer', background: '#ea580c', borderColor: '#ea580c', color: '#ffffff' }}>
                  <i className="fa-brands fa-whatsapp"></i> Submit Feasibility Request to Mohit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
