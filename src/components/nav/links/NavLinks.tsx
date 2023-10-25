import { Dispatch, SetStateAction } from "react";
import { FaHome, FaCode, FaLaptop, FaPhoneAlt } from "react-icons/fa";
import "./NavLinks.css";

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function NavLinks(props: IProps) {
  function handleClick(elementName: string) {
    props.setOpen(false);

    setTimeout(() => {
      const element = document.querySelector<HTMLDivElement>(elementName);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }
  return (
    <div className="nav--links">
      <button className="nav--home nav__button">
        <FaHome className="nav__link__icon" />
        <h3 className="nav__link__name" onClick={() => handleClick(".intro")}>
          Home
        </h3>
      </button>
      <button className="nav--projects nav__button">
        <FaCode className="nav__link__icon" />
        <h3 className="nav__link__name" onClick={() => handleClick(".projects")}>
          Projects
        </h3>
      </button>
      <button className="nav--experience nav__button">
        <FaLaptop className="nav__link__icon" />
        <h3 className="nav__link__name" onClick={() => handleClick(".experience")}>
          Experience
        </h3>
      </button>
      <button className="nav--contact nav__button">
        <FaPhoneAlt className="nav__link__icon" />
        <h3 className="nav__link__name" onClick={() => handleClick(".contact")}>
          Contact
        </h3>
      </button>
    </div>
  );
}

export default NavLinks;
