'use client';

import React from 'react';

export default function SlidingText() {
  const items = [
    'LUXURY PRIVATE RESIDENCES',
    'VELORA 6-BHK CINEMA VILLA',
    'VERDE 8-BHK BOTANICAL ESTATE',
    'AZURA 4-BHK EXECUTIVE PENTHOUSE',
    '4.98 ★ VERIFIED SUPERHOST',
    '0% OTA COMMISSION SURCHARGE',
    'DIRECT VIP WHATSAPP RATES',
    '10 MINS TO IGI AIRPORT (T3) & YASHOBHOOMI IICC'
  ];

  return (
    <section className="sliding-text">
      <ul className="sliding-text__list list-unstyled">
        {items.concat(items).map((text, idx) => (
          <li key={idx}>
            <i className="fa-solid fa-crown" style={{ color: 'var(--hotelux-base)' }}></i>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
