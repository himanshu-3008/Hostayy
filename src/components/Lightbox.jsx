'use client';

import React, { useEffect, useRef } from 'react';

export default function Lightbox({ images, currentIndex, setCurrentIndex, onClose }) {
  const ribbonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose]);

  useEffect(() => {
    // Scroll active thumbnail into view
    if (ribbonRef.current) {
      const activeThumb = ribbonRef.current.querySelector('.lb-thumb-item.active');
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentIndex]);

  if (!images || !images.length) return null;

  const currentPhoto = images[currentIndex];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="lightbox-overlay active" onClick={onClose}>
      {/* Header Bar */}
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-meta">
          <span className="lightbox-cat-badge">{currentPhoto.category || 'Photo'}</span>
          <span className="lightbox-counter-badge">Photo {currentIndex + 1} of {images.length}</span>
        </div>
        <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="lightbox-main-stage" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-nav lightbox-prev" onClick={prevPhoto} aria-label="Previous photo">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <img src={currentPhoto.src} alt={currentPhoto.title} className="lightbox-img" />

        <button className="lightbox-nav lightbox-next" onClick={nextPhoto} aria-label="Next photo">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Caption */}
      <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
        {currentPhoto.title}
      </div>

      {/* Bottom Thumbnail Ribbon */}
      <div className="lightbox-thumbs-container" ref={ribbonRef} onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-thumbs-ribbon">
          {images.map((img, idx) => (
            <div 
              key={img.id || idx}
              className={`lb-thumb-item ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              title={img.title}
            >
              <img src={img.thumb || img.src} alt={img.title} />
              <span className="lb-thumb-idx">#{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
