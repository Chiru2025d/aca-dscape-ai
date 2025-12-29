"use client";

import styles from "./contact.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contactForm}>

      {/* LEAVE A MESSAGE */}
      <p className={styles.leaveMessage}>LEAVE A MESSAGE</p>

      {/* FORM HEADING */}
      <h2 className={styles.formHeading}>
        We ready to hear from you
      </h2>

      {/* FORM */}
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.formInput}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.formInput}
          required
        />

        <input
          type="text"
          placeholder="Subject"
          className={styles.formInput}
        />

        <textarea
          placeholder="Message"
          rows="5"
          className={styles.formTextarea}
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          SUBMIT
        </button>
      </form>
    </section>
  );
}
