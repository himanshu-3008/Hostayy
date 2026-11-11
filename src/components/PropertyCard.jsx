'use client';

import React from 'react';
import { getGuestPropertyWhatsAppLink } from '../data/properties';

export default function PropertyCard({ prop, onSelectStay, onOpenModal, onOpenLightbox }) {
  const photos = prop.images;
  const totalPhotos = photos.length;

  const handleRoomClick = () => {
    if (onSelectStay) {
      onSelectStay(prop.id);
      const el = document.getElementById('room');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotosClick = (e) => {
    e.stopPropagation();
    if (onOpenModal) {
      onOpenModal(prop);
    } else if (onSelectStay) {
      onSelectStay(prop.id);
    }
  };

  return (
    <div className="our-rooms-two__single oyo-property-card" data-estate-id={prop.id}>
      {/* Clean Room Header Strip (No photos on home page, photos appear on click) */}
      <div 
        className="room-card-clean-header" 
        onClick={handleRoomClick}
        title="Click to view verified room photos & specifications"
        style={{
          background: 'linear-gradient(135deg, #191628 0%, #29243f 100%)',
          padding: '24px 20px',
          color: '#ffffff',
          position: 'relative',
          cursor: 'pointer',
          borderRadius: '12px 12px 0 0',
          borderBottom: '3px solid var(--hotelux-base)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div className="oyo-sanitised-badge" style={{ position: 'static' }}>
            <i className="fa-solid fa-shield-virus"></i> Sanitised Stay
          </div>
          <span 
            onClick={handlePhotosClick}
            style={{ 
              fontSize: '11.5px', 
              background: 'rgba(255, 255, 255, 0.14)', 
              color: '#ffffff', 
              padding: '4px 10px', 
              borderRadius: '20px', 
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              border: '1px solid rgba(255, 255, 255, 0.25)'
            }}
          >
            <i className="fa-solid fa-camera" style={{ color: '#FF4D4D' }}></i>
            {totalPhotos} Photos
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--hotelux-base)', fontWeight: 700, display: 'block' }}>
              SERVICED APARTMENT
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '22px', color: '#ffffff', fontFamily: 'var(--hotelux-font-two)' }}>
              {prop.name}
            </h3>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ display: 'inline-block', background: 'rgba(185, 156, 135, 0.2)', border: '1px solid var(--hotelux-base)', color: 'var(--hotelux-base)', padding: '5px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 700 }}>
              {prop.bhk}
            </span>
          </div>
        </div>

        {/* Click Prompt */}
        <div 
          style={{
            marginTop: '16px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '6px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#cbd5e1'
          }}
        >
          <span><i className="fa-solid fa-images" style={{ color: '#FF4D4D', marginRight: '6px' }}></i> Click room to view photo tour</span>
          <i className="fa-solid fa-arrow-right" style={{ color: 'var(--hotelux-base)', fontSize: '11px' }}></i>
        </div>
      </div>

      {/* Hotelux Room Body with Specs & Booking Actions */}
      <div className="our-rooms-two__body" style={{ padding: '22px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <div className="our-rooms-location" style={{ fontSize: '13px', color: '#475569', fontWeight: 600 }}>
              <i className="fa-solid fa-location-dot" style={{ color: '#FF4D4D', marginRight: '5px' }}></i> {prop.location}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', background: '#059669', padding: '3px 8px', borderRadius: '4px', display: 'inline-block' }}>
              {prop.rating} ★
            </span>
            <span style={{ display: 'block', fontSize: '10.5px', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>
              ({prop.reviewsCount}+ ratings)
            </span>
          </div>
        </div>

        {/* Proximity Pill */}
        <div style={{ background: '#fff7ed', border: '1px solid #ffedd5', padding: '6px 10px', borderRadius: '6px', marginBottom: '12px', fontSize: '11.5px', color: '#c2410c', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <i className="fa-solid fa-location-arrow" style={{ color: '#ea580c' }}></i>
          <span><strong>{prop.bhk === '1 BHK' ? '3 Mins' : prop.bhk === '2 BHK' ? '4 Mins' : '3 Mins'}</strong> to Yashobhoomi (IICC) &bull; 10 Mins to IGI Airport (T3)</span>
        </div>

        <p className="our-rooms-desc" style={{ marginBottom: '14px', fontSize: '13.5px', color: '#4b5563', lineHeight: 1.6 }}>{prop.shortDescription}</p>

        {/* Specs Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px', fontSize: '12px', color: '#334155' }}>
          <div style={{ background: '#f8fafc', padding: '6px 10px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
            <i className="fa-solid fa-vector-square" style={{ color: 'var(--hotelux-base)', marginRight: '6px' }}></i>
            <span>{prop.areaSqFt}</span>
          </div>
          <div style={{ background: '#f8fafc', padding: '6px 10px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
            <i className="fa-solid fa-kitchen-set" style={{ color: '#ea580c', marginRight: '6px' }}></i>
            <span>Private Modular Kitchen</span>
          </div>
          <div style={{ background: '#f8fafc', padding: '6px 10px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
            <i className="fa-solid fa-wifi" style={{ color: '#3b82f6', marginRight: '6px' }}></i>
            <span>300 Mbps Mesh Wi-Fi</span>
          </div>
          <div style={{ background: '#f8fafc', padding: '6px 10px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
            <i className="fa-solid fa-bolt" style={{ color: '#10b981', marginRight: '6px' }}></i>
            <span>100% Power Backup</span>
          </div>
        </div>

        {/* OYO-Style Amenities Row */}
        <div className="oyo-amenities-row">
          <span className="oyo-amenity-chip" title="Air Conditioning"><i className="fa-solid fa-snowflake"></i> AC</span>
          <span className="oyo-amenity-chip" title="300 Mbps Wi-Fi"><i className="fa-solid fa-wifi"></i> Wi-Fi</span>
          <span className="oyo-amenity-chip" title="Modular Kitchen"><i className="fa-solid fa-kitchen-set"></i> Kitchen</span>
          <span className="oyo-amenity-chip" title="Power Backup"><i className="fa-solid fa-bolt"></i> Power Backup</span>
          <span className="oyo-amenity-chip" title="Daily Housekeeping"><i className="fa-solid fa-broom"></i> Housekeeping</span>
          <span className="oyo-amenity-chip" title="Geyser"><i className="fa-solid fa-temperature-arrow-up"></i> Geyser</span>
          <span className="oyo-amenity-chip" title="Smart TV"><i className="fa-solid fa-tv"></i> Smart TV</span>
          <span className="oyo-amenity-chip" title="Elevator"><i className="fa-solid fa-elevator"></i> Lift</span>
        </div>

        {/* OYO-Style Booking Trust Highlights */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '12px 0 16px', fontSize: '11px', color: '#047857', fontWeight: 600 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <i className="fa-solid fa-circle-check" style={{ color: '#10b981' }}></i> Pay on Move-In
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <i className="fa-solid fa-circle-check" style={{ color: '#10b981' }}></i> 0% Brokerage
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <i className="fa-solid fa-circle-check" style={{ color: '#10b981' }}></i> Couple &amp; Corporate Friendly
          </span>
        </div>

        {/* Pricing / Monthly Quotation Strip */}
        <div className="oyo-card-rate-box">
          <div>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--hotelux-base)', fontWeight: 700, display: 'block' }}>
              DIRECT HOST RATE &bull; GST INVOICE INCLUDED
            </span>
            <strong style={{ fontSize: '14.5px', color: '#191628' }}>
              Monthly Corporate Quotation
            </strong>
          </div>
          <span style={{ fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
            Save 20% on Long Stays
          </span>
        </div>

        {/* Action Buttons Row */}
        <div className="our-rooms-actions-row" style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            className="btn-hotelux-details" 
            onClick={handleRoomClick}
            title="Click to view verified room photos & layout"
            style={{ flex: 1, justifyContent: 'center', background: '#191628', color: '#ffffff', border: '1px solid #191628' }}
          >
            <i className="fa-solid fa-images" style={{ color: '#FF4D4D' }}></i>
            <span>View Photos</span>
          </button>

          <a 
            href={getGuestPropertyWhatsAppLink(prop.name)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hotelux-room-wa oyo-btn-book"
            title="Book this flat on WhatsApp"
            style={{ flex: 1.3, justifyContent: 'center' }}
          >
            <i className="fa-brands fa-whatsapp"></i> Book Flat
          </a>
        </div>
      </div>
    </div>
  );
}
