import TrueFocus from "../a-framer-motion/true-focus/TrueFocus";
import "./Header.scss";

const Header = () => {
    return(
        <header className="header w-100 py-3 d-flex gap-3 gap-md-3 justify-content-center align-items-center">
            {/* <div className="header__logo">
                <img src="./public/favicon.ico" alt="Logo" />
            </div> */}
            <TrueFocus 
                sentence="Home About Projects Contact"
                manualMode={true}
                blurAmount={3}
                borderColor="#1E3A8A"
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