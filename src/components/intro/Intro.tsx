import React from "react";
import Constellations from "./constellations/Constellations";
import Texts from "./Texts/Texts";
import { FaLightbulb } from "react-icons/fa";
import "../../App.css";
import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <Constellations />
      <FaLightbulb className="intro__dark click" />
      <Texts />
    </section>
  );
}

export default Intro;
