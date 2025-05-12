import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.scss";
interface TrueFocusProps {
    sentence?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

interface FocusRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
    sentence = "True Focus",
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    const words = sentence.split(" ");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [, setLastActiveIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wordRefs: React.RefObject <(HTMLSpanElement | null)[]> = useRef([]);
    const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (currentIndex === null || currentIndex === -1) return;

        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });

        // go to link
        const link = wordRefs.current[currentIndex]?.getAttribute("href");
        if (link) {
            const targetElement = document.querySelector(link);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [currentIndex, words.length]);

    // Handlers for manual mode (hover)
    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    // const handleMouseLeave = () => {
    //     if (manualMode) {
    //         setCurrentIndex(lastActiveIndex ?? 0);
    //     }
    // };

    return (
        <div className="focus-container d-flex gap-4 gap-md-5" ref={containerRef}>
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <a
                        href={`#` + word.toLowerCase()}
                        key={index}
                        onClick={() => handleMouseEnter(index)}
                        ref={(el) => { wordRefs.current[index] = el; }}
                        className={`focus-word ${manualMode ? "manual" : ""} ${isActive && !manualMode ? "active" : ""
                            }`}
                        style={{
                            filter:
                                manualMode
                                    ? isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`
                                    : isActive
                                        ? `blur(0px)`
                                        : `blur(${blurAmount}px)`,
                            transition: `filter ${animationDuration}s ease`,
                            "--border-color": borderColor,
                            "--glow-color": glowColor,
                        } as React.CSSProperties}
                        // onMouseEnter={() => handleMouseEnter(index)}
                        // onMouseLeave={handleMouseLeave}
                    >
                        {word}
                    </a>
                );
            })}

            <motion.div
                className="focus-frame "
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0,
                }}
                transition={{
                    duration: animationDuration,
                }}
                style={{
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                } as React.CSSProperties}
            >
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;