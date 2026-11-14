'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Lightbox({ isOpen = true, images, currentIndex = 0, setCurrentIndex, onClose }) {
  const [internalIndex, setInternalIndex] = useState(currentIndex || 0);
  const ribbonRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Sync internal index when prop changes
  useEffect(() => {
    setInternalIndex(currentIndex || 0);
  }, [currentIndex]);

  const activeIndex = (typeof currentIndex === 'number' && setCurrentIndex) ? currentIndex : internalIndex;

  const updateIndex = (newIdx) => {
    setInternalIndex(newIdx);
    if (typeof setCurrentIndex === 'function') {
      setCurrentIndex(newIdx);
    }
  };

  const nextPhoto = (e) => {
    if (e) e.stopPropagation();
    if (!images || !images.length) return;
    const nextIdx = (activeIndex + 1) % images.length;
    updateIndex(nextIdx);
  };

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    if (!images || !images.length) return;
    const prevIdx = (activeIndex - 1 + images.length) % images.length;
    updateIndex(prevIdx);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, images?.length, onClose]);

  useEffect(() => {
    // Scroll active thumbnail into view
    if (ribbonRef.current) {
      const activeThumb = ribbonRef.current.querySelector('.lb-thumb-item.active');
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 35) {
      // Swiped left -> Next photo
      nextPhoto(e);
    } else if (distance < -35) {
      // Swiped right -> Previous photo
      prevPhoto(e);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || !images || !images.length) return null;

  const currentPhoto = images[activeIndex] || images[0];

  return (
    <div className="lightbox-overlay active" onClick={onClose}>
      {/* Header Bar */}
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-meta">
          <span className="lightbox-cat-badge">{currentPhoto.category || 'Photo'}</span>
          <span className="lightbox-counter-badge">Photo {activeIndex + 1} of {images.length}</span>
        </div>
        <button 
          className="lightbox-close" 
          onClick={onClose} 
          aria-label="Close Lightbox"
          style={{ borderRadius: '12px', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Main Image Stage with Touch Swipe */}
      <div 
        className="lightbox-main-stage" 
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button 
          className="lightbox-nav lightbox-prev" 
          onClick={prevPhoto} 
          aria-label="Previous photo"
          style={{ borderRadius: '12px', width: '44px', height: '44px' }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <img src={currentPhoto.src} alt={currentPhoto.title} className="lightbox-img" />

        <button 
          className="lightbox-nav lightbox-next" 
          onClick={nextPhoto} 
          aria-label="Next photo"
          style={{ borderRadius: '12px', width: '44px', height: '44px' }}
        >
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
              className={`lb-thumb-item ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => updateIndex(idx)}
              title={img.title}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
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
