import { useState } from "react"

interface CarrouselProps {
  images: string[]
}

export const Carrousel = ({ images }: CarrouselProps) => {
  const [image, setImage] = useState(0);

  const onImageChangeNext = () => {
    setImage((prevImage) => (prevImage + 1) % images!.length);
  }

  const onImageChagePrev = () => {
    setImage((prevImage) => {
      if (prevImage === 0) {
        return images!.length - 1
      }
      else {
        return prevImage - 1
      }
    });
  }

  return (
    <figure className="flex items-center gap-2 w-full justify-center relative">
      <button className="absolute top-1/2 left-2 w-8 h-8 rounded-full -translate-y-1/2 bg-black/50 text-white" onClick={onImageChagePrev}><span className="fas fa-dw fa-angle-left"></span></button>
      <section className="w-full">
        <img className="rounded-md w-full object-contain aspect-square" src={images[image]} alt="" />
      </section>
      <button className="absolute top-1/2 right-2 w-8 h-8 rounded-full -translate-y-1/2 bg-black/50 text-white" onClick={onImageChangeNext}><span className="fas fa-dw fa-angle-right"></span></button>
    </figure>
  )
}
