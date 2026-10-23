'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, HOSTAYY_PROPERTIES, getHostayyWhatsAppLink, getGuestWhatsAppLink, getOwnerWhatsAppLink } from '../data/properties';

export default function ContactSection() {
  const [activeFormTab, setActiveFormTab] = useState('owner');

  // Owner Form State
  const [ownerData, setOwnerData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    config: '4+ Bedroom Villa / Estate',
    furnishing: 'Fully Furnished (Ready to list)',
    arrangement: 'Currently Vacant',
    notes: ''
  });

  // Guest Form State
  const [guestData, setGuestData] = useState({
    name: '',
    phone: '',
    stay: 'Velora by Hostayy (6 Rooms • South Delhi)',
    checkin: '',
    nights: '2',
    guests: '6 - 12 Guests',
    notes: ''
  });

  const handleOwnerSubmit = (e) => {
    e.preventDefault();
    window.open(getOwnerWhatsAppLink({
      name: `${ownerData.name} (Phone: ${ownerData.phone}, Email: ${ownerData.email})`,
      location: ownerData.location,
      propertyType: ownerData.furnishing,
      bedrooms: ownerData.config,
      message: `Current Arrangement: ${ownerData.arrangement}. Additional Notes: ${ownerData.notes || 'None'}. I would like to register my property with Hostayy.`
    }), '_blank');
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
    window.open(getGuestWhatsAppLink({
      property: guestData.stay,
      checkIn: guestData.checkin || 'Flexible Dates',
      guests: guestData.guests,
      purpose: `${guestData.nights} Nights duration`,
      message: `Guest: ${guestData.name} (${guestData.phone}). Special requests: ${guestData.notes || 'None'}`
    }), '_blank');
  };

  return (
    <section className="contact-two section-pad" id="contact" style={{ backgroundColor: 'var(--hotelux-primary)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">CONTACT & RESERVATIONS</span>
          </div>
          <h2 className="section-title__title">
            Connect With Our <span>Concierge</span>
          </h2>
          <p className="section-title__text" style={{ maxWidth: '640px', margin: '14px auto 0' }}>
            Whether you own a luxury property in Delhi NCR or seek an exclusive private villa reservation, Mohit Chaudhary and our concierge team respond promptly on WhatsApp and email.
          </p>
        </div>

        {/* Hotelux Styled Dual Tab Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
          <div className="our-rooms-tabs" style={{ background: 'var(--hotelux-white)' }}>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${activeFormTab === 'owner' ? 'active' : ''}`}
              onClick={() => setActiveFormTab('owner')}
            >
              <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '6px' }}></i> List a Property (Owner)
            </button>
            <button 
              type="button"
              className={`our-rooms-tab-btn ${activeFormTab === 'guest' ? 'active' : ''}`}
              onClick={() => setActiveFormTab('guest')}
            >
              <i className="fa-solid fa-suitcase" style={{ marginRight: '6px' }}></i> Book a Residence (Guest)
            </button>
          </div>
        </div>

        {/* Owner Form */}
        {activeFormTab === 'owner' && (
          <div className="form-box">
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: 'var(--coral-primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                For Property Owners
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                Get a Property Yield Assessment
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Submit your property specifications below. Mohit Chaudhary will prepare a customized revenue projection and contact you directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleOwnerSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Owner Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Vikram Malhotra" 
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
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="e.g. vikram@malhotra.com" 
                    value={ownerData.email}
                    onChange={(e) => setOwnerData({ ...ownerData, email: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Property Location in Delhi NCR *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Dwarka Sec 23 / Vasant Kunj / GK" 
                    value={ownerData.location}
                    onChange={(e) => setOwnerData({ ...ownerData, location: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Configuration *</label>
                  <select 
                    className="form-select" 
                    value={ownerData.config}
                    onChange={(e) => setOwnerData({ ...ownerData, config: e.target.value })}
                    required
                  >
                    <option value="4+ Bedroom Villa / Estate">4+ Bedroom Villa / Estate</option>
                    <option value="3 BHK Luxury Apartment">3 BHK Luxury Apartment</option>
                    <option value="2 BHK Apartment">2 BHK Apartment</option>
                    <option value="Independent Floor / Penthouse">Independent Floor / Penthouse</option>
                    <option value="Multiple Units / Commercial Block">Multiple Units / Commercial Block</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Furnishing Status *</label>
                  <select 
                    className="form-select" 
                    value={ownerData.furnishing}
                    onChange={(e) => setOwnerData({ ...ownerData, furnishing: e.target.value })}
                    required
                  >
                    <option value="Fully Furnished (Ready to list)">Fully Furnished (Ready to list)</option>
                    <option value="Semi-Furnished (Needs soft styling)">Semi-Furnished (Needs soft styling)</option>
                    <option value="Unfurnished (Needs full setup)">Unfurnished (Needs full setup)</option>
                  </select>
                </div>

                <div className="form-group full">
                  <label className="form-label">Current Management Arrangement</label>
                  <select 
                    className="form-select" 
                    value={ownerData.arrangement}
                    onChange={(e) => setOwnerData({ ...ownerData, arrangement: e.target.value })}
                  >
                    <option value="Currently Vacant">Currently Vacant</option>
                    <option value="Self-managing on Airbnb/OTAs">Self-managing on Airbnb/OTAs</option>
                    <option value="Leased to long-term tenant (lease ending soon)">Leased to long-term tenant (lease ending soon)</option>
                    <option value="Managed by another agency">Managed by another agency</option>
                  </select>
                </div>

                <div className="form-group full">
                  <label className="form-label">Property Highlights or Notes</label>
                  <textarea 
                    className="form-textarea" 
                    rows="3" 
                    placeholder="Tell us about special features (e.g. elevator, private terrace, air purifiers, near metro/airport)..."
                    value={ownerData.notes}
                    onChange={(e) => setOwnerData({ ...ownerData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <button type="submit" className="btn-coral" style={{ padding: '14px 32px', fontSize: '1rem', cursor: 'pointer' }}>
                  <i className="fa-brands fa-whatsapp"></i> Submit Assessment to Mohit on WhatsApp
                </button>

                <a href={HOSTAYY_CONFIG.googleFormOwnerUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-charcoal" style={{ fontSize: '0.88rem', padding: '12px 20px' }}>
                  <i className="fa-solid fa-table-list"></i> Open in Google Forms
                </a>
              </div>
            </form>
          </div>
        )}

        {/* Guest Form */}
        {activeFormTab === 'guest' && (
          <div className="form-box">
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: 'var(--coral-primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                For Guests & Travelers
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '4px' }}>
                Direct Stay Booking Enquiry
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Select your preferred residence below. We will send you instant availability, photos, and direct WhatsApp VIP rates.
              </p>
            </div>

            <form onSubmit={handleGuestSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Rahul Verma" 
                    value={guestData.name}
                    onChange={(e) => setGuestData({ ...guestData, name: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="e.g. +91 98765 43210" 
                    value={guestData.phone}
                    onChange={(e) => setGuestData({ ...guestData, phone: e.target.value })}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Residence *</label>
                  <select 
                    className="form-select" 
                    value={guestData.stay}
                    onChange={(e) => setGuestData({ ...guestData, stay: e.target.value })}
                    required
                  >
                    <option value="Velora by Hostayy (6 Rooms • South Delhi)">Velora by Hostayy (6 Rooms • South Delhi)</option>
                    <option value="Verde by Hostayy (8 Rooms • Chhatarpur)">Verde by Hostayy (8 Rooms • Chhatarpur)</option>
                    <option value="Azura by Hostayy (4 Rooms • South Delhi)">Azura by Hostayy (4 Rooms • South Delhi)</option>
                    <option value="Flexible / Suggest Best Option">Flexible / Suggest Best Option</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Approximate Check-in Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    value={guestData.checkin}
                    onChange={(e) => setGuestData({ ...guestData, checkin: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Number of Nights</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="60" 
                    className="form-input" 
                    placeholder="e.g. 3" 
                    value={guestData.nights}
                    onChange={(e) => setGuestData({ ...guestData, nights: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Total Guests Count</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. 10 Adults, 2 Children" 
                    value={guestData.guests}
                    onChange={(e) => setGuestData({ ...guestData, guests: e.target.value })}
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label">Purpose of Stay or Special Requests</label>
                  <textarea 
                    className="form-textarea" 
                    rows="2" 
                    placeholder="e.g. Family wedding celebration, Yashobhoomi exhibition, early check-in, cook needed..."
                    value={guestData.notes}
                    onChange={(e) => setGuestData({ ...guestData, notes: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn-coral" style={{ padding: '14px 34px', fontSize: '1rem', cursor: 'pointer' }}>
                <i className="fa-brands fa-whatsapp"></i> Send Direct VIP Enquiry on WhatsApp
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
