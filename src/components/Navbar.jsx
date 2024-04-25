import React, { useState } from "react";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(true);

    const handleClick = () => {
        setShowMenu(prevState => !prevState);
    };

    return(
        <nav className="nav">
            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                <ul className="home__list">
                    <li className="list__item"><a href="#home">_Home</a></li>
                    <li className="list__item"><a href="#work">_Recent Werk</a></li>
                    <li className="list__item"><a href="#reviews">_Reviews</a></li>
                    <li className="list__item"><a href="#artiesten">_Artiesten</a></li>
                </ul>

                <ul className="socials__list">
                    <li className="list__item"><a href="#">_Facebook</a></li>
                    <li className="list__item"><a href="#">_X</a></li>
                    <li className="list__item"><a href="#">_Instagram</a></li>
                    <li className="list__item"><a href="#">_Etsy</a></li>
                </ul>
            </div>

            <div className="nav__mobile" onClick={handleClick}>
                <i id="bar" className={showMenu ? "ri-menu-line" : "ri-close-large-line"}></i>
            </div>
        </nav>
    )
}