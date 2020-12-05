import React from "react";
import "./Einkaufsliste.css";

function EinkaufslisteTag (props) {
    return (
        <article id={"Einkaufsliste"}>
            <h1>Einkaufsliste</h1>

            Enter a new item: <input id={"EinkaufslisteInput"} type="text"/>
            <button onClick={addItemEinkaufsliste} id={"EinkaufslisteAdd"}>Add item</button>

            <ul id={"EinkaufslisteList"}>
            </ul>
        </article>
    )
}

export default EinkaufslisteTag


let list = document.getElementById("EinkaufslisteList");
let counter = 0;


function addItemEinkaufsliste() {
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