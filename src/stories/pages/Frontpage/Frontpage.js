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
