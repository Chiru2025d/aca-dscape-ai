"use client";

import { useEffect, useRef, useState } from "react";

export default function Culture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const cards = [
    {
      title: <>A Core<br />Culture</>,
      icon: "/icons/culture.svg",
      desc:
        "… designed and embraced, that drives the Firm’s Associates to focus on the Client’s cause with unwavering commitment.",
    },
    {
      title: <>Our Core<br />Services</>,
      icon: "/icons/services.svg",
      desc:
        "… comprises all levels and all platforms of a criminal litigation. Beginning with prelitigation counsel and guidance and progressing through the litigation towards its closure.",
    },
    {
      title: <>Our Core<br />Expertise</>,
      icon: "/icons/expertise.svg",
      desc:
        (<>… being Criminal Law, <span style={{ color: '#4B4F58' }}><span style={{ fontFamily: "'Be Vietnam', sans-serif", fontWeight: 593 }}>ACA</span><span style={{ fontWeight: 400 }}>Juris</span></span> is noted as having familiarity with arduous criminal litigations and recognised as Criminal Law Attorneys.</>),
    },
    {
      title: <>Across the<br />Board</>,
      icon: "/icons/board.svg",
      desc:
        "… areas of Criminal Law is our specialisation. Yet we are multidisciplinary, providing services in Family and Matrimonial Laws and other allied areas.",
    },
  ];

   /* 👀 Viewport detection */
  useEffect(() => {
    console.log("1")
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ⏱ Auto rotate cards */
  useEffect(() => {
     console.log("2")
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % cards.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isVisible]);


  return (
    <section className="culture-section"  ref={sectionRef}>
      <h2 className="culture-heading">
        Driven by a culture committed to our client’s cause
      </h2>

      <div className="culture-outer">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`culture-card ${activeIndex === index ? "active" : ""
              }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Title - Moved to Top */}
            <h3 className="culture-title">{card.title}</h3>

            {/* Beige Content */}
            <div className="culture-hover-box">
              <p>{card.desc}</p>
            </div>

            {/* Icon - Moved to Bottom */}
            <div className="culture-icon-wrap">
              <img src={card.icon} alt={card.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
