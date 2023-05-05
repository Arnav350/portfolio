import Constellations from "./constellations/Constellations";
import Texts from "./Texts/Texts";
import "./Intro.css";

function Intro() {
  return (
    <section className="intro">
      <Constellations />
      <Texts />
    </section>
  );
}

export default Intro;
