import type { Direction, Image, Point } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

export const useCarrousel = (images: Image[], isOpen: boolean) => {
  const START_INDEX = 0;
  const INITIAL_ROTATION = 0;
  const INITIAL_SCALE = 1;
  const DEFAULT_IS_OPEN = false;
  const DEFAULT_DIRECTION = "direct";
  const MINIMAL_QUANTITY_OF_IMAGES = 1;
  const ZERO_SIZE_STRING = 0;
  const INITITAL_POSITION = { x: 0, y: 0 };

  const [currentIndex, setCurrentIndex] = useState<number>(START_INDEX);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(isOpen);
  const [isModalMounted, setIsModalMounted] =
    useState<boolean>(DEFAULT_IS_OPEN);
  const [scale, setScale] = useState<number>(INITIAL_SCALE);
  const [rotation, setRotation] = useState<number>(INITIAL_ROTATION);
  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION);
  const [position, setPosition] = useState<Point>(INITITAL_POSITION);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const openTimeoutRef = useRef<NodeJS.Timeout>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(null);

  const dragStartRef = useRef<Point>(INITITAL_POSITION);
  const initialPositionRef = useRef<Point>(INITITAL_POSITION);

  const hasMoreThanOneImage = images.length > MINIMAL_QUANTITY_OF_IMAGES;
  const currentImageHasDescription =
    images[currentIndex].description.trim().length > ZERO_SIZE_STRING;

  const noImagesDetected = images.length === 0;

  const goToPreviousImage = useCallback(() => {
    resetImageConfiguration();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNextImage = useCallback(() => {
    resetImageConfiguration();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const zoomIn = useCallback(
    () => setScale((prev) => Math.min(prev + 0.25, 3)),
    [],
  );
  const zoomOut = useCallback(
    () => setScale((prev) => Math.max(prev - 0.25, 0.5)),
    [],
  );
  const rotate = useCallback(
    () => setRotation((prev) => (prev + 90) % 360),
    [],
  );

  const resetRotation = useCallback(() => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
    setPosition(INITITAL_POSITION);
  }, []);

  const openPreview = useCallback(() => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);

    setIsModalMounted(true);

    openTimeoutRef.current = setTimeout(() => {
      setIsModalVisible(true);

      dialogRef.current?.focus();
    }, 20);
  }, []);

  const closePreview = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    setIsModalVisible(false);

    closeTimeoutRef.current = setTimeout(() => {
      setIsModalMounted(false);

      setCurrentIndex(START_INDEX);
      setScale(INITIAL_SCALE);
      setRotation(INITIAL_ROTATION);
      setPosition(INITITAL_POSITION);
    }, 300);
  }, []);

  const resetImageConfiguration = () => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
    setPosition(INITITAL_POSITION);
  };

  const startDrag = useCallback(
    (clientX: number, clientY: number) => {
      setIsDragging(true);

      dragStartRef.current = { x: clientX, y: clientY };
      initialPositionRef.current = position;
    },
    [position],
  );

  const onDragMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return;

      const dx = clientX - dragStartRef.current.x;
      const dy = clientY - dragStartRef.current.y;

      setPosition({
        x: initialPositionRef.current.x + dx,
        y: initialPositionRef.current.y + dy,
      });
    },
    [isDragging],
  );

  const stopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalVisible ? "hidden" : "unset";
  }, [isModalVisible]);

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isModalMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPreviousImage();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNextImage();
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
    goToPreviousImage,
    goToNextImage,
    closePreview,
    zoomIn,
    zoomOut,
    rotate,
  ]);

  useEffect(() => {
    if (!isModalMounted) return;

    const handleWheelZoom = (event: WheelEvent) => {
      if (!event.ctrlKey || event.buttons !== 0) return;

      event.preventDefault();

      if (event.deltaY < 0) {
        zoomIn();
      } else if (event.deltaY > 0) {
        zoomOut();
      }
    };

    document.addEventListener("wheel", handleWheelZoom, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", handleWheelZoom);
    };
  }, [isModalMounted, zoomIn, zoomOut]);

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

  return {
    START_INDEX,

    currentIndex,
    scale,
    rotation,
    direction,
    isModalMounted,
    isModalVisible,
    hasMoreThanOneImage,
    currentImageHasDescription,
    noImagesDetected,
    position,
    isDragging,

    containerRef,
    dialogRef,
    imageRef,

    goToPreviousImage,
    goToNextImage,
    zoomIn,
    zoomOut,
    startDrag,
    stopDrag,
    onDragMove,
    rotate,
    resetRotation,
    openPreview,
    closePreview,
    setCurrentIndex,
  };
};
