import RandomImage01 from "../../../../Images/Main/Random Img 01.png";
import RandomImage02 from "../../../../Images/Main/Random Img 02.png";
import RandomImage03 from "../../../../Images/Main/Random Img 03.png";
import RandomImage04 from "../../../../Images/Main/Random Img 04.png";
import RandomImage05 from "../../../../Images/Main/Random Img 05.png";

const RandomImage = () => {
  //Array containing the images
  const images = [
    RandomImage01,
    RandomImage02,
    RandomImage03,
    RandomImage04,
    RandomImage05,
  ];

  //Generate a Random Image within the range of array.length
  const randomIndex = Math.floor(Math.random() * images.length);

  //Collect the image selected randomly
  const randomImagePath = images[randomIndex];

  return (
    <div className="randomImg">
      <img src={randomImagePath} alt="Random Image" />
    </div>
  );
};

export default RandomImage;
