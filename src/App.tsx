import React, { useState, useEffect, useRef } from "react";
import constellation1 from "./assets/constellation1.png";
import constellation2 from "./assets/constellation2.png";
import constellation3 from "./assets/constellation3.png";
import constellation4 from "./assets/constellation4.png";
import constellation5 from "./assets/constellation5.png";
import language_bem from "./assets/language_bem.png";
import language_bootstrap from "./assets/language_bootstrap.png";
import language_c from "./assets/language_c.png";
import language_css from "./assets/language_css.png";
import language_git from "./assets/language_git.png";
import language_html from "./assets/language_html.png";
import language_java from "./assets/language_java.png";
import language_js from "./assets/language_js.png";
import language_json from "./assets/language_json.png";
import language_node from "./assets/language_node.png";
import language_npm from "./assets/language_npm.png";
import language_python from "./assets/language_python.png";
import language_react from "./assets/language_react.png";
import language_ts from "./assets/language_ts.png";
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
  FaPause,
  FaPlay,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [pause, setPause] = useState(false);
  const [screen, setScreen] = useState(0);

  const page = useRef<HTMLDivElement>(null!);
  const intro = useRef<HTMLButtonElement>(null!);
  const projects = useRef<HTMLButtonElement>(null!);
  const experience = useRef<HTMLButtonElement>(null!);
  const contact = useRef<HTMLButtonElement>(null!);
  const system = useRef<HTMLButtonElement>(null!);

  const jobs: number = 5;

  const socials = {
    linkedIn: "www.linkedin.com/in/patel-arnav",
    github: "https://github.com/Arnav350",
    email: "patelarnavm+impt@gmail.com",
  };

  function toggleNav() {
    page.current?.classList.toggle("open");
  }

  function toggleDark() {
    page.current?.classList.toggle("dark");
  }

  function toggleOrbit() {
    system.current?.classList.toggle("pause");
    setPause(!pause);
  }

  function navScroll(nameClass: React.MutableRefObject<HTMLButtonElement>) {
    nameClass.current.scrollIntoView({ behavior: "smooth" }); //false instead of { behavior: "smooth" }
    setTimeout(() => {
      toggleNav();
    }, 300);
  }

  function clipboardEmail() {
    navigator.clipboard.writeText(socials.email);
  }

  useEffect(() => {
    console.log("useState: " + screen);
  }, [screen]);

  function switchScreen(direction: string) {
    const screenNumber =
      direction === "right" ? (screen + 1) % jobs : (screen + jobs - 1) % jobs;

    setScreen(screenNumber);

    const fluidHeight: number = 168 / 5;
    const randomLeft: number = Math.floor(
      (Math.random() + screenNumber) * fluidHeight
    );
    const randomRight: number = Math.floor(
      (Math.random() + screenNumber) * fluidHeight
    );

    const allLights =
      document.querySelectorAll<HTMLDivElement>(".experience__light");

    const allScreens = document.querySelectorAll<HTMLDivElement>(
      ".experience__screen"
    );
    const currentLight = document.querySelector<HTMLDivElement>(
      ".experience__light--" + screenNumber
    );
    const currentScreen = document.querySelector<HTMLDivElement>(
      ".experience__screen--" + screenNumber
    );
    const allArrows =
      document.querySelectorAll<HTMLDivElement>(".experience__arrow");

    for (let i = 0; i < jobs; i++) {
      allLights[i].style.filter = "brightness(1)";
      allScreens[i].style.display = "none";
    }
    if (currentLight && currentScreen) {
      currentLight.style.filter = "brightness(2)";
      currentScreen.style.display = "block";
    }
    allArrows[0].style.marginTop = `${randomLeft}px`;
    allArrows[1].style.marginTop = `${randomRight}px`;
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
              className="nav--home nav__button"
              onClick={() => navScroll(intro)}
            >
              <FaHome className="nav__link__icon" />
              <h3 className="nav__link__name">Home</h3>
            </button>
            <button
              className="nav--projects nav__button"
              onClick={() => navScroll(projects)}
            >
              <FaCode className="nav__link__icon" />
              <h3 className="nav__link__name">Projects</h3>
            </button>
            <button
              className="nav--experience nav__button"
              onClick={() => navScroll(experience)}
            >
              <FaLaptop className="nav__link__icon" />
              <h3 className="nav__link__name">Experience</h3>
            </button>
            <button
              className="nav--contact nav__button"
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
          <section className="intro" ref={intro}>
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
              <button
                className="projects__system"
                ref={system}
                onClick={toggleOrbit}
              >
                <div className="projects__star">
                  {pause ? (
                    <FaPlay className="projects__pause" />
                  ) : (
                    <FaPause className="projects__pause" />
                  )}
                </div>
                <div className="projects__planet projects__planet--purple">
                  <h3 className="projects__heading">Temporary Title</h3>
                  <p className="projects__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?
                  </p>
                  <div className="projects__link__wrapper">
                    <a href="" className="projects__link">
                      <FaGithub className="projects__icon" />
                    </a>
                    <a href="" className="projects__link">
                      <FaExternalLinkAlt className="projects__icon" />
                    </a>
                  </div>
                </div>
                <div className="projects__planet projects__planet--red">
                  <h3 className="projects__heading">Temporary Title</h3>
                  <p className="projects__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?
                  </p>
                  <div className="projects__link__wrapper">
                    <a href="" className="projects__link">
                      <FaGithub className="projects__icon" />
                    </a>
                    <a href="" className="projects__link">
                      <FaExternalLinkAlt className="projects__icon" />
                    </a>
                  </div>
                </div>
                <div className="projects__planet projects__planet--green">
                  <h3 className="projects__heading">Temporary Title</h3>
                  <p className="projects__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?
                  </p>
                  <div className="projects__link__wrapper">
                    <a href="" className="projects__link">
                      <FaGithub className="projects__icon" />
                    </a>
                    <a href="" className="projects__link">
                      <FaExternalLinkAlt className="projects__icon" />
                    </a>
                  </div>
                </div>
                <div className="projects__planet projects__planet--orange">
                  <h3 className="projects__heading">Temporary Title</h3>
                  <p className="projects__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?
                  </p>
                  <div className="projects__link__wrapper">
                    <a href="" className="projects__link">
                      <FaGithub className="projects__icon" />
                    </a>
                    <a href="" className="projects__link">
                      <FaExternalLinkAlt className="projects__icon" />
                    </a>
                  </div>
                </div>
                <div className="projects__planet projects__planet--blue">
                  <h3 className="projects__heading">Temporary Title</h3>
                  <p className="projects__description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?
                  </p>
                  <div className="projects__link__wrapper">
                    <a href="" className="projects__link">
                      <FaGithub className="projects__icon" />
                    </a>
                    <a href="" className="projects__link">
                      <FaExternalLinkAlt className="projects__icon" />
                    </a>
                  </div>
                </div>
              </button>
            </div>
          </section>
          <section className="experience" ref={experience}>
            <div className="temp container">
              <h1 className="experience__title secondary">Experience</h1>
              <div className="experience__box">
                <div className="experience--jobs">
                  <div className="experience__top">
                    <div className="experience__light experience__light--0"></div>
                    <div className="experience__light experience__light--1"></div>
                    <div className="experience__light experience__light--2"></div>
                    <div className="experience__light experience__light--3"></div>
                    <div className="experience__light experience__light--4"></div>
                    <div className="experience__knob"></div>
                  </div>
                  <div className="experience__fluids">
                    <div className="experience__fluid">
                      <div className="experience__arrow">
                        <p>Oct</p>
                        <p>2020</p>
                      </div>
                    </div>
                    <div className="experience__fluid">
                      <div className="experience__arrow"></div>
                    </div>
                  </div>
                  <div className="experience__screen experience__screen--0">
                    <h1>Title 1</h1>
                    <h3>Title 1</h3>
                    <p>Bullet 1</p>
                    <p>Bullet 2</p>
                    <p>Bullet 3</p>
                  </div>
                  <div className="experience__screen experience__screen--1">
                    <h1>Title 2</h1>
                    <h3>Title 2</h3>
                    <p>Bullet 1</p>
                    <p>Bullet 2</p>
                    <p>Bullet 3</p>
                  </div>
                  <div className="experience__screen experience__screen--2">
                    <h1>Biz4Group</h1>
                    <h3>Frontend Developer Intern</h3>
                    <p>Bullet 1</p>
                    <p>Bullet 2</p>
                    <p>Bullet 3</p>
                  </div>
                  <div className="experience__screen experience__screen--3">
                    <h1>Orlando Science Schools</h1>
                    <h3>Volunteer</h3>
                    <p>Bullet 1</p>
                    <p>Bullet 2</p>
                    <p>Bullet 3</p>
                  </div>
                  <div className="experience__screen experience__screen--4">
                    <h1>Orange Technical College</h1>
                    <h3>Intern</h3>
                    <p>Bullet 1</p>
                    <p>Bullet 2</p>
                    <p>Bullet 3</p>
                  </div>
                  <button
                    className="experience__left"
                    onClick={() => switchScreen("left")}
                  ></button>
                  <button
                    className="experience__right"
                    onClick={() => switchScreen("right")}
                  ></button>
                </div>
                <div className="experience--languages">
                  <figure className="experience__language">
                    <img src={language_css} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_html} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_npm} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_js} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_ts} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_react} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_node} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_json} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_bootstrap} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_git} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_bem} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_python} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_java} alt="" />
                  </figure>
                  <figure className="experience__language">
                    <img src={language_c} alt="" />
                  </figure>
                </div>
              </div>
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
