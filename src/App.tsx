import { useState, useEffect } from "react";
import resume from "./assets/resume.pdf";
import Nav from "./components/nav/Nav";
import Stars from "./components/stars/Stars";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

interface ISocials {
  portfolio: string;
  linkedIn: string;
  github: string;
  email: string;
  resume: string;
}

const socials: ISocials = {
  portfolio: "https://github.com/Arnav350/portfolio",
  linkedIn: "https://www.linkedin.com/in/patel-arnav",
  github: "https://github.com/Arnav350",
  email: "patelarnavm@gmail.com",
  resume: resume,
};

function App() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const hidden = document.querySelectorAll<HTMLElement>(".hidden");

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i: number) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");
            observer.unobserve(hidden[i]);
          }
        });
      }
    );

    hidden.forEach((elem: HTMLElement) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`page${open ? " open" : ""}`}>
      <Nav socials={socials} open={open} setOpen={setOpen} />
      <div className="main__wrapper">
        <main className="main">
          <Stars />
          <Intro />
          <Projects />
          <Experience />
          <Contact />
          <Footer socials={socials} />
        </main>
      </div>
    </div>
  );
}

export default App;
