import React from "react";
import "./PrimWebworker.css";


let PrimWebworkerdiv;
let stop;
let animate;
let width;
let t0;
let t1;
let animation;
let worker;

function createWorker(fn) {
    let blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });
    let url = URL.createObjectURL(blob);

    return new Worker(url);
}


function getPrimes() {
    PrimWebworkerdiv = document.getElementById("PrimWebworkerdiv");
    stop = false;
    animate = document.getElementById("PrimWebworkeranimate");
    width = 1;
    t1 = performance.now();

    worker.addEventListener('message', function(lastPrime) {
        PrimWebworkerdiv.appendChild(document.createTextNode(lastPrime.data));
        PrimWebworkerdiv.appendChild(document.createElement("br"));
    }, false);

    worker.postMessage(stop);

    animation = requestAnimationFrame( step );
}

function step(){
    t0 = performance.now();
    if (t0 - t1 > 16){
        stop = true;
        worker.postMessage(stop);
    }
    width += 1;
    if ( width === 100 ) width = 1;
    animate.style.width = width + '%';
    t1 = performance.now();
    animation = requestAnimationFrame( step );
}

// somehow onLoad triggers before divs can be found?!
function delay_call(){
    worker = new Worker("https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/pages/PrimWebworkerworker.js");
    //setTimeout(getPrimes, 1000);
}

function PrimWebworkerTag (props) {
    return (
        <article onLoad={delay_call()} id={"PrimWebworker"}>
            <div id="PrimWebworkercontainer" className="PrimWebworkerloader">
                <div className="PrimWebworkerloader" id="PrimWebworkeranimate"></div>
            </div>
            <br/>
            Primzahlen:
            <div id="PrimWebworkerdiv">

            </div>
        </article>
    )
}

export default PrimWebworkerTag