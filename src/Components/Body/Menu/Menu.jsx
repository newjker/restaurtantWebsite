import "./Menu.css";
import Templates from "./TemplateElement/template";
import MenuDrawing from "./Menu Detail/MenuDetail";

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <MenuDrawing />
      <Templates />
    </div>
  );
};

export default Menu;
