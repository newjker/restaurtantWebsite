import "./Products.css";
import MerchObjects from "./MerchObjects";

const Products = () => {
  return (
    <div>
      <h1 className="title_text">MERCH</h1>
      <div className="merch_items">
        <MerchObjects />
      </div>
    </div>
  );
};

export default Products;
