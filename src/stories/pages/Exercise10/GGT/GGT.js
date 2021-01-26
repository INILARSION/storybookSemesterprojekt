import React from "react";

async function GGTWASM() {
    let response = await fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/GGT.wasm");
    let buffer = await response.arrayBuffer();
    let wasm = await WebAssembly.instantiate(buffer);
    let ggt = wasm.instance.exports.ggT;
    let output = "";
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < 100; j++) {
            output += "i: " + i + " j: " + j + " GGT: " + ggt(i, j);
            output += "<br/>";
        }
    }
    let body = document.getElementById("GGTDIV");
    body.innerHTML = output;
}

// somehow onLoad triggers before divs can be found?!
function delay_call(){
    setTimeout(GGTWASM, 1000);
}

function GGTTag (props) {
    return (
        <article id={"GGT"}>
            <h1>Größte gemeinsame Teiler:</h1>
            <div onLoad={delay_call()} id={"GGTDIV"}></div>
        </article>
    )
}

export default GGTTag