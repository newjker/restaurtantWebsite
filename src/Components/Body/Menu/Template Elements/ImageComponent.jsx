import PropTypes from "prop-types";
import "./ImageComponent.css";

ImageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  veggie: PropTypes.string,
  price: PropTypes.string.isRequired,
};

function ImageComponent(props) {
  return (
    <div className="overall_component">
      <img src={props.image} alt={props.title} className="image_sizing" />
      <p className="text_sizing">
        {props.title}
        <span className="text_sizing_right">{props.price}</span>
      </p>
      {props.veggie && (
        <img className="vlogo" src={props.veggie} alt="veggie" />
      )}
    </div>
  );
}

export default ImageComponent;
