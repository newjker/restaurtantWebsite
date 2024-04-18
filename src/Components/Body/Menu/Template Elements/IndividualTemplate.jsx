import "./IndividualTemplate.css";
import Starter from "../Menu Items/StarterLayout";
import Curry from "../Menu Items/CurryLayout";
import Donburi from "../Menu Items/DonburiLayout";
import Yaki from "../Menu Items/YakiLayout";
import Salad from "../Menu Items/SaladLayout";
import Specials from "../Menu Items/SpecialLayout";

const Template = () => {
  return (
    <div className="centerItems">
      <div className="wrapper" id="starter">
        <h2 className="description">Starter</h2>
        <div className="line"></div>
        <Starter />
      </div>
      <div className="wrapper" id="curry">
        <h2 className="description">Curry</h2>
        <div className="line"></div>
        <Curry />
      </div>
      <div className="wrapper" id="donburi">
        <h2 className="description">Donburi</h2>
        <div className="line"></div>
        <Donburi />
      </div>
      <div className="wrapper" id="yaki">
        <h2 className="description">Yakisoba / Yakimeshi</h2>
        <div className="line"></div>
        <Yaki />
      </div>
      <div className="wrapper min_sizing" id="salad">
        <h2 className="description">Salad</h2>
        <div className="line"></div>
        <Salad />
      </div>
      <div className="wrapper min_sizing" id="special">
        <h2 className="description">Specials</h2>
        <div className="line"></div>
        <Specials />
      </div>
    </div>
  );
};

export default Template;
