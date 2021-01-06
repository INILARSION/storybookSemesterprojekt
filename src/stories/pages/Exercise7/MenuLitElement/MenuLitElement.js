import React from "react";

import {LitElement, html, css} from 'lit-element';

class MenuElement extends LitElement {
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
    `;
    }

    loadContent(ul) {
        let contentJson = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/Navigator.json");
        contentJson.then(contenLoaded => {
            return contenLoaded.json();
        }).then(allContent => {
            Object.keys(allContent).forEach(function (key){
                let element = document.createElement("li");
                element.className = "Navigatorli"
                element.appendChild(document.createTextNode(key));
                element.onclick = () => {
                    console.log(key);
                }

                ul.appendChild(element);
            });
        });
    }

    render() {
        let new_ul = document.createElement("ul");
        new_ul.setAttribute("id", "Navigatorleftul");
        this.loadContent(new_ul);
        return html`
      <div id="Navigationheader">
          <h2>Header</h2>
          ${new_ul}
      </div>
    `;
    }


}

customElements.define('menu-element', MenuElement);

function MenuLitElementTag (props) {
    return (
        <article id={"MenuLitElement"}>
            <menu-element></menu-element>
        </article>
    )
}

export default MenuLitElementTag