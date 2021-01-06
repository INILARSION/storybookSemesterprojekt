import React from "react";

customElements.define("redner-liste", class extends HTMLElement {
    connectedCallback() {
        this.container = document.createElement("div");
        this.container.setAttribute("id", "RednerlisteDiv");
        this.container.appendChild(document.createTextNode("Neuer Redner: "));
        this.input = document.createElement("input");
        this.input.setAttribute("id", "RednerlisteInput");
        this.input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                addItem();
            }
        });
        this.container.appendChild(this.input);
        this.addButton = document.createElement("button");
        this.addButton.setAttribute("id", "RednerlisteButton");
        this.addButton.onclick = addItem;
        this.addButton.appendChild(document.createTextNode("Hinzufügen"));
        this.container.appendChild(this.addButton);
        this.list = document.createElement("ul");
        this.list.setAttribute("id", "RednerlisteList");
        this.container.appendChild(this.list);
        this.appendChild(this.container);

        let self = this;
        this.counter = 0;
        this.activeCounter = "";

        function addItem() {
            let itemName = document.getElementById("RednerlisteInput").value;
            if (itemName === ""){
                return ;
            }
            checkOtherTimer();

            let listElement = document.createElement("li");
            listElement.appendChild(document.createTextNode(itemName + " "));

            let textDiv = document.createElement("div");
            textDiv.setAttribute("id", "t" + self.counter.toString());
            textDiv.setAttribute("style", "display:inline");
            textDiv.appendChild(document.createTextNode("00:00:00"));
            listElement.appendChild(textDiv);

            let button = document.createElement("button");
            button.setAttribute("id", "b" + self.counter.toString());
            button.appendChild(document.createTextNode("Stopp!"));
            button.onclick = function (){
                stopCounter(self.counter)
            }
            listElement.appendChild(button);

            let list = document.getElementById("RednerlisteList");
            list.appendChild(listElement);

            self.counter += 1;
            startCounter((self.counter - 1).toString())
        }

        function count(id) {
            let textDiv = document.getElementById("t" + id);
            let time = textDiv.firstChild.nodeValue;
            textDiv.removeChild(textDiv.firstChild);
            textDiv.appendChild(createTimeText(time, 1));
            if (document.getElementById("b" + id).firstChild.nodeValue === "Stopp!"){
                setTimeout(() => { count(id); }, 1000);
            }
        }

        function createTimeText(timeText, plus = 0){
            let hour;
            let min;
            let sec;
            let s = parseInt(timeText.substring(6,8)) + plus;
            let m = parseInt(timeText.substring(3,5));
            let h = parseInt(timeText.substring(0,2));
            if (s < 10){
                sec = "0" + s.toString()
            } else if(s >= 60){
                sec = "00"
                m += 1
            } else {
                sec = s.toString()
            }
            if (m < 10){
                min = "0" + m.toString()
            } else if(m >= 60){
                min = "00"
                h += 1
            } else {
                min = m.toString()
            }
            if (h < 10){
                hour = "0" + h.toString()
            } else {
                hour = h.toString()
            }
            return document.createTextNode(hour+":"+min+":"+sec);
        }


        function checkOtherTimer() {
            if (self.activeCounter !== ""){
                stopCounter(self.activeCounter)
            }
        }


        function stopCounter(id){
            let button = document.getElementById("b" + id);
            button.firstChild.nodeValue = "Start!";
            button.onclick = function (){
                startCounter(id);
            }
        }

        function startCounter(id) {
            checkOtherTimer();
            let button = document.getElementById("b" + id);
            button.firstChild.nodeValue = "Stopp!";
            button.onclick = function (){
                stopCounter(id);
            }
            self.activeCounter = id;
            count(id);
        }



    }

});

function RednerlisteCustomElementTag (props) {
    return (
        <article id={"RednerlisteCustomElement"}>
            <redner-liste></redner-liste>
        </article>
    )
}

export default RednerlisteCustomElementTag