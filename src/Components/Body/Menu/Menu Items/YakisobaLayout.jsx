import Carousel from "./Carousel";
import Image1 from "../../../../Images/Menu Images/011.jpg";
import Image2 from "../../../../Images/Menu Images/012.jpg";
import Image3 from "../../../../Images/Menu Images/013.jpg";
import Image4 from "../../../../Images/Menu Images/014.jpg";
import Image5 from "../../../../Images/Menu Images/015.jpg";
import Image6 from "../../../../Images/Menu Images/016.jpg";

const yakisoba = [
  {
    title: "Chicken Yakisoba",
    image: Image1,
    price: "£ 8.20",
  },
  {
    title: "Beef Yakisoba",
    image: Image2,
    price: "£ 8.30",
  },
  {
    title: "Pork Yakisoba",
    image: Image3,
    price: "£ 8.30",
  },
  {
    title: "Prawn Yakisoba",
    image: Image4,
    price: "£ 8.30",
  },
  {
    title: "Vegetable Yakisoba",
    image: Image5,
    price: "£ 8.00",
  },
  {
    title: "Special Yakisoba",
    image: Image6,
    price: "£ 8.50",
  },
];

const Yakisoba = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel objDescription={yakisoba} />
    </div>
  );
};

export default Yakisoba;
