import CompleteLayout from "../Template Elements/CompleteLayout";
import Image55 from "../../../../Images/Menu Images/055.jpg";
import Image56 from "../../../../Images/Menu Images/056.jpg";
import Image57 from "../../../../Images/Menu Images/057.jpg";
import Image58 from "../../../../Images/Menu Images/058.jpg";
import Image59 from "../../../../Images/Menu Images/059.jpg";
import Image60 from "../../../../Images/Menu Images/060.jpg";

const specials = [
  {
    title: "Unagi Don",
    image: Image55,
    price: "£ 11.50",
  },
  {
    title: "Yaki Udon",
    image: Image56,
    price: "£ 9.50",
  },
  {
    title: "Kimchi Udon",
    image: Image57,
    price: "£ 9.50",
  },
  {
    title: "Beef Udon",
    image: Image58,
    price: "£ 9.50",
  },
  {
    title: "Yakiniku Don",
    image: Image59,
    price: "£ 9.50",
  },
  {
    title: "Mabo Tofu Don",
    image: Image60,
    price: "£ 9.50",
  },
];

const Specials = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CompleteLayout objDescription={specials} />
    </div>
  );
};

export default Specials;
