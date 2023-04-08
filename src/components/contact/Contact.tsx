import ContactUfo from "./ufo/ContactUfo";
import ContactForm from "./form/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="contact__title secondary hidden">Contact</h1>
        <ContactUfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
