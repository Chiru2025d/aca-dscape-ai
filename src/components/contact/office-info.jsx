"use client";

import Image from "next/image";
import styles from "./contact.module.css";

export default function OfficeInfo() {
  return (
    <section className={styles.officeSection}>
      <div className={styles.officeGrid}>

        {/* LEFT CONTENT */}
        <div>
          <p className={styles.getInTouch}>GET IN TOUCH</p>

          <h1 className={styles.officeHeading}>
            Visit one of our <br />
            Office locations or <br />
            contact us.
          </h1>

          <h3 className={styles.headOffice}>Head Office</h3>

          <div className={styles.officeBox}>

            {/* ADDRESS */}
            <div className={styles.officeRow}>
              <span className={styles.icon}>
                <Image src="/icons/location.png" alt="" width={18} height={18} />
              </span>
              <p className={styles.officeAddress}>
                ACA Juris, ‘Srishti’, 21/4, Craig Park Layout,
                <br />
                M.G. Road, Bengaluru – 560 001.
              </p>
            </div>

            {/* EMAIL */}
            <div className={styles.officeRow}>
              <span className={styles.icon}>
                <Image src="/icons/mail.png" alt="" width={18} height={18} />
              </span>
              <p className={styles.officeContact}>office@acajuris.com</p>
            </div>

            {/* PHONE */}
            <div className={styles.officeRow}>
              <span className={styles.icon}>
                <Image src="/icons/call.png" alt="" width={18} height={18} />
              </span>
              <p className={styles.officeContact}>+91 96638 12090</p>
            </div>

          </div>
        </div>

        {/* RIGHT MAP */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://maps.google.com/maps?hl=en&q=ACA%20Juris%20Bangalore&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
          />
        </div>

      </div>
    </section>
  );
}
