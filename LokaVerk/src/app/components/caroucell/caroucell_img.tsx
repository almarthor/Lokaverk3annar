import chef1 from "../../../../public/chef1.jpg";
import chef2 from "../../../../public/chef2.jpg";
import chef3 from "../../../../public/chef3.jpg";
import { ImageSlider } from "./caroucell";

const chef = [chef1, chef2, chef3];

const Caroucell = () => {
  return <ImageSlider imageUrl={chef} />;
};
export default Caroucell;
