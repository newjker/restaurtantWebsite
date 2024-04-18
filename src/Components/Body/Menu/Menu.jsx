import "./Menu.css";
//import Templates from "./TemplateElement/template";
import IndividualTemplate from "./Template Elements/IndividualTemplate";
import MenuNavBar from "./Menu Navbar/MenuNavbar";

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <MenuNavBar />

      <IndividualTemplate />
    </div>
  );
};

export default Menu;
