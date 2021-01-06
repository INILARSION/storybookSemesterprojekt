import React from "react";

customElements.define("tabellen-kalkulation", class extends HTMLElement{
    connectedCallback() {
        this.container = document.createElement("div");
        this.container.setAttribute("id", "TebellenDiv");
        this.container.appendChild(document.createTextNode("Anzahl der Spalten: "));

        this.input = document.createElement("input");
        this.input.setAttribute("id", "TabellenkalkulationInput");
        this.input.setAttribute("type", "number");
        this.container.appendChild(this.input);

        this.addButton = document.createElement("button");
        this.addButton.setAttribute("id", "TabellenkalkulationButton");
        this.addButton.onclick = createTable;
        this.addButton.appendChild(document.createTextNode("Add item"));
        this.container.appendChild(this.addButton);

        this.list = document.createElement("table");
        this.list.setAttribute("id", "TabellenkalkulationTab");
        this.list.setAttribute("style", "border: 2px; border-style: solid; border-collapse: collapse;");
        this.container.appendChild(this.list);

        this.appendChild(this.container);

        this.tableRows = 0;
        let self = this;


        function createTable(){
            self.tableRows = parseInt(document.getElementById("TabellenkalkulationInput").value) + 1;
            let table = document.getElementById("TabellenkalkulationTab");
            table.innerHTML = "";
            for (let i=0; i< self.tableRows; i+=1){
                let row = document.createElement("tr");
                row.setAttribute("id", "r" + i.toString());
                row.setAttribute("style", "border:2px solid");
                let cl = document.createElement("td");
                cl.setAttribute("id", "cl" + i.toString());
                cl.setAttribute("style", "border:2px solid");
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("id", "i"+i.toString());
                if (i === self.tableRows - 1) {
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
            let fun = document.getElementById("i"+(self.tableRows-1).toString()).value;
            if (fun.substring(0,5) !== "=SUM(") {
                return;
            }
            fun = fun.substring(5, fun.length - 1);
            let rowArr = fun.split(",")
            let sum = 0;
            for (let v in rowArr) {
                let row = rowArr[v].charCodeAt(0) - 65;
                if (row > self.tableRows - 2){
                    return;
                }
                let val = parseInt(document.getElementById("i" + row).value);
                sum += val;
            }
            document.getElementById("i" + (self.tableRows-1).toString()).value = sum.toString();
        }


    }
});

function TabelleCustomElementTag (props) {
    return (
        <article id={"TabelleCustomElement"}>
            <tabellen-kalkulation></tabellen-kalkulation>
        </article>
    )
}

export default TabelleCustomElementTag