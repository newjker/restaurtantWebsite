import Carousel from "./Carousel";
import VLogo from "../../../../Images/V Logo/Veggie Logo.png";
import Image1 from "../../../../Images/Menu Images/011.jpg";
import Image2 from "../../../../Images/Menu Images/012.jpg";
import Image3 from "../../../../Images/Menu Images/013.jpg";
import Image4 from "../../../../Images/Menu Images/014.jpg";
import Image5 from "../../../../Images/Menu Images/015.jpg";
import Image6 from "../../../../Images/Menu Images/016.jpg";

const curry = [
  {
    title: "Fried Chicen Curry",
    image: Image1,
    price: "£ 7.80",
  },
  {
    title: "Bread Chicken Curry",
    image: Image2,
    price: "£ 8.00",
  },
  {
    title: "Beef Curry",
    image: Image3,
    price: "£ 8.20",
  },
  {
    title: "Prawn Curry",
    image: Image4,
    price: "£ 8.00",
  },
  {
    title: "Bread Pork Curry",
    image: Image5,
    price: "£ 8.00",
  },
  {
    title: "Tofu Curry",
    veggie: VLogo,
    image: Image6,
    price: "£ 7.80",
  },
  {
    title: "Pumpkin Curry",
    veggie: VLogo,
    image: Image6,
    price: "£ 8.00",
  },
];

const Curry = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel objDescription={curry} />
    </div>
  );
};

export default Curry;
