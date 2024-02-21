import PropTypes from "prop-types";
import "./ImageComp.css";

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
        {props.title} {props.veggie && <img src={props.veggie} alt="veggie" />}
        <span className="text_sizing_right">{props.price}</span>
      </p>
    </div>
  );
}

export default ImageComponent;
