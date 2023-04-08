import constellation1 from "../../../assets/constellation1.png";
import constellation2 from "../../../assets/constellation2.png";
import constellation3 from "../../../assets/constellation3.png";
import constellation4 from "../../../assets/constellation4.png";
import constellation5 from "../../../assets/constellation5.png";
import "./Constellations.css";

function Constellations() {
  return (
    <aside className="intro--constellations hidden">
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
    </aside>
  );
}

export default Constellations;
