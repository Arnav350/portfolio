import React, { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaCode,
  FaLaptop,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaRegNewspaper,
  FaNewspaper,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [nav, setNav] = useState(false);

  function toggleNav() {
    if (nav === false) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  return (
    <main>
      <nav className="nav-bar">
        <div className="nav__background">
          <div className="nav--links">
            <button className="nav--home">
              <FaHome className="nav__link__icon" />
              <h3 className="nav__link__name">Home</h3>
            </button>
            <button className="nav--projects">
              <FaCode className="nav__link__icon" />
              <h3 className="nav__link__name">Projects</h3>
            </button>
            <button className="nav--experience">
              <FaLaptop className="nav__link__icon" />
              <h3 className="nav__link__name">Experience</h3>
            </button>
            <button className="nav--contact">
              <FaPhoneAlt className="nav__link__icon" />
              <h3 className="nav__link__name">Contact</h3>
            </button>
          </div>
          <div className="nav--socials">
            <button className="nav--linkedin">
              <FaLinkedin className="nav__social__icon" />
              <h4 className="nav__social__name">LinkedIn</h4>
            </button>
            <button className="nav--github">
              <FaGithub className="nav__social__icon" />
              <h4 className="nav__social__name">GitHub</h4>
            </button>
            <button className="nav--email">
              <FaEnvelope className="nav__social__icon" />
              <h4 className="nav__social__name">Email</h4>
            </button>
            <button className="nav--resume">
              <FaNewspaper className="nav__social__icon" />
              <h4 className="nav__social__name">Resume</h4>
            </button>
          </div>
        </div>
        <div className="nav__circle">
          <button className="nav__burger">
            <div className="nav__line"></div>
          </button>
        </div>
      </nav>
      <section className="intro">
        <div className="intro__text">
          <h1 className="intro__title">Hello,</h1>
          <h1 className="intro__title">
            <span className="secondary">I'm Arnav</span>
          </h1>
          <h3 className="intro__sub">
            I am a <span className="secondary">frontend</span> software
            developer based in the United States, specializing in the creation
            of <span className="secondary">remarkable</span> online journies!
          </h3>
          <h3 className="intro__sub">
            Interested in working together? Let's have a{" "}
            <span className="secondary">talk.</span>
          </h3>
        </div>
      </section>
      <section className="portfolio">sec</section>
      <footer>footer</footer>
    </main>
  );
}

export default App;
