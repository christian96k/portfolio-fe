import { useState, useRef, useEffect } from "react";
import TrueFocus from "../a-framer-motion/true-focus/TrueFocus";
import "./Header.scss";

const Header = () => {

    const [activeSection, setActiveSection] = useState<string | null>(null);
    const sectionRefs = useRef<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        const handleScroll = () => {
        const viewportCenter = window.innerHeight / 2;

        let closestSection: HTMLElement | null = null;
        let minDistance = Infinity;

        sectionRefs.current?.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - sectionCenter);

            if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
            }
        });

        const newId = (closestSection as HTMLElement | null)?.id || null;

        if (newId !== activeSection) {
            setActiveSection(newId);
            console.log("Sezione visibile:", newId);
        }
        };

        sectionRefs.current = document.querySelectorAll<HTMLElement>("section[id]");
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    return(
        <header className="header w-100 py-3 d-flex gap-3 gap-md-3 justify-content-center align-items-center">
            {/* <div className="header__logo">
                <img src="./public/favicon.ico" alt="Logo" />
            </div> */}
            <TrueFocus 
                sentence="HOME CAREER ABOUT PROJECTS"
                activeSentence={activeSection}
                manualMode={true}
                blurAmount={0}
                borderColor="#017c60"
                glowColor="#D1D5DB"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
            />
            {/* <nav className="header__nav w-100">
                <ul className="list-unstyled font-size-24 d-flex justify-content-center gap-3 gap-md-5 m-0">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav> */}
        </header>
    )
}

export default Header