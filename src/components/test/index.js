import React from "react"
import anime from 'animejs/lib/anime.es.js';

class Test extends React.Component {

    componentDidMount() {

        anime({
            targets: ['.line_box, .arrow_box'],
            translateX: '140px',
            easing: 'linear',
            duration: 1500,
            loop: true
        });
    }

    render() {

        return (

            <div className="container-full lettersPage">
                
                <div className="container-full"
                    style={{
                    display: "flex"
                    }}
                    >
                    <div className = "line_box"
                    style={{
                        width:"100px",
                        height:"20px",
                        backgroundColor: "#ffffff",
                        zIndex: -10
                    }}
                    >
                        <svg className ="line">
                            <polygon points="0,9.5 0,10.5 100,10.5 100,9.5" 
                            style={{
                                color: "#333333", 
                                backgroundColor: "#333333", 
                                float:"left"
                            }}
                            />
                        </svg>  
                    </div>
                    <div className = "arrow_box"
                        style={{
                            width:"100px",
                            height:"20px",
                            backgroundColor: "#ffffff", 
                            clear:"both"
                        }}
                        >
                        <svg className ="arrow">
                            <polygon points="0,5 10,10 0,15"  />
                        </svg>
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default Test;
