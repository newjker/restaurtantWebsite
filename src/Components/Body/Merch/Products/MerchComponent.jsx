import PropTypes from "prop-types";
import "./MerchComponent.css";

MerchComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.string.isRequired,
};

function MerchComponent(props) {
  return (
    <div className="overall_merch_component">
      <img className="merch_img_size" src={props.image} alt={props.title} />
      <div className="merch_text">
        <p className="merch_text_title">{props.title}</p>
        <p className="">{props.color}</p>
        <p className="">{props.size}</p>
      </div>
      <p className="merch_text_price">{props.price}</p>
    </div>
  );
}

export default MerchComponent;
