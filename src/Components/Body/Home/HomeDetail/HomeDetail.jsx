import "./HomeDetail.css";
import Ellipse from "../../../../Images/Main/Ellipse.png";
import RandomImage from "../../../../Images/Menu Images/12.png";

const behindLayoutHome = () => {
  return (
    <div>
      <img className="elli" src={Ellipse} />
      <img className="randomImg" src={RandomImage} />
    </div>
  );
};

export default behindLayoutHome;
