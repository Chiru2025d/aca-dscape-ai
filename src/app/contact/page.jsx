import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";

import OfficeInfo from "../../components/contact/office-info.jsx";
import ContactForm from "../../components/contact/contact-form.jsx";
import TeamContacts from "../../components/contact/team-contacts.jsx";

import styles from "../../components/contact/contact.module.css";

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
