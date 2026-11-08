'use client';

import React from 'react';

export default function SlidingText() {
  const items = [
    '1, 2 & 3 BHK SERVICED APARTMENTS',
    '3 MINS TO YASHOBHOOMI (IICC) DWARKA',
    'VELORA 1-BHK LUXURY SUITE',
    'AZURA 2-BHK EXECUTIVE RESIDENCE',
    'VERDE 3-BHK SIGNATURE FLOOR',
    'MODULAR KITCHENS & 300 MBPS WI-FI',
    'FLEXIBLE MONTHLY & EXTENDED LEASING',
    '0% BROKERAGE & DIRECT HOST QUOTES',
    '10 MINS TO IGI AIRPORT (T3)',
    '4.98 ★ VERIFIED SUPERHOST HOSPITALITY'
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
