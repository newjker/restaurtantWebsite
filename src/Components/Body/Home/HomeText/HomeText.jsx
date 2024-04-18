import "./HomeText.css";

const frontLayoutHome = () => {
  return (
    <div>
      <div className="alignedText">
        <h1 className="alignedTextH1">
          Meet
          <br />
          Japanese home food
          <br />
          in Brighton
          <br />
        </h1>
        <h2 className="alignedTextH2">
          Open 7 days a week
          <br />
          11:30am-11:00pm
          <br />
          110 Church St, BN1 1UD, Brighton
        </h2>

        <a
          style={{ position: "relative", width: "274px", height: "90px" }}
          href="#menu"
        >
          <button className="alignedTextBtn">See our menu</button>
        </a>
      </div>
    </div>
  );
};

export default frontLayoutHome;
