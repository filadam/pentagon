import React from "react";
import './style.css'
import anime, { timeline } from 'animejs'
import logo from "./okno.png"



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { iteration: 0 }
        this.variableText = "przewietrza umysł";
        this.variableTextArray = ["przewietrza umysł", "czytasz i nie wiesz", "fakty i opinie faktotwórcze", "twój portal dezinformacji"];
    }


    render() {

        return (

            <div className="container-fluid nav" style={{ display: "flex", justifyContent: "flex-end", }}>
                <div
                    className="container navbar"
                    id="navbarLogo"
                    //onhover, wyświetlanie menu
                    onMouseEnter={() => {
                        this.setState({ iteration: this.state.iteration + 1 });
                        this.variableText = this.variableTextArray[this.state.iteration % 4];
                        // let line = document.querySelector(".line")
                        // line.setAttribute("points", "0,9.5 0,10.5 100,10.5 100,9.5")
                        let el = document.querySelectorAll(".boxLink");
                        el.forEach((el) => {
                            setTimeout(() => {
                                el.style.transition = '300ms';
                                el.style.color = 'black';
                                el.style.visibility = 'visible';
                            }, 400)
                        })
                        anime({
                            targets: '.line_box',
                            width: '600px',
                            easing: 'easeInOutQuad',
                            direction: 'normal',
                            transform: "rotate(1deg)",
                        });
                        anime({
                            targets: '.arrow_box_right',
                            translateX: "100",
                            easing: 'easeInOutQuad',
                            direction: 'normal'
                        });
                        anime({
                            targets: '.arrow_box_left',
                            translateX: "-100",
                            easing: 'easeInOutQuad',
                            direction: 'normal'
                        });
                    }}
                    onMouseLeave={() => {
                        //onhover, zamykanie menu
                        let el = document.querySelectorAll(".boxLink");
                        el.forEach((el) => {
                            el.style.color = 'rgba(255, 255, 255, 0)';
                            setTimeout(() => {
                                el.style.visibility = 'hidden'
                            }, 300)
                        })
                        anime({
                            targets: ' .line_box',
                            width: '300px',
                            easing: 'easeInOutQuad',
                            direction: 'normal',
                            transform: "rotate(1deg)",
                        });
                        anime({
                            targets: '.arrow_box_right',
                            translateX: "0",
                            easing: 'easeInOutQuad',
                            direction: 'normal'
                        });
                        anime({
                            targets: '.arrow_box_left',
                            translateX: "0",
                            easing: 'easeInOutQuad',
                            direction: 'normal'
                        });
                    }}

                >
                    <div
                        className="navbarLogo"
                        href="#"
                    >
                        <img src={logo} height="80" />
                    </div>
                    <div className="navbarWrapper">
                        <div className="box1" >
                            <a href="/link" className="boxLink" style={{ marginLeft: "400px", fontSize: "15px", width: "250px", backgroundColor: "#ffffff", fontFamily: "Spectral" }}>
                                {/* {this.variableText} */}
                                czytasz i nie wiesz
                                </a>
                            <div className="container-full" style={{ display: "flex" }} >
                                <div className="line_boxZ" style={{ width: "300px", height: "10px", zIndex: -8 }}>
                                    <svg className="arrow_line" style={{ marginTop: "0px" }}>
                                        <polygon points="0,4.5 0,5.5 300,5.5 300,4.5" />
                                    </svg>
                                </div>
                                <div className="container-arrow-anim" style={{ position: "relative" }} >
                                    <div className="line_box" style={{ position: "absolute", width: "200px", backgroundColor: "#ffffff", height: "10px", zIndex: -10 }}>
                                        <svg className="arrow_lineT" style={{ marginTop: "0px" }}>
                                            <polygon points="0,4.5 0,5.5 100,5.5 100,4.5" />
                                        </svg>
                                    </div>
                                    <div className="arrow_box_right" style={{ width: "200px", height: "10px", backgroundColor: "#ffffff", zIndex: 0, clear: "both" }}>
                                        <svg className="arrow" style={{ marginTop: "0px" }}>
                                            <polygon points="0,0 10,5 0,10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box2" >
                            <a href="/link" className="boxLink" style={{ marginLeft: "10px", fontSize: "15px", backgroundColor: "#ffffff", width: "200px", fontFamily: "Spectral" }}>łączność z redakcją: redakcja@sr-okno.pl</a>
                            <div className="container-full" style={{ display: "flex" }} >
                                <div className="container-arrow-anim" style={{ position: "relative" }} >
                                    <div className="line_box" style={{ position: "absolute", width: "200px", height: "10px", zIndex: -10 }}>
                                        <svg className="arrow_line" style={{ marginTop: "0px" }}>
                                            <polygon points="0,4.5 0,5.5 200,5.5 200,4.5" />
                                        </svg>
                                    </div>
                                    <div className="arrow_box_left" style={{ width: "200px", height: "10px", backgroundColor: "#ffffff", zIndex: 0, clear: "both" }}>
                                        <svg className="arrow" style={{ marginTop: "0px" }}>
                                            <polygon points="200,0 190,5 200,10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="line_boxZ" style={{ width: "300px", height: "10px", backgroundColor: "#ffffff", zIndex: -8 }}>
                                    <svg className="arrow_line" style={{ marginTop: "0px" }}>
                                        <polygon points="0,4.5 0,5.5 300,5.5 300,4.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="box3" >
                            <div className="container-full">
                                <div className="line_box2" style={{ width: "20px", height: "100px", zIndex: -10 }}>
                                    <svg className="arrow_line" style={{ marginTop: "10px", marginLeft: "0px" }}>
                                        <polygon points="4.5,10 5.5,10 5.5,90 4.5,90" />
                                    </svg>
                                </div>
                                <div className="arrow_box_vertical" style={{ width: "10px", height: "100px", clear: "both" }}>
                                    <svg className="arrow" style={{ marginTop: "0px", marginLeft: "0px" }}>
                                        <polygon points="0,0 10,0 5,10" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="box4" >
                            <div className="container-full">
                                <div className="arrow_box_vertical" style={{ width: "10px", height: "10px", clear: "both" }}>
                                    <svg className="arrow" style={{ marginTop: "0px", marginLeft: "0px" }}>
                                        <polygon points="0,20 10,20 5,10" />
                                    </svg>
                                </div>
                                <div className="line_box2" style={{ width: "20px", height: "100px", zIndex: -10 }}>
                                    <svg className="arrow_line" style={{ marginTop: "0px", marginLeft: "0px", marginRight: "20px" }}>
                                        <polygon points="4.5,10 5.5,10 5.5,90 4.5,90" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar;