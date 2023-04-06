import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../../App.css";
import "./ProjectsPlanet.css";

interface IProps {
  color: string;
  heading: string;
  description: string;
  github: string;
  link: string;
  pause: boolean;
}

function ProjectsPlanet(props: IProps) {
  return (
    <div
      className={`projects__planet projects__planet--${props.color}`}
      style={props.pause ? { animationPlayState: "paused" } : {}}
    >
      <h3 className="projects__heading">{props.heading}</h3>
      <p className="projects__description">{props.description}</p>
      <div className="projects__link__wrapper">
        <a href={props.github} className="projects__link">
          <FaGithub className="projects__icon click" />
        </a>
        <a href={props.link} className="projects__link">
          <FaExternalLinkAlt className="projects__icon click" />
        </a>
      </div>
    </div>
  );
}

export default ProjectsPlanet;
