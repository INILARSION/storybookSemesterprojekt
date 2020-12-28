import React from 'react';


function PromisesTag (props) {
    return (
        <article id={"Promises"}>
            <div id="Promisesdiv">

            </div>
        </article>
    )
}

let promisesdiv = document.getElementById("Promisesdiv");

function get_div() {
    promisesdiv = document.getElementById("Promisesdiv");
}

if (promisesdiv == null) {
    setTimeout(get_div, 1000);
}


const aPromise = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/storybook-static/static/media/A.txt");
const bPromise = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/storybook-static/static/media/B.txt");

aPromise.then(responseA => {
    return responseA.text();
}).then(textA => {
    bPromise.then(responseB => {
        return responseB.text();
    }).then(textB => {
        textA = textA.split("\n");
        textB = textB.split("\n");

        let maxLen = Math.max(textA.length, textB.length);

        for (let i = 0; i < maxLen; i++) {
            if (i < textA.length) {
                promisesdiv.appendChild(document.createTextNode(textA[i]));
                promisesdiv.appendChild(document.createElement("br"));
            }
            if (i < textB.length) {
                promisesdiv.appendChild(document.createTextNode(textB[i]));
                promisesdiv.appendChild(document.createElement("br"));
            }
        }
    });
});

export default PromisesTag