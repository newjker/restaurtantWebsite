import TShirt from "../../../../Images/Merch Details/Tshirts.png";
import Hoddie from "../../../../Images/Merch Details/Hoodies.png";
import MerchPromps from "./MerchPromps";

const merch = [
  {
    title: "T-shirt",
    image: TShirt,
    color: "Color: Black / Grey",
    size: "Size: S / M / L / XL",
    price: "£ 15",
  },
  {
    title: "Hoddie",
    image: Hoddie,
    color: "Color: Black / Grey",
    size: "Size: S / M / L",
    price: "£ 30",
  },
];

const MerchObjects = () => {
  return (
    <div>
      <MerchPromps objDescription={merch} />
    </div>
  );
};

export default MerchObjects;
