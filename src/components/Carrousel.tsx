import { getTranslation } from "@/i18n";
import type { Image, Locale } from "@/types";
import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Props {
  locale?: Locale;
  images: Image[];
}

export const Carrousel = ({ locale, images }: Props) => {
  const START_INDEX = 0;
  const INITIAL_ROTATION = 0;
  const INITIAL_SCALE = 1;
  const DEFAULT_IS_OPEN = false;
  const DEFAULT_IS_DRAGGING = false;
  const PREVIOUS = 1;
  const NEXT = 1;
  const hasImages = images.length > 1;

  const { t } = getTranslation(locale as Locale);

  if (!images || images.length === 0) {
    return (
      <p className="p-2 bg-red-100  text-red-800 dark:bg-red-800 dark:text-red-100 rounded-md font-semibold flex text-center items-center gap-1">
        <ImageOff size={32} />
        Vista previa no disponible
      </p>
    );
  }

  const [currentIndex, setCurrentIndex] = useState<number>(START_INDEX);
  const [isOpen, setIsOpen] = useState<boolean>(DEFAULT_IS_OPEN);
  const [scale, setScale] = useState<number>(INITIAL_SCALE);
  const [rotation, setRotation] = useState<number>(INITIAL_ROTATION);
  const [isDragging, setIsDragging] = useState<boolean>(DEFAULT_IS_DRAGGING);

  useEffect(() => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === START_INDEX ? images.length - PREVIOUS : prevIndex - NEXT
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - PREVIOUS ? START_INDEX : prevIndex + NEXT
    );
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isDragging) {
      setIsOpen(false);
    }
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));

  const resetTransform = () => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
  };

  const rotate = () => setRotation((prev) => (prev + 90) % 360);

  const openPreview = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
        case "Escape":
          setIsOpen(false);
          break;
        case "+":
        case "=":
          setScale((prev) => Math.min(prev + 0.25, 3));
          break;
        case "-":
          setScale((prev) => Math.max(prev - 0.25, 0.5));
          break;
        case "r":
          setRotation((prev) => (prev + 90) % 360);
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, goToPrevious, goToNext]);

  return (
    <>
      <section
        className="relative w-full h-60 rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        onClick={openPreview}
      >
        <img
          loading="lazy"
          decoding="async"
          src={images[START_INDEX].url}
          alt={images[START_INDEX].description}
          className="w-full h-full object-cover"
        />

        {hasImages && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            +{images.length - PREVIOUS}{" "}
            {t("components.carrousel.images_indicator")}
          </div>
        )}
      </section>

      {isOpen && (
        <section
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={handleOverlayClick}
        >
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-90" : "opacity-0"
            }`}
          />

          <main
            className={`relative z-10 w-full max-w-6xl mx-4 transform transition-all duration-300 ease-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-black/95 rounded-lg overflow-hidden border-0">
              <div className="relative">
                <div className="absolute top-4 right-4 z-10 flex gap-2 items-center">
                  {hasImages && (
                    <div className="bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
                      {currentIndex + 1} / {images.length}
                    </div>
                  )}

                  <div className="flex gap-1 bg-black/50 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={zoomIn}
                      className="p-2 text-white hover:bg-white/20 rounded transition-colors"
                      title="Zoom in"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={zoomOut}
                      className="p-2 text-white hover:bg-white/20 rounded transition-colors"
                      title="Zoom out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={rotate}
                      className="p-2 text-white hover:bg-white/20 rounded transition-colors"
                      title="Rotate"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={resetTransform}
                      className="p-2 text-white hover:bg-white/20 rounded transition-colors"
                      title="Reset"
                    >
                      <RotateCw className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div
                  className="relative w-full h-[70vh] flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                >
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].description}
                    className="max-w-full max-h-full object-contain transition-transform duration-200"
                    style={{
                      transform: `scale(${scale}) rotate(${rotation}deg)`,
                    }}
                    draggable={false}
                  />
                </div>
              </div>

              {hasImages && (
                <>
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/20 rounded-full transition-colors duration-200"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white hover:bg-white/20 rounded-full transition-colors duration-200"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {hasImages && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 p-2 rounded-lg max-w-full overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        index === currentIndex
                          ? "border-white"
                          : "border-transparent hover:border-white/50"
                      }`}
                      onClick={() => goToSlide(index)}
                    >
                      <img
                        src={image.url}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </main>
        </section>
      )}
    </>
  );
};
