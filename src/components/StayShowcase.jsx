'use client';

import React, { useState } from 'react';
import { HOSTAYY_CONFIG, getGuestPropertyWhatsAppLink } from '../data/properties';

export default function StayShowcase({ prop, onOpenLightbox, onClose }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos = prop.images;
  const previewPhotos = photos.slice(0, 6);
  const currentPhoto = photos[activePhotoIndex] || photos[0];

  return (
    <div className="stay-showcase-card compact-showcase-card">
      {/* Top Header Row with Close Button */}
      <div className="compact-showcase-header">
        <div className="showcase-badge-row" style={{ margin: 0, display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="showcase-badge" style={{ background: 'var(--hotelux-base)', color: '#ffffff', padding: '4px 12px', fontSize: '12px', fontWeight: 700 }}>
            {prop.badge}
          </span>
          <span className="showcase-tag-rooms" style={{ background: '#191628', color: '#ffffff', padding: '4px 10px', fontSize: '12px' }}>
            <i className="fa-solid fa-door-open" style={{ marginRight: '5px', color: 'var(--hotelux-base)' }}></i>
            {prop.bhk} Serviced Residence
          </span>
          <span style={{ fontSize: '12px', color: '#059669', background: '#ecfdf5', padding: '4px 10px', border: '1px solid #a7f3d0', fontWeight: 600 }}>
            <i className="fa-solid fa-bolt" style={{ marginRight: '4px' }}></i> Long-Term &amp; Monthly Quotes Available
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
                <i className="fa-solid fa-expand"></i> Fullscreen Lightbox
              </span>
            </div>
          </div>

          {/* Mini Preview Strip (Showing 6 photos including modular kitchen) */}
          <div className="compact-thumbs-row">
            {previewPhotos.map((photo, idx) => (
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Showing {previewPhotos.length} of {photos.length} verified apartment photos
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '8px' }}>
              <i className="fa-solid fa-location-dot text-coral" style={{ marginRight: '5px' }}></i>
              {prop.location}
            </p>
            {/* Proximity / Landmarks Pill */}
            <div style={{ background: '#fdf8f4', border: '1px solid #fde7d7', padding: '8px 12px', borderRadius: '4px', marginBottom: '14px', fontSize: '12px', color: '#7c2d12', lineHeight: 1.4 }}>
              <strong><i className="fa-solid fa-compass"></i> Proximity:</strong> {prop.nearbyLandmarks}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '16px' }}>
              {prop.shortDescription}
            </p>
          </div>

          {/* Quick Specs Chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            <div className="spec-pill" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-door-open text-coral"></i>
              <span>{prop.bhk} Configuration</span>
            </div>
            <div className="spec-pill" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-kitchen-set text-coral"></i>
              <span>Modular Kitchen</span>
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

          {/* Long-Term Tariff / Quotation Box */}
          <div className="showcase-quotation-box" style={{ background: 'var(--hotelux-primary)', border: '1px solid var(--hotelux-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--hotelux-base)', display: 'block', fontWeight: 700 }}>
                Long-Term &amp; Monthly Quotation
              </span>
              <strong style={{ fontFamily: 'var(--hotelux-font-two)', fontSize: '1.45rem', color: 'var(--hotelux-black)', lineHeight: 1.15 }}>
                Custom Quote on Request
              </strong>
              <span style={{ fontSize: '11.5px', color: '#64748b', display: 'block', marginTop: '3px' }}>
                0% Brokerage • 0% Platform Fees • GST Invoicing
              </span>
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
              <span>Request Long-Stay Quote ({HOSTAYY_CONFIG.displayPhone})</span>
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
                <i className="fa-solid fa-expand"></i> All {photos.length} Photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
