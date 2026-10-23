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

  const currentPhoto = photos[photoIndex];

  return (
    <div className="our-rooms-two__single" data-estate-id={prop.id}>
      {/* Hotelux Room Image Box with Price Badge & Former Name */}
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
        
        {/* Price Badge */}
        <div className="our-rooms-two__price">
          <p><span>{prop.tariffPerNight}</span> / night</p>
        </div>

        {/* Former Name Badge */}
        <div className="our-rooms-former-badge">
          <i className="fa-solid fa-clock-rotate-left" style={{ marginRight: '4px' }}></i> Formerly {prop.formerName}
        </div>

        {/* Photo Counter */}
        <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(25, 22, 40, 0.8)', color: '#ffffff', fontSize: '11px', padding: '3px 8px', zIndex: 2 }}>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 className="our-rooms-two__title" onClick={() => onSelectStay(prop.id)}>
              {prop.name}
            </h3>
            <div className="our-rooms-location">
              <i className="fa-solid fa-location-dot"></i> {prop.location}
            </div>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '3px 8px' }}>
            <i className="fa-solid fa-star"></i> {prop.rating}
          </span>
        </div>

        <p className="our-rooms-desc">{prop.shortDescription}</p>

        {/* Specs List */}
        <ul className="our-rooms-two__details-list">
          <li>
            <i className="fa-solid fa-bed"></i>
            <span>{prop.roomsCount} En-Suite Rooms</span>
          </li>
          <li>
            <i className="fa-solid fa-users"></i>
            <span>Up to {prop.maxGuests} Guests</span>
          </li>
          <li>
            <i className="fa-solid fa-bath"></i>
            <span>{prop.bathroomsCount} Baths</span>
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
            title="Book directly on WhatsApp with Mohit"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp VIP
          </a>

          {prop.airbnbUrl && (
            <a 
              href={prop.airbnbUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-hotelux-ota-icon"
              title={`Open ${prop.name} on Airbnb`}
            >
              <i className="fa-brands fa-airbnb" style={{ color: '#FF5A5F' }}></i>
            </a>
          )}

          <a 
            href={prop.bookingUrl || "https://www.booking.com/Share-OrxZmT"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hotelux-ota-icon"
            title={`Open ${prop.name} on Booking.com`}
          >
            <i className="fa-solid fa-hotel" style={{ color: '#003580' }}></i>
          </a>

          <button 
            type="button" 
            className="btn-hotelux-details" 
            onClick={() => onOpenModal(prop)}
            title="View full specs and room inventory"
          >
            <i className="fa-solid fa-circle-info"></i> Specs
          </button>
        </div>
      </div>
    </div>
  );
}
