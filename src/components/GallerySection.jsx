'use client';

import React, { useState } from 'react';
import { HOSTAYY_PROPERTIES } from '../data/properties';

export default function GallerySection({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  // Curate gallery items from all 3 properties
  const allGalleryItems = [
    {
      id: 'g-1',
      src: '/assets/images/velora/velora-05.jpg',
      title: '4K Private Cinema Living Lounge',
      property: 'Velora 6-BHK',
      category: 'cinema',
      tag: 'Velora Cinema'
    },
    {
      id: 'g-2',
      src: '/assets/images/verde/verde-01.jpg',
      title: 'Private Swimming Pool & Sun Deck',
      property: 'Verde 8-BHK',
      category: 'pool',
      tag: 'Verde Pool'
    },
    {
      id: 'g-3',
      src: '/assets/images/azura/azura-01.jpg',
      title: 'Panoramic Penthouse Sky Lounge',
      property: 'Azura 4-BHK',
      category: 'penthouse',
      tag: 'Azura Penthouse'
    },
    {
      id: 'g-4',
      src: '/assets/images/velora/velora-02.jpg',
      title: 'Executive Master Bedroom Suite',
      property: 'Velora 6-BHK',
      category: 'bedroom',
      tag: 'Velora Suites'
    },
    {
      id: 'g-5',
      src: '/assets/images/verde/verde-03.jpg',
      title: 'Botanical Courtyard & Gazebo Dining',
      property: 'Verde 8-BHK',
      category: 'pool',
      tag: 'Verde Estate'
    },
    {
      id: 'g-6',
      src: '/assets/images/azura/azura-02.jpg',
      title: 'Sky Terrace with Skyline Views',
      property: 'Azura 4-BHK',
      category: 'penthouse',
      tag: 'Azura Terrace'
    },
    {
      id: 'g-7',
      src: '/assets/images/velora/velora-06.jpg',
      title: 'Ultra-HD Smart Entertainment System',
      property: 'Velora 6-BHK',
      category: 'cinema',
      tag: 'Velora Cinema'
    },
    {
      id: 'g-8',
      src: '/assets/images/velora/velora-03.jpg',
      title: 'Solid Wood 8-Seater Dining Space',
      property: 'Velora 6-BHK',
      category: 'dining',
      tag: 'Velora Dining'
    }
  ];

  const filteredItems = filter === 'all'
    ? allGalleryItems
    : allGalleryItems.filter(item => {
        if (filter === 'velora') return item.property.includes('Velora');
        if (filter === 'verde') return item.property.includes('Verde');
        if (filter === 'azura') return item.property.includes('Azura');
        if (filter === 'cinema') return item.category === 'cinema';
        if (filter === 'pool') return item.category === 'pool';
        if (filter === 'bedroom') return item.category === 'bedroom';
        return true;
      });

  const handleOpenPhoto = (item) => {
    if (onOpenLightbox) {
      const allSrcs = filteredItems.map(i => ({ src: i.src, title: `${i.title} • ${i.property}` }));
      const idx = filteredItems.findIndex(i => i.id === item.id);
      onOpenLightbox(allSrcs, Math.max(0, idx));
    }
  };

  return (
    <section className="gallery-two" id="gallery" style={{ padding: '100px 0 80px', backgroundColor: '#fcfbfa', position: 'relative' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Gallery</span>
          </div>
          <h2 className="section-title__title title-animation">
            From stunning suites to private pools <br />
            <span>see it all</span>
          </h2>
        </div>

        {/* Hotelux Gallery Filter Tabs */}
        <ul 
          className="gallery-filter style1 post-filter has-dynamic-filters-counter list-unstyled"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '45px',
            listStyle: 'none',
            padding: 0
          }}
        >
          {[
            { key: 'all', label: 'All Photos' },
            { key: 'velora', label: 'Velora 6-BHK' },
            { key: 'verde', label: 'Verde Pool Estate' },
            { key: 'azura', label: 'Azura Penthouse' },
            { key: 'cinema', label: 'Private Cinema' },
            { key: 'pool', label: 'Swimming Pool' }
          ].map(tab => (
            <li 
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              style={{
                cursor: 'pointer',
                padding: '9px 24px',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                backgroundColor: filter === tab.key ? 'var(--hotelux-base)' : '#fff',
                color: filter === tab.key ? '#fff' : 'var(--hotelux-black)',
                border: filter === tab.key ? '1px solid var(--hotelux-base)' : '1px solid #e6e0da',
                transition: 'all 0.3s ease'
              }}
            >
              <span className="filter-text">{tab.label}</span>
            </li>
          ))}
        </ul>

        {/* Gallery Grid */}
        <div 
          className="gallery-grid-hotelux"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="gallery-two__single"
              style={{
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(25, 22, 40, 0.08)',
                cursor: 'pointer'
              }}
              onClick={() => handleOpenPhoto(item)}
            >
              <div 
                className="gallery-two__image"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '260px'
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />

                {/* Hover Gradient Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(25, 22, 40, 0.85) 0%, rgba(25, 22, 40, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--hotelux-base)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '4px' }}>
                    {item.property}
                  </span>
                  <h3 style={{ fontFamily: 'var(--hotelux-font-two)', color: '#fff', fontSize: '17px', margin: 0, lineHeight: '1.3' }}>
                    {item.title}
                  </h3>
                </div>

                {/* Zoom Icon Button */}
                <div 
                  className="gallery-two__icon"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(185, 156, 135, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '14px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                >
                  <i className="fas fa-expand-alt"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
