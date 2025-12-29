"use client";

import Link from "next/link";
import Image from "next/image";

export default function LegalUpdatesPreview() {
  return (
    <section className="legal-preview">
      <div className="container">
        {/* <span className="legal-section-tag">Blog & Article</span> */}
        <h2 className="legal-title">Legal Updates</h2>
        <p className="legal-desc">Discover expert tips and step-by-step guides to help you learn, grow, and create with confidence.</p>

        <div className="legal-grid">
          {/* Update 1 */}
          <div className="legal-card">
            <div className="legal-img-wrap">
              <Image
                src="/images/legalupdate1.svg"
                alt="Legal update 1"
                width={534}
                height={309}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="legal-content">
              {/* <div className="update-meta">
                <span>Graphic design</span>
                <span>August 28, 2025</span>
              </div> */}
              <h4 className="update-title">An Incorrect View On Trial Court’s Powers U/S 173(8) Cr.P.C</h4>
            </div>
          </div>

          {/* Update 2 */}
          <div className="legal-card">
            <div className="legal-img-wrap">
              <Image
                src="/images/legalupdate2.svg"
                alt="Legal update 2"
                width={534}
                height={309}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="legal-content">
              {/* <div className="update-meta">
                <span>Graphic design</span>
                <span>August 28, 2025</span>
              </div> */}
              <h4 className="update-title">The Correct View On Trial Court’s Powers U/S 173(8) Cr.P.C</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
