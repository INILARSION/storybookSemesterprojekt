import React from 'react';

function SimpleGrid (props) {
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
                        <button classname={"SimpleGridbutton"}>ORDER YOUR COPY NOW</button>
                    </div>


                    <footer id={"SimpleGridfooter"}>
                        The first ebook in the book series is absolutely free. <br/>
                        <button classname={"SimpleGridbutton"}>FIND OUT MORE ABOUT THIS OFFER</button>
                    </footer>


            </div>

        </article>
    )
}

export default SimpleGrid