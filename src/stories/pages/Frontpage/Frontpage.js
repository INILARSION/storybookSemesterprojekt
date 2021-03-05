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
import U10E1SRC from "./thumbnails/U10E1.png"
import U10E2SRC from "./thumbnails/U10E2.png"

customElements.define("tictactoe-module", class extends HTMLElement{
    connectedCallback() {
        let self = this;
        this.gameover = false;
        this.state = "X";
        this.container = document.createElement("div");
        this.container.setAttribute("id", "tictactoeDiv");
        this.table = document.createElement("table");
        this.table.setAttribute("id", "tictactoeTable");
        this.table.setAttribute("style", "border: 1px solid black; border-collapse: collapse;margin-left: auto; margin-right: auto;");

        this.getField = function (id) {
            return document.getElementById(id).innerHTML;
        }

        this.CheckGame = function () {
            let id = "tictactoeButton";
            for (let i = 0; i < 3; i++) {
                if (this.getField(id+i+0) === this.getField(id+i+1) && this.getField(id+i+0) === this.getField(id+i+2) && this.getField(id+i+0) !== "") {
                    this.container.appendChild(document.createTextNode("Winner is: " + this.state));
                    this.gameover = true;
                    return;
                }

                if (this.getField(id+0+i) === this.getField(id+1+i) && this.getField(id+0+i) === this.getField(id+2+i) && this.getField(id+0+i) !== "") {
                    this.container.appendChild(document.createTextNode("Winner is: " + this.state));
                    this.gameover = true;
                    return;
                }
            }
            if (this.getField(id+0+0) === this.getField(id+1+1) && this.getField(id+0+0) === this.getField(id+2+2) && this.getField(id+0+0) !== "") {
                this.container.appendChild(document.createTextNode("Winner is: " + this.state));
                this.gameover = true;
                return;
            }
            if (this.getField(id+0+2) === this.getField(id+1+1) && this.getField(id+1+1) === this.getField(id+2+0) && this.getField(id+0+2) !== "") {
                this.container.appendChild(document.createTextNode("Winner is: " + this.state));
                this.gameover = true;
                return;
            }
        }
        this.HandleInput = function (id) {
            let button = document.getElementById(id);
            if (button.innerHTML !== "" || this.gameover) {
                return;
            }
            button.appendChild(document.createTextNode(this.state));
            this.CheckGame();
            if (this.state === "X"){
                this.state = "O";
            }else {
                this.state = "X";
            }
        }


        for (let i = 0; i < 3; i++){
            let row = document.createElement("tr");
            row.setAttribute("id", "tictactoeRow" + i);
            row.setAttribute("style", "border: 1px solid black; border-collapse: collapse;");
            for (let j = 0; j < 3; j++) {
                let column = document.createElement("td");
                column.setAttribute("id", "tictactoeColumn" + i + j);
                column.setAttribute("style", "border: 1px solid black; border-collapse: collapse;");
                let button = document.createElement("button");
                button.setAttribute("id", "tictactoeButton" + i + j);
                button.setAttribute("style", "width: 100px; height: 100px;");
                button.onclick = e => this.HandleInput("tictactoeButton" + i + j);
                column.appendChild(button);
                row.appendChild(column);
            }
            this.table.appendChild(row);
        }
        this.container.appendChild(this.table);
        this.appendChild(this.container);
    }

});

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


                <h2>Übung1 (HTML / CSS)</h2>
                <div>
                    <div className={"frontpageimage"}>
                        <img src={U1E1SRC} alt={"U1E1"} onClick={linkTo("E1", "Exercise 1")}/><br/>
                        Tribute Page
                    </div>
                    <div className={"frontpageimage"}>
                        <img src={U1E2SRC} alt={"U1E2"} onClick={linkTo("E1", "Exercise 2")}/><br/>
                        Survey Form
                    </div>

                    <div className={"frontpageimage"}>
                        <img src={U1E3SRC} alt={"U1E3"} onClick={linkTo('E1', "Exercise 3")}/><br/>
                        Product Landing Page
                    </div>
                </div>


                <hr/>
                <h2>Übung2 (Responsives Web)</h2>
                <div className={"frontpageimage"}>
                    <img src={U2E1SRC} alt={"U2E1"} onClick={linkTo("E2", "Flex Holy Grail")}/><br/>
                    Holy Grail Flexbox
                </div>

                <div className={"frontpageimage"}>
                    <img src={U2E2SRC} alt={"U2E2"} onClick={linkTo("E2", "Grid Holy Grail")}/><br/>
                    Holy Grail Grid
                </div>

                <div className={"frontpageimage"}>
                    <img src={U2E3SRC} alt={"U2E3"} onClick={linkTo('E2', "Grid Page")}/><br/>
                    Grid Product Landing Page
                </div>

                <div className={"frontpageimage"}>
                    <img src={U2E4SRC} alt={"U2E4"} onClick={linkTo('E2', "Simple Flexbox")}/><br/>
                    Flexbox Desktop-First
                </div>

                <div className={"frontpageimage"}>
                    <img src={U2E5SRC} alt={"U2E5"} onClick={linkTo('E2', "Simple Gridbox")}/><br/>
                    Grid Mobile-First
                </div>


                <hr/>
                <h2>Übung3 (JavaScript)</h2>

                <div className={"frontpageimage"}>
                    <img src={U3SRC} alt={"U3"} onClick={linkTo('E3', "E 3")}/><br/>
                    Javascript Functions
                </div>


                <hr/>
                <h2>Übung4 (DOM)</h2>
                <div className={"frontpageimage"}>
                    <img src={U4E1SRC} alt={"U4E1"} onClick={linkTo("E4", "Editor")}/><br/>
                    Editor
                </div>

                <div className={"frontpageimage"}>
                    <img src={U4E2SRC} alt={"U4E2"} onClick={linkTo("E4", "Einkaufsliste")}/><br/>
                    Einkaufsliste
                </div>

                <div className={"frontpageimage"}>
                    <img src={U4E3SRC} alt={"U4E3"} onClick={linkTo('E4', "Rednerliste")}/><br/>
                    Rednerliste
                </div>

                <div className={"frontpageimage"}>
                    <img src={U4E4SRC} alt={"U4E4"} onClick={linkTo('E4', "Tabelle")}/><br/>
                    Tabelle
                </div>


                <hr/>
                <h2>Übung5 (Asynchron)</h2>
                <div className={"frontpageimage"}>
                    <img src={U5E1SRC} alt={"U5E1"} onClick={linkTo("E5", "Async Await")}/><br/>
                    Async / Await
                </div>

                <div className={"frontpageimage"}>
                    <img src={U5E2SRC} alt={"U5E2"} onClick={linkTo("E5", "Navigator")}/><br/>
                    WWW-Navigator
                </div>

                <div className={"frontpageimage"}>
                    <img src={U5E3SRC} alt={"U5E3"} onClick={linkTo('E5', "Prim Webworker")}/><br/>
                    Web Worker Primzahlen
                </div>

                <div className={"frontpageimage"}>
                    <img src={U5E4SRC} alt={"U5E4"} onClick={linkTo('E5', "Primzahlen")}/><br/>
                    JS Primzahlen
                </div>

                <div className={"frontpageimage"}>
                    <img src={U5E5SRC} alt={"U5E5"} onClick={linkTo('E5', "Promises")}/><br/>
                    Promises
                </div>


                <hr/>
                <h2>Übung6 (Node & npm)</h2>
                <div className={"frontpageimage"}>
                    <img src={U6E1SRC} alt={"U6E1"} onClick={linkTo("E6", "Alphabet Generator")}/><br/>
                    File Generatoren (Alphabet)
                </div>

                <div className={"frontpageimage"}>
                    <img src={U6E2SRC} alt={"U6E2"} onClick={linkTo("E6", "File Merger")}/><br/>
                    Performance Merge
                </div>

                <div className={"frontpageimage"}>
                    <img src={U6E3SRC} alt={"U6E3"} onClick={linkTo('E6', "Number Generator")}/><br/>
                    File Generatoren (Numbers)
                </div>



                <hr/>
                <h2>Übung7 (Modular Web)</h2>

                <div className={"frontpageimage"}>
                    <img src={U7E1SRC} alt={"U7E1"} onClick={linkTo("E7", "Einkaufliste Custom Element")}/><br/>
                    Einkaufliste-Komponente
                </div>

                <div className={"frontpageimage"}>
                    <img src={U7E2SRC} alt={"U7E2"} onClick={linkTo("E7", "Menu Lit Element")}/><br/>
                    Menü-Komponente
                </div>


                <div className={"frontpageimage"}>
                    <img src={U7E3SRC} alt={"U7E3"} onClick={linkTo('E7', "Navigator Lit Element")}/><br/>
                    WWW-Navigator-Komponente
                </div>


                <div className={"frontpageimage"}>
                    <img src={U7E4SRC} alt={"U7E4"} onClick={linkTo('E7', "Rednerliste Custom Element")}/><br/>
                    Rednerliste-Komponente
                </div>


                <div className={"frontpageimage"}>
                    <img src={U7E5SRC} alt={"U7E5"} onClick={linkTo('E7', "Tabelle Custom Element")}/><br/>
                    Tabelle-Komponente
                </div>


                <hr/>
                <h2>Übung8 (PWA)</h2>
                <div className={"frontpageimage"}>
                    <img src={U7E3SRC} alt={"U8E1"} onClick={linkTo("E8", "PWA")}/><br/>
                    WWW-Navigator-PWA
                </div>


                <hr/>
                <h2>Übung9 (Vue)</h2>
                <div className={"frontpageimage"}>
                    <img src={U7E3SRC} alt={"U8E1"} onClick={linkTo("E8", "PWA")}/><br/>
                    WWW-Navigator-PWA
                </div>


                <hr/>
                <h2>Übung10 (WebAssembly)</h2>
                <div className={"frontpageimage"}>
                    <img src={U10E1SRC} alt={"U10E1"} onClick={linkTo("E10", "GGT")}/><br/>
                    GGT-WASM
                </div>

                <div className={"frontpageimage"}>
                    <img src={U10E2SRC} alt={"U10E2"} onClick={linkTo("E10", "Prim WASM")}/><br/>
                    Primzahlen-WASM
                </div>

                <hr/>
                <h1>Tic Tac Toe</h1>
                <tictactoe-module></tictactoe-module>

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
