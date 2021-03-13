import React from "react";
import "./Editor.css";

function EditorTag (props) {
    return (
        <article id={"Editor"}>
            <div id="Editoreditor">
                <div id="Editortoolbar">
        <span className="Editorbtn" data-action="h1">
          <button>H1</button>
        </span>
                    <span className="Editorbtn" data-action="h2">
          <button>H2</button>
        </span>
                    <span className="Editorbtn" data-action="bold">
          <button>B</button>
        </span>
                    <span className="Editorbtn" data-action="italic">
          <button>I</button>
        </span>
                    <span className="Editorbtn" data-action="underline">
          <button>U</button>
        </span>
                    <span className="Editorbtn" data-action="strikeThrough">
          <button>Strike</button>
        </span>

                    <span className="Editorbtn" data-action="justifyLeft">
            <button>Left</button>
        </span>
                    <span className="Editorbtn" data-action="justifyCenter">
            <button>Center</button>
        </span>
                    <span className="Editorbtn" data-action="justifyRight">
            <button>Right</button>
        </span>
                    <span className="Editorbtn" data-action="formatBlock">
            <button>Block</button>
        </span>

                    <span className="Editorbtn" data-action="insertOrderedList">
          <button>Ol</button>
        </span>
                    <span className="Editorbtn" data-action="insertUnorderedList">
          <button>Ul</button>
        </span>
                    <span className="Editorbtn" data-action="outdent">
          <button>Outdent</button>
        </span>
                    <span className="Editorbtn" data-action="indent">
          <button>Indent</button>
        </span>

                    <span className="Editorbtn" data-action="undo">
          <button>Undo</button>
        </span>
                    <span className="Editorbtn" data-action="removeFormat">
          <button>Remove</button>
        </span>

                    <span className="Editorbtn" data-action="createLink">
          <button>Link</button>
        </span>
                    <span className="Editorbtn" data-action="unlink">
          <button>Unlink</button>
        </span>

                </div>
                <div onLoad={delay_call()} id="Editorcontent-area">
                    <div id="Editortext-box" contentEditable>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default EditorTag

function delay_call() {
    if (document.getElementsByClassName('Editorbtn').length === 0)
        setTimeout(delay_call, 1000);
    else
        set_button_actions();
}

function set_button_actions() {
    let buttons = document.getElementsByClassName('Editorbtn');
    while (buttons === null || buttons === undefined)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    if (buttons.length === 0)
        buttons = document.getElementsByClassName('Editorbtn');
    console.log(buttons);
    for(let i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        button.addEventListener('click', function(e) {
            let action = this.dataset.action;
            switch(action) {
                case 'createLink':
                    execLinkAction();
                    break;
                case 'h1':
                    execFormatAction(action);
                    break;
                case 'h2':
                    execFormatAction(action);
                    break;
                default:
                    execDefaultAction(action);
            }

        });
    }
}



function execLinkAction() {
    let linkValue = prompt('Enter link');
    document.execCommand('createLink', false, linkValue);
}
function execDefaultAction(action) {
    document.execCommand(action, false);
}

function execFormatAction(action) {
    document.execCommand('formatBlock', false, action);
}