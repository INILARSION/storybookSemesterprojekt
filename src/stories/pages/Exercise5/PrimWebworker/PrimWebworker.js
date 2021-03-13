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


function getPrimes() {
    PrimWebworkerdiv = document.getElementById("PrimWebworkerdiv");
    PrimWebworkerdiv.innerHTML = "";
    stop = false;
    animate = document.getElementById("PrimWebworkeranimate");
    width = 1;
    t1 = performance.now();
    if (PrimWebworkerdiv === null || PrimWebworkerdiv === undefined)
        return;
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

    let webworker_str = `
let stop = false;

self.addEventListener('message', function(e) {
    if (e.data) {
        stop = e.data;
    } else {
        writePrimes();
    }
}, false);

let lastPrime = 0;

function nextPrime(value) {
    if (value > 2) {
        let i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}

function writePrimes(){
    lastPrime = nextPrime(lastPrime);
    self.postMessage(lastPrime);
    if (!stop){
        setTimeout(writePrimes, 0);
    }
}

`;

    let blob = new Blob([webworker_str], {type: 'application/javascript'});

    worker = new Worker(URL.createObjectURL(blob));
    if (document.getElementById("PrimWebworkerdiv") === undefined || document.getElementById("PrimWebworkerdiv") === null)
        setTimeout(delay_call, 10);
    else
        getPrimes();
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