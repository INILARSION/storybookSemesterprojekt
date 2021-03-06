import React from 'react';

function promiseRequest() {
    let promisesdiv = document.getElementById("Promisesdiv");
    const aPromise = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/A.txt");
    const bPromise = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/B.txt");

    aPromise.then(responseA => {
        return responseA.text();
    }).then(textA => {
        bPromise.then(responseB => {
            return responseB.text();
        }).then(textB => {
            textA = textA.split("\n");
            textB = textB.split("\n");

            let maxLen = Math.max(textA.length, textB.length);
            try {
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
            } catch (e) {
                console.log("Site not loaded anymore...");
            }
        });
    });
}

// somehow onLoad triggers before divs can be found?!
function delay_call(){
    let div = document.getElementById("Promisesdiv");
    if (div === undefined || div === null)
        setTimeout(delay_call, 10);
    else
        promiseRequest();
}

function PromisesTag (props) {
    return (
        <article onLoad={delay_call()} id={"Promises"}>
            <div id="Promisesdiv">
            </div>
        </article>
    )
}

export default PromisesTag