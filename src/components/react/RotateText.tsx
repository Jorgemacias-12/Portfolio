import { useEffect, useState, useRef, type HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  interval?: number; // tiempo entre cambios (ms)
  transitionDuration?: number; // duración de la rotación (ms)
  perspective?: number; // distancia de perspectiva (px)
}

// Constantes que definen el comportamiento 3D
const ROTATION_DEG_PER_FACE = 90; // cada cara rota 90° respecto a la anterior
const INACTIVE_OPACITY = 0.3; // opacidad de las caras no activas
const INACTIVE_BLUR = "0.5px"; // desenfoque de las caras no activas
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
  const measureRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  // Calcula la altura máxima de todos los textos, respetando el ancho real del componente
  useEffect(() => {
    if (!measureRef.current || !wrapperRef.current || texts.length === 0)
      return;

    // Obtener el ancho real del contenedor para que el texto de medición haga wrap igual
    const wrapperWidth = wrapperRef.current.offsetWidth;
    if (wrapperWidth === 0) return;

    const measureEl = measureRef.current;
    measureEl.style.width = `${wrapperWidth}px`;
    measureEl.style.display = "block";

    const heights = texts.map((text) => {
      measureEl.textContent = text;
      return measureEl.offsetHeight;
    });

    const maxHeight = Math.max(...heights, 0);
    setContainerHeight(maxHeight);

    measureEl.style.display = "";
  }, [texts]);

  // Cambia el texto activo cada cierto intervalo
  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  if (!texts.length) return null;

  // Distancia desde el centro del cubo hasta cada cara: la mitad de la altura
  const halfHeight = containerHeight / 2;

  return (
    <span
      ref={wrapperRef}
      className={`relative inline-block ${className ?? ""}`}
      style={{
        perspective: `${perspective}px`,
        overflow: "visible", // evita que el contenido rotado sea recortado por el padre
        ...style,
      }}
      {...rest}
    >
      <span
        className="relative block"
        style={{
          height: containerHeight > 0 ? containerHeight : "auto",
          transformStyle: "preserve-3d",
          transition: `transform ${transitionDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          transform: `rotateX(${activeIndex * -ROTATION_DEG_PER_FACE}deg)`,
          overflow: "visible",
        }}
      >
        {texts.map((text, i) => (
          <span
            key={i}
            className="absolute left-0 top-0 w-full"
            style={{
              transform: `
                rotateX(${i * ROTATION_DEG_PER_FACE}deg)
                translateZ(${halfHeight}px)
              `,
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
              opacity: i === activeIndex ? 1 : INACTIVE_OPACITY,
              filter: i === activeIndex ? "none" : `blur(${INACTIVE_BLUR})`,
              transition: "opacity 0.3s ease, filter 0.3s ease",
            }}
          >
            {text}
          </span>
        ))}
      </span>

      {/* Elemento oculto para medir alturas, con el mismo ancho que el contenedor real */}
      <div
        ref={measureRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          top: 0,
          left: 0,
          font: "inherit",
          lineHeight: "inherit",
          padding: "inherit",
          whiteSpace: "normal", // permite que el texto haga wrap
          wordBreak: "break-word",
        }}
      />
    </span>
  );
};
