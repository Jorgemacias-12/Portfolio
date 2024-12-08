import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";

interface Props {
  images: string[];
  imageCaptions?: string[];
}

export const Carrousel = ({ images, imageCaptions }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const buttonStyleClassNames =
    "w-8 h-8 rounded-full flex items-center justify-center bg-black/50 text-white absolute z-10";

  return (
    <figure className="relative w-full h-auto overflow-hidden">
      <button
        onClick={handlePrev}
        className={`${buttonStyleClassNames} top-1/2 left-2 -translate-y-1/2`}
      >
        <ChevronLeft fontSize="large" />
      </button>
      <button
        onClick={handleNext}
        className={`${buttonStyleClassNames} top-1/2 right-2 -translate-y-1/2`}
      >
        <ChevronRight fontSize="large" />
      </button>
      <section
        className="relative flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((url, index) => (
          <img
            key={index}
            className="w-full h-auto object-cover flex-shrink-0"
            src={url}
            alt={imageCaptions?.[index] || `Image ${index + 1}`}
          />
        ))}
      </section>

      {imageCaptions && (
        <figcaption className="absolute bottom-1 text- text-white bg-black/50 w-full p-2 left-1/2 -translate-x-1/2 z-40">
          {imageCaptions?.[currentIndex]}
        </figcaption>
      )}
    </figure>
  );
};
