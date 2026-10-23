'use client';

import React from 'react';

export default function Counters() {
  const counters = [
    {
      icon: 'fa-solid fa-star',
      count: '4.98',
      suffix: '★',
      label: 'Superhost Rating'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      count: '100',
      suffix: '%',
      label: 'On-Time Monthly Payouts'
    },
    {
      icon: 'fa-solid fa-hotel',
      count: '18',
      suffix: '+',
      label: 'Units in Delhi NCR'
    },
    {
      icon: 'fa-solid fa-users',
      count: '10',
      suffix: 'k+',
      label: 'Delighted Guests Hosted'
    }
  ];

  return (
    <section className="counter-one">
      <div className="container">
        <div className="counter-one__inner">
          <ul className="counter-one__count-list list-unstyled">
            {counters.map((c, idx) => (
              <li key={idx}>
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <i className={c.icon}></i>
                  </div>
                  <div className="counter-one__count">
                    <h3>{c.count}<span>{c.suffix}</span></h3>
                  </div>
                  <p className="counter-one__text">{c.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
