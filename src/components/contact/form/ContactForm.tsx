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
          className="contact__name contact__input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="contact__email contact__input"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        required
        className="contact__subject contact__input"
      />
      <textarea
        placeholder="Message"
        className="contact__message contact__input"
      ></textarea>
      <input type="submit" className="contact__submit contact__input" />
    </form>
  );
}

export default ContactForm;
