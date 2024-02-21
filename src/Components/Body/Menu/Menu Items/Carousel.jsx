import { useState, useEffect } from "react";
import ImageComponent from "./ImageComp";
import Arrow from "../../../../Images/Menu Images/Arrow.png";
import PropTypes from "prop-types";
import "./Carousel.css";

const TemplateCarousel = ({ objDescription }) => {
  const [components, setComponents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    initializeComponents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts if doesnt work add []

  const initializeComponents = () => {
    const initialComponents = objDescription
      .slice(0, 5)
      .map((template, index) => (
        <ImageComponent
          key={index}
          //className="bottomTemplate"
          title={template.title}
          image={template.image}
          veggie={template.veggie}
          price={template.price}
        />
      ));
    setComponents(initialComponents);
  };

  const handleButtonClick = () => {
    const nextIndex = (currentIndex + 1) % objDescription.length;
    let nextComponents;
    if (nextIndex + 5 <= objDescription.length) {
      nextComponents = objDescription
        .slice(nextIndex, nextIndex + 5)
        .map((template, index) => (
          <ImageComponent
            key={index}
            //className="bottomTemplate"
            title={template.title}
            image={template.image}
            veggie={template.veggie}
            price={template.price}
          />
        ));
    } else {
      const remainingTemplates = 5 - (objDescription.length - nextIndex);
      nextComponents = objDescription
        .slice(nextIndex)
        .concat(objDescription.slice(0, remainingTemplates))
        .map((template, index) => (
          <ImageComponent
            key={index}
            //className="bottomTemplate"
            title={template.title}
            image={template.image}
            veggie={template.veggie}
            price={template.price}
          />
        ));
    }
    setComponents(nextComponents);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="container">
      {components}
      <button onClick={handleButtonClick} className="btnSize">
        <img src={Arrow} alt="Arrow" className="arrowSize" />
      </button>
    </div>
  );
};

TemplateCarousel.propTypes = {
  objDescription: PropTypes.array.isRequired,
};

export default TemplateCarousel;
