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
} from "react-icons/fa";
import "./App.css";

function App() {
  const [nav, setNav] = useState(false);
  const navBackground = useRef<HTMLDivElement>(null!);

  function toggleNav() {
    if (nav === false) {
      setNav(true);
      navBackground.current.style.transform = "rotate(0)";
    } else {
      setNav(false);
      navBackground.current.style.transform = "rotate(45deg)";
    }
  }

  return (
    <main>
      <nav className="nav-bar">
        <div className="nav__background" ref={navBackground}>
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
              <FaLinkedin className="nav__social__icon" />
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
        <div className="nav__circle">
          <button className="nav__burger" onClick={toggleNav}>
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
      <section className="projects">
        <div className="temp container">
          <h1 className="projects__title">Projects</h1>
        </div>
      </section>
      <footer>footer</footer>
    </main>
  );
}

export default App;
