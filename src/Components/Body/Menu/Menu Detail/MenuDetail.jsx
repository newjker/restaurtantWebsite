import "./MenuDetail.css";
import MomBoy from "../../../../Images/drawing1.png";
import Flowers from "../../../../Images/drawing2.png";

const MenuDrawing = () => {
  return (
    <div>
      <img className="momBoy" src={MomBoy} alt="mom and boy eating rice" />
      <img className="flowers" src={Flowers} alt="flowers by the window" />
    </div>
  );
};

export default MenuDrawing;
