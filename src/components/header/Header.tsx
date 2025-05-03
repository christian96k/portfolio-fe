const Header = () => {
    return(
        <header className="header py-3 d-flex gap-3 justify-content-center align-items-center">
            {/* <div className="header__logo">
                <img src="./public/favicon.ico" alt="Logo" />
            </div> */}
            <nav className="header__nav w-100">
                <ul className="list-unstyled font-size-24 d-flex justify-content-center gap-5 m-0">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header