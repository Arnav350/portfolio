import { FaLinkedinIn, FaGithub, FaEnvelope, FaRegNewspaper } from "react-icons/fa";
import "./Footer.css";

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

function Footer(props: IProps) {
  return (
    <footer className="footer container hidden">
      <a href={props.socials.portfolio} target="_blank" rel="noreferrer" className="footer__name">
        Built by Arnav Patel
      </a>
      <div className="footer__socials">
        <a href={props.socials.linkedIn} target="_blank" rel="noreferrer" className="footer__social">
          <FaLinkedinIn />
        </a>
        <a href={props.socials.github} target="_blank" rel="noreferrer" className="footer__social">
          <FaGithub />
        </a>
        <button
          className="footer__social footer__email"
          onClick={() => navigator.clipboard.writeText(props.socials.email)}
        >
          <FaEnvelope />
        </button>
        <a href={props.socials.resume} target="_blank" rel="noreferrer" className="footer__social">
          <FaRegNewspaper />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
