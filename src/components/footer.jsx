import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-new">

      {/* ================= Contact Preview Section ================= */}
      <section className="contact-preview-section">
        <div className="contact-fixed-container">

          <h2 className="contact-main-title">Contact</h2>

          <div className="contact-row-new">

            {/* Left Column */}
            <div className="contact-left">

              <div className="contact-group">
                {/* <span className="contact-label">Call Today</span> */}
                <p className="contact-value">Whatsapp +91 96638 12090</p>
              </div>

              <div className="contact-group">
                <span className="contact-label">Email me</span>
                <p className="contact-value">office@acajuris.com</p>
              </div>

              <div className="contact-group">
                <span className="contact-label">Office location</span>
                <p className="contact-value">
                  ACA Juris, ‘Srishti’, 21/4, Craig Park Layout,<br />
                  M.G.Road, Bengaluru – 560 001.
                </p>
              </div>

            </div>

            {/* Right Column */}
            <div className="contact-right">

              <div className="contact-link-group">
                <div className="contact-link-title">
                  Our Practice Areas{" "}
                  <Link href="/expertise" className="explore-more">
                    Explore more
                  </Link>
                </div>
                {/* <p className="contact-link-desc">
                  Our practice areas encompass a wide range of legal issues.
                </p> */}
              </div>

              <div className="contact-link-group">
                <div className="contact-link-title">
                  Know Legal Updates{" "}
                  <Link href="/legal-updates" className="explore-more">
                    Explore more
                  </Link>
                </div>
                {/* <p className="contact-link-desc">
                  Joining hands with us can take your business concern to greater
                  level of prosperity
                </p> */}
              </div>

              {/* <div className="newsletter-wrapper">
                <input
                  type="email"
                  placeholder="For Updates Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Send</button>
              </div> */}

            </div>

          </div>
        </div>
      </section>

      {/* ================= Top White Nav Bar ================= */}
      <div className="footer-nav-bar">
        <div className="container footer-nav-container">
          <Link href="/" className="footer-nav-link">Home</Link>
          <Link href="/expertise" className="footer-nav-link">Expertise</Link>
          <Link href="/legal-updates" className="footer-nav-link">Legal Updates</Link>
          <Link href="/blog" className="footer-nav-link">Blog</Link>
          <Link href="/contact" className="footer-nav-link">Contact</Link>
        </div>
      </div>

      {/* ================= Bottom Black Bar ================= */}
      <div className="footer-copyright-bar">
        <div className="container footer-copyright-inner">
          <div className="footer-copyright-content">
            <span>COPYRIGHT © WEBSITE ID</span>
            <span className="footer-divider">|</span>
            <Link href="/terms" className="footer-legal-link">
              TERMS & CONDITIONS
            </Link>
            <span className="footer-divider">|</span>
            <Link href="/privacy" className="footer-legal-link">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
