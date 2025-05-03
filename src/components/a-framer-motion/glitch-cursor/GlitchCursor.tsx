import { useEffect, useRef } from "react";

const GlitchCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
      }

      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${x - 10}px`;
      trail.style.top = `${y - 10}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 400);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default GlitchCursor;
