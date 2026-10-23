'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, getGuestPropertyWhatsAppLink } from '../data/properties';

export default function StayShowcase({ prop, onOpenLightbox, onClose }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos = prop.images;
  const top5Photos = photos.slice(0, 5);
  const currentPhoto = top5Photos[activePhotoIndex] || top5Photos[0];

  return (
    <div className="stay-showcase-card compact-showcase-card">
      {/* Top Header Row with Close Button */}
      <div className="compact-showcase-header">
        <div className="showcase-badge-row" style={{ margin: 0 }}>
          <span className="showcase-badge">{prop.badge}</span>
          <span className="showcase-tag-rooms">
            <i className="fa-solid fa-door-open"></i> {prop.roomsCount} Luxury En-Suite Rooms
          </span>
          <span className="showcase-former-tag">
            <i className="fa-solid fa-clock-rotate-left"></i> Formerly {prop.formerName}
          </span>
        </div>

        <button 
          className="compact-close-btn" 
          onClick={onClose}
          title="Return to all stays overview"
        >
          <i className="fa-solid fa-xmark"></i> <span>Close Preview</span>
        </button>
      </div>

      {/* 2-Column Compact Layout: Left Photo Stage + Right Key Details */}
      <div className="compact-showcase-grid">
        {/* Left: Compact Interactive Photo Stage */}
        <div className="compact-photo-stage">
          {/* Main Photo (Click to open full lightbox) */}
          <div 
            className="compact-main-photo-wrap" 
            onClick={() => onOpenLightbox(photos, activePhotoIndex)}
            title="Click to view full photo gallery in fullscreen"
          >
            <img src={currentPhoto.src} alt={currentPhoto.title} />
            <div className="compact-photo-overlay">
              <span className="compact-photo-title">
                <i className="fa-solid fa-camera text-coral" style={{ marginRight: '6px' }}></i>
                {currentPhoto.title}
              </span>
              <span className="compact-expand-pill">
                <i className="fa-solid fa-expand"></i> Fullscreen
              </span>
            </div>
          </div>

          {/* 5-Photo Mini Preview Strip */}
          <div className="compact-thumbs-row">
            {top5Photos.map((photo, idx) => (
              <button 
                key={photo.id}
                type="button"
                className={`compact-thumb-btn ${idx === activePhotoIndex ? 'active' : ''}`}
                onClick={() => setActivePhotoIndex(idx)}
                title={photo.title}
              >
                <img src={photo.src} alt={photo.title} />
                <span className="thumb-num">#{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* View All Photos Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Showing curated 5 of {photos.length} verified estate photos
            </span>
            <button 
              type="button"
              className="btn-outline-charcoal"
              style={{ padding: '6px 14px', fontSize: '12px' }}
              onClick={() => onOpenLightbox(photos, activePhotoIndex)}
            >
              <i className="fa-solid fa-images" style={{ color: 'var(--coral-primary)' }}></i>
              <span>View All {photos.length} Photos</span>
            </button>
          </div>
        </div>

        {/* Right: Compact Info & Direct Booking Panel */}
        <div className="compact-info-panel">
          <div>
            <h2 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '4px', lineHeight: 1.2 }}>
              {prop.name}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '14px' }}>
              <i className="fa-solid fa-location-dot text-coral" style={{ marginRight: '5px' }}></i>
              {prop.location}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '16px' }}>
              {prop.shortDescription}
            </p>
          </div>

          {/* Quick Specs Chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            <div className="spec-pill" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-bed text-coral"></i>
              <span>{prop.roomsCount} En-Suite Rooms</span>
            </div>
            <div className="spec-pill" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-users text-coral"></i>
              <span>Up to {prop.maxGuests} Guests</span>
            </div>
            <div className="spec-pill" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-vector-square text-coral"></i>
              <span>{prop.areaSqFt}</span>
            </div>
            <div className="spec-pill" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-wifi text-coral"></i>
              <span>300 Mbps Mesh Wi-Fi</span>
            </div>
          </div>

          {/* Tariff Box */}
          <div style={{ background: 'var(--hotelux-primary)', border: '1px solid var(--hotelux-border)', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--hotelux-base)', display: 'block', fontWeight: 700 }}>
                Direct VIP Tariff (0% OTA Fees)
              </span>
              <strong style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '1.75rem', color: 'var(--hotelux-black)', lineHeight: 1.1 }}>
                {prop.tariffPerNight} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--hotelux-gray)' }}>/ night</span>
              </strong>
            </div>
            <span style={{ fontSize: '13px', color: '#B45309', fontWeight: 700, background: 'rgba(245, 158, 11, 0.12)', padding: '5px 12px', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
              <i className="fa-solid fa-star" style={{ color: '#F59E0B' }}></i> {prop.rating} Superhost
            </span>
          </div>

          {/* WhatsApp Action with Number */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a 
              href={getGuestPropertyWhatsAppLink(prop.name)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="thm-btn thm-btn-wa"
              style={{ width: '100%', justifyContent: 'center', padding: '13px 20px', fontSize: '13px' }}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
              <span>WhatsApp Mohit ({HOSTAYY_CONFIG.displayPhone})</span>
            </a>

            <div style={{ display: 'flex', gap: '8px' }}>
              <a 
                href={prop.driveFolderUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="thm-btn thm-btn-outline"
                style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '12px' }}
              >
                <i className="fa-brands fa-google-drive"></i> Drive Photos
              </a>
              <button 
                type="button" 
                className="thm-btn thm-btn-black"
                style={{ padding: '10px 16px', fontSize: '12px' }}
                onClick={() => onOpenLightbox(photos, 0)}
              >
                <i className="fa-solid fa-expand"></i> All Photos
              </button>
            </div>

            {/* Direct Booking Platform Redirect Options */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
              {prop.airbnbUrl && (
                <a 
                  href={prop.airbnbUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="thm-btn thm-btn-outline"
                  style={{ flex: 1, justifyContent: 'center', padding: '9px 10px', fontSize: '12px' }}
                  title={`Book ${prop.name} on Airbnb`}
                >
                  <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F', fontSize: '14px' }}></i>
                  <span>Airbnb</span>
                </a>
              )}
              <a 
                href={prop.bookingUrl || HOSTAYY_CONFIG.bookingUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="thm-btn thm-btn-outline"
                style={{ flex: 1, justifyContent: 'center', padding: '9px 10px', fontSize: '12px' }}
                title={`Book ${prop.name} on Booking.com`}
              >
                <i className="fa-solid fa-hotel" style={{ color: '#003580', fontSize: '14px' }}></i>
                <span>Booking.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
