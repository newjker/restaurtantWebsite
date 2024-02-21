import "./About.css";
import AboutText from "./AboutText/AboutText";
import AboutDrawing from "./About Detail/AboutDetail";

const about = () => {
  return (
    <div className="about" id="about">
      <AboutDrawing />
      <AboutText />
    </div>
  );
};

export default about;
