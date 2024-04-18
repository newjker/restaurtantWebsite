import "./Footer.css";
import instLogo from "../../../../Images/Header/Instagram_logo.png";

const Footer = () => {
  return (
    <div className="contact_footer">
      <p className="bottom_cpyrt">© Pompoko 2024</p>
      <a
        className="bottom_inst_logo"
        href="https://www.instagram.com/pompoko.brighton/"
        target="blank"
      >
        <img src={instLogo} alt="Follows us on Instagram" />
      </a>
      <div className="bottom_line"></div>
      <p className="creator">website by Daisy Chang & Fernando Ferreira</p>
    </div>
  );
};

export default Footer;
