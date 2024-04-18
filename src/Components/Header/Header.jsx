import React, { useState } from "react";
import "./Header.css";
import logo from "../../Images/Header/Logo.png";

import Navigation from "./Navigation/Navigation";

const fixedHeader = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="header">
      <img className="logo " src={logo} alt="Pompoko Japanese Restaurant" />
      <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
};

export default fixedHeader;
/*<div className="navopt">
        <a className="individual" href="#home">
          Home
        </a>
        <a className="individual active" href="#about">
          About
        </a>
        <a className="individual" href="#menu">
          Menu
        </a>
        <a className="individual" href="#contact">
          Contact
        </a>
        <a
          className="individual instLogo"
          href="https://www.instagram.com/pompoko.brighton/"
          target="blank"
        >
          <img src={instLogo} alt="Follows us on Instagram" />
        </a>
      </div>*/
