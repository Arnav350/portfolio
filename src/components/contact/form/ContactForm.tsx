import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const contactForm = useRef(null!);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_2huaien",
    //     "template_ee9psqq",
    //     contactForm.current,
    //     "2hvV9SMMYfDlNPLDE"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }

  return (
    <form
      ref={contactForm}
      className="contact__form hidden"
      onClick={handleSubmit}
    >
      <div className="contact__box">
        <input
          type="text"
          value={name}
          placeholder="Name"
          name="contact__name"
          className="contact__name contact__input"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="contact__email"
          className="contact__email contact__input"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <input
        type="text"
        value={subject}
        placeholder="Subject"
        name="contact__subject"
        className="contact__subject contact__input"
        onChange={(event) => setSubject(event.target.value)}
      />
      <textarea
        placeholder="Message"
        name="contact__message"
        className="contact__message contact__input"
      ></textarea>
      <input type="submit" className="contact__submit contact__input" />
    </form>
  );
}

export default ContactForm;
