import { getTranslation } from "@/i18n";
import type { Locale, Image, Direction } from "@/types";
import clsx from "clsx";
import {
  ChevronLeft,
  ChevronRight,
  ImageOff,
  RefreshCw,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CarrouselButton } from "./CarrouselButton";
import { ImageSkeleton } from "./ImageSkeleton";
import { ImageErrorState } from "./ImageErrorState";

interface Props {
  locale?: Locale;
  images: Image[];
}

export const Carrousel = ({ images, locale }: Props) => {
  const START_INDEX = 0;
  const INITIAL_ROTATION = 0;
  const INITIAL_SCALE = 1;
  const DEFAULT_LOAD_KEY = 0;
  const DEFAULT_IS_OPEN = false;
  const DEFAULT_IS_ANIMATING = false;
  const DEFAULT_DIRECTION = "direct";
  const MINIMAL_QUANTITY_OF_IMAGES = 1;
  const ZERO_SIZE_STRING = 0;
  const DEFAULT_IS_IMAGE_LOADING = true;
  const DEFAULT_HAS_IMAGE_ERROR = false;
  const DEFAULT_TIMEOUT = 5000;

  const { t } = getTranslation(locale as Locale);

  const [currentIndex, setCurrentIndex] = useState<number>(START_INDEX);
  const [isModalMounted, setIsModalMounted] =
    useState<boolean>(DEFAULT_IS_OPEN);
  const [isModalVisible, setIsModalVisible] =
    useState<boolean>(DEFAULT_IS_OPEN);
  const [scale, setScale] = useState<number>(INITIAL_SCALE);
  const [rotation, setRotation] = useState<number>(INITIAL_ROTATION);
  const [isAnimating, setIsAnimating] = useState<boolean>(DEFAULT_IS_ANIMATING);
  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(
    DEFAULT_IS_IMAGE_LOADING
  );
  const [hasImageError, setHasImageError] = useState<boolean>(
    DEFAULT_HAS_IMAGE_ERROR
  );
  const [imageLoadKey, setImageLoadKey] = useState<number>(DEFAULT_LOAD_KEY);

  const containerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const hasMultipleImages = images.length > MINIMAL_QUANTITY_OF_IMAGES;
  const currentImageHasDescription =
    images[currentIndex].description.trim().length > ZERO_SIZE_STRING;

  useEffect(() => {
    setIsImageLoading(true);
    setHasImageError(false);
    setImageLoadKey((prev) => prev + 1);

    const timeoutId = setTimeout(() => {
      if (isImageLoading) {
        setIsImageLoading(false);
        setHasImageError(true);
      }
    }, DEFAULT_TIMEOUT);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  useEffect(() => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
  }, [currentIndex]);

  useEffect(() => {
    document.documentElement.style.overflow = isModalMounted
      ? "hidden"
      : "unset";
  }, [isModalMounted]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  }, [images.length, isAnimating]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  }, [images.length, isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setDirection("direct");
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, currentIndex]
  );

  const zoomIn = useCallback(
    () => setScale((prev) => Math.min(prev + 0.25, 3)),
    []
  );
  const zoomOut = useCallback(
    () => setScale((prev) => Math.max(prev - 0.25, 0.5)),
    []
  );
  const rotate = useCallback(
    () => setRotation((prev) => (prev + 90) % 360),
    []
  );

  const resetTransform = useCallback(() => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
  }, []);

  const openPreview = useCallback(() => {
    setIsModalMounted(true);

    setTimeout(() => {
      setIsModalVisible(true);
      dialogRef.current?.focus();
    }, 20);
  }, []);

  const closePreview = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalMounted(false);

      setCurrentIndex(START_INDEX);
      setScale(INITIAL_SCALE);
      setRotation(INITIAL_ROTATION);
      setIsImageLoading(DEFAULT_IS_IMAGE_LOADING);
      setHasImageError(DEFAULT_HAS_IMAGE_ERROR);
    }, 300);
  }, []);

  useEffect(() => {
    if (!isModalMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Escape":
          closePreview();
          break;
        case "+":
        case "=":
          e.preventDefault();
          zoomIn();
          break;
        case "-":
          e.preventDefault();
          zoomOut();
          break;
        case "r":
        case "R":
          e.preventDefault();
          rotate();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    isModalMounted,
    goToPrevious,
    goToNext,
    closePreview,
    zoomIn,
    zoomOut,
    rotate,
  ]);

  const retryImageLoad = useCallback(() => {
    setIsImageLoading(true);
    setHasImageError(false);
    setImageLoadKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target === containerRef.current) {
        closePreview();
      }
    };

    if (isModalMounted) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalMounted, closePreview]);

  if (!images || images.length === 0) {
    return (
      <p className="p-2 bg-red-100  text-red-800 dark:bg-red-800 dark:text-red-100 rounded-md font-semibold flex text-center items-center gap-1">
        <ImageOff size={32} />
        {t("components.carrousel.no_preview")}
      </p>
    );
  }

  return (
    <>
      <section
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPreview();
          }
        }}
        aria-label={t("components.carrousel.open_gallery")}
        role="button"
        className="relative w-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        onClick={openPreview}
      >
        <img
          loading="lazy"
          decoding="async"
          src={images[START_INDEX].url}
          alt={images[START_INDEX].description}
          className="w-full h-full object-cover"
        />

        {hasMultipleImages && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium">
            +{images.length - 1}{" "}
            {t("components.carrousel.images_indicator") || "imágenes"}
          </div>
        )}
      </section>

      {isModalMounted && (
        <section
          ref={containerRef}
          className={clsx(
            "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300",
            isModalVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <dialog
            ref={dialogRef}
            tabIndex={-1}
            open={isModalMounted}
            className={clsx(
              "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "flex max-h-[90dvh] w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-col justify-between overflow-hidden rounded-md border-none shadow-lg outline-[#3f474f] transition-all duration-300 dark:bg-dark-800 dark:text-white gap-2",
              "p-2 m-0",
              isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            )}
          >
            <header className="flex justify-end items-center gap-2">
              <h2 id="carousel-title" className="sr-only">
                {t("components.carrousel.image_gallery") ||
                  "Galería de imágenes"}
              </h2>

              <p className="bg-black/50 p-1.5 px-2 rounded-md text-white font-medium">
                {currentIndex + 1} / {images.length}
              </p>

              <section
                className="flex gap-1"
                role="toolbar"
                aria-label={
                  t("components.carrousel.image_controls") ||
                  "Controles de imagen"
                }
              >
                <CarrouselButton
                  type="button"
                  onClick={zoomIn}
                  aria-label={
                    t("components.carrousel.zoom_in") || "Acercar (+)"
                  }
                  title={t("components.carrousel.zoom_in") || "Acercar (+)"}
                  disabled={isImageLoading}
                >
                  <ZoomIn className="w-5 h-5" />
                </CarrouselButton>

                <CarrouselButton
                  type="button"
                  onClick={zoomOut}
                  aria-label={
                    t("components.carrousel.zoom_out") || "Alejar (-)"
                  }
                  title={t("components.carrousel.zoom_out") || "Alejar (-)"}
                  disabled={isImageLoading}
                >
                  <ZoomOut className="w-5 h-5" />
                </CarrouselButton>

                <CarrouselButton
                  type="button"
                  onClick={rotate}
                  aria-label={t("components.carrousel.rotate") || "Rotar (R)"}
                  title={t("components.carrousel.rotate") || "Rotar (R)"}
                  disabled={isImageLoading}
                >
                  <RotateCw className="w-5 h-5" />
                </CarrouselButton>

                <CarrouselButton
                  type="button"
                  onClick={resetTransform}
                  aria-label={t("components.carrousel.reset") || "Restablecer"}
                  title={t("components.carrousel.reset") || "Restablecer"}
                  disabled={isImageLoading}
                >
                  <RefreshCw className="w-5 h-5" />
                </CarrouselButton>
              </section>

              <CarrouselButton
                className="dark:bg-transparent hover:bg-red-800 dark:hover:bg-red-800 ring-0 focus:ring-transparent"
                type="button"
                onClick={closePreview}
                aria-label={t("components.carrousel.close") || "Cerrar (Esc)"}
                title={t("components.carrousel.close") || "Cerrar (Esc)"}
              >
                <X className="w-5 h-5" />
              </CarrouselButton>
            </header>

            <main className="flex-1 relative flex items-center justify-center px-4 overflow-hidden">
              {hasMultipleImages && (
                <>
                  <CarrouselButton
                    type="button"
                    onClick={goToPrevious}
                    aria-label={`${
                      t("components.carrousel.previous_image") ||
                      "Imagen anterior"
                    } (←)`}
                    title={`${
                      t("components.carrousel.previous_image") ||
                      "Imagen anterior"
                    } (←)`}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black/30 hover:bg-white/20 rounded-full transition-colors duration-200 z-20"
                    disabled={isAnimating || isImageLoading}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </CarrouselButton>

                  <CarrouselButton
                    type="button"
                    onClick={goToNext}
                    aria-label={`${
                      t("components.carrousel.next_image") || "Siguiente imagen"
                    } (→)`}
                    title={`${
                      t("components.carrousel.next_image") || "Siguiente imagen"
                    } (→)`}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black/30 hover:bg-white/20 rounded-full transition-colors duration-200 z-20"
                    disabled={isAnimating || isImageLoading}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </CarrouselButton>
                </>
              )}

              <div className="relative w-full h-full flex items-center justify-center">
                {isImageLoading && !hasImageError && <ImageSkeleton />}

                {hasImageError && <ImageErrorState onRetry={retryImageLoad} />}

                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    key={`${currentIndex}-${imageLoadKey}`}
                    ref={imageRef}
                    src={images[currentIndex].url}
                    alt={
                      images[currentIndex].description ||
                      `${t("components.carrousel.image")} ${currentIndex + 1}`
                    }
                    onLoad={() => {
                      setIsImageLoading(false);
                      setHasImageError(false);
                    }}
                    onError={() => {
                      setIsImageLoading(false);
                      setHasImageError(true);
                    }}
                    className={clsx(
                      "max-w-full max-h-full object-contain select-none transition-all duration-300 rounded-md",
                      isImageLoading ? "opacity-0" : "opacity-100",
                      isAnimating && direction === "prev" && "translate-x-full",
                      isAnimating &&
                        direction === "next" &&
                        "-translate-x-full",
                      isAnimating && direction === "direct" && "scale-95",
                      !isAnimating && "translate-x-0 scale-100"
                    )}
                    style={{
                      transform: `scale(${scale}) rotate(${rotation}deg)`,
                    }}
                    draggable={false}
                  />
                </div>
              </div>
            </main>

            <footer className="flex flex-col gap-3 p-2">
              {currentImageHasDescription &&
                !isImageLoading &&
                !hasImageError && (
                  <p
                    className={clsx(
                      "text-sm text-gray-700 dark:text-gray-200 text-center px-4 max-w-3xl mx-auto transition-opacity duration-300",
                      isAnimating ? "opacity-0" : "opacity-100"
                    )}
                  >
                    {images[currentIndex].description}
                  </p>
                )}

              {hasMultipleImages && !isImageLoading && !hasImageError && (
                <section
                  className="flex gap-2 mx-auto p-2 rounded-lg bg-black/30 backdrop-blur-sm overflow-x-auto max-w-full"
                  role="tablist"
                  aria-label={
                    t("components.carrousel.thumbnail_navigation") ||
                    "Navegación por miniaturas"
                  }
                >
                  {images.map((image, index) => (
                    <button
                      key={index}
                      role="button"
                      aria-selected={index === currentIndex}
                      aria-label={`${t("components.carrousel.image")} ${
                        index + 1
                      }`}
                      className={clsx(
                        "flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all",
                        index === currentIndex
                          ? "border-white scale-110"
                          : "border-transparent hover:border-white/50 opacity-70 hover:opacity-100"
                      )}
                      onClick={() => goToSlide(index)}
                      disabled={isAnimating || isImageLoading}
                    >
                      <img
                        src={image.url}
                        alt={image.description}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </section>
              )}
            </footer>
          </dialog>
        </section>
      )}
    </>
  );
};
