'use client';

import React from 'react';
import Link from 'next/link';
import TopBar from './TopBar';
import Navbar from './Navbar';
import PatronSection from './PatronSection';
import ProcessAndFaq from './ProcessAndFaq';
import ContactSection from './ContactSection';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileBottomBar from './MobileBottomBar';
import Footer from './Footer';

export default function ListingPageContent() {
  return (
    <div className="hostayy-app">
      {/* Booking.com Style Header */}
      <TopBar />
      <Navbar activePage="listing" />

      <main>
        {/* Hostayy Patron - All About Listing Property on the Platform */}
        <PatronSection />

        {/* Landlord Onboarding Process & FAQs */}
        <ProcessAndFaq />

        {/* Landlord Partnership Consultation & Property Audit Form */}
        <ContactSection initialTab="owner" />

        {/* Bottom Switch Banner to Guest Booking Page */}
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
            <Link
              href="/book"
              className="thm-btn"
              style={{ background: '#ea580c', color: '#ffffff', borderColor: '#ea580c', fontWeight: 800, padding: '13px 26px', fontSize: '14px', cursor: 'pointer', borderRadius: '8px', textDecoration: 'none' }}
            >
              <i className="fa-solid fa-bed" style={{ marginRight: '8px', color: '#ffffff' }}></i>
              <span style={{ color: '#ffffff' }}>Switch to Guest Booking Page &rarr;</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Bottom Navigation */}
      <MobileBottomBar activePage="listing" />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
