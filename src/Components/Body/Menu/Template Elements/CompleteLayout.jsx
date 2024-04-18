import PropTypes from "prop-types";
import "./CompleteLayout.css";
import ImageComponent from "./ImageComponent";

/*
this will be the new Casrousel element
it will garb the CImage Component and repeat it the same number as items in each Layout
First put to extract 15 items
later improve the code to as necessary
*/

const CompleteLayout = ({ objDescription }) => {
  const descriptionArray = Array.isArray(objDescription) ? objDescription : [];

  const components = descriptionArray
    .slice(0, objDescription.length)
    .map((template, index) => (
      <ImageComponent
        key={index}
        title={template.title}
        image={template.image}
        veggie={template.veggie}
        price={template.price}
      />
    ));
  return <div className="containerTemp">{components}</div>;
};

CompleteLayout.propTypes = {
  objDescription: PropTypes.array.isRequired,
};

export default CompleteLayout;
