'use client';

import React, { useEffect } from 'react';
import { getGuestPropertyWhatsAppLink } from '../data/properties';

export default function PropertyModal({ prop, onClose, onOpenLightbox }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!prop) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="property-modal-body">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span className="showcase-badge" style={{ background: '#ea580c', color: '#ffffff', padding: '4px 12px', fontSize: '12px', fontWeight: 800, borderRadius: '4px' }}>{prop.badge}</span>
            <span className="showcase-former-tag" style={{ background: '#111827', color: '#ffffff', border: '1px solid #111827', padding: '4px 10px', fontSize: '12px', borderRadius: '4px', fontWeight: 700 }}>
              <i className="fa-solid fa-door-open" style={{ color: '#fed7aa', marginRight: '4px' }}></i> {prop.bhk} Serviced Apartment
            </span>
            <span style={{ fontSize: '0.85rem', color: '#B45309', fontWeight: 700 }}>
              <i className="fa-solid fa-star" style={{ color: '#F59E0B' }}></i> {prop.rating} ★ ({prop.reviewsCount} verified reviews)
            </span>
          </div>

          <h2 className="property-modal-title" style={{ color: '#111827', fontWeight: 800 }}>
            {prop.name}
          </h2>
          <p style={{ color: '#374151', fontSize: '0.96rem', marginBottom: '14px', fontWeight: 600 }}>
            <i className="fa-solid fa-location-dot text-coral" style={{ marginRight: '6px' }}></i>
            {prop.location}
          </p>

          {/* Landmarks Box */}
          <div style={{ background: '#fffaf5', border: '1px solid #fed7aa', padding: '10px 14px', borderRadius: '8px', marginBottom: '24px', fontSize: '13px', color: '#374151' }}>
            <strong style={{ color: '#ea580c', display: 'block', marginBottom: '2px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.05em', fontWeight: 800 }}>
              <i className="fa-solid fa-compass" style={{ marginRight: '4px' }}></i> Proximity &amp; Landmarks:
            </strong>
            {prop.nearbyLandmarks}
          </div>

          {/* 6-Photo Strip */}
          <div className="modal-photos-strip">
            {prop.images.slice(0, 6).map((img, idx) => (
              <div 
                key={img.id} 
                className="modal-photo-thumb"
                onClick={() => onOpenLightbox(prop.images, idx)}
                title={img.title}
              >
                <img src={img.src} alt={img.title} />
                <div className="modal-photo-caption">#{idx + 1}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'right', marginBottom: '24px' }}>
            <button 
              className="thm-btn" 
              style={{ fontSize: '0.84rem', padding: '8px 18px', background: '#ea580c', borderColor: '#ea580c', color: '#ffffff', borderRadius: '6px', fontWeight: 700 }}
              onClick={() => onOpenLightbox(prop.images, 0)}
            >
              <i className="fa-solid fa-images" style={{ color: '#ffffff' }}></i> View All {prop.images.length} Photos in Fullscreen
            </button>
          </div>

          {/* Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '28px' }}>
            {prop.specs.map((spec, idx) => (
              <div key={idx} style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '14px', padding: '14px', textAlign: 'center' }}>
                <i className={`fa-solid ${spec.icon}`} style={{ fontSize: '1.2rem', marginBottom: '6px', display: 'block', color: '#ea580c' }}></i>
                <div style={{ fontSize: '0.74rem', color: '#374151', textTransform: 'uppercase', fontWeight: 600 }}>{spec.label}</div>
                <strong style={{ fontSize: '0.94rem', color: '#111827', fontWeight: 800 }}>{spec.value}</strong>
              </div>
            ))}
          </div>

          {/* Room Breakdown */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
              <i className="fa-solid fa-door-closed" style={{ color: '#ea580c' }}></i> Detailed Room &amp; Living Breakdown
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {prop.roomBreakdown.map((room, idx) => (
                <div key={idx} style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '12px', padding: '14px' }}>
                  <strong style={{ fontSize: '0.92rem', color: '#111827', display: 'block', marginBottom: '4px', fontWeight: 800 }}>
                    {room.title}
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: '#374151', lineHeight: 1.4 }}>
                    {room.details}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}>
              <i className="fa-solid fa-sparkles" style={{ color: '#ea580c' }}></i> Key Residence Highlights
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
              {prop.features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.88rem', color: '#374151', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: '#16a34a' }}></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="property-modal-action-row" style={{ background: '#fffaf5', border: '1px solid #fed7aa', borderRadius: '12px', padding: '16px 20px' }}>
            <div>
              <span style={{ fontSize: '0.74rem', color: '#ea580c', textTransform: 'uppercase', display: 'block', fontWeight: 800 }}>Stay Arrangement</span>
              <strong className="property-modal-quote-val" style={{ color: '#111827', fontWeight: 800, fontSize: '1.15rem' }}>Monthly &amp; Long-Term Quotation</strong>
              <span style={{ fontSize: '0.82rem', color: '#374151', display: 'block', marginTop: '2px' }}>
                All-inclusive utilities, 300 Mbps Wi-Fi, housekeeping &amp; 0% brokerage
              </span>
            </div>

            <div className="property-modal-btns">
              <a 
                href={getGuestPropertyWhatsAppLink(prop.name)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="thm-btn thm-btn-wa property-modal-quote-btn"
                style={{ padding: '12px 22px', fontSize: '13px' }}
              >
                <i className="fa-brands fa-whatsapp"></i> Request Quotation on WhatsApp
              </a>
              <a 
                href={prop.driveFolderUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="thm-btn thm-btn-outline"
                style={{ padding: '11px 18px', textAlign: 'center', borderColor: '#ea580c', color: '#ea580c', background: '#ffffff', fontWeight: 700 }}
              >
                <i className="fa-brands fa-google-drive"></i> Drive Photos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
