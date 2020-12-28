import React from 'react';

let asyncAwaitdiv = document.getElementById("AsyncAwaitdiv");


async function makeRequest(){
    alert("NOW!!!!!")
    const aPromiseAwait = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/storybook-static/static/media/A.txt");
    const bPromiseAwait = fetch("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/storybook-static/static/media/B.txt");

    let aResult = await aPromiseAwait;
    let bResult = await bPromiseAwait;
    let textA = await aResult.text();
    let textB = await bResult.text();

    textA = textA.split("\n");
    textB = textB.split("\n");

    let maxLen = Math.max(textA.length, textB.length);

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
}



function AsyncAwaitTag (props) {
    return (
        <article id={"AsyncAwait"}>
            <div id="AsyncAwaitdiv">

            </div>
        </article>
    )
}

setTimeout(makeRequest, 1000);


export default AsyncAwaitTag