import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Work() {
    return (
        <section className="section">
            <div className="section--label">
                <h2 id="work" className="label">Recent Werk</h2>
            </div>

            <Splide className="splide" hasTrack={false}
                options={ {
                    rewind: true,
                    gap   : '1rem',
                } }
                aria-label="My Favorite Images"
                >
                    <SplideTrack className="slider">
                        <SplideSlide>
                            <h1 className="card__title">SansAmp Overdrive & Aguilar TLC Compressor</h1>
                            <img src="/4.svg" alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <h1 className="card__title">Jazzbass X-blend Wiring</h1>
                            <img src="/8.svg" alt="Image 2"/>
                        </SplideSlide>
                        <SplideSlide>
                            <h1 className="card__title">Custom-made PreAmps</h1>
                            <img src="/20.svg" alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <h1 className="card__title">Brooks Bass; Master Volume and Dual Output</h1>
                            <img src="/17.svg" alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <h1 className="card__title">POT Overdrive; based on the King of Tone</h1>
                            <img src="/23.svg" alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <h1 className="card__title">SWUNG Guitar Wiring</h1>
                            <img src="/13.svg" alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <h1 className="card__title">Wiring Harness</h1>
                            <img src="/27.svg" alt="Image 3"/>
                        </SplideSlide>
                    </SplideTrack>

            </Splide>
        </section>
    )
}