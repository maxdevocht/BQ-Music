import React from "react";

export default function Artiesten() {
    return (
        <section className="section">
            <div className="section--label">
                <h2 id="artiesten" className="label">Artiesten</h2>
            </div>

            <div class="artiest">
                <img src="/img/jet.svg" />
                <h3>- Jet Rebel</h3>
            </div>
            <div class="artiest">
                <img src="/img/ciao.svg" />
                <h3>- Ciao Lucifer</h3>
            </div>
            <div class="artiest">
                <img src="/img/hout.svg" />
                <h3>- Van Dik Hout</h3>
            </div>
            <div class="artiest">
                <img src="/img/chris.svg" />
                <h3>- Chris Bickley</h3>
            </div>
        </section>
    )
}