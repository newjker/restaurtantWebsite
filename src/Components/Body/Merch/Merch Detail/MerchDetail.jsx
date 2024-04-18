import "./MerchDetail.css";
import RightSide from "../../../../Images/Merch Details/rightside drawings.png";
import LeftSide from "../../../../Images/Merch Details/leftside drawing.png";

const Details = () => {
  return (
    <div className="merchDetails">
      <img className="rightDetail" src={RightSide} />
      <img className="leftDetail" src={LeftSide} />
    </div>
  );
};

export default Details;
