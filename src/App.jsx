'use client';

import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import StaysSection from './components/StaysSection';
import WhyChooseSection from './components/WhyChooseSection';
import SlidingText from './components/SlidingText';
import Counters from './components/Counters';
import PatronSection from './components/PatronSection';
import ProcessAndFaq from './components/ProcessAndFaq';
import ContactSection from './components/ContactSection';
import PropertyModal from './components/PropertyModal';
import Lightbox from './components/Lightbox';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';

export default function App() {
  const [selectedStayId, setSelectedStayId] = useState(null);
  const [activeModalProp, setActiveModalProp] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  // Check URL hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['velora', 'verde', 'azura'].includes(hash)) {
      setSelectedStayId(hash);
      const stayEl = document.getElementById('room');
      if (stayEl) {
        stayEl.scrollIntoView({ behavior: 'smooth' });
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
      {/* Hotelux Header Two: Top Bar & Sticky Navbar */}
      <TopBar />
      <Navbar />

      <main>
        {/* Hotelux Banner One (Hero) + Horizontal Booking Bar */}
        <Hero onSelectStay={(id) => {
          setSelectedStayId(id);
          const el = document.getElementById('room');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Hotelux Services Two */}
        <ServicesSection />

        {/* Hotelux Our Rooms Two (Residences Showcase & Cards) */}
        <StaysSection 
          selectedStayId={selectedStayId}
          setSelectedStayId={setSelectedStayId}
          onOpenModal={(prop) => setActiveModalProp(prop)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Hotelux Why Choose One */}
        <WhyChooseSection />

        {/* Hotelux Sliding Text Marquee */}
        <SlidingText />

        {/* Hotelux Counter One */}
        <Counters />

        {/* Hostayy Patron: Property Owner Partnership Portal (Modelled on patron.oyorooms.com) */}
        <PatronSection />

        {/* Onboarding Process & FAQ */}
        <ProcessAndFaq />

        {/* Hotelux Contact Two */}
        <ContactSection />
      </main>

      {/* Hotelux Site Footer Two */}
      <Footer onSelectStay={(id) => {
        setSelectedStayId(id);
        const el = document.getElementById('room');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Floating 24/7 WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Sticky Bottom Quick Action Bar for Mobile Devices */}
      <MobileBottomBar />

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
