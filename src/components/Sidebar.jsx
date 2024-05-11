import React from "react";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__menu">
                <ul className="home__list">
                    <li className="list__item"><a href="#home">_Home</a></li>
                    <li className="list__item"><a href="#work">_Recent Werk</a></li>
                    <li className="list__item"><a href="#reviews">_Reviews</a></li>
                    <li className="list__item"><a href="#artiesten">_Artiesten</a></li>
                </ul>

                <ul className="socials__list">
                    <li className="list__item"><a href="https://www.facebook.com/BQpassivetone">_Facebook</a></li>
                    <li className="list__item"><a href="https://twitter.com/Bqmusic">_X</a></li>
                    <li className="list__item"><a href="https://www.instagram.com/bqmusic">_Instagram</a></li>
                    <li className="list__item"><a href="https://www.etsy.com/shop/BQmusic?fbclid=IwAR0o1SB_9czAXPARyTmJ-40rpDwGwZa9VjSMvunckedbf9Ozdse7eRuLdJE">_Etsy</a></li>
                </ul>
            </div>
        </div>
    )
}