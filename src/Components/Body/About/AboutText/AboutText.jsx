import "./AboutText.css";
import Ellipse2 from "../../../../Images/Main/Ellipse.png";

const frontLayoutAbout = () => {
  return (
    <div>
      <img className="elli2" src={Ellipse2} />
      <div className="alignedText2">
        <h1 className="alignedText2H1">
          Cozy Vibe
          <br />
          Local Restaurant
          <br />
        </h1>
        <h2 className="alignedText2H2">
          Thanks to the big love and support by locals.
          <br />
          We are located in the heart of the Vibrant City of Brighton for more
          than 15 years.
          <br />
          Close to the shops in the lanes and just a minute walk from Brighton
          Dome.
          <br />
          Enjoy our freshly cooked heartly meal with a reasonable price.
        </h2>
        <button className="alignedText2Btn">
          <div className="rectangle2">See our merch</div>
        </button>
      </div>
    </div>
  );
};

export default frontLayoutAbout;
