'use client';

import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StaysSection from './components/StaysSection';
import WhyChooseSection from './components/WhyChooseSection';
import PatronSection from './components/PatronSection';
import ProcessAndFaq from './components/ProcessAndFaq';
import ContactSection from './components/ContactSection';
import PropertyModal from './components/PropertyModal';
import Lightbox from './components/Lightbox';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';

export default function App() {
  const [portalMode, setPortalMode] = useState('booking'); // 'booking' | 'listing'
  const [selectedStayId, setSelectedStayId] = useState(null);
  const [activeModalProp, setActiveModalProp] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  // Check URL hash on load to open the matching portal and stay
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['patron', 'patron-calc', 'process', 'comparison', 'faq', 'owner'].includes(hash)) {
      setPortalMode('listing');
    } else if (['room', 'velora', 'verde', 'azura', 'why-choose', 'home', 'booking'].includes(hash)) {
      setPortalMode('booking');
      if (['velora', 'verde', 'azura'].includes(hash)) {
        setSelectedStayId(hash);
      }
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
      {/* Booking.com Style Luxury Header with Dual-Portal Switcher */}
      <TopBar />
      <Navbar 
        portalMode={portalMode}
        setPortalMode={setPortalMode}
        onSelectStay={(id) => {
          setSelectedStayId(id);
          const el = document.getElementById('stay-showcase-container') || document.getElementById('room');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      <main>
        {/* =================================================================
            PORTION 1: CUSTOMERS & GUEST BOOKING PORTAL
            Focused on 1, 2, 3 BHK Serviced Flats, Instant WhatsApp Booking,
            Photos, Specs, Proximity & Official Address
            ================================================================= */}
        {portalMode === 'booking' && (
          <section className="portal-booking-view" key="booking-portal">
            {/* Banner One (Hero) + Horizontal Booking Bar */}
            <Hero onSelectStay={(id) => {
              setSelectedStayId(id);
              const el = document.getElementById('room');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} />

            {/* Our Rooms Two (Residences Showcase, Photos & Cards) */}
            <StaysSection 
              selectedStayId={selectedStayId}
              setSelectedStayId={setSelectedStayId}
              onOpenModal={(prop) => setActiveModalProp(prop)}
              onOpenLightbox={handleOpenLightbox}
            />

            {/* Strategic Proximity & Official Verified Physical Address Section */}
            <WhyChooseSection />

            {/* Guest Direct Contact & Long-Term Quotations Form */}
            <ContactSection initialTab="guest" />

            {/* Switch Banner to Property Listing Portal (Orange & White Theme, 100% Contrast) */}
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
                <button
                  type="button"
                  onClick={() => {
                    setPortalMode('listing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="thm-btn"
                  style={{ background: '#ea580c', color: '#ffffff', borderColor: '#ea580c', fontWeight: 800, padding: '13px 26px', fontSize: '14px', cursor: 'pointer', borderRadius: '8px' }}
                >
                  <i className="fa-solid fa-house-chimney-user" style={{ marginRight: '8px', color: '#ffffff' }}></i>
                  <span style={{ color: '#ffffff' }}>Switch to Property Listing Portal</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* =================================================================
            PORTION 2: PROPERTY OWNERS & LISTING PORTAL (HOSTAYY PATRON)
            Modelled on patron.oyorooms.com: Yield Calculator, 100% On-Time Payouts,
            3-Step Onboarding, Comparison Table & Owner Audit Requests
            ================================================================= */}
        {portalMode === 'listing' && (
          <section className="portal-listing-view" key="listing-portal">
            {/* Hostayy Patron: Property Owner Partnership Portal */}
            <PatronSection />

            {/* Onboarding Process & Landlord FAQ */}
            <ProcessAndFaq />

            {/* Landlord Partnership Consultation & Property Audit Form */}
            <ContactSection initialTab="owner" />

            {/* Switch Banner to Guest Booking Portal (Orange & White Theme, 100% Contrast) */}
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
                    <i className="fa-solid fa-bed"></i>
                  </div>
                  <div>
                    <span style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ea580c', fontWeight: 800, display: 'block' }}>
                      TRAVELERS &amp; CORPORATE EXECUTIVES
                    </span>
                    <h3 style={{ margin: '4px 0 6px', color: '#111827', fontSize: '23px', fontWeight: 800 }}>
                      Looking to Book a Serviced Flat?
                    </h3>
                    <p style={{ margin: 0, color: '#374151', fontSize: '14.5px', lineHeight: 1.6 }}>
                      Explore turnkey 1, 2, and 3 BHK residences just 3 minutes from Yashobhoomi IICC and 10 mins from IGI Airport with 0% brokerage.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPortalMode('booking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="thm-btn"
                  style={{ background: '#ea580c', color: '#ffffff', borderColor: '#ea580c', fontWeight: 800, padding: '13px 26px', fontSize: '14px', cursor: 'pointer', borderRadius: '8px' }}
                >
                  <i className="fa-solid fa-bed" style={{ marginRight: '8px', color: '#ffffff' }}></i>
                  <span style={{ color: '#ffffff' }}>Switch to Guest Booking Portal</span>
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Hotelux Site Footer Two */}
      <Footer onSelectStay={(id) => {
        setPortalMode('booking');
        setSelectedStayId(id);
        const el = document.getElementById('room');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Floating 24/7 WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Sticky Bottom Quick Action Bar for Mobile Devices */}
      <MobileBottomBar portalMode={portalMode} setPortalMode={setPortalMode} />

      {/* Interactive Property Modal & Fullscreen Photo Lightbox */}
      <PropertyModal 
        prop={activeModalProp} 
        onClose={() => setActiveModalProp(null)} 
        onOpenLightbox={handleOpenLightbox}
      />

      <Lightbox 
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIdx) => setLightboxState(prev => ({ ...prev, currentIndex: newIdx }))}
      />
    </div>
  );
}
