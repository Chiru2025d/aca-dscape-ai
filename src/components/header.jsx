"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LatestUpdates from "./latestupdate";
import "../app/globals.css"

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openParent, setOpenParent] = useState(null);
  const [openChild, setOpenChild] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ensure header starts hidden on the first hero slide (home page only)
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    if (pathname === "/") {
      header.classList.add('hero-first-slide');
    } else {
      header.classList.remove('hero-first-slide');
    }
  }, [pathname]);

  // Track scroll to show header when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update header class based on scroll state
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (isScrolled) {
        header.classList.remove('hero-first-slide');
      }
    }
  }, [isScrolled]);


  return (
    <header className="header">
      <LatestUpdates />
      <div className="header-inner container">

        <div className="header-left">
          <Link href="/">
            <Image
              src="/images/ACA_Logo-05 1.png"
              alt="ACA Juris Logo"
              width={222}
              height={71}
              className="logo-img"
              priority
              quality={100}
              sizes="(max-width: 480px) 180px, (max-width: 768px) 200px, 222px"
            />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 6H21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 18H21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link
            href="/"
            className={pathname === "/" ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div className="nav-item-with-dropdown">
              {/* Parent */}
              <button
                className="mobile-parent-link navItem"
                onClick={() =>
                  setOpenParent(openParent === "expertise" ? null : "expertise")
                }
              >
                Expertise
                <svg width="8" height="8" viewBox="0 0 8 8" className="desktop-arrow" fill="currentColor">
                  <polygon points="0,0 8,0 4,6" />
                </svg>
              </button>

              {/* Mobile Accordion */}
              <div className={`mobile-accordion ${openParent === "expertise" ? "open" : ""}`}>

                {/* Corporate Law */}
                <div className="mobile-submenu">
                  <button
                    onClick={() =>
                      setOpenChild(openChild === "Areas of Practice" ? null : "Areas of Practice")
                    }
                  >
                   Areas of Practice
                  </button>

                  <div className={`mobile-submenu-items ${openChild === "Areas of Practice" ? "open" : ""}`}>
                  <Link href="/expertise">Quashing Petitions – Inherent Powers</Link>
                  <Link href="/expertise">Bail</Link>
                  <Link href="/expertise">CBI Prosecutions – Defence Of</Link>
                  <Link href="/expertise">Frauds – Financial, Business & Bank</Link>
                  <Link href="/expertise">Look Out Circular | Passport Related</Link>
                  <Link href="/expertise">Sexual Harassment at Workplace</Link>
                  <Link href="/expertise">Defamation Laws</Link>
                  <Link href="/expertise">Narcotic Drugs</Link>
                  <Link href="/expertise">Matrimonial & Family Laws</Link>
                  <Link href="/expertise">Cheque Dishonour Cases – NI</Link>
                  <Link href="/expertise">Violations Under Information Technology</Link>
                  <Link href="/expertise">Prevention of Corruption</Link>
                  <Link href="/expertise">Prevention of Money Laundering</Link>
                  <Link href="/expertise">Company Law Prosecutions – SFIO</Link>
                  <Link href="/expertise">Copyright & Trademark Violation</Link>
                  <Link href="/expertise">Extradition Laws</Link>
                  <Link href="/expertise">Motor Vehicle Offences</Link>
                  </div>
                </div>

                {/* Litigation */}
                <div className="mobile-submenu">
                  <button
                    onClick={() =>
                      setOpenChild(openChild === "Professional Services" ? null : "Professional Services")
                    }
                  >
                    Professional Services
                  </button>

                  <div className={`mobile-submenu-items ${openChild === "Professional Services" ? "open" : ""}`}>
                  <Link href="/expertise">Legal Consultation & Counsel Services</Link>
                  <Link href="/expertise">Legal Opinion</Link>
                  <Link href="/expertise">Drafting and Assistancetowards initiating the legal processes</Link>
                  <Link href="/expertise">Representation Before High Court</Link>
                  <Link href="/expertise">Senior Advocate Engagements</Link>
                  <Link href="/expertise">Supreme Court Matters</Link>
                  <Link href="/expertise">Police Station – Assistance</Link>
                  </div>
                </div>

              </div>
              <Link
                href="/expertise"
                // className={pathname.startsWith("/expertise") ? "nav-link-active" : ""}
                className={`desktop-only navItem ${pathname.startsWith("/expertise") ? "nav-link-active" : ""}`}
              >
                Expertise
                <svg width="8" height="8" viewBox="0 0 8 8" className="desktop-arrow" fill="currentColor">
                  <polygon points="0,0 8,0 4,6" />
                </svg>
              </Link>
              {/* Mega Menu */}
              <div className="mega-menu desktop-only">
                <div className="mega-column">
                  <h4><span className="heading-line"></span>Areas of Practice</h4>
                  <Link href="/expertise">Quashing Petitions – Inherent Powers</Link>
                  <Link href="/expertise">Bail</Link>
                  <Link href="/expertise">CBI Prosecutions – Defence Of</Link>
                  <Link href="/expertise">Frauds – Financial, Business & Bank</Link>
                  <Link href="/expertise">Look Out Circular | Passport Related</Link>
                  <Link href="/expertise">Sexual Harassment at Workplace</Link>
                  <Link href="/expertise">Defamation Laws</Link>
                  <Link href="/expertise">Narcotic Drugs</Link>
                  <Link href="/expertise">Matrimonial & Family Laws</Link>
                </div>

                <div className="mega-column">
                  <h4>&nbsp;</h4>
                  <Link href="/expertise">Cheque Dishonour Cases – NI</Link>
                  <Link href="/expertise">Violations Under Information Technology</Link>
                  <Link href="/expertise">Prevention of Corruption</Link>
                  <Link href="/expertise">Prevention of Money Laundering</Link>
                  <Link href="/expertise">Company Law Prosecutions – SFIO</Link>
                  <Link href="/expertise">Copyright & Trademark Violation</Link>
                  <Link href="/expertise">Extradition Laws</Link>
                  <Link href="/expertise">Motor Vehicle Offences</Link>
                </div>

                <div className="mega-column">
                  <h4><span className="heading-line"></span>Professional Services</h4>
                  <Link href="/expertise">Legal Consultation & Counsel Services</Link>
                  <Link href="/expertise">Legal Opinion</Link>
                  <Link href="/expertise">Drafting and Assistancetowards initiating the legal processes</Link>
                  <Link href="/expertise">Representation Before High Court</Link>
                  <Link href="/expertise">Senior Advocate Engagements</Link>
                  <Link href="/expertise">Supreme Court Matters</Link>
                  <Link href="/expertise">Police Station – Assistance</Link>
                </div>

              </div>
          </div>

          <Link
            href="/legalupdates"
            className={pathname.startsWith("/legalupdates") ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Legal Updates
          </Link>

          <Link
            href="/blog"
            className={pathname.startsWith("/blog") ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          {/* ✅ REAL CONTACT PAGE */}
          <Link
            href="/contact"
            className={pathname.startsWith("/contact") ? "nav-link-active navItem" : "navItem"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
