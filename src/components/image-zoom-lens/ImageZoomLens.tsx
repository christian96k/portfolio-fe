import React, { useEffect, useRef, useState } from "react";
import "./ImageZoomLens.scss";

interface ImageZoomLensProps {
  src: string;
  zoom?: number;        // Zoom iniziale
  lensSize?: number;    // Diametro lente
  maxZoom?: number;
  minZoom?: number;
}

const ImageZoomLens: React.FC<ImageZoomLensProps> = ({
  src,
  zoom = 2,
  lensSize = 100,
  maxZoom = 100,
  minZoom,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensPosition, setLensPosition] = useState<{ x: number; y: number } | null>(null);
  const [currentZoom, setCurrentZoom] = useState(zoom);
//   const minZoomValue = minZoom ?? zoom;

  // Scroll zoom dinamico
  useEffect(() => {
    if (isTouchDevice) return; // ❌ Skip su mobile

    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        const scrollSpeed = Math.abs(e.deltaY);
        const direction = e.deltaY > 0 ? -1 : 1;
        const dynamicStep = Math.min(1.5, Math.max(0.1, scrollSpeed / 100)) * direction;

        setCurrentZoom((prevZoom) => {
        const newZoom = Math.min(Math.max(prevZoom + dynamicStep, minZoom ?? zoom), maxZoom);
        return parseFloat(newZoom.toFixed(2));
        });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
    }, [minZoom, maxZoom, zoom]);


  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setLensPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setLensPosition(null);
  };
    const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;


    const handleTouchStart = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const touch = e.touches[0];
    const rect = container.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setLensPosition({ x, y });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const touch = e.touches[0];
    const rect = container.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setLensPosition({ x, y });
    };

    const handleTouchEnd = () => {
    setLensPosition(null);
    };


  return (
    <div
        className="hover-img-zoom-lens"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        style={{ overflow: "hidden", touchAction: "none" }} // Disabilita zoom/pan nativo
        >
        <img src={src} alt="Zoomable" />
        {lensPosition && (
            <div
            className="lens"
            style={{
                left: lensPosition.x - lensSize / 2,
                top: lensPosition.y - lensSize / 2,
                width: lensSize,
                height: lensSize,
                backgroundImage: `url(${src})`,
                backgroundSize: `${(isTouchDevice ? zoom : currentZoom) * 100}%`,
                backgroundPosition: `${(lensPosition.x / containerRef.current!.offsetWidth) * 100}% ${(lensPosition.y / containerRef.current!.offsetHeight) * 100}%`,
            }}
            />
        )}
        </div>

  );
};

export default ImageZoomLens;
