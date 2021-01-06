import React from "react";

function mergeFiles() {
    let file1 = document.getElementById("FileMergerInput1");
    let file2 = document.getElementById("FileMergerInput2");
    let div = document.getElementById("FileMergerDiv");
    if(file1.files[0] === undefined || file2.files[0] === undefined) {
        return;
    }
    let reader = new FileReader();
    reader.onload = e => {
        let reader2 = new FileReader();
        let content1 = e.target.result.split("\n");
        reader2.onload = e2 => {
            let content2 = e2.target.result.split("\n");

            let maxLen = Math.max(content1.length, content2.length);

            for (let i = 0; i < maxLen; i++) {
                if (i < content1.length) {
                    div.appendChild(document.createTextNode(content1[i]));
                    div.appendChild(document.createElement("br"));
                }
                if (i < content2.length) {
                    div.appendChild(document.createTextNode(content2[i]));
                    div.appendChild(document.createElement("br"));
                }
            }
        }
        reader2.readAsText(file2.files[0], "utf-8")
    }
    reader.readAsText(file1.files[0], "utf-8");
}


function FileMergerTag (props) {
    return (
        <article id={"FileMerger"}>
            <input id={"FileMergerInput1"} type={"file"}/> <br/>
            <input id={"FileMergerInput2"} type={"file"}/> <br/>
            <button onClick={mergeFiles}>Merge Files</button>
            <div id={"FileMergerDiv"}>

            </div>
        </article>
    )
}

export default FileMergerTag