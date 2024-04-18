import "./HomeDetail.css";
import Ellipse from "../../../../Images/Main/Ellipse.png";
import RandomImage from "./RandomImage";

const behindLayoutHome = () => {
  return (
    <div>
      <img className="elli" src={Ellipse} />
      <RandomImage />
    </div>
  );
};

export default behindLayoutHome;
