import { useEffect, useState, useRef, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  interval?: number;
  transitionDuration?: number;
  perspective?: number;
}

const ROTATION_DEG_PER_FACE = 90;
const INACTIVE_OPACITY = 0.3;
const INACTIVE_BLUR = "0.5px";
const DEFAULT_TRANSITION_MS = 700;
const DEFAULT_INTERVAL_MS = 3000;
const DEFAULT_PERSPECTIVE_PX = 800;

export const RotateText = ({
  texts,
  interval = DEFAULT_INTERVAL_MS,
  transitionDuration = DEFAULT_TRANSITION_MS,
  perspective = DEFAULT_PERSPECTIVE_PX,
  className,
  style,
  ...rest
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const ghostRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  const updateHeight = () => {
    if (ghostRef.current) {
      const height = ghostRef.current.offsetHeight;
      setContainerHeight(height);
    }
  };

  useEffect(() => {
    requestAnimationFrame(updateHeight);
    if (!wrapperRef.current) return;
    const resizeObserver = new ResizeObserver(() => updateHeight());
    resizeObserver.observe(wrapperRef.current);
    return () => resizeObserver.disconnect();
  }, [texts]);

  useEffect(() => {
    if (texts.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  if (!texts.length) return null;

  const halfHeight = containerHeight / 2;
  const longestText = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span
      ref={wrapperRef}
      /* Usamos transform-gpu para que el navegador cree una capa de composición.
         'isolation-isolate' asegura que sus hijos no se peleen con el Z-index del Header.
      */
      className={`relative inline-block transform-gpu isolation-isolate ${className ?? ""}`}
      style={{
        display: "inline-block",
        perspective: `${perspective}px`,
        zIndex: 1,
        ...style,
      }}
      {...rest}
    >
      {/* Elemento fantasma para mantener el espacio en el layout */}
      <div
        ref={ghostRef}
        aria-hidden="true"
        style={{
          visibility: "hidden",
          pointerEvents: "none",
          whiteSpace: "normal",
          wordBreak: "break-word",
          font: "inherit",
          lineHeight: "inherit",
          padding: "inherit",
          width: "100%",
        }}
      >
        {longestText}
      </div>

      {/* Contenedor del cubo 3D */}
      <span
        className="absolute left-0 top-0 w-full h-full transform-gpu"
        style={{
          transformStyle: "preserve-3d",
          transition: `transform ${transitionDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          transform: `rotateX(${activeIndex * -ROTATION_DEG_PER_FACE}deg)`,
          height: containerHeight > 0 ? containerHeight : "auto",
        }}
      >
        {texts.map((text, i) => (
          <span
            key={i}
            className="absolute left-0 top-0 w-full transform-gpu"
            style={{
              transform: `rotateX(${i * ROTATION_DEG_PER_FACE}deg) translateZ(${halfHeight}px)`,
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              opacity: i === activeIndex ? 1 : INACTIVE_OPACITY,
              filter: i === activeIndex ? "none" : `blur(${INACTIVE_BLUR})`,
              transition: "opacity 0.3s ease, filter 0.3s ease",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {text}
          </span>
        ))}
      </span>
    </span>
  );
};
