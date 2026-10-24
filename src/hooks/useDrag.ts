import type { Direction, Point } from "@/types";
import { useCallback, useRef, useState } from "react";

export const useDrag = () => {
  const DEFAULT_DIRECTION = "direct";
  const INITITAL_POSITION = { x: 0, y: 0 };

  const dragStartRef = useRef<Point>(INITITAL_POSITION);
  const initialPositionRef = useRef<Point>(INITITAL_POSITION);

  const [direction, setDirection] = useState<Direction>(DEFAULT_DIRECTION);
  const [position, setPosition] = useState<Point>(INITITAL_POSITION);
  const [isDragging, setIsDragging] = useState<boolean>(false);

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
};
