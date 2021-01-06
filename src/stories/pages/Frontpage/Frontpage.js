import React from 'react';
import { linkTo } from '@storybook/addon-links'
import './Frontpage.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import U1E1SRC from "./thumbnails/U1E1.png"
import U1E2SRC from "./thumbnails/U1E2.png"
import U1E3SRC from "./thumbnails/U1E3.png"
import U2E1SRC from "./thumbnails/U2E1.png"
import U2E2SRC from "./thumbnails/U2E2.png"
import U2E3SRC from "./thumbnails/U2E3.png"
import U2E4SRC from "./thumbnails/U2E4.png"
import U2E5SRC from "./thumbnails/U2E5.png"
import U3SRC from "./thumbnails/U3.png"
import U4E1SRC from "./thumbnails/U4E1.png"
import U4E2SRC from "./thumbnails/U4E2.png"
import U4E3SRC from "./thumbnails/U4E3.png"
import U4E4SRC from "./thumbnails/U4E4.png"
import U5E1SRC from "./thumbnails/U5E1.png"
import U5E2SRC from "./thumbnails/U5E2.png"
import U5E3SRC from "./thumbnails/U5E3.png"
import U5E4SRC from "./thumbnails/U5E4.png"
import U5E5SRC from "./thumbnails/U5E5.png"
import U6E1SRC from "./thumbnails/U6E1.png"
import U6E2SRC from "./thumbnails/U6E2.png"
import U6E3SRC from "./thumbnails/U6E3.png"
import U7E1SRC from "./thumbnails/U7E1.png"
import U7E2SRC from "./thumbnails/U7E2.png"
import U7E3SRC from "./thumbnails/U7E3.png"
import U7E4SRC from "./thumbnails/U7E4.png"
import U7E5SRC from "./thumbnails/U7E5.png"


function Frontpage (props) {
    return (
        <article id={"frontpageBody"}>
            <div id={"frontpageNav"}>
                <Navbar/>
            </div>


            <div id={"frontpageLeft"}>

            </div>


            <div id={"frontpageContent"}>
                <h1>Semesterprojekt</h1>
                <br/>
                <p>Hier sind alle Übungen dieses Moduls verlinkt:</p>
                <br/>
                <h2>Übung1</h2>
                <div>
                    <img src={U1E1SRC} alt={"U1E1"} onClick={linkTo("E1", "Exercise 1")}/>
                    <img src={U1E2SRC} alt={"U1E2"} onClick={linkTo("E1", "Exercise 2")}/>
                    <img src={U1E3SRC} alt={"U1E3"} onClick={linkTo('E1', "Exercise 3")}/>
                </div>
                <hr/>
                <h2>Übung2</h2>
                <img src={U2E1SRC} alt={"U2E1"} onClick={linkTo("E2", "Flex Holy Grail")}/>
                <img src={U2E2SRC} alt={"U2E2"} onClick={linkTo("E2", "Grid Holy Grail")}/>
                <img src={U2E3SRC} alt={"U2E3"} onClick={linkTo('E2', "Grid Page")}/>
                <img src={U2E4SRC} alt={"U2E4"} onClick={linkTo('E2', "Simple Flexbox")}/>
                <img src={U2E5SRC} alt={"U2E5"} onClick={linkTo('E2', "Simple Gridbox")}/>
                <hr/>
                <h2>Übung3</h2>
                <img src={U3SRC} alt={"U3"} onClick={linkTo('E3', "E 3")}/>
                <hr/>
                <h2>Übung4</h2>
                <img src={U4E1SRC} alt={"U4E1"} onClick={linkTo("E4", "Editor")}/>
                <img src={U4E2SRC} alt={"U4E2"} onClick={linkTo("E4", "Einkaufsliste")}/>
                <img src={U4E3SRC} alt={"U4E3"} onClick={linkTo('E4', "Rednerliste")}/>
                <img src={U4E4SRC} alt={"U4E4"} onClick={linkTo('E4', "Tabelle")}/>
                <hr/>
                <h2>Übung5</h2>
                <img src={U5E1SRC} alt={"U5E1"} onClick={linkTo("E5", "Async Await")}/>
                <img src={U5E2SRC} alt={"U5E2"} onClick={linkTo("E5", "Navigator")}/>
                <img src={U5E3SRC} alt={"U5E3"} onClick={linkTo('E5', "Prim Webworker")}/>
                <img src={U5E4SRC} alt={"U5E4"} onClick={linkTo('E5', "Primzahlen")}/>
                <img src={U5E5SRC} alt={"U5E5"} onClick={linkTo('E5', "Promises")}/>
                <hr/>
                <h2>Übung6</h2>
                <img src={U6E1SRC} alt={"U6E1"} onClick={linkTo("E6", "Alphabet Generator")}/>
                <img src={U6E2SRC} alt={"U6E2"} onClick={linkTo("E6", "File Merger")}/>
                <img src={U6E3SRC} alt={"U6E3"} onClick={linkTo('E6', "Number Generator")}/>
                <hr/>
                <h2>Übung7</h2>
                <img src={U7E1SRC} alt={"U7E1"} onClick={linkTo("E7", "Einkaufliste Custom Element")}/>
                <img src={U7E2SRC} alt={"U7E2"} onClick={linkTo("E7", "Menu Lit Element")}/>
                <img src={U7E3SRC} alt={"U7E3"} onClick={linkTo('E7', "Navigator Lit Element")}/>
                <img src={U7E4SRC} alt={"U7E4"} onClick={linkTo('E7', "Rednerliste Custom Element")}/>
                <img src={U7E5SRC} alt={"U7E5"} onClick={linkTo('E7', "Tabelle Custom Element")}/>
            </div>




            <div id={"frontpageRight"}>

            </div>




            <div id={"frontpageFooter"}>
                <Footer/>
            </div>
        </article>
    )
}

export default Frontpage
