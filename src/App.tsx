import React, { useState, useEffect, useRef } from "react";
import constellation1 from "./assets/constellation1.png";
import constellation2 from "./assets/constellation2.png";
import constellation3 from "./assets/constellation3.png";
import constellation4 from "./assets/constellation4.png";
import constellation5 from "./assets/constellation5.png";
import {
  FaHome,
  FaCode,
  FaLaptop,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaRegNewspaper,
  FaBars,
  FaTimes,
  FaLightbulb,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [nav, setNav] = useState(false);
  const [dark, setDark] = useState(true);
  const page = useRef<HTMLDivElement>(null!);
  const intro = useRef<HTMLButtonElement>(null!);
  const projects = useRef<HTMLButtonElement>(null!);
  const experience = useRef<HTMLButtonElement>(null!);
  const contact = useRef<HTMLButtonElement>(null!);

  const socials = {
    linkedIn: "www.linkedin.com/in/patel-arnav",
    github: "https://github.com/Arnav350",
  };

  function toggleNav() {
    setNav(!nav);
    if (page) {
      page.current.classList.toggle("open");
    }
  }

  function toggleDark() {
    setDark(!dark);
    if (page) {
      page.current.classList.toggle("dark");
    }
  }

  function navScroll(nameClass: React.MutableRefObject<HTMLButtonElement>) {
    nameClass.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      toggleNav();
    }, 300);
  }

  function clipboardEmail() {
    navigator.clipboard.writeText("patelarnavm+impt@gmail.com");
  }

  return (
    <div className="page" ref={page}>
      <nav className="nav-bar">
        <div className="nav__background">
          <div className="nav--socials">
            <a
              href={socials.linkedIn}
              target="_blank"
              className="nav--linkedin nav__link"
            >
              <FaLinkedinIn className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--linkedin">
                LinkedIn
              </h4>
            </a>
            <a href={socials.github} className="nav--github nav__link">
              <FaGithub className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--github">GitHub</h4>
            </a>
            <a className="nav--email nav__link" onClick={clipboardEmail}>
              <FaEnvelope className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--email">
                Copy to Clipboard
              </h4>
            </a>
            <a href="" className="nav--resume nav__link">
              <FaRegNewspaper className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--resume">Resume</h4>
            </a>
          </div>
          <div className="nav--links">
            <button
              className="nav--home nav__link"
              onClick={() => navScroll(intro)}
            >
              <FaHome className="nav__link__icon" />
              <h3 className="nav__link__name">Home</h3>
            </button>
            <button
              className="nav--projects nav__link"
              onClick={() => navScroll(projects)}
            >
              <FaCode className="nav__link__icon" />
              <h3 className="nav__link__name">Projects</h3>
            </button>
            <button
              className="nav--experience nav__link"
              onClick={() => navScroll(experience)}
            >
              <FaLaptop className="nav__link__icon" />
              <h3 className="nav__link__name">Experience</h3>
            </button>
            <button
              className="nav--contact nav__link"
              onClick={() => navScroll(contact)}
            >
              <FaPhoneAlt className="nav__link__icon" />
              <h3 className="nav__link__name">Contact</h3>
            </button>
          </div>
        </div>
        <div className="nav__circle" onClick={toggleNav}>
          <FaBars className="nav--bars click" />
          <FaTimes className="nav--times click" />
        </div>
      </nav>
      <div className="main__wrapper">
        <main className="main">
          <div className="constellation__box">
            <figure className="intro__constellation intro__constellation--1">
              <img src={constellation1} />
            </figure>
            <figure className="intro__constellation intro__constellation--2">
              <img src={constellation2} />
            </figure>
            <figure className="intro__constellation intro__constellation--3">
              <img src={constellation3} />
            </figure>
            <figure className="intro__constellation intro__constellation--4">
              <img src={constellation4} />
            </figure>
            <figure className="intro__constellation intro__constellation--5">
              <img src={constellation5} />
            </figure>
          </div>
          <section className="intro" ref={intro}>
            <FaLightbulb className="intro__dark click" onClick={toggleDark} />
            <div className="intro__text container">
              <h1 className="intro__title">Hello,</h1>
              <h1 className="intro__title">
                <span className="secondary">I'm Arnav</span>
              </h1>
              <h3 className="intro__sub">
                I am a <b className="secondary">frontend</b> software developer
                based in the United States, specializing in the creation of{" "}
                <b className="secondary">remarkable</b> online journies!
              </h3>
              <h3 className="intro__sub">
                Interested in working together? Let's have a{" "}
                <b className="secondary">talk.</b>
              </h3>
            </div>
          </section>
          <section className="projects" ref={projects}>
            <div className="temp container">
              <h1 className="projects__title secondary">Projects</h1>
            </div>
          </section>
          <section className="experience" ref={experience}>
            <div className="temp container">
              <h1 className="experience__title secondary">Experience</h1>
            </div>
          </section>
          <section className="contact" ref={contact}>
            <div className="temp container">
              <h1 className="contact__title secondary">Contact</h1>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
