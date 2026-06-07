import { useCarrousel } from "@/hooks/useCarrousel";
import type { Locale, Image, Video } from "@/types";
import { getTranslation } from "@/utils";
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
import { createPortal } from "react-dom";
import { CarrouselButton } from "./CarrouselButton";

interface Props {
  locale: Locale;
  images?: Image[];
}

export const Carrousel = ({ images, locale }: Props) => {
  const {
    scale,
    isDragging,
    position,
    rotation,
    noImagesDetected,
    hasMoreThanOneImage,
    isModalMounted,
    isModalVisible,
    containerRef,
    imageRef,
    dialogRef,
    currentImageHasDescription,
    currentIndex,
    START_INDEX,
    openPreview,
    startDrag,
    stopDrag,
    onDragMove,
    closePreview,
    goToNextImage,
    goToPreviousImage,
    setCurrentIndex,
    zoomIn,
    zoomOut,
    resetRotation,
    rotate,
  } = useCarrousel(images!, false);

  const { t } = getTranslation(locale);

  if (noImagesDetected) {
    return (
      <p className="p-2 bg-red-100  text-red-800 dark:bg-red-800 dark:text-red-100 rounded-md font-semibold flex text-center items-center gap-1">
        <ImageOff size={32} />
        {t("components.carrousel.no_preview")}
      </p>
    );
  }

  const dragHandlers = {
    onMouseDown: (e: React.MouseEvent) => startDrag(e.clientX, e.clientY),
    onMouseMove: (e: React.MouseEvent) => {
      if (isDragging) {
        onDragMove(e.clientX, e.clientY);
      }
    },
    onMouseUp: () => stopDrag(),
    onMouseLeave: () => stopDrag(),
    onTouchStart: (e: React.TouchEvent) =>
      startDrag(e.touches[0].clientX, e.touches[0].clientY),
    onTouchMove: (e: React.TouchEvent) => {
      if (isDragging) onDragMove(e.touches[0].clientX, e.touches[0].clientY);
    },
    onTouchEnd: () => stopDrag(),
  };

  return (
    <>
      <section
        tabIndex={0}
        role="button"
        aria-label={t("components.carrousel.open_gallery")}
        onClick={openPreview}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openPreview()}
        className="relative w-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity aspect-video"
      >
        <img
          src={images![START_INDEX].url}
          alt={images![START_INDEX].description}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {hasMoreThanOneImage && (
          <p className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs">
            +{images!.length - 1} {t("components.carrousel.images_indicator")}
          </p>
        )}
      </section>

      {isModalMounted &&
        createPortal(
          <div
            ref={containerRef}
            className={clsx(
              "fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300",
              isModalVisible ? "opacity-100" : "opacity-0",
            )}
          >
            <dialog
              ref={dialogRef}
              open={isModalMounted}
              className={clsx(
                "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "flex max-h-[90dvh] w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-col justify-between overflow-hidden rounded-md border-none shadow-lg outline-none dark:bg-dark-800 dark:text-white gap-2 p-2",
                isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
                "transition-all duration-300",
              )}
              aria-labelledby="carousel-title"
            >
              <header className="flex justify-end items-center gap-2">
                <h2 id="carrousel-title" className="sr-only">
                  {t("components.carrousel.image_gallery")}
                </h2>

                <p className="bg-black/50 p-1.5 px-2 rounded-md text-white font-medium text-sm">
                  {currentIndex + 1} / {images!.length}
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
                  >
                    <ZoomOut className="w-5 h-5" />
                  </CarrouselButton>

                  <CarrouselButton
                    type="button"
                    onClick={rotate}
                    aria-label={t("components.carrousel.rotate") || "Rotar (R)"}
                    title={t("components.carrousel.rotate") || "Rotar (R)"}
                  >
                    <RotateCw className="w-5 h-5" />
                  </CarrouselButton>

                  <CarrouselButton
                    type="button"
                    onClick={resetRotation}
                    aria-label={
                      t("components.carrousel.reset") || "Restablecer"
                    }
                    title={t("components.carrousel.reset") || "Restablecer"}
                  >
                    <RefreshCw className="w-5 h-5" />
                  </CarrouselButton>
                </section>

                <CarrouselButton
                  className="dark:bg-transparent cursor-pointer hover:bg-red-500 hover:dark:bg-red-500 ring-0 focus:ring-transparent"
                  type="button"
                  onClick={closePreview}
                  aria-label={t("components.carrousel.close") || "Cerrar (Esc)"}
                  title={t("components.carrousel.close") || "Cerrar (Esc)"}
                >
                  <X className="w-5 h-5" />
                </CarrouselButton>
              </header>
              <main className="relative flex-1 items-center justify-center px-4 overflow-hidden">
                {hasMoreThanOneImage && (
                  <>
                    <CarrouselButton
                      onClick={goToPreviousImage}
                      className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-50"
                    >
                      <ChevronLeft />
                    </CarrouselButton>
                    <CarrouselButton
                      onClick={goToNextImage}
                      className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-50"
                    >
                      <ChevronRight />
                    </CarrouselButton>
                  </>
                )}

                <div
                  {...dragHandlers}
                  style={{
                    cursor:
                      scale > 1
                        ? isDragging
                          ? "grabbing"
                          : "grab"
                        : "default",
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    ref={imageRef}
                    src={images![currentIndex].url}
                    alt={images![currentIndex].description}
                    className="max-w-full max-h-full object-contain select-none"
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(${scale}) rotate(${rotation}deg)`,
                      transition: isDragging
                        ? "none"
                        : "transform 0.1s ease-out",
                    }}
                    draggable={false}
                  />
                </div>
              </main>
              <footer className="flex flex-col gap-3 p-2">
                {currentImageHasDescription && (
                  <p className="text-sm text-balance text-center">
                    {images![currentIndex].description}
                  </p>
                )}

                {hasMoreThanOneImage && (
                  <div className="flex gap-2 mx-auto overflow-hidden">
                    {images!.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={clsx(
                          "w-16 h-12 rounded overflow-hidden",
                          idx === currentIndex
                            ? "scale-110"
                            : "border-transparent",
                        )}
                      >
                        <img
                          src={img.url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </footer>
            </dialog>
          </div>,
          document.body,
        )}
    </>
  );
};
