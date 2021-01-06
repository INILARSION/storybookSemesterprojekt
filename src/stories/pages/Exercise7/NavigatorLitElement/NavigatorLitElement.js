import React from "react";

import {LitElement, html, css} from 'lit-element';

class NavigatorElement extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
          #Navigationheader {
            width: 100%;
            min-height: 90px;
            background-color: #C34C51;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            text-align: center;
          }
          
          #Navigationheader h2 {
            color: white;
            margin-top: 0;
          }

          #Navigationheader ul {
            list-style-type: none;
            text-align: left;
            padding-bottom: 2vh;
            margin-bottom: 0;
          }

          #Navigationheader ul li {
            display: inline-block;
            font-size: 20px;
            font-family: Arial;
            background-color: #67709B;
            border: 3px groove #EDEDED;
            border-radius: 20px;
            padding: 0 20px;
          }

          #Navigatorcontent {
            display: grid;
            min-height: calc(100vh - 132px);
            grid-template-columns: 1.5fr 6fr 1.5fr;
            grid-template-rows: 1fr auto;
            grid-template-areas: "left center right";
          }

          @media screen and (max-width: 1024px) {
            #Navigatorcontent {
              grid-template-columns: 1fr 3fr;
              grid-template-rows: auto auto auto;
              grid-template-areas: "left center"
                                     "right right";
            }
          }

          @media screen and (max-width: 640px) {
            #Navigatorcontent {
              grid-template-columns: 1fr;
              grid-template-rows: auto auto auto auto;
              grid-template-areas: "left"
                                     "center"
                                     "right";
            }
          }
          #Navigatorleft {
            grid-area: left;
          }

          #Navigatorcenter {
            background-color: #649EBA;
            grid-area: center;
            color: white;
          }

          #Navigatorright, #Navigatorleft {
            background-color: #C38081;
            color: white;
            font-size: 25px;
          }

          #Navigatorright {
            grid-area: right;
          }
          #Navigatorleftul .Navigatorli {
            display: block;
            font-size: 20px;
            font-family: Arial;
            background-color: #67709B;
            border: 3px groove #EDEDED;
            border-radius: 20px;
            margin-bottom: 1em;
            width: 100px;
            padding: 0 2vw;
          }
    `;
    }

    loadContentLeft(self, heading) {
        let contentJson = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/Navigator.json");
        contentJson.then(contenLoaded => {
            return contenLoaded.json();
        }).then(allContent => {
            let content = allContent[heading];
            self.left_ul.innerHTML = "";

            Object.keys(content).forEach(function (key){
                let element = document.createElement("li");
                element.className = "Navigatorli"
                element.appendChild(document.createTextNode(key));
                element.onclick = () => {
                    // change to self
                    self.center_div.innerHTML = "";
                    self.center_div.appendChild(document.createTextNode(content[key]["content"]));
                    self.right_div.innerHTML = "";
                    self.right_div.appendChild(document.createTextNode(content[key]["references"]));
                }

                self.left_ul.appendChild(element);
            });
        });
    }

    loadContentHeader(self) {
        let contentJson = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/Navigator.json");
        contentJson.then(contenLoaded => {
            return contenLoaded.json();
        }).then(allContent => {
            Object.keys(allContent).forEach(function (key){
                let element = document.createElement("li");
                element.className = "Navigatorli"
                element.appendChild(document.createTextNode(key));
                element.onclick = () => {
                    self.loadContentLeft(self, key);
                }

                self.head_ul.appendChild(element);
            });
        });
    }

    render() {
        this.head_ul = document.createElement("ul");
        this.head_ul.setAttribute("id", "Navigatorulheader");

        this.left_ul = document.createElement("ul");
        this.left_ul.setAttribute("id", "Navigatorleftul");

        this.center_div = document.createElement("div");
        this.center_div.setAttribute("id", "Navigatorcenter");

        this.right_div = document.createElement("div");
        this.right_div.setAttribute("id", "Navigatorright");

        this.loadContentHeader(this);
        return html`
      <div id="Navigationheader">
          <h2>Header</h2>
          ${this.head_ul}
      </div>
      <div id="Navigatorcontent">
          <div id="Navigatorleft">
              ${this.left_ul}
          </div>

          ${this.center_div}

          ${this.right_div}
      </div>
    `;
    }


}

customElements.define('navigator-element', NavigatorElement);

class FooterElement extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
          #Navigatorfooter {
            text-align: center;
            width: 100%;
            background-color: black;
            color: white;
            font-size: 25px;
            height: 30px;
          }
          #Navigatorfooter a {
            color: white;
            font-size: 15px;
          }
    `;
    }

    render() {
        return html`                
          <footer id="Navigatorfooter">
              Footer: <a href="Sitemap.html">Sitemap</a> <a href="Sitemap.html">Home</a> <a href="Sitemap.html">News</a> <a href="Sitemap.html">Contact</a> <a href="Sitemap.html">About</a>
          </footer>
    `;
    }


}

customElements.define('footer-element', FooterElement);

function NavigatorLitElementTag (props) {
    return (
        <article id={"NavigatorLitElement"}>
            <navigator-element></navigator-element>
            <footer-element></footer-element>
        </article>
    )
}

export default NavigatorLitElementTag