"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExpertisePreview() {
  const [aopIndex, setAopIndex] = useState(0);
  const [psIndex, setPsIndex] = useState(0);

  // ... existing state/effect ...
  const aopImages = [
    "/images/aop-4.svg",
    "/images/aop-1.svg",
    "/images/aop-2.svg",
    "/images/aop-3.svg"
  ];

  const psImages = [
    "/images/ps1.svg",
    "/images/ps2.svg",
    "/images/ps3.svg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAopIndex((prev) => (prev + 1) % aopImages.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

   useEffect(() => {
    const interval = setInterval(() => {
      setPsIndex((prev) => (prev + 1) % psImages.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="expertise-preview">
      <div className="expertise-inner container">
        <div className="expertise-left">
          <h3>Our Expertise</h3>
          <p className="expertise-lead">
            Our expertise lies in diverse areas of practice, reinforced by the professional
            services we render therein
          </p>
        </div>

        <div className="card image-card">
          <div className="img-wrap">
            {aopImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="Area of practice"
                width={305}
                height={336}
                className={idx === aopIndex ? "active" : ""}
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <Link href="/under-development" className="card-link aop-link">
            <span className="link-arrow">&gt;&gt;</span> Areas of Practice
          </Link>
        </div>

        <div className="card image-card">
          <div className="img-wrap">
            {psImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="Professional services"
                width={305}
                height={336}
                className={idx === psIndex ? "active" : ""}
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
          <Link href="/under-development" className="card-link ps-link">
            <span className="link-arrow">&gt;&gt;</span> Professional Services
          </Link>
        </div>
      </div>
    </section>
  );
}
