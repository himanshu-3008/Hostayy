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
    <div className="our-rooms-two__single" data-estate-id={prop.id}>
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
        
        {/* Long-Stay Quotation Badge (No nightly rate) */}
        <div className="our-rooms-two__price" style={{ backgroundColor: 'var(--hotelux-base)', border: 'none' }}>
          <p style={{ margin: 0, fontSize: '12px', letterSpacing: '0.03em', color: '#ffffff' }}>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700 }}>Monthly Quotation</span>
          </p>
        </div>

        {/* BHK Configuration Tag */}
        <div className="our-rooms-former-badge" style={{ backgroundColor: '#191628', color: 'var(--hotelux-base)', border: '1px solid var(--hotelux-base)' }}>
          <i className="fa-solid fa-door-open" style={{ marginRight: '5px' }}></i> {prop.bhk} Serviced Residence
        </div>

        {/* Photo Counter */}
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(25, 22, 40, 0.85)', color: '#ffffff', fontSize: '11px', padding: '3px 8px', zIndex: 2 }}>
          <i className="fa-solid fa-camera" style={{ marginRight: '4px', color: 'var(--hotelux-base)' }}></i> {photoIndex + 1} / {totalPhotos}
        </div>

        {/* Prev / Next Arrows */}
        <button 
          type="button"
          onClick={prevPhoto}
          style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '32px', height: '32px', background: 'rgba(255,255,255,0.85)', border: 'none', color: '#191628', cursor: 'pointer', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Previous Photo"
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: '12px' }}></i>
        </button>
        <button 
          type="button"
          onClick={nextPhoto}
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '32px', height: '32px', background: 'rgba(255,255,255,0.85)', border: 'none', color: '#191628', cursor: 'pointer', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Next Photo"
        >
          <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i>
        </button>
      </div>

      {/* Hotelux Room Body */}
      <div className="our-rooms-two__body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h3 className="our-rooms-two__title" onClick={() => onSelectStay(prop.id)} style={{ marginBottom: '4px' }}>
              {prop.name}
            </h3>
            <div className="our-rooms-location">
              <i className="fa-solid fa-location-dot" style={{ color: '#FF4D4D' }}></i> {prop.location}
            </div>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>
            <i className="fa-solid fa-star"></i> {prop.rating}
          </span>
        </div>

        {/* Key Landmarks */}
        <div style={{ background: '#f8f6f3', border: '1px solid #eee8df', padding: '8px 12px', borderRadius: '4px', marginBottom: '14px', fontSize: '12px', color: '#4b5563', lineHeight: '1.45' }}>
          <strong style={{ color: 'var(--hotelux-base)', display: 'block', marginBottom: '2px', textTransform: 'uppercase', fontSize: '10.5px', letterSpacing: '0.05em' }}>
            <i className="fa-solid fa-compass" style={{ marginRight: '4px' }}></i> Proximity &amp; Landmarks:
          </strong>
          {prop.nearbyLandmarks}
        </div>

        <p className="our-rooms-desc">{prop.shortDescription}</p>

        {/* Specs List */}
        <ul className="our-rooms-two__details-list">
          <li>
            <i className="fa-solid fa-door-open"></i>
            <span>{prop.bhk} Layout</span>
          </li>
          <li>
            <i className="fa-solid fa-kitchen-set"></i>
            <span>Modular Kitchen</span>
          </li>
          <li>
            <i className="fa-solid fa-vector-square"></i>
            <span>{prop.areaSqFt}</span>
          </li>
          <li>
            <i className="fa-solid fa-wifi"></i>
            <span>300 Mbps Wi-Fi</span>
          </li>
        </ul>

        {/* Action Buttons Row */}
        <div className="our-rooms-actions-row">
          <a 
            href={getGuestPropertyWhatsAppLink(prop.name)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hotelux-room-wa"
            title="Request long-term quotation on WhatsApp"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            <i className="fa-brands fa-whatsapp"></i> Request Long-Stay Quote
          </a>

          <button 
            type="button" 
            className="btn-hotelux-details" 
            onClick={() => onOpenModal(prop)}
            title="View full apartment specifications, floor breakdown and amenities"
          >
            <i className="fa-solid fa-circle-info"></i> Specs
          </button>
        </div>
      </div>
    </div>
  );
}
