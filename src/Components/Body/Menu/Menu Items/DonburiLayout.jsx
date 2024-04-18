import CompleteLayout from "../Template Elements/CompleteLayout";
import VLogo from "../../../../Images/V Logo/Veggie Logo.png";
import Image17 from "../../../../Images/Menu Images/017.jpg";
import Image18 from "../../../../Images/Menu Images/018.jpg";
import Image19 from "../../../../Images/Menu Images/019.jpg";
import Image20 from "../../../../Images/Menu Images/020.jpg";
import Image21 from "../../../../Images/Menu Images/021.jpg";
import Image22 from "../../../../Images/Menu Images/022.jpg";
import Image23 from "../../../../Images/Menu Images/023.jpg";
import Image24 from "../../../../Images/Menu Images/024.jpg";
import Image25 from "../../../../Images/Menu Images/025.jpg";
import Image26 from "../../../../Images/Menu Images/026.jpg";
import Image27 from "../../../../Images/Menu Images/027.jpg";
import Image28 from "../../../../Images/Menu Images/028.jpg";
import Image29 from "../../../../Images/Menu Images/029.jpg";
import Image30 from "../../../../Images/Menu Images/030.jpg";
import Image31 from "../../../../Images/Menu Images/031.jpg";
import Image32 from "../../../../Images/Menu Images/032.jpg";
import Image33 from "../../../../Images/Menu Images/033.jpg";
import Image34 from "../../../../Images/Menu Images/034.jpg";
import Image35 from "../../../../Images/Menu Images/035.jpg";
import Image36 from "../../../../Images/Menu Images/036.jpg";
import Image37 from "../../../../Images/Menu Images/037.jpg";
import Image38 from "../../../../Images/Menu Images/038.jpg";

const donburi = [
  {
    title: "Teriyaki Chicken Don",
    image: Image17,
    price: "£ 7.80",
  },
  {
    title: "Chicken Naban Don",
    image: Image18,
    price: "£ 7.80",
  },
  {
    title: "Pork Naban Don",
    image: Image19,
    price: "£ 8.00",
  },
  {
    title: "Prawn Naban Don",
    image: Image20,
    price: "£ 8.00",
  },
  {
    title: "Tori Chilli Don",
    image: Image21,
    price: "£ 7.80",
  },
  {
    title: "Buta Chilli Don",
    image: Image22,
    price: "£ 8.00",
  },
  {
    title: "Ebi Chilli Don",
    image: Image23,
    price: "£ 8.00",
  },
  {
    title: "Tofu Chilli Don",
    image: Image24,
    veggie: VLogo,
    price: "£ 7.80",
  },
  {
    title: "Oyako Don",
    image: Image25,
    price: "£ 7.80",
  },
  {
    title: "Katsu Don",
    image: Image26,
    price: "£ 8.00",
  },
  {
    title: "Tofu Don",
    image: Image27,
    price: "£ 7.80",
  },
  {
    title: "Pork Kimchi Don",
    image: Image28,
    price: "£ 8.30",
  },
  {
    title: "Sesame Chicken Don",
    image: Image29,
    price: "£ 8.20",
  },
  {
    title: "Sesame Beef Don",
    image: Image30,
    price: "£ 8.30",
  },
  {
    title: "Sesame Pork Don",
    image: Image31,
    price: "£ 8.30",
  },
  {
    title: "Sesame Prawn Don",
    image: Image32,
    price: "£ 8.30",
  },
  {
    title: "Sesame Tofu Don",
    image: Image33,
    veggie: VLogo,
    price: "£ 8.20",
  },
  {
    title: "Chicken ShougaYaki Don",
    image: Image34,
    price: "£ 8.20",
  },
  {
    title: "Beef ShougaYaki Don",
    image: Image35,
    price: "£ 8.30",
  },
  {
    title: "Pork ShougaYaki Don",
    image: Image36,
    price: "£ 8.30",
  },
  {
    title: "Prawn ShougaYaki Don",
    image: Image37,
    price: "£ 8.30",
  },
  {
    title: "Tofu ShougaYaki Don",
    image: Image38,
    veggie: VLogo,
    price: "£ 8.20",
  },
];

const Donburi = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CompleteLayout objDescription={donburi} />
    </div>
  );
};

export default Donburi;
