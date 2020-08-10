import React from "react";
import './style.css'
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
} from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';

const ARTICLES = require('./data.json');

export default function ArticlePage() {

    return (

        <Router>
            <div>
                <div className="articlesContainer"
                    onMouseLeave={() => {
                        // animacja pojawiania się literek spowrotem po zniknięciu komponentu artykułów
                        let el = document.querySelector(".articlesPageContainer");
                        //chowanie komponentu artykułów
                        el.style.visibility = "hidden";

                        anime({
                            targets: "#svgText",
                            duration: 3000,
                            easing: 'linear',
                            scale: { value: 1, easing: 'easeOutSine', duration: 500 },
                            color: "#5e5e5e",

                        })

                    }}
                >
                    <ul>
                        {ARTICLES.map((ARTICLES) => (
                            <li key={ARTICLES.id}>
                                <Link to={`/${ARTICLES.id}`}>{ARTICLES.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <Route path="/:id" children={<ArticlesComponent />} />
                </div>
            </div>
        </Router>
    )
}

function ArticlesComponent() {
    let { id } = useParams();
    let article = find(parseInt(id));
    function find(id) {
        return ARTICLES.find(p => p.id === id);
    }
    return (
        <div>
            <div className="articleContent">
                <h4 style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                    {article.title}
                </h4>
                <p>
                    {article.content}
                </p>
            </div>
        </div>
    )
}
