import React from "react";

customElements.define("einkaufs-liste", class extends HTMLElement{
    connectedCallback() {
        this.container = document.createElement("div");
        this.container.setAttribute("id", "EinkaufslisteDiv");
        this.container.appendChild(document.createTextNode("Enter a new item: "));
        this.input = document.createElement("input");
        this.input.setAttribute("id", "EinkaufslisteInput");
        this.input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                addItem();
            }
        });
        this.container.appendChild(this.input);
        this.addButton = document.createElement("button");
        this.addButton.setAttribute("id", "EinkaufslisteButton");
        this.addButton.onclick = addItem;
        this.addButton.appendChild(document.createTextNode("Add item"));
        this.container.appendChild(this.addButton);
        this.list = document.createElement("ul");
        this.list.setAttribute("id", "EinkaufslisteList");
        this.container.appendChild(this.list);
        this.appendChild(this.container);

        this.counter = 0;
        let self = this;

        function addItem() {
            let itemName = document.getElementById("EinkaufslisteInput").value;
            if (itemName === ""){
                return ;
            }

            let listElementId = "listItem" + self.counter.toString();

            let deleteButton = document.createElement("button");
            deleteButton.onclick = function() {
                removeItem(listElementId)
            };
            deleteButton.appendChild(document.createTextNode("Delete"));

            let listElement = document.createElement("li");
            listElement.appendChild(document.createTextNode(itemName));
            listElement.appendChild(deleteButton);
            listElement.setAttribute("id", listElementId)

            self.list.appendChild(listElement);

            self.counter += 1;
        }

        function removeItem(itemId) {
            self.list.removeChild(document.getElementById(itemId));
        }
    }
});

function EinkauflisteCustomElementTag (props) {
    return (
        <article id={"EinkauflisteCustomElement"}>
            <einkaufs-liste></einkaufs-liste>
        </article>
    )
}

export default EinkauflisteCustomElementTag