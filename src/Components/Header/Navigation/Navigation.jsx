import instLogo from "../../../Images/Header/Instagram_logo.png";

import React from "react";

const Navigation = ({ activeLink, setActiveLink }) => {
  const links = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Menu", href: "#menu" },
    { title: "Contact", href: "#contact" },
    {
      title: "Instagram",
      href: "https://www.instagram.com/pompoko.brighton/",
      isLogo: true,
    },
  ];

  return (
    <div className="navopt">
      {links.map((link, index) => (
        <a
          key={index}
          className={
            link.title.toLowerCase() === activeLink.toLowerCase()
              ? "individual active"
              : "individual"
          }
          href={link.href}
          onClick={() => setActiveLink(link.title)}
          target={link.title === "Instagram" ? "_blank" : ""}
          rel="noreferrer"
        >
          {link.isLogo ? (
            <img src={instLogo} alt="Follow us on Instagram" />
          ) : (
            link.title
          )}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
