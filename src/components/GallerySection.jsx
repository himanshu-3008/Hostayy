'use client';

import React, { useState } from 'react';
import { HOSTAYY_PROPERTIES } from '../data/properties';

export default function GallerySection({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  // Curated 16 high-res gallery items from 1 BHK, 2 BHK, and 3 BHK residences
  const allGalleryItems = [
    {
      id: 'g-1',
      src: '/assets/images/velora/velora-13.jpg',
      title: 'Fully Equipped Modular Kitchen with Microwave & RO',
      property: 'Velora 1-BHK',
      category: 'kitchen',
      tag: '1 BHK Kitchen'
    },
    {
      id: 'g-2',
      src: '/assets/images/azura/azura-06.jpg',
      title: 'Gourmet Open Kitchen with Induction Hob & Espresso Bar',
      property: 'Azura 2-BHK',
      category: 'kitchen',
      tag: '2 BHK Kitchen'
    },
    {
      id: 'g-3',
      src: '/assets/images/verde/verde-07.jpg',
      title: 'Chef Grade Island Kitchen with Commercial Appliances',
      property: 'Verde 3-BHK',
      category: 'kitchen',
      tag: '3 BHK Kitchen'
    },
    {
      id: 'g-4',
      src: '/assets/images/velora/velora-05.jpg',
      title: '4K Private Cinema Living Lounge',
      property: 'Velora 1-BHK',
      category: 'living',
      tag: 'Velora Cinema'
    },
    {
      id: 'g-5',
      src: '/assets/images/azura/azura-01.jpg',
      title: 'Sunlit Designer Living Room with Skyline Windows',
      property: 'Azura 2-BHK',
      category: 'living',
      tag: 'Azura Living'
    },
    {
      id: 'g-6',
      src: '/assets/images/verde/verde-02.jpg',
      title: 'Palatial Living Hall with High Ceilings & Garden Vistas',
      property: 'Verde 3-BHK',
      category: 'living',
      tag: 'Verde Hall'
    },
    {
      id: 'g-7',
      src: '/assets/images/azura/azura-05.jpg',
      title: 'Contemporary Dining Space & Italian Marble Breakfast Bar',
      property: 'Azura 2-BHK',
      category: 'kitchen',
      tag: 'Azura Dining'
    },
    {
      id: 'g-8',
      src: '/assets/images/velora/velora-03.jpg',
      title: 'Gourmet Kitchen & Solid Wood Dining Space',
      property: 'Velora 1-BHK',
      category: 'kitchen',
      tag: 'Velora Dining'
    },
    {
      id: 'g-9',
      src: '/assets/images/verde/verde-06.jpg',
      title: 'Grand Banquet Dining Area for 8-12 Guests',
      property: 'Verde 3-BHK',
      category: 'kitchen',
      tag: 'Verde Dining'
    },
    {
      id: 'g-10',
      src: '/assets/images/velora/velora-02.jpg',
      title: 'Executive Master Bedroom Suite with Ambient LED Lighting',
      property: 'Velora 1-BHK',
      category: 'bedroom',
      tag: '1 BHK Master'
    },
    {
      id: 'g-11',
      src: '/assets/images/azura/azura-03.jpg',
      title: 'Master Sky Suite with Floor-to-Ceiling Windows',
      property: 'Azura 2-BHK',
      category: 'bedroom',
      tag: '2 BHK Sky Suite'
    },
    {
      id: 'g-12',
      src: '/assets/images/azura/azura-11.jpg',
      title: 'Dedicated Executive Workstation with 300 Mbps Wi-Fi',
      property: 'Azura 2-BHK',
      category: 'living',
      tag: 'Workstation'
    },
    {
      id: 'g-13',
      src: '/assets/images/verde/verde-12.jpg',
      title: 'Executive Garden Suite with King Size Bed',
      property: 'Verde 3-BHK',
      category: 'bedroom',
      tag: '3 BHK Suite'
    },
    {
      id: 'g-14',
      src: '/assets/images/azura/azura-04.jpg',
      title: 'Private Sky Terrace Lounge with City Skyline Views',
      property: 'Azura 2-BHK',
      category: 'outdoor',
      tag: 'Sky Terrace'
    },
    {
      id: 'g-15',
      src: '/assets/images/velora/velora-04.jpg',
      title: 'Spa-Grade Designer Bathroom with Glass Rain Shower Enclosure',
      property: 'Velora 1-BHK',
      category: 'baths',
      tag: 'Ensuite Bath'
    },
    {
      id: 'g-16',
      src: '/assets/images/velora/velora-16.jpg',
      title: 'Private Balcony with Sunset City Vista',
      property: 'Velora 1-BHK',
      category: 'outdoor',
      tag: 'Balcony'
    }
  ];

  const filteredItems = filter === 'all'
    ? allGalleryItems
    : allGalleryItems.filter(item => {
        if (filter === 'kitchen') return item.category === 'kitchen';
        if (filter === 'velora') return item.property.includes('Velora');
        if (filter === 'azura') return item.property.includes('Azura');
        if (filter === 'verde') return item.property.includes('Verde');
        if (filter === 'living') return item.category === 'living';
        if (filter === 'bedroom') return item.category === 'bedroom';
        if (filter === 'outdoor') return item.category === 'outdoor';
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
    <section className="gallery-two" id="gallery" style={{ padding: '90px 0 80px', backgroundColor: '#fcfbfa', position: 'relative' }}>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">PHOTO SHOWCASE</span>
          </div>
          <h2 className="section-title__title title-animation">
            Explore Our <span>Apartments &amp; Kitchens</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '14px auto 0', color: 'var(--hotelux-gray)', fontSize: '15px', lineHeight: '1.7' }}>
            High-resolution photography showcasing modern modular kitchens, 4K cinema lounges, king en-suite bedrooms, and work-ready executive desks across 1, 2, and 3 BHK residences.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="gallery-filter-wrap" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <ul 
            className="gallery-filter style1 post-filter list-unstyled"
            style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', background: '#fff', padding: '6px', borderRadius: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #ebe5df' }}
          >
            {[
              { id: 'all', label: `All Photos (${allGalleryItems.length})`, icon: 'fa-images' },
              { id: 'kitchen', label: 'Modular Kitchens & Dining', icon: 'fa-kitchen-set' },
              { id: 'velora', label: '1 BHK Suite', icon: 'fa-door-open' },
              { id: 'azura', label: '2 BHK Residence', icon: 'fa-building' },
              { id: 'verde', label: '3 BHK Signature', icon: 'fa-gem' },
              { id: 'living', label: 'Living & Cinema', icon: 'fa-couch' },
              { id: 'bedroom', label: 'Bedrooms', icon: 'fa-bed' }
            ].map(tab => (
              <li 
                key={tab.id}
                className={filter === tab.id ? 'active' : ''}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  backgroundColor: filter === tab.id ? 'var(--hotelux-base)' : 'transparent',
                  color: filter === tab.id ? '#ffffff' : 'var(--hotelux-black)'
                }}
              >
                <i className={`fa-solid ${tab.icon}`} style={{ marginRight: '6px' }}></i>
                <span>{tab.label}</span>
              </li>
            ))}
          </ul>
        </div>

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
                borderRadius: '8px',
                boxShadow: '0 8px 25px rgba(25, 22, 40, 0.08)',
                cursor: 'pointer',
                aspectRatio: '4/3'
              }}
              onClick={() => handleOpenPhoto(item)}
            >
              <div 
                className="gallery-two__image"
                style={{ width: '100%', height: '100%', position: 'relative' }}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div 
                  className="gallery-two__hover"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(25, 22, 40, 0.92) 0%, rgba(25, 22, 40, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--hotelux-base)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    {item.tag}
                  </span>
                  <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, margin: '0 0 6px', lineHeight: 1.3 }}>
                    {item.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '12px' }}>
                    <i className="fa-solid fa-expand" style={{ color: 'var(--hotelux-base)' }}></i>
                    <span>Click to view full photo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
