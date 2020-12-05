import React from "react";

function RednerlisteTag (props) {
    return (
        <article id={"Rednerliste"}>
            <h1>Rednerliste</h1>

            Neuer Redner: <input id={"RednerlisteInput"} type="text"/>
            <button onClick={addItemRednerliste} id={"RednerlisteAdd"}>Hinzufügen</button>

            <ul id={"RednerlisteList"}>
            </ul>
        </article>
    )
}

export default RednerlisteTag


let Rednerlistecounter = 0;
let activeCounter = "";





function addItemRednerliste() {
    let itemName = document.getElementById("RednerlisteInput").value;
    if (itemName === ""){
        return ;
    }
    checkOtherTimer();

    let listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(itemName + " "));

    let textDiv = document.createElement("div");
    textDiv.setAttribute("id", "t" + Rednerlistecounter.toString());
    textDiv.setAttribute("style", "display:inline");
    textDiv.appendChild(document.createTextNode("00:00:00"));
    listElement.appendChild(textDiv);

    let button = document.createElement("button");
    button.setAttribute("id", "b" + Rednerlistecounter.toString());
    button.appendChild(document.createTextNode("Stopp!"));
    button.onclick = function (){
        stopCounter(Rednerlistecounter);
    }
    listElement.appendChild(button);

    let Rednerlistelist = document.getElementById("RednerlisteList");
    Rednerlistelist.appendChild(listElement);

    Rednerlistecounter += 1;
    startCounter((Rednerlistecounter -1).toString());
}

function countRednerliste(id) {
    let textDiv = document.getElementById("t" + id);
    let time = textDiv.firstChild.nodeValue;
    textDiv.removeChild(textDiv.firstChild);
    textDiv.appendChild(createTimeText(time, 1));
    if (document.getElementById("b" + id).firstChild.nodeValue === "Stopp!"){
        setTimeout(() => { countRednerliste(id); }, 1000);
    }
}

function createTimeText(timeText, plus = 0){
    let hour;
    let min;
    let sec;
    let s = parseInt(timeText.substring(6,8)) + plus;
    let m = parseInt(timeText.substring(3,5));
    let h = parseInt(timeText.substring(0,2));
    if (s < 10){
        sec = "0" + s.toString();
    } else if(s >= 60){
        sec = "00";
        m += 1;
    } else {
        sec = s.toString();
    }
    if (m < 10){
        min = "0" + m.toString();
    } else if(m >= 60){
        min = "00";
        h += 1;
    } else {
        min = m.toString();
    }
    if (h < 10){
        hour = "0" + h.toString();
    } else {
        hour = h.toString();
    }
    return document.createTextNode(hour+":"+min+":"+sec);
}


function checkOtherTimer() {
    if (activeCounter !== ""){
        stopCounter(activeCounter);
    }
}


function stopCounter(id){
    let button = document.getElementById("b" + id);
    button.firstChild.nodeValue = "Start!";
    button.onclick = function (){
        startCounter(id);
    }
}

function startCounter(id) {
    checkOtherTimer();
    let button = document.getElementById("b" + id);
    button.firstChild.nodeValue = "Stopp!";
    button.onclick = function (){
        stopCounter(id);
    }
    activeCounter = id;
    countRednerliste(id);
}



