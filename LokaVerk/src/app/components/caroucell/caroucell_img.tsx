import chef1 from "../../../../public/chef1.jpg";
import chef2 from "../../../../public/chef2.jpg";
import chef3 from "../../../../public/chef3.jpg";
import { ImageSlider } from "./caroucell";

const chef = [chef1.src, chef2.src, chef3.src];

const Caroucell = () => {
  return <ImageSlider imageUrl={chef} />;
};
export default Caroucell;
