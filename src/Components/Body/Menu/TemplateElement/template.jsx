import "./template.css";
import Starters from "../Menu Items/StartersLayout";
import Curries from "../Menu Items/CurriesLayout";
import Donburies from "../Menu Items/DonburiLayout";
import Yakisoba from "../Menu Items/YakisobaLayout";
import Yakimeshi from "../Menu Items/YakimeshiLayout";

const Template = () => {
  return (
    <div>
      <div className="text_menu">
        <h1>Menu</h1>
      </div>
      <div className="items-position">
        <div className="item">
          <h2>Starters</h2>
          <div className="item_box">
            <Starters />
          </div>
        </div>
        <div className="item">
          <h2>Curry Dishes</h2>
          <div className="item_box">
            <Curries />
          </div>
        </div>
        <div className="item">
          <h2>Donburi</h2>
          <div className="item_box">
            <Donburies />
          </div>
        </div>
        <div className="item">
          <h2>Yakisoba</h2>
          <div className="item_box">
            <Yakisoba />
          </div>
        </div>
        <div className="item">
          <h2>Yakimeshi</h2>
          <div className="item_box">
            <Yakimeshi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
