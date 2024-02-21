import Carousel from "./Carousel";
import VLogo from "../../../../Images/V Logo/Veggie Logo.png";
import Image1 from "../../../../Images/Menu Images/011.jpg";
import Image2 from "../../../../Images/Menu Images/012.jpg";
import Image3 from "../../../../Images/Menu Images/013.jpg";
import Image4 from "../../../../Images/Menu Images/014.jpg";
import Image5 from "../../../../Images/Menu Images/015.jpg";
import Image6 from "../../../../Images/Menu Images/016.jpg";

const donburi = [
  {
    title: "Teriyaki Chicken Don",
    image: Image1,
    price: "£ 7.80",
  },
  {
    title: "Chicken Naban Don",
    image: Image2,
    price: "£ 7.80",
  },
  {
    title: "Pork Naban Don",
    image: Image3,
    price: "£ 8.00",
  },
  {
    title: "Prawn Naban Don",
    image: Image4,
    price: "£ 8.00",
  },
  {
    title: "Tori Chilli Don",
    image: Image5,
    price: "£ 7.80",
  },
  {
    title: "Buta Chilli Don",
    image: Image6,
    price: "£ 8.00",
  },
  {
    title: "Ebi Chilli Don",
    image: Image6,
    price: "£ 8.00",
  },
  {
    title: "Tofu Chilli Don",
    image: Image1,
    veggie: VLogo,
    price: "£ 7.80",
  },
  {
    title: "Oyako Don",
    image: Image2,
    price: "£ 7.80",
  },
  {
    title: "Katsu Don",
    image: Image3,
    price: "£ 8.00",
  },
  {
    title: "Tofu Don",
    image: Image4,
    price: "£ 7.80",
  },
  {
    title: "Pork Kimchi Don",
    image: Image5,
    price: "£ 8.30",
  },
  {
    title: "Sesame Chicken Don",
    image: Image6,
    price: "£ 8.20",
  },
  {
    title: "Sesame Beef Don",
    image: Image6,
    price: "£ 8.30",
  },
  {
    title: "Sesame Pork Don",
    image: Image1,
    price: "£ 8.30",
  },
  {
    title: "Sesame Prawn Don",
    image: Image2,
    price: "£ 8.30",
  },
  {
    title: "Sesame Tofu Don",
    image: Image3,
    veggie: VLogo,
    price: "£ 8.20",
  },
  {
    title: "Chicken Shouga Yaki Don",
    image: Image6,
    price: "£ 8.20",
  },
  {
    title: "Beef Shouga Yaki Don",
    image: Image6,
    price: "£ 8.30",
  },
  {
    title: "Pork Shouga Yaki Don",
    image: Image1,
    price: "£ 8.30",
  },
  {
    title: "Prawn Shouga Yaki Don",
    image: Image2,
    price: "£ 8.30",
  },
  {
    title: "Tofu Shouga Yaki Don",
    image: Image3,
    veggie: VLogo,
    price: "£ 8.20",
  },
];

const Donburi = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel objDescription={donburi} />
    </div>
  );
};

export default Donburi;
