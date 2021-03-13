import React from "react";
import "./Einkaufsliste.css";

function EinkaufslisteTag (props) {
    return (
        <article id={"Einkaufsliste"}>
            <h1>Einkaufsliste</h1>

            Enter a new item: <input id={"EinkaufslisteInput"} type="text"/>
            <button onClick={addItemEinkaufsliste} id={"EinkaufslisteAdd"}>Add item</button>

            <ul onLoad={delay_call()} id={"EinkaufslisteList"}>
            </ul>
        </article>
    )
}

export default EinkaufslisteTag

let list;
let counter = 0;
let allLoaded = false;
function delay_call(){
    list = document.getElementById("EinkaufslisteList");
    if (list === null || list === undefined)
        setTimeout(delay_call, 10);
    else
        allLoaded = true;
}


function addItemEinkaufsliste() {
    if (!allLoaded)
        return;
    let itemName = document.getElementById("EinkaufslisteInput").value;
    if (itemName === ""){
        return ;
    }

    let listElementId = "listItem" + counter.toString();

    let deleteButton = document.createElement("button");
    deleteButton.onclick = function() {
        removeItemEinkaufsliste(listElementId);
    };
    deleteButton.appendChild(document.createTextNode("Delete"));

    let listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(itemName));
    listElement.appendChild(deleteButton);
    listElement.setAttribute("id", listElementId);

    list.appendChild(listElement);

    counter += 1;
}

function removeItemEinkaufsliste(itemId) {
    list.removeChild(document.getElementById(itemId));
}