import "./Merch.css";
import Details from "./Merch Detail/MerchDetail";
import Products from "./Products/Products";

const Merch = () => {
  return (
    <div className="merch" id="merch">
      <div>
        <Details />
      </div>
      <div className="components">
        <Products />
      </div>
    </div>
  );
};

export default Merch;
