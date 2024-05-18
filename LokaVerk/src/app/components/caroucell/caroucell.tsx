import { useState } from "react";

type ImageSliderProps = {
  imageUrl: string[];
};

export function ImageSlider({ imageUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div>
      <img src={imageUrl[imageIndex]} className=" h-32 w-32" />
    </div>
  );
}
