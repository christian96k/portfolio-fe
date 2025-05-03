import React from "react";
import BlurText from "../blur-text/BlurText";

interface ContentHeadingProps {
    title: string;
    description: string;
}

const ContentHeading:React.FC<ContentHeadingProps> = (
    { title, description }
) => {
    return (
        <>
        {/* <DecryptedText
            text={title}
            speed={90}
            maxIterations={30}
            characters="$85f3e8c7a1b!@#$%^&*()_+[]{}|;:',.<>?/~e8d5f3e8c7a1b9d"
            className="font-size-28 text-distance-1 fw-bolder revealed text-uppercase"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            animateOn="view"
            sequential={true}
        /> */}
        <BlurText
            text={title}
            delay={50}
            animateBy="letters"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="font-size-28 text-distance-1 fw-bolder revealed text-uppercase"
        />
            <p> 
               {description}

            </p>
        </>
        
    );
}

export default ContentHeading;