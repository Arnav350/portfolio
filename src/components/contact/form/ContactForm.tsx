import React from "react";
import "../../../App.css";
import "./ContactForm.css";

function ContactForm() {
  return (
    <form action="" className="contact__form hidden">
      <div className="contact__box">
        <input
          type="text"
          placeholder="Name"
          required
          className="contact__name"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="contact__email"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        required
        className="contact__subject"
      />
      <textarea placeholder="Message" className="contact__message"></textarea>
      <input type="submit" className="contact__submit" />
    </form>
  );
}

export default ContactForm;
