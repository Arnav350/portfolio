import React, { useState, useEffect, useRef } from "react";
import resume from "./assets/resume.pdf";
import constellation1 from "./assets/constellation1.png";
import constellation2 from "./assets/constellation2.png";
import constellation3 from "./assets/constellation3.png";
import constellation4 from "./assets/constellation4.png";
import constellation5 from "./assets/constellation5.png";
import ProjectsPlanet from "./components/ProjectsPlanet";
import ExperienceJobs from "./components/ExperienceJobs";
import ExperienceLanguages from "./components/ExperienceLanguages";
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
} from "react-icons/fa";
import "./App.css";

interface ISocials {
  portfolio: string;
  linkedIn: string;
  github: string;
  email: string;
  resume: string;
}

function App() {
  const [pause, setPause] = useState(false);

  const page = useRef<HTMLDivElement>(null!);
  const intro = useRef<HTMLElement>(null!);
  const projects = useRef<HTMLElement>(null!);
  const experience = useRef<HTMLElement>(null!);
  const contact = useRef<HTMLElement>(null!);
  const footer = useRef<HTMLElement>(null!);
  const system = useRef<HTMLButtonElement>(null!);

  const socials: ISocials = {
    portfolio: "https://github.com/Arnav350/portfolio",
    linkedIn: "https://www.linkedin.com/in/patel-arnav",
    github: "https://github.com/Arnav350",
    email: "patelarnavm+impt@gmail.com",
    resume: resume,
  };

  function toggleNav() {
    page.current?.classList.toggle("open");
  }

  function toggleOrbit() {
    system.current?.classList.toggle("pause");
    setPause(!pause);
  }

  function navScroll(nameClass: React.MutableRefObject<HTMLElement>) {
    nameClass.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      toggleNav();
    }, 300);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
        } else {
          entry.target.classList.remove("shown");
        }
      });
    });

    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((elem) => observer.observe(elem));

    function randomNumber(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const stars = document.querySelectorAll<HTMLElement>(".stars");
    const count: number =
      (page.current.clientWidth * page.current.clientHeight) / 50000;
    let result: string[] = ["", ""];

    for (let i: number = 0; i < count; i++) {
      result[0] += `${randomNumber(-48, 48)}vw ${randomNumber(
        -38,
        110
      )}vh ${randomNumber(3, 4)}px ${randomNumber(-1, 0)}px #fff${randomNumber(
        1,
        3
      )},`;
      result[1] += `${randomNumber(-48, 48)}vw ${randomNumber(
        -38,
        95
      )}vh ${randomNumber(2, 3)}px ${randomNumber(-3, -2)}px #fff${randomNumber(
        1,
        3
      )},`;
    }

    if (stars) {
      stars[0].style.boxShadow = result[0].substring(0, result[0].length - 1);
      stars[1].style.boxShadow = result[1].substring(0, result[1].length - 1);
    }
  }, []);

  return (
    <div className="page" ref={page}>
      <nav className="nav-bar">
        <div className="nav__background">
          <div className="nav--socials">
            <a
              href={socials.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="nav--linkedin nav__link"
            >
              <FaLinkedinIn className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--linkedin">
                LinkedIn
              </h4>
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="nav--github nav__link"
            >
              <FaGithub className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--github">GitHub</h4>
            </a>
            <button
              className="nav--email nav__link"
              onClick={() => navigator.clipboard.writeText(socials.email)}
            >
              <FaEnvelope className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--email">
                Copy to Clipboard
              </h4>
            </button>
            <a
              href={socials.resume}
              target="blank"
              rel="noreferrer"
              className="nav--resume nav__link"
            >
              <FaRegNewspaper className="nav__social__icon" />
              <h4 className="nav__social__name nav__name--resume">Resume</h4>
            </a>
          </div>
          <div className="nav--links">
            <button
              className="nav--home nav__button"
              onClick={() => navScroll(projects)}
            >
              <FaHome className="nav__link__icon" />
              <h3 className="nav__link__name">Home</h3>
            </button>
            <button
              className="nav--projects nav__button"
              onClick={() => navScroll(experience)}
            >
              <FaCode className="nav__link__icon" />
              <h3 className="nav__link__name">Projects</h3>
            </button>
            <button
              className="nav--experience nav__button"
              onClick={() => navScroll(contact)}
            >
              <FaLaptop className="nav__link__icon" />
              <h3 className="nav__link__name">Experience</h3>
            </button>
            <button
              className="nav--contact nav__button"
              onClick={() => navScroll(footer)}
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
          <section className="stars__container">
            <aside className="stars stars--1"></aside>
            <aside className="stars stars--2"></aside>
          </section>
          <section className="intro" ref={intro}>
            <figure className="intro__constellation intro__constellation--1">
              <img src={constellation1} alt="" />
            </figure>
            <figure className="intro__constellation intro__constellation--2">
              <img src={constellation2} alt="" />
            </figure>
            <figure className="intro__constellation intro__constellation--3">
              <img src={constellation3} alt="" />
            </figure>
            <figure className="intro__constellation intro__constellation--4">
              <img src={constellation4} alt="" />
            </figure>
            <figure className="intro__constellation intro__constellation--5">
              <img src={constellation5} alt="" />
            </figure>
            <FaLightbulb
              className="intro__dark click"
              onClick={() => page.current?.classList.toggle("dark")}
            />
            <div className="container">
              <div className="intro__text">
                <h1 className="intro__title hidden">Hello,</h1>
                <h1 className="intro__title hidden">
                  <span className="secondary">I'm Arnav</span>
                </h1>
                <h3 className="intro__sub hidden">
                  I am a <b className="secondary">frontend</b> software
                  developer based in the United States, specializing in the
                  creation of <b className="secondary">remarkable</b> online
                  journies!
                </h3>
                <h3 className="intro__sub hidden">
                  Interested in working together? Let's have a{" "}
                  <b className="secondary">talk.</b>
                </h3>
              </div>
            </div>
          </section>
          <section className="projects" ref={projects}>
            <div className="container">
              <h1 className="projects__title secondary hidden">Projects</h1>
              <button
                className="projects__system hidden"
                ref={system}
                onClick={toggleOrbit}
              >
                <div className="projects__sun">
                  {pause ? (
                    <FaPlay className="projects__pause" />
                  ) : (
                    <FaPause className="projects__pause" />
                  )}
                </div>
                <ProjectsPlanet
                  color="purple"
                  heading="Temporary Title"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
                  github=""
                  link=""
                />
                <ProjectsPlanet
                  color="red"
                  heading="Temporary Title"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
                  github=""
                  link=""
                />
                <ProjectsPlanet
                  color="green"
                  heading="Temporary Title"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
                  github=""
                  link=""
                />
                <ProjectsPlanet
                  color="orange"
                  heading="Temporary Title"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
                  github=""
                  link=""
                />
                <ProjectsPlanet
                  color="blue"
                  heading="Temporary Title"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus error laborum eveniet, distinctio beatae nihil
                    expedita explicabo totam dolorum iusto. Ratione et sint
                    fugit? Quia illum debitis accusamus voluptatem distinctio?"
                  github=""
                  link=""
                />
              </button>
            </div>
          </section>
          <section className="experience" ref={experience}>
            <div className="container">
              <h1 className="experience__title secondary hidden">Experience</h1>
              <div className="experience__box">
                <ExperienceJobs />
                <div className="experience__conveyors hidden">
                  <ExperienceLanguages direction="left" />
                  <ExperienceLanguages direction="right" />
                </div>
              </div>
            </div>
          </section>
          <section className="contact" ref={contact}>
            <div className="container">
              <h1 className="contact__title secondary hidden">Contact</h1>
              <div className="contact__ufo hidden">
                <div className="contact__glass"></div>
                <div className="contact__belt"></div>
                <div className="contact__top"></div>
                <div className="contact__line"></div>
                <div className="contact__bottom"></div>
                <div className="contact__belt"></div>
                <div className="contact__light"></div>
              </div>
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
                <textarea
                  placeholder="Message"
                  className="contact__message"
                ></textarea>
                <input type="submit" className="contact__submit" />
              </form>
            </div>
          </section>
          <footer className="footer container hidden" ref={footer}>
            <a
              href={socials.portfolio}
              target="_blank"
              rel="noreferrer"
              className="footer__name"
            >
              Built by Arnav Patel
            </a>
            <div className="footer__socials">
              <a
                href={socials.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <FaGithub />
              </a>
              <button
                className="footer__social"
                onClick={() => navigator.clipboard.writeText(socials.email)}
              >
                <FaEnvelope />
              </button>
              <a
                href={socials.resume}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                <FaRegNewspaper />
              </a>
            </div>
          </footer>
          <div></div>
        </main>
      </div>
    </div>
  );
}

export default App;
