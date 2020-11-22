import React from 'react';
import "./E3.css"

function Frontpage (props) {
    const {...rest} = props
    return (
        <article className={"bodyE3"}>

            <nav className={"navE3"}>
                <ul className={"ulE3"}>
                    <li><a href="book.html">The book series</a></li>
                    <li><a href="tests.html">Testimonials</a></li>
                    <li><a href="author.html">The Author</a></li>
                    <li><a href="res.html">Free resources</a></li>
                </ul>
            </nav>

            <div>
                <h1>You dont know JavaScript</h1>

                <div>

                    <img src="https://kaul.inf.h-brs.de/wem/assets/img/landing-img.png" className={"imgE3"}/>

                        <div id="content">
                            Don't just drift through Javascript. <br/>
                            Understand how Javascript works <br/>
                            Start your journey through the bumpy side of Javascript <br/>
                            <button id={"buttonE3"} >ORDER YOUR COPY NOW</button>
                        </div>

                </div>

                <footer className={"footerE3"}>
                    The first ebook in the book series is absolutely free. <br/>
                    <button id={"buttonE3"} >FIND OUT MORE ABOUT THIS OFFER</button>
                </footer>


            </div>
        </article>
    )
}

export default Frontpage
