import React from 'react';
import "./GridPage.css"

function GridPageTag (props) {
    return (
        <article id={"SimpleGrid"}>
            <nav id={"SimpleGridnav"}>
                <ul id={"SimpleGridUL"}>
                    <li id={"SimpleGridli"}><a href="book.html" id={"SimpleGrida"}>The book series</a></li>
                    <li id={"SimpleGridli"}><a href="tests.html" id={"SimpleGrida"}>Testimonials</a></li>
                    <li id={"SimpleGridli"}><a href="author.html" id={"SimpleGrida"}>The Author</a></li>
                    <li id={"SimpleGridli"}><a href="res.html" id={"SimpleGrida"}>Free resources</a></li>
                </ul>
            </nav>

            <div className={"SimpleGridgrid"}>
                <h1 className={"SimpleGridheadline"}>You dont know JavaScript</h1>

                <img className={"SimpleGridleft"} src="https://kaul.inf.h-brs.de/wem/assets/img/landing-img.png" />

                    <div className={"SimpleGridcontent"}>
                        Don't just drift through Javascript. <br/>
                        Understand how Javascript works <br/>
                        Start your journey through the bumpy side of Javascript <br/>
                        <button id={"SimpleGridbutton"}>ORDER YOUR COPY NOW</button>
                    </div>


                    <footer id={"SimpleGridfooter"}>
                        The first ebook in the book series is absolutely free. <br/>
                        <button id={"SimpleGridbutton"}>FIND OUT MORE ABOUT THIS OFFER</button>
                    </footer>


            </div>

        </article>
    )
}

export default GridPageTag