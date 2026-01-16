"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      id: 1,
      src: "/images/Frame-1.png",
      mobileSrc: "/images/Frame-1_mob.png",
      type: "default",
      styleId: "frame-1",
    },
    {
      id: 2,
      src: "/images/Frame-2.png",
      srcSet: "/images/Frame-2.png",
      mobileSrc: "/images/Frame 1984078245.png",
      mobileSrcSet: "/images/Frame 1984078245.png",
      type: "text-overlay",
      styleId: "frame-2",
      title: "Criminal Law Specialised",
      subtitle: "Multi-Disciplinary\nLaw Firm"
    },
    {
      id: 3,
      src: "/images/Frame-3.png",
      srcSet: "/images/Frame-3.png",
      mobileSrc: "/images/Frame 1984078246.png",
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
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlayPaused]);

  // Detect mobile viewport (client-side only)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Control header visibility based on slide index
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (currentIndex === 0) {
        header.classList.add('hero-first-slide');
      } else {
        header.classList.remove('hero-first-slide');
      }
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const pauseAutoPlay = () => setIsAutoPlayPaused(true);
  const resumeAutoPlay = () => setIsAutoPlayPaused(false);

  // Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoPlay();
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      resumeAutoPlay();
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    resumeAutoPlay();
  };

  return (
    <section
      className="hero-wrapper"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
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
                sizes="100vw"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="hero-content container">
        {/* Practice Areas Button */}
        <div className="hero-button-overlay">
          <Link href="/expertise">
            <button className="hero-practice-btn">Practice Areas →</button>
          </Link>
        </div>
      </div>







      {/* Centered Pagination Dots */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`hero-dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(idx);
              resumeAutoPlay();
            }}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </section >
  );
}
