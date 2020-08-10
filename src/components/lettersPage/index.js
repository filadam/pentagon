import React from "react"
import './style.css';
import anime from 'animejs/lib/anime.es.js';


class LettersPage extends React.Component {
    // tworzenie nowego obiektu(jeden obiekt = jedna litera) Array(liczba Liter)
    divArray = new Array(100).fill({ 'id': "svgText", 'key': '1' });

    componentDidMount() {

        // animacja literek

        // let lettersAnimation = anime({
        //     targets: '#svgText',
        //     color: "#5e5e5e",
        //     duration: 7000,
        //     easing: 'easeOutQuad',
        //     delay: anime.stagger(100, { start: 200 }),
        //     rotate: anime.stagger([-160, 160]),
        //     translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
        //     translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
        //     scale: [
        //         { value: .1, easing: 'easeOutSine', duration: 5000 },
        //         { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        //     ],
        //     direction: "alternate",
        //     loop: true,
        // });
        // działa, ale nie odpala animacji po powrocie literek...
        // lettersAnimation.play();
        // document.getElementById('rollingPentagon').onmouseover = lettersAnimation.pause;

        // play i pause dla animacji literek przy pojawianiu się komponentu artykułów - buguje
        // if (document.querySelector('.articlesPageContainer').style.visibility == 'visible') {
        //     lettersAnimation.pause();
        // } else { 
        //     lettersAnimation.play();
        // }
    }

    render() {
        // generowanie literek na maksymalnej wielkośći okna przeglądarki użytkownika
        let wh = window.innerHeight;
        let ww = window.innerWidth;
        console.log(wh)
        // losowe generowanie literek
        function handleSymbols(length) {
            let result = '';
            let characters = 'ABCDEGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz.,;:';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        return (

            <div className="container-full lettersPage">
                <div className="container-full">
                    <div>
                        {/* mapowanie po arrayce z literkami i tworzenie na jej podstawie diva z losowym symbolem */}
                        {this.divArray.map(divArray => (
                            <div
                                key={divArray.key}
                                id={divArray.id}
                                style={{
                                    marginLeft: Math.floor(Math.random() * ww - 50),
                                    marginTop: Math.floor(Math.random() * wh - 200),
                                    fontFamily: 'Gilda Display',
                                    fontSize: "40px",
                                    position: "absolute"
                                }}
                            >
                                {handleSymbols(1)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        )
    }
}

export default LettersPage;
