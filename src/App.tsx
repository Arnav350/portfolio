import React, { useState, useEffect, useRef } from "react";
import resume from "./assets/resume.pdf";
import constellation1 from "./assets/constellation1.png";
import constellation2 from "./assets/constellation2.png";
import constellation3 from "./assets/constellation3.png";
import constellation4 from "./assets/constellation4.png";
import constellation5 from "./assets/constellation5.png";
import ProjectsPlanet from "./components/ProjectsPlanet";
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
  // FaExternalLinkAlt,
} from "react-icons/fa";
import "./App.css";

interface ISocials {
  linkedIn: string;
  github: string;
  email: string;
  resume: string;
}

function App() {
  const [pause, setPause] = useState(false);
  const [screen, setScreen] = useState(-1);

  const page = useRef<HTMLDivElement>(null!);
  const intro = useRef<HTMLElement>(null!);
  const projects = useRef<HTMLElement>(null!);
  const experience = useRef<HTMLElement>(null!);
  const contact = useRef<HTMLElement>(null!);
  const footer = useRef<HTMLElement>(null!);
  const system = useRef<HTMLButtonElement>(null!);

  const jobs: number = 3;

  const socials: ISocials = {
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

  function switchScreen(direction: string) {
    const screenNumber =
      direction === "right" ? (screen + 1) % jobs : (screen + jobs - 1) % jobs;

    setScreen(screenNumber);

    const tubeHeight: number = 202;
    const arrowBorder: number = 8;
    const randomLeft: number = Math.floor(
      ((Math.random() + screenNumber) * tubeHeight) / jobs
    );
    const randomRight: number = Math.floor(
      ((Math.random() + screenNumber) * tubeHeight) / jobs
    );

    const previousScreen = document.querySelector<HTMLDivElement>(
      `.experience__screen--${screen}`
    );
    const currentScreen = document.querySelector<HTMLDivElement>(
      `.experience__screen--${screenNumber}`
    );
    const previousLight = document.querySelector<HTMLDivElement>(
      `.experience__light--${screen}`
    );
    const currentLight = document.querySelector<HTMLDivElement>(
      `.experience__light--${screenNumber}`
    );
    const previousDates = document.querySelectorAll<HTMLDivElement>(
      `.experience__date--${screen}`
    );
    const currentDates = document.querySelectorAll<HTMLDivElement>(
      `.experience__date--${screenNumber}`
    );
    const allTubes =
      document.querySelectorAll<HTMLDivElement>(".experience__tube");
    const allFluids =
      document.querySelectorAll<HTMLDivElement>(".experience__fluid");

    if (previousScreen && currentScreen && previousDates && currentDates) {
      previousScreen.style.display = "none";
      currentScreen.style.display = "block";
      previousDates[0].style.display = "none";
      currentDates[0].style.display = "block";
      previousDates[1].style.display = "none";
      currentDates[1].style.display = "block";
    }
    previousLight?.classList.remove("light");
    currentLight?.classList.add("light");
    allTubes[0].style.paddingTop = `${randomLeft}px`;
    allTubes[1].style.paddingTop = `${randomRight}px`;
    allFluids[0].style.height = `${tubeHeight - randomLeft + arrowBorder}px`;
    allFluids[1].style.height = `${tubeHeight - randomRight + arrowBorder}px`;
  }

  useEffect(() => {
    switchScreen("right");

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
            <div className="intro__text container">
              <h1 className="intro__title hidden">Hello,</h1>
              <h1 className="intro__title hidden">
                <span className="secondary">I'm Arnav</span>
              </h1>
              <h3 className="intro__sub hidden">
                I am a <b className="secondary">frontend</b> software developer
                based in the United States, specializing in the creation of{" "}
                <b className="secondary">remarkable</b> online journies!
              </h3>
              <h3 className="intro__sub hidden">
                Interested in working together? Let's have a{" "}
                <b className="secondary">talk.</b>
              </h3>
            </div>
          </section>
          <section className="projects" ref={projects}>
            <div className="temp container">
              <h1 className="projects__title secondary hidden">Projects</h1>
              <button
                className="projects__system hidden"
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
            <div className="temp container">
              <h1 className="experience__title secondary hidden">Experience</h1>
              <div className="experience__box">
                <div className="experience--jobs shadow hidden">
                  <div className="experience__top">
                    <div className="experience__light shadow experience__light--0 light"></div>
                    <div className="experience__light shadow experience__light--1"></div>
                    <div className="experience__light shadow experience__light--2"></div>
                    {/* <div className="experience__light shadow experience__light--3"></div> */}
                    {/* <div className="experience__light shadow experience__light--4"></div> */}
                    <div className="experience__logo">NASA</div>
                  </div>
                  <div className="experience__tubes">
                    <div className="experience__tube shadow">
                      <p className="experience__date experience__date--0">
                        Aug 2022
                      </p>
                      <p className="experience__date experience__date--1">
                        Aug 2021
                      </p>
                      <p className="experience__date experience__date--2">
                        Jun 2019
                      </p>
                      <div className="experience__arrow"></div>
                      <div className="experience__fluid"></div>
                    </div>
                    <div className="experience__tube shadow">
                      <p className="experience__date experience__date--0">
                        Jan 2023
                      </p>
                      <p className="experience__date experience__date--1">
                        May 2022
                      </p>
                      <p className="experience__date experience__date--2">
                        Jul 2019
                      </p>
                      <div className="experience__arrow"></div>
                      <div className="experience__fluid"></div>
                    </div>
                  </div>
                  <div className="experience__screen shadow experience__screen--0">
                    <h1 className="experience__employer">Biz4Group</h1>
                    <h3 className="experience__position">
                      Frontend Developer Intern
                    </h3>
                    <p className="experience__bullet">
                      Designed e-commerce platforms for clients using React, TS,
                      and Redux
                    </p>
                    <p className="experience__bullet">
                      Created digital marketing strategies to increase brand
                      awareness for clients
                    </p>
                  </div>
                  <div className="experience__screen shadow experience__screen--1">
                    <h1 className="experience__employer">
                      Orlando Science Schools
                    </h1>
                    <h3 className="experience__position">Volunteer</h3>
                    <p className="experience__bullet">
                      Year long teaching experience
                    </p>
                    <p className="experience__bullet">
                      Mentored over 50 elementary school students in school
                      subjects and created React program to assist in teaching
                    </p>
                  </div>
                  <div className="experience__screen shadow experience__screen--2">
                    <h1 className="experience__employer">
                      Orange Technical College
                    </h1>
                    <h3 className="experience__position">Intern</h3>
                    <p className="experience__bullet">
                      6 week robotics program
                    </p>
                    <p className="experience__bullet">
                      Worked with team to create robots utilizing AI and present
                      results to senior management
                    </p>
                  </div>
                  {/* <div className="experience__screen shadow experience__screen--3">
                    <h1 className="experience__employer">Title 1</h1>
                    <h3 className="experience__position">Title 1</h3>
                    <p className="experience__bullet">Bullet 1</p>
                    <p className="experience__bullet">Bullet 2</p>
                  </div>
                  <div className="experience__screen shadow experience__screen--4">
                    <h1 className="experience__employer">Title 2</h1>
                    <h3 className="experience__position">Title 2</h3>
                    <p className="experience__bullet">Bullet 1</p>
                    <p className="experience__bullet">Bullet 2</p>
                  </div> */}
                  <button
                    className="experience__left click"
                    onClick={() => switchScreen("left")}
                  ></button>
                  <button
                    className="experience__right click"
                    onClick={() => switchScreen("right")}
                  ></button>
                </div>
                <div className="experience__conveyors hidden">
                  <ExperienceLanguages direction="left" />
                  <ExperienceLanguages direction="right" />
                </div>
              </div>
            </div>
          </section>
          <section className="contact" ref={contact}>
            <div className="temp container">
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
              <form action="" className="contact__form">
                <div className="contact__box">
                  <input
                    type="text"
                    placeholder="Name"
                    className="contact__name"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="contact__email"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="contact__subject"
                />
                <textarea
                  name=""
                  placeholder="Message"
                  className="contact__message"
                ></textarea>
              </form>
            </div>
          </section>
          <footer className="footer" ref={footer}>
            <div>Hello</div>
          </footer>
          <div></div>
        </main>
      </div>
    </div>
  );
}

export default App;
