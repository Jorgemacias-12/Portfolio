import type { Direction, Point } from "@/types";
import { useCallback, useRef, useState } from "react";

export const useImageTransform = () => {
  const INITIAL_ROTATION = 0;
  const INITIAL_SCALE = 1;
  const DEFAULT_DIRECTION = "direct";
  const INITIAL_POSITION = { x: 0, y: 0 };

  const [scale, setScale] = useState<number>(INITIAL_SCALE);
  const [rotation, setRotation] = useState<number>(INITIAL_ROTATION);
  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION);
  const [position, setPosition] = useState<Point>(INITIAL_POSITION);

  const initialPositionRef = useRef<Point>(INITIAL_POSITION);

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

  const resetImageTransform = useCallback(() => {
    setScale(INITIAL_SCALE);
    setRotation(INITIAL_ROTATION);
    setPosition(INITIAL_POSITION);
  }, []);

  return {
    scale,
    rotation,
    direction,
    position,
    initialPositionRef,
    zoomIn,
    zoomOut,
    rotate,
    resetImageTransform,
  };
};
