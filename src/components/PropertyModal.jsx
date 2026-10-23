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

        <div style={{ padding: '36px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span className="showcase-badge">{prop.badge}</span>
            <span className="showcase-former-tag">Formerly {prop.formerName}</span>
            <span style={{ fontSize: '0.85rem', color: '#B45309', fontWeight: 700 }}>
              <i className="fa-solid fa-star" style={{ color: '#F59E0B' }}></i> {prop.rating} ★ ({prop.reviewsCount} verified reviews)
            </span>
          </div>

          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
            {prop.name}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', marginBottom: '24px' }}>
            <i className="fa-solid fa-location-dot text-coral" style={{ marginRight: '6px' }}></i>
            {prop.location} • {prop.nearbyLandmarks}
          </p>

          {/* 5-Photo Strip */}
          <div className="modal-photos-strip">
            {prop.images.slice(0, 5).map((img, idx) => (
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
              className="btn-outline-charcoal" 
              style={{ fontSize: '0.84rem', padding: '8px 16px' }}
              onClick={() => onOpenLightbox(prop.images, 0)}
            >
              <i className="fa-solid fa-images"></i> View All {prop.images.length} Photos in Fullscreen
            </button>
          </div>

          {/* Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '28px' }}>
            {prop.specs.map((spec, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '14px', textAlign: 'center' }}>
                <i className={`fa-solid ${spec.icon} text-coral`} style={{ fontSize: '1.2rem', marginBottom: '6px', display: 'block' }}></i>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{spec.label}</div>
                <strong style={{ fontSize: '0.94rem', color: 'var(--text-primary)' }}>{spec.value}</strong>
              </div>
            ))}
          </div>

          {/* Room Breakdown */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-door-closed text-coral"></i> Bedroom Suite Breakdown
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {prop.roomBreakdown.map((room, idx) => (
                <div key={idx} style={{ background: '#F8FAFC', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '14px' }}>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                    {room.title}
                  </strong>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {room.details}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-solid fa-sparkles text-coral"></i> Key Residence Highlights
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
              {prop.features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <i className="fa-solid fa-circle-check text-coral"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block' }}>Direct VIP Tariff</span>
              <strong style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>{prop.tariffPerNight} <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ night</span></strong>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a 
                href={getGuestPropertyWhatsAppLink(prop.name)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-coral"
                style={{ padding: '11px 22px' }}
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp VIP
              </a>
              {prop.airbnbUrl && (
                <a 
                  href={prop.airbnbUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline-charcoal"
                  style={{ padding: '11px 18px' }}
                  title={`Book ${prop.name} on Airbnb`}
                >
                  <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F' }}></i> Airbnb
                </a>
              )}
              <a 
                href={prop.bookingUrl || "https://www.booking.com/Share-OrxZmT"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-charcoal"
                style={{ padding: '11px 18px' }}
                title={`Book ${prop.name} on Booking.com`}
              >
                <i className="fa-solid fa-hotel" style={{ color: '#003580' }}></i> Booking.com
              </a>
              <a 
                href={prop.driveFolderUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline-charcoal"
                style={{ padding: '11px 18px' }}
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
