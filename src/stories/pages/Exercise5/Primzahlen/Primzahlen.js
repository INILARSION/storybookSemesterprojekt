import React from "react";
import "./Primzahlen.css";

let t0;
let t1;
let width;
let animation;
let Primzahldiv;
let animate;
let stop;

function getPrimes() {
    Primzahldiv = document.getElementById("Primzahldiv");
    stop = false;
    animate = document.getElementById("Primzahlanimate");
    width = 1;

    t1 = performance.now();
    animation = requestAnimationFrame( step );

    setTimeout(writePrimes, 0);
}


function step(){
    t0 = performance.now();
    if (t0 - t1 > 17){
        stop = true;
    }
    width += 1;
    if ( width === 100 ) width = 1;
    animate.style.width = width + '%';
    t1 = performance.now();
    animation = requestAnimationFrame( step );
}

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

let lastPrime = 0;

function writePrimes(){
    lastPrime = nextPrime(lastPrime);
    Primzahldiv.appendChild(document.createTextNode(lastPrime));
    Primzahldiv.appendChild(document.createElement("br"));
    if (!stop) {
        setTimeout(writePrimes, 0);
    } else {
        alert("Max prime number was: " + lastPrime);
    }
}



// somehow onLoad triggers before divs can be found?!
function delay_call(){
    setTimeout(getPrimes, 1000);
}

function PrimzahlenTag (props) {
    return (
        <article onLoad={delay_call()} id={"Primzahlen"}>
            <div id="Primzahlcontainer" className="Primzahlloader">
                <div className="Primzahlloader" id="Primzahlanimate"></div>
            </div>
            <br/>
            Primzahlen:
            <div id="Primzahldiv">

            </div>
        </article>
    )
}

export default PrimzahlenTag