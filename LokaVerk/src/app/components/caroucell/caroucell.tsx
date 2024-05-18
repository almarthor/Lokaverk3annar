import { useEffect, useState } from "react";

type ImageSliderProps = {
  imageUrl: string[];
};

export function ImageSlider({ imageUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [imageUrl]);

  return (
    <div>
      <img src={imageUrl[imageIndex]} className=" h-56 w-full" />
    </div>
  );
}
