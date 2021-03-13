import React from "react";

function primesJS() {
    let n = 100000;
    let x = new Array(n);
    let i;
    let j;
    let res = 0;
    for(i = 0; i < n; ++i)
        x[i] = 1;
    for(i = 2; i < n; ++i)
        if (x[i] === 1)
            for(j = i*i; j < n; j+=i)
                x[j] = 0;
    for(i = 2; i < n; ++i)
        if (x[i] === 1)
            ++res;
    return res;
}

let t0;
let t1;
let diff;
let max;
let min;
let avg;

function get_time_params(t0, t1) {
    diff = t1 - t0;
    if (diff > max)
        max = diff;
    if (diff < min)
        min = diff;
    avg += diff;
}

let wasmExports = null;

let wasmMemory = new WebAssembly.Memory({initial: 256, maximum: 256});

let wasmTable = new WebAssembly.Table({
    'initial': 1,
    'maximum': 1,
    'element': 'anyfunc'
});

let asmLibraryArg = {
    "__handle_stack_overflow": ()=>{},
    "emscripten_resize_heap": ()=>{},
    "__lock": ()=>{},
    "__unlock": ()=>{},
    "memory": wasmMemory,
    "table": wasmTable
};

let info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
};


async function loadWasm(){
    let response = await fetch('https://raw.githubusercontent.com/INILARSION/storybookSemesterprojekt/master/src/stories/assets/primes.wasm');
    let bytes = await response.arrayBuffer();
    let wasmObj = await WebAssembly.instantiate(bytes, info);
    wasmExports = wasmObj.instance.exports;
    max = 0;
    min = Infinity;
    avg = 0;
    for (let i = 0; i < 50; i++) {
        t0 = performance.now();
        wasmExports.d();
        t1 = performance.now();
        get_time_params(t0, t1);
    }
    let div = document.getElementById("PrimWASMDIV");
    if (div === null || div === undefined)
        return
    div.innerHTML += "WASM: Max: " + max + " Min: " + min + " Avg: " + avg/50 + "<br/>";
}



function startPrimes() {
    max = 0;
    min = Infinity;
    avg = 0;
    for (let i = 0; i < 50; i++) {
        t0 = performance.now();
        primesJS();
        t1 = performance.now();
        get_time_params(t0, t1);
    }

    let div = document.getElementById("PrimWASMDIV");
    if (div === null || div === undefined)
        return
    div.innerHTML = "Js: Max: " + max + " Min: " + min + " Avg: " + avg/50 + "<br/>";

    loadWasm();
}

// somehow onLoad triggers before divs can be found?!
function delay_call(){
    let div = document.getElementById("PrimWASMDIV");
    if (div === undefined || div === null)
        setTimeout(delay_call, 10);
    else
        startPrimes();
}

function PrimWASMTag (props) {
    return (
        <article id={"PrimWASM"}>
            <h1>Größte gemeinsame Teiler:</h1>
            <div onLoad={delay_call()} id={"PrimWASMDIV"}></div>
        </article>
    )
}

export default PrimWASMTag