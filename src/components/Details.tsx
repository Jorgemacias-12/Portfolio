import { $theme } from "@/stores";
import { useStore } from "@nanostores/react";
import { useRef, useState, type MouseEvent } from "react";

import { ArrowRightOutlined } from "@mui/icons-material";

interface DetailsProps {
  title: string;
  content: string[];
}

export const Details = ({ title, content }: DetailsProps) => {
  const theme = useStore($theme);
  const themeClassNames =
    theme === "light"
      ? "bg-white border"
      : "bg-black_rain-90 border border-black_rain-900";

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  let animation: Animation | null = null;

  const detailsEl = useRef<HTMLDetailsElement | null>(null);
  const summaryEl = useRef<HTMLElement | null>(null);
  const contentEl = useRef<HTMLUListElement | null>(null);

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
      summaryEl.current.getBoundingClientRect().height +
      contentEl.current.getBoundingClientRect().height
    }px`;

    detailsEl.current.style.overflow = "hidden";
    detailsEl.current.style.height = startHeight;

    if (animation) animation.cancel();

    animation = detailsEl.current.animate(
      { height: [startHeight, endHeight] },
      { duration: 400, easing: "ease-in-out" }
    );

    animation.onfinish = () => onAnimationEnd(true);
    animation.oncancel = () => setIsAnimating(false);
  };

  const collapse = () => {
    if (!detailsEl.current || !summaryEl.current) return;

    setIsAnimating(true);
    const startHeight = `${detailsEl.current.offsetHeight}px`;
    const endHeight = `${summaryEl.current.getBoundingClientRect().height}px`;

    if (animation) animation.cancel();

    detailsEl.current.style.overflow = "hidden";

    animation = detailsEl.current.animate(
      { height: [startHeight, endHeight] },
      { duration: 400, easing: "ease-in-out" }
    );

    animation.onfinish = () => onAnimationEnd(false);
    animation.oncancel = () => setIsAnimating(false);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    e.preventDefault();

    if (isAnimating) return;

    if (!isOpen) {
      setIsAnimating(true);
      setIsOpen(true);
      expand();
    } else {
      setIsAnimating(true);
      setIsOpen(false);
      collapse();
    }
  };

  return (
    <details
      className={`block gap-2 w-full p-2 rounded-md ${themeClassNames}`}
      ref={detailsEl}
      open={isOpen}
    >
      <summary
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
        ref={summaryEl}
      >
        <ArrowRightOutlined
          fontSize="large"
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          style={{ transformOrigin: "center" }}
          sx={{
            transformOrigin: "center",
            transition: "transform 0.3s ease-in-out !important",
          }}
        />
        {title}
      </summary>
      <ul className={`list-disc pl-6 flex-grow-0`} ref={contentEl}>
        {content.map((text, index) => (
          <li className="marker:mr-0" key={index}>
            {text}
          </li>
        ))}
      </ul>
    </details>
  );
};
