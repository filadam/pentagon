import React from 'react'
import './style.css'
import anime from 'animejs/lib/anime.es.js';
import ArticlesPage from '../../articlepage/index'

class Pentagon extends React.Component {

    componentDidMount() {
        // animacja pentagonu
        let animation = anime({
            targets: '#rollingPentagon',
            duration: 100000,
            easing: 'linear',
            rotate: "1turn",
            direction: "reverse",
            loop: true,
        });
        animation.play();
        // pausa animacji po najechaniu myszką
        document.getElementById('rollingPentagon').onmouseenter = animation.pause;
        document.getElementById('rollingPentagon').onmouseleave = animation.play;
    }

    render() {

        return (

            <div
                class="container-full"
                id="pentagon"
            >
                <div className="articlesPageContainer">
                    <ArticlesPage />
                </div>
                <svg id="rollingPentagon" width="300" height="300" viewBox="-10 -15 200 200" style={{ backgroundColor: "white", fill: "white" }}>
                    <g fill="none" fill-rule="evenodd">
                        <g fill="white" transform="translate(0 6)">
                            {/* pentagon */}
                            <polygon width="240" height="240" points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369" />
                            {/* linki */}
                            <g
                                onMouseEnter={() => {
                                    let el = document.querySelector(".articlesPageContainer");
                                    // pojawienie sie komponentu artykułów
                                    setTimeout(() => {
                                        el.style.visibility = "visible";
                                    }, 500)
                                    // animacja komponentu artykułów
                                    anime({
                                        targets: ".articlesPageContainer",
                                        scale: [
                                            { value: 0, easing: 'easeOutSine', duration: 500 },
                                            { value: 1, easing: 'easeInOutQuad', duration: 500 }
                                        ],
                                    })
                                    // znikanie literek
                                    anime({
                                        targets: "#svgText",
                                        duration: 3000,
                                        easing: 'linear',
                                        scale: { value: 0, easing: 'easeOutSine', duration: 500 },
                                    })
                                }}
                            >
                                <text
                                    font-family="Spectral"
                                    x="-5"
                                    y="25"
                                    fill="black"
                                    transform="rotate(-34)"
                                    style={{ fontSize: "10px" }}
                                >
                                    <tspan
                                        x="-10"
                                        y="25"
                                    >przedrady i </tspan>
                                    <tspan
                                        x="-10"
                                        y="35"
                                    >porady</tspan>
                                </text>

                                <line x1="-20" y1="42" x2="50" y2="40" transform="rotate(-34)" style={{ stroke: "black", strokeWidth: "1" }} />
                                <line x1="-40" y1="-13" x2="0" y2="-20" transform="rotate(-115)" style={{ stroke: "black", strokeWidth: "1" }} />
                                {/* ??????????????????????????? */}
                                <svg style={{ stroke: "black", strokeWidth: "1", fill: "black" }}    >
                                    <polygon points="62.1,2.75 65.6,7.5 67,2.4" />
                                </svg>

                            </g>
                            <g
                                onMouseEnter={() => {
                                    let el = document.querySelector(".articlesPageContainer");
                                    el.style.visibility = "visible";
                                }}
                            >
                                <text
                                    font-family="Spectral"
                                    x="-115"
                                    y="-23"
                                    fill="black"
                                    transform="rotate(-106)"
                                    style={{ fontSize: "10px" }}
                                >
                                    <tspan
                                        x="-115"
                                        y="-23"
                                    >czytasz i </tspan>
                                    <tspan
                                        x="-115"
                                        y="-13"
                                    >wie(r)sz</tspan></text>
                                <line x1="-125" y1="-8" x2="-50" y2="-10" transform="rotate(-106)" style={{ stroke: "black", strokeWidth: "1" }} />
                                <svg style={{ stroke: "black", strokeWidth: "1", fill: "black" }}    >
                                    <polygon points="4.2,52 8.5,54.3 3,56.8" />
                                </svg>
                            </g>
                            <g
                                onMouseEnter={() => {
                                    let el = document.querySelector(".articlesPageContainer");
                                    el.style.visibility = "visible";
                                }}
                            >
                                <text
                                    font-family="Spectral"
                                    x="75"
                                    y="-67"
                                    fill="black"
                                    transform="rotate(39)"
                                    style={{ fontSize: "10px" }}
                                >
                                    <tspan
                                        x="75"
                                        y="-67"
                                    >felietony</tspan>
                                    <tspan
                                        x="75"
                                        y="-57"
                                    >oraz półtony</tspan>
                                </text>
                                <line x1="131" y1="45" x2="80" y2="7" transform="rotate(0)" style={{ stroke: "black", strokeWidth: "1" }} />
                                <line x1="76.7" y1="-4.7" x2="107.8" y2="-27.1" style={{ stroke: "black", strokeWidth: "1" }} />
                                <svg style={{ stroke: "black", strokeWidth: "1", fill: "black" }}    >
                                    <polygon points="128.2,46.5 131.5,41.5 133,46" />
                                </svg>
                            </g>
                            <g
                                onMouseEnter={() => {
                                    let el = document.querySelector(".articlesPageContainer");
                                    el.style.visibility = "visible";
                                }}
                            >
                                <text
                                    font-family="Spectral"
                                    x="23"
                                    y="-159"
                                    fill="black"
                                    transform="rotate(108)"
                                    style={{ fontSize: "10px" }}
                                >
                                    <tspan
                                        x="23"
                                        y="-159"
                                    >sport</tspan>
                                    <tspan
                                        x="23"
                                        y="-149"
                                    >rybacki</tspan>
                                </text>
                                <line x1="108.3" y1="133.7" x2="102" y2="153.4" style={{ stroke: "black", strokeWidth: "1" }} />
                                <line x1="113" y1="119.3" x2="133.3" y2="57.6" style={{ stroke: "black", strokeWidth: "1" }} />
                                <line x1="144.3" y1="53.5" x2="165.5" y2="68.9" style={{ stroke: "black", strokeWidth: "1" }} />
                                <svg style={{ stroke: "black", strokeWidth: "1", fill: "black" }}    >
                                    <polygon points="116.1,119.3 112.5,122.3 110.8,117.8" />
                                </svg>

                            </g>
                            <g
                                onMouseEnter={() => {
                                    let el = document.querySelector(".articlesPageContainer");
                                    el.style.visibility = "visible";
                                }}
                            >
                                <text
                                    font-family="Spectral"
                                    x="-90"
                                    y="-142"
                                    fill="black"
                                    transform="rotate(180)"
                                    style={{ fontSize: "10px" }}
                                >
                                    <tspan
                                        x="-90"
                                        y="-142"
                                    >zachowania i</tspan>
                                    <tspan
                                        x="-90"
                                        y="-132"
                                    >inne cuda</tspan>
                                </text>
                                <line x1="35.2" y1="126.1" x2="100" y2="126.1" style={{ stroke: "black", strokeWidth: "1" }} />
                                <line x1="-14" y1="126.1" x2="20.4" y2="126.1" style={{ stroke: "black", strokeWidth: "1" }} />
                                <svg style={{ stroke: "black", strokeWidth: "1", fill: "black" }}    >
                                    <polygon points="36,123 36,129 32.5,125.5" />
                                </svg>
                            </g>


                        </g>
                        <svg height="320" width="320">
                        </svg>
                    </g>
                </svg>
            </div >
        )
    }
}

export default Pentagon;