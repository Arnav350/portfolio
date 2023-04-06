import React from "react";
import { FaHome, FaCode, FaLaptop, FaPhoneAlt } from "react-icons/fa";
import "../../../App.css";
import "./NavLinks.css";

function NavLinks() {
  return (
    <div className="nav--links">
      <button className="nav--home nav__button">
        <FaHome className="nav__link__icon" />
        <h3 className="nav__link__name">Home</h3>
      </button>
      <button className="nav--projects nav__button">
        <FaCode className="nav__link__icon" />
        <h3 className="nav__link__name">Projects</h3>
      </button>
      <button className="nav--experience nav__button">
        <FaLaptop className="nav__link__icon" />
        <h3 className="nav__link__name">Experience</h3>
      </button>
      <button className="nav--contact nav__button">
        <FaPhoneAlt className="nav__link__icon" />
        <h3 className="nav__link__name">Contact</h3>
      </button>
    </div>
  );
}

export default NavLinks;
