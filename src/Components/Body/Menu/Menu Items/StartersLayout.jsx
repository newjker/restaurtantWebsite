import Carousel from "./Carousel";
import VLogo from "../../../../Images/V Logo/Veggie Logo.png";
import Image1 from "../../../../Images/Menu Images/01.jpg";
import Image2 from "../../../../Images/Menu Images/02.jpg";
import Image3 from "../../../../Images/Menu Images/03.jpg";
import Image4 from "../../../../Images/Menu Images/04.jpg";
import Image5 from "../../../../Images/Menu Images/05.jpg";
import Image6 from "../../../../Images/Menu Images/06.jpg";
import Image7 from "../../../../Images/Menu Images/07.jpg";
import Image8 from "../../../../Images/Menu Images/08.jpg";
import Image9 from "../../../../Images/Menu Images/09.jpg";
import Image10 from "../../../../Images/Menu Images/10.jpg";
import Image001 from "../../../../Images/Menu Images/001.jpg";
import Image002 from "../../../../Images/Menu Images/002.jpg";
import Image003 from "../../../../Images/Menu Images/003.jpg";

const starters = [
  {
    title: "Spring Rolls",
    veggie: VLogo,
    image: Image1,
    price: "£ 3.30",
  },
  {
    title: "Honey Bbq Ribs",
    image: Image2,
    price: "£ 3.80",
  },
  {
    title: "Ebi Fried",
    image: Image3,
    price: "£ 3.80",
  },
  {
    title: "Tempura Prawns",
    image: Image4,
    price: "£ 3.80",
  },
  {
    title: "Edamame",
    veggie: VLogo,
    image: Image5,
    price: "£ 3.30",
  },
  {
    title: "Miso Soup",
    veggie: VLogo,
    image: Image6,
    price: "£ 2.40",
  },
  {
    title: "Takoyaki",
    image: Image7,
    price: "£ 3.80",
  },
  {
    title: "Yubamaki",
    veggie: VLogo,
    image: Image8,
    price: "£ 3.80",
  },
  {
    title: "Gyoza Dumplings",
    image: Image9,
    price: "£ 3.80",
  },
  {
    title: "Yakitori",
    image: Image10,
    price: "£ 3.80",
  },
  {
    title: "Edamame SpringRoll",
    veggie: VLogo,
    image: Image001,
    price: "£ 3.80",
  },
  {
    title: "Kaiso Salad",
    veggie: VLogo,
    image: Image002,
    price: "£ 3.80",
  },
  {
    title: "Kimchi",
    image: Image003,
    price: "£ 3.80",
  },
];

const ImageTemplate = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel objDescription={starters} />
    </div>
  );
};

export default ImageTemplate;
