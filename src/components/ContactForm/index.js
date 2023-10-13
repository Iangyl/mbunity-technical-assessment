import CtactForm from './CtactForm';
import CtactInfo from './CtactInfo';
import styles from './index.module.sass';

const ContactForm = () => (
  <section className={styles.contactForm}>
    <CtactInfo />
    <CtactForm />
  </section>
);

export default ContactForm;
