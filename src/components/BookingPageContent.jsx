'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import Navbar from './Navbar';
import StaysSection from './StaysSection';
import WhyChooseSection from './WhyChooseSection';
import ContactSection from './ContactSection';
import PropertyModal from './PropertyModal';
import Lightbox from './Lightbox';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileBottomBar from './MobileBottomBar';
import Footer from './Footer';

export default function BookingPageContent() {
  const [selectedStayId, setSelectedStayId] = useState(null);
  const [activeModalProp, setActiveModalProp] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  // Check URL hash on mount (e.g. #velora, #azura, #verde)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['velora', 'verde', 'azura'].includes(hash)) {
      setSelectedStayId(hash);
      setTimeout(() => {
        const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const handleOpenLightbox = (images, idx = 0) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: idx
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      images: [],
      currentIndex: 0
    });
  };

  return (
    <div className="hostayy-app">
      {/* Booking.com Style Header */}
      <TopBar />
      <Navbar 
        activePage="booking"
        onSelectStay={(id) => {
          setSelectedStayId(id);
          const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      <main>
        {/* Curated 1, 2, 3 BHK Serviced Flats Showcase */}
        <StaysSection 
          selectedStayId={selectedStayId}
          setSelectedStayId={setSelectedStayId}
          onOpenModal={(prop) => setActiveModalProp(prop)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Proximity Matrix & Verified Physical Address Section */}
        <WhyChooseSection />

        {/* Guest Direct WhatsApp Quotation Form */}
        <ContactSection initialTab="guest" />

        {/* Bottom Switch Banner to Property Listing Page */}
        <div className="container" style={{ margin: '40px auto 60px' }}>
          <div 
            className="portal-switch-card"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              border: '2px solid #fed7aa',
              boxShadow: '0 14px 40px rgba(234, 88, 12, 0.09)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', maxWidth: '720px' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#fff7ed', border: '1.5px solid #fed7aa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', fontSize: '22px', flexShrink: 0 }}>
                <i className="fa-solid fa-house-chimney-user"></i>
              </div>
              <div>
                <span style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ea580c', fontWeight: 800, display: 'block' }}>
                  FOR APARTMENT OWNERS &bull; HOSTAYY PATRON
                </span>
                <h3 style={{ margin: '4px 0 6px', color: '#111827', fontSize: '23px', fontWeight: 800 }}>
                  Own an apartment in Delhi NCR?
                </h3>
                <p style={{ margin: 0, color: '#374151', fontSize: '14.5px', lineHeight: 1.6 }}>
                  Earn 40%+ higher monthly rental income with 100% on-time guaranteed payouts and five-star turnkey asset care.
                </p>
              </div>
            </div>
            <Link
              href="/list-property"
              className="thm-btn"
              style={{ background: '#ea580c', color: '#ffffff', borderColor: '#ea580c', fontWeight: 800, padding: '13px 26px', fontSize: '14px', cursor: 'pointer', borderRadius: '8px', textDecoration: 'none' }}
            >
              <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '8px', color: '#ffffff' }}></i>
              <span style={{ color: '#ffffff' }}>Switch to Property Listing Page &rarr;</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Property Details Modal */}
      {activeModalProp && (
        <PropertyModal 
          prop={activeModalProp} 
          onClose={() => setActiveModalProp(null)}
          onOpenLightbox={handleOpenLightbox}
        />
      )}

      {/* Fullscreen Photo Lightbox */}
      <Lightbox 
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Navigation */}
      <MobileBottomBar activePage="booking" />

      {/* Site Footer */}
      <Footer onSelectStay={(id) => setSelectedStayId(id)} />
    </div>
  );
}
