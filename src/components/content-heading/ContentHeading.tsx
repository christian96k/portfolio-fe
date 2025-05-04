import React from "react";
import BlurText from "../a-framer-motion/blur-text/BlurText";
import "./ContentHeading.scss";
import { div } from "framer-motion/client";

interface ContentHeadingProps {
    title: string;
    description: string;
    rotatingText:string[]
}

const ContentHeading:React.FC<ContentHeadingProps> = (
    { title, description, rotatingText }
) => {
    return (
        <div className="py-3">
            <BlurText
                text={title}
                delay={50}
                animateBy="letters"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="font-size-36 justify-content-center text-distance-1 fw-bolder revealed text-uppercase content-heading blur "
                rotatingText={rotatingText}
            />
            <p> 
                {description}

            </p>
        </div>
    );
}

export default ContentHeading;