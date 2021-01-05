import React from 'react';
import "./Navigator.css"


let leftul;
let center;
let right;
let headerul;

function startNav() {
    leftul = document.getElementById("Navigatorleftul");
    center = document.getElementById("Navigatorcenter");
    right = document.getElementById("Navigatorright");
    headerul = document.getElementById("Navigatorulheader");

    let contentJson = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/Navigator.json");

    contentJson.then(contenLoaded => {
        return contenLoaded.json();
    }).then(allContent => {

        Object.keys(allContent).forEach(function (key){
            let element = document.createElement("li");
            element.className = "Navigatorli"
            element.appendChild(document.createTextNode(key));
            element.onclick = () => {
                loadContent(key);
            }

            headerul.appendChild(element);
        });
    });

}


function loadContent(text) {
    let contentJson = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/Navigator.json");
    contentJson.then(contenLoaded => {
        return contenLoaded.json();
    }).then(allContent => {
        let content = allContent[text];
        leftul.innerHTML = "";

        Object.keys(content).forEach(function (key){
            let element = document.createElement("li");
            element.className = "Navigatorli"
            element.appendChild(document.createTextNode(key));
            element.onclick = () => {
                center.innerHTML = "";
                center.appendChild(document.createTextNode(content[key]["content"]));
                right.innerHTML = "";
                right.appendChild(document.createTextNode(content[key]["references"]));
            }

            leftul.appendChild(element);
        });
    });
}

// somehow onLoad triggers before divs can be found?!
function delay_call(){
    setTimeout(startNav, 1000);
}

function NavigatorTag (props) {
    return (
        <article onLoad={delay_call()} id={"E5Navigator"}>
            <header id="Navigatorheader">
                <h2 id="Navigatorh2">Header</h2>
                <ul className="Navigatorul" id="Navigatorulheader">
                </ul>
            </header>

            <div className="Navigatorcontent">
                <div className="Navigatorleft">
                    <ul className="Navigatorul" id="Navigatorleftul">

                    </ul>
                </div>

                <div id="Navigatorcenter">

                </div>

                <div id="Navigatorright">

                </div>

                <footer id="Navigatorfooter">
                    Footer: <a href="Sitemap.html">Sitemap</a> <a href="Sitemap.html">Home</a> <a
                    href="Sitemap.html">News</a> <a href="Sitemap.html">Contact</a> <a href="Sitemap.html">About</a>
                </footer>

            </div>
        </article>
    )
}




export default NavigatorTag