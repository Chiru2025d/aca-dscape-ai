"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function TeamPreview() {
  const team = [
    { name: "Shridevi M Bhosale", role: "Advocate - Senior Associate", img: "/images/shri.svg", phone: "+91 7795611707", email: "shridevi.b@acajuris.com" },
    { name: "Raveesh P", role: "Advocate - Senior Associate", img: "/images/raveesh.svg", phone: "+91 9481808378", email: "raveesh.p@acajuris.com" },
    { name: "Prasad Maharajpeth", role: "Advocate -Senior Associate", img: "/images/prasad.svg", phone: "+91 88611 93973", email: "prasad.m@acajuris.com" },
    { name: "Abhiram K", role: "Advocate - Associate", img: "/images/abhiram.png", phone: "+91 73382 87915", email: "abhiram.k@acajuris.com" },
    { name: "Mahindra V T", role: "Advocate - Associate", img: "/images/Mahindra V T.svg", phone: "+91 80958 51856", email: "mahinda.v@acajuris.com" },
  ];

  /* 
    Responsive State
  */
  const [itemsVisible, setItemsVisible] = useState(4); // Default to desktop to match SSR safe
  const [startIndex, setStartIndex] = useState(0);

  const teamLength = team.length;
  // Use length for max index calculation
  const maxIndex = Math.max(0, teamLength - itemsVisible);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsVisible(1);
      } else if (width <= 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(4);
      }
    };

    // Set initial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = itemsVisible === 1; // Derived for auto-scroll usage

  // Auto-scroll for Mobile Only
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000); // 3 seconds auto-scroll

    return () => clearInterval(interval);
  }, [isMobile, maxIndex]);


  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Prevent index out of bounds when switching viewports
  useEffect(() => {
    if (startIndex > maxIndex) {
      setStartIndex(maxIndex);
    }
  }, [itemsVisible, maxIndex, startIndex]);

  return (
    <section className="team-preview">
      <div className="container" style={{ maxWidth: '1240px' }}>
        <h3 className="team-heading">Team</h3>

        <div className="carousel-section">
          {/* Arrow Left */}
          <button
            className="carousel-arrow left"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            ←
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                /* Move based on how many items are visible. 
                   If 1 item ( mobile ), we move 100% per index.
                   If 4 items ( desktop ), we move 25% per index.
                */
                transform: `translateX(-${startIndex * (100 / itemsVisible)}%)`
              }}
            >
              {team.map((member, i) => (
                <div
                  className="team-slide-wrapper"
                  key={i}
                  style={{
                    /* 
                       If mobile, take 100% width.
                       If desktop, take 25% width.
                    */
                    flex: `0 0 ${100 / itemsVisible}%`,
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0 10px'
                  }}
                >
                  <div className="team-card">
                    <div className="team-img-wrapper">
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={267}
                        height={265}
                        className="team-img"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="team-overlay">
                        <p className="team-phone">{member.phone}</p>
                        <p className="team-email">{member.email}</p>
                      </div>
                    </div>
                    <div className="team-info-box">
                      <p className="team-member-role">{member.role}</p>
                      <p className="team-member-name">{member.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <button
            className="carousel-arrow right"
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
          >
            →
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === startIndex ? 'active' : ''}`}
                onClick={() => setStartIndex(idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
