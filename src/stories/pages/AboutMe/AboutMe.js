import React from 'react';
import './AboutMe.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function set_content() {
    let div = document.getElementById("aboutmeContent");
    let contentJson = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/aboutme.json");

    contentJson.then(contentLoaded => {
        return contentLoaded.json();
    }).then(allContent => {
        try {
            let heading = document.createElement("h1");
            heading.appendChild(document.createTextNode(allContent["heading"]));
            div.appendChild(heading);
            let text = allContent["content"];
            let textarr = text.split("<br/>");
            textarr.forEach(line => {
                div.appendChild(document.createTextNode(line));
                div.appendChild(document.createElement("br"));
            })
        } catch (e) {
            console.log("Navigator site not loaded anymore...");
        }
    });
}

function delay_call(){
    while(document.getElementById("aboutmeContent") === "undefined");
    set_content();
}

function AboutMeTag (props) {
    const {...rest} = props
    return (
        <article>
            <div id={"aboutmeNav"}>
                <Navbar/>
            </div>


            <div id={"aboutmeLeft"}>

            </div>


            <div onLoad={delay_call()} id={"aboutmeContent"}>
            </div>




            <div id={"aboutmeRight"}>

            </div>




            <div id={"aboutmeFooter"}>
                <Footer/>
            </div>
        </article>
    )
}

export default AboutMeTag