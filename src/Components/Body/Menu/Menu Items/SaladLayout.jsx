import CompleteLayout from "../Template Elements/CompleteLayout";
import Image51 from "../../../../Images/Menu Images/051.jpg";
import Image52 from "../../../../Images/Menu Images/052.jpg";
import Image53 from "../../../../Images/Menu Images/053.jpg";
import Image54 from "../../../../Images/Menu Images/054.jpg";
import VLogo from "../../../../Images/V Logo/Veggie Logo.png";

const salad = [
  {
    title: "Chicken Salad",
    image: Image51,
    price: "£ 8.20",
  },
  {
    title: "Pork Salad",
    image: Image52,
    price: "£ 8.30",
  },
  {
    title: "Prawn Salad",
    image: Image53,
    price: "£ 8.30",
  },
  {
    title: "Tofu Salad",
    image: Image54,
    price: "£ 8.00",
    veggie: VLogo,
  },
];

const Salad = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CompleteLayout objDescription={salad} />
    </div>
  );
};

export default Salad;
