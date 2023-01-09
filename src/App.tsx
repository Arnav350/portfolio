import React, { useState, useEffect, useRef } from "react";
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
