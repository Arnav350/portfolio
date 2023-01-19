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

  return (
    <div className="page" ref={page}>
      <nav className="nav-bar">
        <div className="nav__background">
          <div className="nav--links">
            <button className="nav--home nav__link">
              <FaHome className="nav__link__icon" />
              <h3 className="nav__link__name">Home</h3>
            </button>
            <button className="nav--projects nav__link">
              <FaCode className="nav__link__icon" />
              <h3 className="nav__link__name">Projects</h3>
            </button>
            <button className="nav--experience nav__link">
              <FaLaptop className="nav__link__icon" />
              <h3 className="nav__link__name">Experience</h3>
            </button>
            <button className="nav--contact nav__link">
              <FaPhoneAlt className="nav__link__icon" />
              <h3 className="nav__link__name">Contact</h3>
            </button>
          </div>
          <div className="nav--socials">
            <a className="nav--linkedin nav__link">
              <FaLinkedinIn className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--linkedin">
                LinkedIn
              </h4>
            </a>
            <a className="nav--github nav__link">
              <FaGithub className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--github">GitHub</h4>
            </a>
            <a className="nav--email nav__link">
              <FaEnvelope className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--email">Email</h4>
            </a>
            <a className="nav--resume nav__link">
              <FaRegNewspaper className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--resume">Resume</h4>
            </a>
          </div>
        </div>
        <div className="nav__circle" onClick={toggleNav}>
          <FaBars className="nav--bars" />
          <FaTimes className="nav--times" />
        </div>
      </nav>
      <div className="main__wrapper">
        <main className="main">
          <section className="intro">
            <FaLightbulb className="intro__dark" onClick={toggleDark} />
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
            <figure>
              <img src={constellation1} />
            </figure>
            <figure>
              <img src={constellation2} />
            </figure>
            <figure>
              <img src={constellation3} />
            </figure>
            <figure>
              <img src={constellation4} />
            </figure>
            <figure>
              <img src={constellation5} />
            </figure>
          </section>
          <section className="projects">
            <div className="temp container">
              <h1 className="projects__title secondary">Projects</h1>
            </div>
          </section>
          <section className="experience">
            <div className="temp container">
              <h1 className="experience__title secondary">Experience</h1>
            </div>
          </section>
          <section className="contact">
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
