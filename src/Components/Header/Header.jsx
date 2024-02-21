import "./Header.css";
import logo from "../../Images/Header/Logo.png";
import instLogo from "../../Images/Header/Instagram_logo.png";

const fixedHeader = () => {
  return (
    <div className="header">
      <img className="logo " src={logo} alt="Pompoko Japanese Restaurant" />
      <div className="navopt">
        <a className="individual" href="#home">
          Home
        </a>
        <a className="individual" href="#about">
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
      </div>
    </div>
  );
};

export default fixedHeader;
