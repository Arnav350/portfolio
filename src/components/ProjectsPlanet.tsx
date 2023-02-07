import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectsPlanet.css";

interface planet {
  color: string;
  heading: string;
  description: string;
  github: string;
  link: string;
}

function ProjectsPlanet(props: planet) {
  const planetClass: string = `projects__planet projects__planet--${props.color}`;

  return (
    <div className={planetClass}>
      <h3 className="projects__heading">{props.heading}</h3>
      <p className="projects__description">{props.description}</p>
      <div className="projects__link__wrapper">
        <a href={props.github} className="projects__link">
          <FaGithub className="projects__icon" />
        </a>
        <a href={props.link} className="projects__link">
          <FaExternalLinkAlt className="projects__icon" />
        </a>
      </div>
    </div>
  );
}

export default ProjectsPlanet;
