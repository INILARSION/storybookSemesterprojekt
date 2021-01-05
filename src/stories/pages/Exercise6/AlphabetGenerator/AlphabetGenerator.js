import React from "react";

function num_to_str(number) {
    let baseChar = 65;
    let letters  = "";

    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0;
    } while(number > 0);

    return letters;
}

function generateAlphabet() {
    let input = document.getElementById("AlphabetGeneratorInput");
    let lines = input.value;
    let div = document.getElementById("AlphabetGeneratorDiv");
    div.innerHTML = "";
    for (let i = 1; i <= lines; i++) {
        div.appendChild(document.createTextNode(num_to_str(i)));
        div.appendChild(document.createElement("br"));
    }

}

function AlphabetGeneratorTag (props) {
    return (
        <article id={"AlphabetGenerator"}>
            <input id={"AlphabetGeneratorInput"} type={"number"}/> <button onClick={generateAlphabet}>Generate alphabet</button>
            <div id={"AlphabetGeneratorDiv"}>

            </div>
        </article>
    )
}

export default AlphabetGeneratorTag