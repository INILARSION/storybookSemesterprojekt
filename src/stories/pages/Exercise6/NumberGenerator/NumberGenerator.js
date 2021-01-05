import React from "react";

function generateNumber() {
    let input = document.getElementById("NumberGeneratorInput");
    let lines = input.value;
    let div = document.getElementById("NumberGeneratorDiv");
    div.innerHTML = "";
    for (let i = 1; i <= lines; i++) {
        div.appendChild(document.createTextNode(i.toString()));
        div.appendChild(document.createElement("br"));
    }

}

function NumberGeneratorTag (props) {
    return (
        <article id={"NumberGenerator"}>
            <input id={"NumberGeneratorInput"} type={"number"}/> <button onClick={generateNumber}>Generate numbers</button>
            <div id={"NumberGeneratorDiv"}>

            </div>
        </article>
    )
}

export default NumberGeneratorTag