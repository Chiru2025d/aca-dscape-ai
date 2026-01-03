import Header from "../../src/components/header.jsx";
import Footer from "../../src/components/footer.jsx";

import OfficeInfo from "../../src/components/contact/office-info.jsx";
import ContactForm from "../../src/components/contact/contact-form.jsx";
import TeamContacts from "../../src/components/contact/team-contacts.jsx";

import styles from "../../src/components/contact/contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className={styles.contactPage}>
        <div className={styles.container}>
          <OfficeInfo />

          <div className={styles.formSection}>
            <ContactForm />
            <TeamContacts />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
