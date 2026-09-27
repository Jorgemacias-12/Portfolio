import { useEffect, useRef } from "react";

const SWIPE_MIN_DISTANCE = 80;
const EDGE_ZONE_WIDTH = 80;
const SWIPE_PREVENTION_DISTANCE = 20;
const WIDTH_BREAKPOINT = 768;

type SwipeState = {
  startX: number;
  startY: number;
  isHorizontal: boolean;
  isEdgeSwipe: boolean;
};

export const useSwipe = (
  isMenuOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
) => {
  const touch = useRef<SwipeState>({
    startX: 0,
    startY: 0,
    isHorizontal: false,
    isEdgeSwipe: false,
  });

  const handleTouchStart = (event: TouchEvent) => {
    if (window.innerWidth >= WIDTH_BREAKPOINT) {
      return;
    }

    const { clientX, clientY } = event.touches[0];

    touch.current.startX = clientX;
    touch.current.startY = clientY;

    touch.current.isHorizontal = false;
    touch.current.isEdgeSwipe = !isMenuOpen && clientX <= EDGE_ZONE_WIDTH;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (window.innerWidth >= WIDTH_BREAKPOINT) {
      return;
    }

    const { clientX, clientY } = event.touches[0];

    const diffX = clientX - touch.current.startX;
    const diffY = clientY - touch.current.startY;

    if (!touch.current.isHorizontal) {
      const isHorizontal = Math.abs(diffX) > Math.abs(diffY);

      if (isHorizontal && Math.abs(diffX) > SWIPE_PREVENTION_DISTANCE) {
        touch.current.isHorizontal = true;
      } else if (!isHorizontal && Math.abs(diffY) > SWIPE_PREVENTION_DISTANCE) {
        return;
      }
    }

    if (
      touch.current.isHorizontal &&
      Math.abs(diffX) > SWIPE_PREVENTION_DISTANCE
    ) {
      event.preventDefault();
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (window.innerWidth >= WIDTH_BREAKPOINT) {
      return;
    }

    if (!touch.current.isHorizontal) {
      return;
    }

    const { clientX } = event.changedTouches[0];

    const diffX = clientX - touch.current.startX;

    if (Math.abs(diffX) < SWIPE_MIN_DISTANCE) {
      return;
    }

    if (diffX > 0 && touch.current.isEdgeSwipe) {
      onOpen();
    }

    if (diffX < 0 && isMenuOpen) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {};
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
