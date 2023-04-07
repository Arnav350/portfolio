import React, { Dispatch, SetStateAction } from "react";
import NavSocials from "./socials/NavSocials";
import NavLinks from "./links/NavLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../App.css";
import "./Nav.css";

interface ISocials {
  portfolio: string;
  linkedIn: string;
  github: string;
  email: string;
  resume: string;
}

interface IProps {
  socials: ISocials;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Nav(props: IProps) {
  return (
    <nav className="nav-bar">
      <div className="nav__background">
        <NavSocials socials={props.socials} />
        <NavLinks setOpen={props.setOpen} />
      </div>
      <div className="nav__circle" onClick={() => props.setOpen(!props.open)}>
        <FaBars className="nav--bars click" />
        <FaTimes className="nav--times click" />
      </div>
    </nav>
  );
}

export default Nav;
