import { ArrowRightOutlined } from "@mui/icons-material";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";

interface Props {
  title: string;
  content: string[];
}

export const Details = ({ title, content }: Props) => {
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
      className="block gap-2 w-full p-2 rounded-md bg-white border dark:bg-black_rain-900 dark:border-black_rain-900"
      ref={detailsEl}
      open={isOpen}
    >
      <summary
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
        onKeyUp={() => {}}
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
      <ul className="list-disc pl-6 flex-grow-0" ref={contentEl}>
        {content.map((text, index) => (
          <li className="marker:mr-0" key={text}>
            {text}
          </li>
        ))}
      </ul>
    </details>
  );
};
