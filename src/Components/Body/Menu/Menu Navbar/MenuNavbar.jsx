import "./MenuNavbar.css";
import MenuDrawing from "../Menu Detail/MenuDetail";

const menuNavBar = () => {
  return (
    <div className="stickyHeader">
      <MenuDrawing />
      <h1 className="menuCentered">MENU</h1>
      <div className="menuNavopt">
        <a className="menuIndividual active" href="#starter">
          Starter
        </a>
        <a className="menuIndividual" href="#curry">
          Curry
        </a>
        <a className="menuIndividual" href="#donburi">
          Donburi
        </a>
        <a className="menuIndividual" href="#yaki">
          Yakisoba / Yakimeshi
        </a>
        <a className="menuIndividual" href="#salad">
          Salad
        </a>
        <a className="menuIndividual" href="#special">
          Specials
        </a>
      </div>
    </div>
  );
};

export default menuNavBar;
