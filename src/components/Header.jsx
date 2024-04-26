import React from "react";

export default function Header() {
    return (
        <header id="home" className="header">
            <div className="title">
                <div className="logo">
                    <img src="/logo.svg" alt="BQ logo"/>
                    <h1><a href="#">BQ Music.</a></h1>
                </div>
                <h2>Specialist in custom gitaareffecten</h2>
                <p>_Interesse? <a href="mailto:info@bqmusic.nl">Get in touch</a></p>
            </div>
            <div className="bio">
                <p>Hey 👋, mijn naam is Bas Becu. Sinds 2012 is BQ Music dé plek voor unieke geluiden. Ontdek vintage gitaareffecten voorbij prijzige replica's. <br />Mijn focus? Spot-on replica's en op maat gemaakte meesterwerken tegen een redelijke prijs. Specialiteiten? Maatwerk kabelbomen en passieve toonregeling. Ontdek jouw unieke geluid bij BQ Music!</p>
            </div>
        </header>
    )
}