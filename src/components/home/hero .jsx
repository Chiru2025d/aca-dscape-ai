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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
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

  // Swipe Handlers for mobile
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
      role="region"
      aria-label="Hero section with image carousel"
    >
      {/* Background Image Carousel */}
      <div 
        className="hero-bg-carousel" 
        role="img" 
        aria-label={slides[currentIndex].ariaLabel}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="hero-slider-track">
          {slides.map((slide, idx) => (
            <div
              className={`hero-slide ${idx === currentIndex ? 'active' : ''}`}
              key={slide.id}
              aria-hidden={idx !== currentIndex}
            >
              <Image
                src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
                alt={slide.ariaLabel}
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
        {/* Main Content Section */}
        <div className="hero-right">
          {slides[currentIndex].type === "default" && (
            <div className="hero-default-content">
              <h1 className="law-title">LAW FIRM</h1>
              <button className="hero-btn" aria-label="View Practice Areas">
                Practice Areas →
              </button>
            </div>
          )}

          {slides[currentIndex].type === "text-overlay" && (
            <div className={`hero-text-overlay ${slides[currentIndex].styleId || ''}`}>
              <h2 className="overlay-title">{slides[currentIndex].title}</h2>
              <h3 className="overlay-subtitle" style={{ whiteSpace: 'pre-line' }}>
                {slides[currentIndex].subtitle}
              </h3>
            </div>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="hero-contact-info" aria-label="Contact information">
          <p className="contact-label"><strong>Contact:</strong></p>
          <p>
            <a 
              href="mailto:office@acajuris.com" 
              aria-label="Email us at office@acajuris.com"
              className="contact-link"
            >
              office@acajuris.com
            </a>
          </p>
          <p>
            <a 
              href="tel:+919663812090" 
              aria-label="Call us at +91 96638 12090"
              className="contact-link"
            >
              +(91) 96638 12090
            </a>
          </p>
        </div>

        {/* Floating Contact Icons */}
        <div className="hero-floating-icons" aria-label="Quick contact options">
          <a
            href="https://wa.me/919663812090"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-icon-btn whatsapp"
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
          >
            <Image
              src="/images/phone.svg"
              alt="WhatsApp icon"
              width={24}
              height={24}
            />
          </a>
          <a
            href="mailto:office@acajuris.com"
            className="floating-icon-btn email"
            aria-label="Send us an email"
            title="Send Email"
          >
            <Image
              src="/images/email.svg"
              alt="Email icon"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>

      {/* Navigation Pagination Dots */}
      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            role="tab"
            aria-selected={currentIndex === idx}
            aria-label={`Go to slide ${idx + 1}`}
            aria-controls="hero-slide-container"
          />
        ))}
      </div>
    </section>
  );
}
