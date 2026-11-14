'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Lightbox({ isOpen = true, images, currentIndex = 0, setCurrentIndex, onClose }) {
  const [internalIndex, setInternalIndex] = useState(currentIndex || 0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const ribbonRef = useRef(null);

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
    setIsDragging(true);
    setTouchStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -40) {
      // Swiped left -> Next photo
      nextPhoto();
    } else if (dragOffset > 40) {
      // Swiped right -> Previous photo
      prevPhoto();
    }
    setDragOffset(0);
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
        style={{ position: 'relative', overflow: 'hidden', touchAction: 'pan-y' }}
      >
        <button 
          className="lightbox-nav lightbox-prev" 
          onClick={prevPhoto} 
          aria-label="Previous photo"
          style={{ borderRadius: '12px', width: '44px', height: '44px', zIndex: 10 }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Multi-Slide Flex Track for Fullscreen Swipe */}
        <div 
          className="lightbox-slider-track"
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            transform: isDragging 
              ? `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))` 
              : `translateX(-${activeIndex * 100}%)`,
            transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform'
          }}
        >
          {images.map((img, idx) => {
            const isCur = idx === activeIndex;
            return (
              <div 
                key={img.id || idx}
                style={{
                  minWidth: '100%',
                  width: '100%',
                  height: '100%',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="lightbox-img" 
                  style={{ 
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    imageRendering: '-webkit-optimize-contrast', 
                    filter: 'contrast(1.05) brightness(1.02) saturate(1.04)',
                    transform: isCur ? 'scale(1)' : 'scale(0.94)',
                    opacity: isCur ? 1 : 0.25,
                    transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease'
                  }} 
                />
              </div>
            );
          })}
        </div>

        <button 
          className="lightbox-nav lightbox-next" 
          onClick={nextPhoto} 
          aria-label="Next photo"
          style={{ borderRadius: '12px', width: '44px', height: '44px', zIndex: 10 }}
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
