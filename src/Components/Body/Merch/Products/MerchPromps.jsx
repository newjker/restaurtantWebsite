import propTypes from "prop-types";
import MerchComponent from "./MerchComponent";

const MerchPromps = ({ objDescription }) => {
  const description = Array.isArray(objDescription) ? objDescription : [];

  const components = description
    .slice(0, objDescription.length)
    .map((template, index) => (
      <MerchComponent
        key={index}
        title={template.title}
        image={template.image}
        color={template.color}
        size={template.size}
        price={template.price}
      />
    ));
  return <div>{components}</div>;
};

MerchPromps.propTypes = {
  objDescription: propTypes.array.isRequired,
};

export default MerchPromps;
