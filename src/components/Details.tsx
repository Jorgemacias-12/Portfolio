import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import { useRef, useState, type MouseEvent } from "react";

interface DetailsProps {
  title: string;
  content: string[];
}

export const Details = ({ title, content }: DetailsProps) => {
  const theme = useStore($theme);
  const lightClassNames = "bg-white border";
  const darkClassNames = "bg-black_rain-900";
  const themeClassNames = theme === "light" ? lightClassNames : darkClassNames;

  const detailsEl = useRef<HTMLDetailsElement | null>(null);
  const summaryEl = useRef<HTMLElement | null>(null);
  const contentEl = useRef<HTMLUListElement | null>(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let animation: Animation | null = null;

  const onAnimationEnd = (expanded: boolean) => {
    setIsAnimating(false);
    setIsOpen(expanded);

    if (!detailsEl.current) return;

    detailsEl.current.open = expanded;
    detailsEl.current.style.height = expanded ? "auto" : "";
  };

  const expand = () => {
    if (!detailsEl.current || !summaryEl.current || !contentEl.current) return;

    const startHeight = `${detailsEl.current.offsetHeight}px`;
    const endHeight = `${
      summaryEl.current.offsetHeight + contentEl.current.offsetHeight
    }px`;

    if (animation) animation.cancel();

    animation = detailsEl.current.animate(
      { height: [startHeight, endHeight] },
      { duration: 400, easing: "ease-out" }
    );

    animation.onfinish = () => onAnimationEnd(true);
    animation.oncancel = () => setIsAnimating(false);
  };

  const collapse = () => {
    if (!detailsEl.current || !summaryEl.current) return;

    setIsAnimating(true);
    const startHeight = `${detailsEl.current.offsetHeight}px`;
    const endHeight = `${summaryEl.current.offsetHeight}px`;

    if (animation) animation.cancel();

    detailsEl.current.style.overflow = "hidden";

    animation = detailsEl.current.animate(
      { height: [startHeight, endHeight] },
      { duration: 400, easing: "ease-out" }
    );

    animation.onfinish = () => onAnimationEnd(false);
    animation.oncancel = () => setIsAnimating(false);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (isAnimating) return;

    if (!isOpen) {
      expand();
    } else {
      collapse();
    }
  };

  return (
    <details
      className={`flex gap-2 w-full p-2 rounded-md ${themeClassNames}`}
      ref={detailsEl}
    >
      <summary
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
        ref={summaryEl}
      >
        <span
          className={`fas fa-angle-right transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        ></span>
        {title}
      </summary>
      <ul
        className={`mt-2 list-disc pl-6 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        ref={contentEl}
      >
        {content.map((text, index) => (
          <li className="marker:mr-0" key={index}>
            {text}
          </li>
        ))}
      </ul>
    </details>
  );
};
