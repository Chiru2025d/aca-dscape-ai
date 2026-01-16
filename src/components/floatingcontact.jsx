"use client";

import styles from "./floating-contact.module.css";

export default function FloatingContact() {
  const whatsappNumber = "919663812090";
  const whatsappMessage = "Hello! I would like to inquire about your legal services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailAddress = "office@acajuris.com";
  const emailSubject = "Inquiry about ACA Juris Services";

  return (
    <div className={styles.floatingContainer}>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingBtn}
        title="Chat on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.15-1.746-.863-2.015-.96-.268-.098-.464-.15-.66.15-.195.297-.76.96-.931 1.165-.171.195-.343.22-.64.073-.296-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.66-1.587-.904-2.171-.237-.552-.479-.478-.66-.487-.171-.008-.368-.01-.566-.01-.197 0-.516.074-.787.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.71.227 1.355.195 1.864.118.568-.085 1.748-.714 1.993-1.404.245-.691.245-1.289.171-1.414-.074-.125-.272-.198-.57-.347m-5.421-7.403h-.004a6.716 6.716 0 00-6.318 3.192 6.728 6.728 0 002.239 10.97c1.556.55 3.193.518 4.693-.095l.035-.018 3.876.954-.97-3.71.024-.038a6.704 6.704 0 001.686-4.122 6.728 6.728 0 00-5.235-6.133zm5.846-3.637C16.527 2.051 13.795 1 10.994 1 5.545 1 1.146 5.43 1.146 10.925c0 1.925.505 3.799 1.469 5.471L1 23l5.768-1.514a10.894 10.894 0 005.226 1.386h.005c5.45 0 9.85-4.43 9.85-9.922 0-2.65-.666-5.148-1.836-7.379" fill="white"/>
        </svg>
      </a>

      {/* Email Button */}
      <a
        href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`}
        className={styles.floatingBtn}
        title="Send Email"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white"/>
        </svg>
      </a>
    </div>
  );
}
