'use client';

import React, { useState } from 'react';
import { getGuestPropertyWhatsAppLink } from '../data/properties';

export default function PropertyCard({ prop, onSelectStay, onOpenModal, onOpenLightbox }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = prop.images;
  const totalPhotos = photos.length;

  const nextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const currentPhoto = photos[photoIndex] || photos[0];

  return (
    <div className="our-rooms-two__single oyo-property-card" data-estate-id={prop.id}>
      {/* Hotelux Room Image Box with Quotation Badge & BHK Tag */}
      <div 
        className="our-rooms-two__img-box" 
        onClick={() => onSelectStay(prop.id)}
        title="Click to view full photo showcase"
      >
        <img 
          src={currentPhoto.src} 
          alt={currentPhoto.title || prop.name} 
          loading="lazy" 
        />
        
        {/* OYO-style Sanitised Stay Badge */}
        <div className="oyo-sanitised-badge">
          <i className="fa-solid fa-shield-virus"></i> Sanitised Stay
        </div>

        {/* BHK Configuration Tag */}
        <div className="our-rooms-former-badge" style={{ backgroundColor: 'rgba(25, 22, 40, 0.92)', color: 'var(--hotelux-base)', border: '1px solid var(--hotelux-base)' }}>
          <i className="fa-solid fa-door-open" style={{ marginRight: '5px' }}></i> {prop.bhk} Serviced Flat
        </div>

        {/* Photo Counter */}
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(25, 22, 40, 0.85)', color: '#ffffff', fontSize: '11px', padding: '3px 8px', zIndex: 2, borderRadius: '4px' }}>
          <i className="fa-solid fa-camera" style={{ marginRight: '4px', color: 'var(--hotelux-base)' }}></i> {photoIndex + 1} / {totalPhotos}
        </div>

        {/* Prev / Next Arrows */}
        <button 
          type="button"
          onClick={prevPhoto}
          style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '32px', height: '32px', background: 'rgba(255,255,255,0.85)', border: 'none', color: '#191628', cursor: 'pointer', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          aria-label="Previous Photo"
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: '12px' }}></i>
        </button>
        <button 
          type="button"
          onClick={nextPhoto}
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '32px', height: '32px', background: 'rgba(255,255,255,0.85)', border: 'none', color: '#191628', cursor: 'pointer', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}
          aria-label="Next Photo"
        >
          <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i>
        </button>
      </div>

      {/* Hotelux Room Body with OYO Booking Elements */}
      <div className="our-rooms-two__body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <div>
            <h3 className="our-rooms-two__title" onClick={() => onSelectStay(prop.id)} style={{ marginBottom: '3px' }}>
              {prop.name}
            </h3>
            <div className="our-rooms-location">
              <i className="fa-solid fa-location-dot" style={{ color: '#FF4D4D' }}></i> {prop.location}
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

        <p className="our-rooms-desc" style={{ marginBottom: '14px', fontSize: '13px', lineHeight: 1.55 }}>{prop.shortDescription}</p>

        {/* OYO-Style Amenities Row */}
        <div className="oyo-amenities-row">
          <span className="oyo-amenity-chip" title="Air Conditioning"><i className="fa-solid fa-snowflake"></i> AC</span>
          <span className="oyo-amenity-chip" title="300 Mbps Wi-Fi"><i className="fa-solid fa-wifi"></i> 300 Mbps Wi-Fi</span>
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
        <div className="our-rooms-actions-row" style={{ marginTop: '14px' }}>
          <a 
            href={getGuestPropertyWhatsAppLink(prop.name)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hotelux-room-wa oyo-btn-book"
            title="Book this flat or request quotation on WhatsApp"
            style={{ flex: 1.4, justifyContent: 'center' }}
          >
            <i className="fa-brands fa-whatsapp"></i> Book Flat on WhatsApp
          </a>

          <button 
            type="button" 
            className="btn-hotelux-details" 
            onClick={() => onOpenModal(prop)}
            title="View full apartment specifications, floor breakdown and amenities"
            style={{ flex: 0.9, justifyContent: 'center' }}
          >
            <i className="fa-solid fa-images"></i> Photos &amp; Specs
          </button>
        </div>
      </div>
    </div>
  );
}
