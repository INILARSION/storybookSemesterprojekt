import React from 'react';



async function makeRequest(){
    let asyncAwaitdiv = document.getElementById("AsyncAwaitdiv");
    try {
        asyncAwaitdiv.innerHTML = "";
    } catch (e) {
        console.log("Site not loaded anymore...");
    }
    const aPromiseAwait = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/A.txt");
    const bPromiseAwait = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/B.txt");

    let aResult = await aPromiseAwait;
    let bResult = await bPromiseAwait;
    let textA = await aResult.text();
    let textB = await bResult.text();

    textA = textA.split("\n");
    textB = textB.split("\n");

    let maxLen = Math.max(textA.length, textB.length);
    try {
        for (let i = 0; i < maxLen; i++) {
            if (i < textA.length) {
                asyncAwaitdiv.appendChild(document.createTextNode(textA[i]));
                asyncAwaitdiv.appendChild(document.createElement("br"));
            }
            if (i < textB.length) {
                asyncAwaitdiv.appendChild(document.createTextNode(textB[i]));
                asyncAwaitdiv.appendChild(document.createElement("br"));
            }
        }
    } catch (e) {
        console.log("Site not loaded anymore...");
    }
}

// somehow onLoad triggers before divs can be found?!
function delay_call(){
    let doc = document.getElementById("AsyncAwaitdiv");
    if (doc === undefined || doc == null)
        setTimeout(delay_call, 10);
    else
        makeRequest();
}

function AsyncAwaitTag (props) {
    return (
        <article onLoad={delay_call()} id={"AsyncAwait"}>
            <div id="AsyncAwaitdiv">
            </div>
        </article>
    )
}

export default AsyncAwaitTag