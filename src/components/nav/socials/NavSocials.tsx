import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaRegNewspaper,
} from "react-icons/fa";
import "../../../App.css";
import "./NavSocials.css";

interface ISocials {
  portfolio: string;
  linkedIn: string;
  github: string;
  email: string;
  resume: string;
}

interface IProps {
  socials: ISocials;
}

function NavSocials(props: IProps) {
  return (
    <div className="nav--socials">
      <a
        href={props.socials.linkedIn}
        target="_blank"
        rel="noreferrer"
        className="nav--linkedin nav__link"
      >
        <FaLinkedinIn className="nav__social__icon" />
        <h4 className="nav__social__name nav__name--linkedin">LinkedIn</h4>
      </a>
      <a
        href={props.socials.github}
        target="_blank"
        rel="noreferrer"
        className="nav--github nav__link"
      >
        <FaGithub className="nav__social__icon" />
        <h4 className="nav__social__name nav__name--github">GitHub</h4>
      </a>
      <button
        className="nav--email nav__link"
        onClick={() => navigator.clipboard.writeText(props.socials.email)}
      >
        <FaEnvelope className="nav__social__icon" />
        <h4 className="nav__social__name nav__name--email">
          Copy to Clipboard
        </h4>
      </button>
      <a
        href={props.socials.resume}
        target="blank"
        rel="noreferrer"
        className="nav--resume nav__link"
      >
        <FaRegNewspaper className="nav__social__icon" />
        <h4 className="nav__social__name nav__name--resume">Resume</h4>
      </a>
    </div>
  );
}

export default NavSocials;
