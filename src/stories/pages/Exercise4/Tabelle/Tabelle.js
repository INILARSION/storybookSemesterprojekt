import React from 'react';
import "./Tabellen.css";


let tableRows = 0;

function createTable(){
    tableRows = parseInt(document.getElementById("TabellenkalkulationInput").value) + 1;
    let table = document.getElementById("TabellenkalkulationTab");
    table.innerHTML = "";
    for (let i=0; i< tableRows; i+=1){
        let row = document.createElement("tr");
        row.setAttribute("id", "r" + i.toString());
        row.setAttribute("style", "border:2px solid");
        let cl = document.createElement("td");
        cl.setAttribute("id", "cl" + i.toString());
        cl.setAttribute("style", "border:2px solid");
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "i"+i.toString());
        if (i === tableRows - 1) {
            cl.appendChild(document.createTextNode("Sum = "));
            input.onchange = function (){
                evalCalc();
            }
        }else {
            cl.appendChild(document.createTextNode(String.fromCharCode(97+i) +" = "));
        }
        let cr = document.createElement("td");
        cr.setAttribute("id", "cr" + i.toString());
        cr.setAttribute("style", "border:2px solid");
        cr.appendChild(input);

        row.appendChild(cl);
        row.appendChild(cr);
        table.appendChild(row);
    }
}


function evalCalc(){
    let fun = document.getElementById("i"+(tableRows-1).toString()).value;
    if (fun.substring(0,5) !== "=SUM(") {
        return;
    }
    fun = fun.substring(5, fun.length - 1);
    let rowArr = fun.split(",")
    let sum = 0;
    for (let v in rowArr) {
        let row = rowArr[v].charCodeAt(0) - 65;
        if (row > tableRows - 2){
            return;
        }
        let val = parseInt(document.getElementById("i" + row).value);
        sum += val;
    }
    document.getElementById("i" + (tableRows-1).toString()).value = sum.toString();
}

function TabelleTag (props) {
    return (
        <article id={"Tabelle"}>
            <h1>Tabellenkalkulation mit contentEditable</h1>
            Anzahl der Spalten: <input id="TabellenkalkulationInput" type="number"/>
            <button onClick={createTable} id="TabellenkalkulationButton">Los</button>
            <div>
                <table id="TabellenkalkulationTab">
                    <tr>
                        <td>

                        </td>
                    </tr>
                </table>
            </div>

        </article>
    )
}

export default TabelleTag