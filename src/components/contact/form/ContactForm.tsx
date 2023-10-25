import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const contactForm = useRef(null!);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || subject.trim() === "") {
      setErr(true);
    } else {
      setErr(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      emailjs.sendForm("service_2huaien", "template_ee9psqq", contactForm.current, "2hvV9SMMYfDlNPLDE").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }

  return (
    <form ref={contactForm} className="contact__form hidden" onClick={handleSubmit}>
      <p className="contact__error" style={err ? {} : { opacity: 0 }}>
        Make sure to fill out name, email, and subject.
      </p>
      <div className="contact__box">
        <input
          type="text"
          value={name}
          placeholder="Name"
          name="contact__name"
          className="contact__name contact__input"
          style={err && !name ? { borderBottomColor: "#ff000088" } : {}}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="contact__email"
          className="contact__email contact__input"
          style={err && !email ? { borderBottomColor: "#ff000088" } : {}}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <input
        type="text"
        value={subject}
        placeholder="Subject"
        name="contact__subject"
        className="contact__subject contact__input"
        style={err && !subject ? { borderBottomColor: "#ff000088" } : {}}
        onChange={(event) => setSubject(event.target.value)}
      />
      <textarea
        value={message}
        placeholder="Message"
        name="contact__message"
        className="contact__message contact__input"
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <input type="submit" className="contact__submit contact__input" />
    </form>
  );
}

export default ContactForm;
