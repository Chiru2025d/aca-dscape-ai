"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      id: 1,
      src: "/images/Frame-1.svg",
      mobileSrc: "/images/Frame-1_mob.svg",
      type: "default",
      styleId: "frame-1",
    },
    {
      id: 2,
      src: "/images/Frame-2.png",
      mobileSrc: "/images/Frame-2_mob.png",
      type: "text-overlay",
      styleId: "frame-2",
      title: "Criminal Law Specialised",
      subtitle: "Multi-Disciplinary\nLaw Firm"
    },
    {
      id: 3,
      src: "/images/Frame-3.png",
      mobileSrc: "/images/Frame-3_mob.svg",
      type: "text-overlay",
      styleId: "frame-3",
      title: "Driven by a Culture",
      subtitle: "Committed to the\nClient’s Cause"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Detect mobile viewport (client-side only)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      className="hero-wrapper"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >

      {/* Background Image Carousel */}
      <div className="hero-bg-carousel">
        <div className="hero-slider-track">
          {slides.map((slide, idx) => (
            <div
              className={`hero-slide ${idx === currentIndex ? 'active' : ''}`}
              key={slide.id}
            >
              <Image
                src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
                alt={`ACA Juris Slide ${idx + 1}`}
                fill
                className={`hero-bg-image ${(slide.src.includes('Frame-2') || (isMobile && slide.mobileSrc && slide.mobileSrc.includes('Frame-2_mob'))) ? 'hero-frame-2' : ''}`}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="hero-content container">

        {/* RIGHT SIDE TEXT (Left side removed as image fills background) */}
        <div className="hero-right">
          {slides[currentIndex].type === "default" && (
            <>
              <h1 className="law-title">LAW FIRM</h1>
              <button className="hero-btn">Practice Areas →</button>
            </>
          )}

          {slides[currentIndex].type === "text-overlay" && (
            <div className={`hero-text-overlay ${slides[currentIndex].styleId || ''}`}>
              <h2 className="overlay-title">{slides[currentIndex].title}</h2>
              <h3 className="overlay-subtitle" style={{ whiteSpace: 'pre-line' }}>{slides[currentIndex].subtitle}</h3>
            </div>
          )}

        </div>

  
        <div className="hero-contact-floating">
          <div className="contact-text-block">
            <span className="contact-title">Contact:</span>

            <div className="contact-row">
              <span className="contact-text">office@acajuris.com</span>
              <a href="mailto:office@acajuris.com" className="contact-icon-bubble">
                <Image src="/images/email.svg" alt="Email" width={20} height={20} />
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-text">+(91) 96638 12090</span>
              <a href="tel:+919663812090" className="contact-icon-bubble">
                <Image src="/images/phone.svg" alt="Phone" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>


      </div>







      {/* Centered Pagination Dots */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`hero-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </section >
  );
}
