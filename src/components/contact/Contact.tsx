import React from "react";
import ContactUfo from "./ufo/ContactUfo";
import ContactForm from "./form/ContactForm";
import "../../App.css";
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
