'use client';

import React, { useState } from 'react';
import { getGuestPropertyWhatsAppLink } from '../data/properties';

export default function PropertyCard({ prop, onSelectStay, onOpenModal, onOpenLightbox }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const photos = prop.images;
  const totalPhotos = photos.length;

  const minSwipeDistance = 35;

  const onTouchStartHandler = (e) => {
    setIsDragging(true);
    setTouchStartX(e.targetTouches[0].clientX);
    setDragOffset(0);
  };

  const onTouchMoveHandler = (e) => {
    if (!isDragging) return;
    const currentX = e.targetTouches[0].clientX;
    setDragOffset(currentX - touchStartX);
  };

  const onTouchEndHandler = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -minSwipeDistance) {
      // Swiped left -> next photo
      setPhotoIndex((prev) => (prev + 1) % totalPhotos);
    } else if (dragOffset > minSwipeDistance) {
      // Swiped right -> prev photo
      setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
    }
    setDragOffset(0);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const currentPhoto = photos[photoIndex] || photos[0];

  const handlePhotoClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox(photos, photoIndex);
    } else if (onSelectStay) {
      onSelectStay(prop.id);
    }
  };

  return (
    <div className="our-rooms-two__single oyo-property-card" data-estate-id={prop.id} style={{ borderRadius: '16px', overflow: 'hidden' }}>
      {/* High-Resolution Photo Box with Carousel Controls & Touch Swipe */}
      <div 
        className="our-rooms-two__img-box" 
        onClick={handlePhotoClick}
        onTouchStart={onTouchStartHandler}
        onTouchMove={onTouchMoveHandler}
        onTouchEnd={onTouchEndHandler}
        title="Click to view full photo gallery (Swipe on phone to change photo)"
        style={{ position: 'relative', height: '240px', overflow: 'hidden', cursor: 'pointer', borderRadius: '16px 16px 0 0', touchAction: 'pan-y', userSelect: 'none' }}
      >
        {/* Multi-Slide Flex Track with Real-Time Drag and Vanishing Slide Transitions */}
        <div 
          className="property-card-photo-track"
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transform: isDragging 
              ? `translateX(calc(-${photoIndex * 100}% + ${dragOffset}px))` 
              : `translateX(-${photoIndex * 100}%)`,
            transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform'
          }}
        >
          {photos.map((photo, idx) => {
            const isCur = idx === photoIndex;
            return (
              <div 
                key={photo.id || idx}
                style={{
                  minWidth: '100%',
                  width: '100%',
                  height: '100%',
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title || prop.name} 
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="property-card-photo"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    display: 'block', 
                    imageRendering: '-webkit-optimize-contrast',
                    filter: 'contrast(1.05) brightness(1.02) saturate(1.05)',
                    transform: isCur ? 'scale(1)' : 'scale(0.96)',
                    opacity: isCur ? 1 : 0.35,
                    transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease'
                  }}
                />
              </div>
            );
          })}
        </div>
        
        {/* Sanitised Stay Badge */}
        <div className="oyo-sanitised-badge" style={{ borderRadius: '10px' }}>
          <i className="fa-solid fa-shield-virus"></i> Sanitised Stay
        </div>

        {/* BHK Configuration Tag */}
        <div className="our-rooms-former-badge" style={{ backgroundColor: '#ea384c', color: '#ffffff', border: '1px solid #ea384c', fontWeight: 800, borderRadius: '10px' }}>
          <i className="fa-solid fa-door-open" style={{ marginRight: '5px', color: '#ffffff' }}></i> {prop.bhk} Serviced Flat
        </div>

        {/* Photo Counter Pill */}
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(17, 24, 39, 0.88)', color: '#ffffff', fontSize: '11px', padding: '4px 10px', zIndex: 2, borderRadius: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px', backdropFilter: 'blur(6px)' }}>
          <i className="fa-solid fa-camera" style={{ color: '#fecdd3' }}></i> {photoIndex + 1} / {totalPhotos}
        </div>

        {/* Prev / Next Photo Arrow Buttons */}
        <button 
          type="button"
          onClick={prevPhoto}
          style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '34px', height: '34px', background: 'rgba(255,255,255,0.92)', border: 'none', color: '#191628', cursor: 'pointer', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
          aria-label="Previous Photo"
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: '12px' }}></i>
        </button>
        <button 
          type="button"
          onClick={nextPhoto}
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '34px', height: '34px', background: 'rgba(255,255,255,0.92)', border: 'none', color: '#191628', cursor: 'pointer', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
          aria-label="Next Photo"
        >
          <i className="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i>
        </button>
      </div>

      {/* Hotelux Room Body with Specs & Actions */}
      <div className="our-rooms-two__body" style={{ padding: '20px', background: '#ffffff', borderRadius: '0 0 16px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <div>
            <h3 
              className="our-rooms-two__title" 
              onClick={() => onSelectStay && onSelectStay(prop.id)} 
              style={{ marginBottom: '3px', fontSize: '18px', color: '#111827', cursor: 'pointer', fontWeight: 800 }}
            >
              {prop.name}
            </h3>
            <div className="our-rooms-location" style={{ fontSize: '12.5px', color: '#374151', fontWeight: 600 }}>
              <i className="fa-solid fa-location-dot" style={{ color: '#ea384c', marginRight: '4px' }}></i> {prop.location}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', background: '#059669', padding: '3px 8px', borderRadius: '8px', display: 'inline-block' }}>
              {prop.rating} ★
            </span>
            <span style={{ display: 'block', fontSize: '10.5px', color: '#374151', fontWeight: 600, marginTop: '2px' }}>
              ({prop.reviewsCount}+ ratings)
            </span>
          </div>
        </div>

        {/* Proximity Pill */}
        <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', padding: '6px 10px', borderRadius: '10px', marginBottom: '12px', fontSize: '11.5px', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <i className="fa-solid fa-location-arrow" style={{ color: '#ea384c' }}></i>
          <span><strong>{prop.bhk === '1 BHK' ? '3 Mins' : prop.bhk === '2 BHK' ? '4 Mins' : '3 Mins'}</strong> to Yashobhoomi (IICC) &bull; 10 Mins to Airport T3</span>
        </div>

        <p className="our-rooms-desc" style={{ marginBottom: '14px', fontSize: '13px', color: '#374151', lineHeight: 1.6 }}>{prop.shortDescription}</p>

        {/* OYO-Style Amenities Row */}
        <div className="oyo-amenities-row">
          <span className="oyo-amenity-chip" title="Air Conditioning" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-snowflake" style={{ color: '#ea384c' }}></i> AC</span>
          <span className="oyo-amenity-chip" title="300 Mbps Wi-Fi" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-wifi" style={{ color: '#ea384c' }}></i> 300 Mbps Wi-Fi</span>
          <span className="oyo-amenity-chip" title="Modular Kitchen" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-kitchen-set" style={{ color: '#ea384c' }}></i> Kitchen</span>
          <span className="oyo-amenity-chip" title="Power Backup" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-bolt" style={{ color: '#ea384c' }}></i> Power Backup</span>
          <span className="oyo-amenity-chip" title="Daily Housekeeping" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-broom" style={{ color: '#ea384c' }}></i> Housekeeping</span>
          <span className="oyo-amenity-chip" title="Geyser" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-temperature-arrow-up" style={{ color: '#ea384c' }}></i> Geyser</span>
          <span className="oyo-amenity-chip" title="Smart TV" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-tv" style={{ color: '#ea384c' }}></i> Smart TV</span>
          <span className="oyo-amenity-chip" title="Elevator" style={{ color: '#111827', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '8px' }}><i className="fa-solid fa-elevator" style={{ color: '#ea384c' }}></i> Lift</span>
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
        <div className="oyo-card-rate-box" style={{ background: '#fff5f6', border: '1px solid #fecdd3', borderRadius: '12px' }}>
          <div>
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ea384c', fontWeight: 800, display: 'block' }}>
              DIRECT HOST RATE &bull; GST INVOICE INCLUDED
            </span>
            <strong style={{ fontSize: '14.5px', color: '#111827' }}>
              Monthly Corporate Quotation
            </strong>
          </div>
          <span style={{ fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '3px 8px', borderRadius: '8px', fontWeight: 700 }}>
            Save 20% on Long Stays
          </span>
        </div>

        {/* Action Buttons Row: Perfectly Equal in Shape and Width from Both Sides with Rounded Corners */}
        <div className="our-rooms-actions-row" style={{ marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'stretch' }}>
          <a 
            href={getGuestPropertyWhatsAppLink(prop.name)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hotelux-room-wa oyo-btn-book"
            title="Book this flat on WhatsApp"
            style={{ flex: 1, minHeight: '46px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#16a34a', color: '#ffffff', fontWeight: 700, borderRadius: '12px', padding: '10px 14px', fontSize: '13px', textDecoration: 'none', border: 'none', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.25)', transition: 'all 0.2s ease' }}
          >
            <i className="fa-brands fa-whatsapp" style={{ marginRight: '6px' }}></i> Book on WhatsApp
          </a>

          <button 
            type="button" 
            className="btn-hotelux-details" 
            onClick={() => onOpenModal ? onOpenModal(prop) : onSelectStay && onSelectStay(prop.id)}
            title="View full apartment specifications, photos and amenities"
            style={{ flex: 1, minHeight: '46px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#ea384c', color: '#ffffff', borderColor: '#ea384c', fontWeight: 700, borderRadius: '12px', padding: '10px 14px', fontSize: '13px', cursor: 'pointer', border: '1px solid #ea384c', boxShadow: '0 4px 14px rgba(234, 56, 76, 0.25)', transition: 'all 0.2s ease' }}
          >
            <i className="fa-solid fa-images" style={{ color: '#ffffff', marginRight: '6px' }}></i> Photos &amp; Specs
          </button>
        </div>
      </div>
    </div>
  );
}
