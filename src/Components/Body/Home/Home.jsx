import "./Home.css";
import HomeDetail from "./HomeDetail/HomeDetail";
import HomeText from "./HomeText/HomeText";

const homePage = () => {
  return (
    <div className="home" id="home">
      <div className="component front">
        <HomeText />
      </div>
      <div className="component behind">
        <HomeDetail />
      </div>
    </div>
  );
};

export default homePage;
