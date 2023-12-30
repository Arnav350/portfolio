import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSpaceShuttle } from "react-icons/fa";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [emailjsErr, setEmailjsErr] = useState<boolean>(false);

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
          setSent(true);
          setTimeout(() => setSent(false), 2500);
        },
        (error) => {
          setEmailjsErr(true);
          setTimeout(() => setEmailjsErr(false), 2500);
        }
      );
    }
  }

  return (
    <form ref={contactForm} className="contact__form hidden" onSubmit={handleSubmit}>
      <h4 className="contact__err" style={err ? {} : { opacity: 0 }}>
        Make sure to fill out name, email, and subject.
      </h4>
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
        className="contact__input"
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
      <div className="contact__last">
        <input
          type="submit"
          className="contact__submit contact__input"
          style={sent || emailjsErr ? { opacity: 0 } : {}}
        />
        <div className="contact__sents" style={sent ? {} : { opacity: 0 }}>
          <h4 className="contact__sent">Message Sent</h4>
          <FaSpaceShuttle className="contact__shuttle" style={sent ? {} : { display: "none" }} />
        </div>
        <h4 className="contact__error" style={emailjsErr ? {} : { opacity: 0 }}>
          Error! Please try again
        </h4>
      </div>
    </form>
  );
}

export default ContactForm;
