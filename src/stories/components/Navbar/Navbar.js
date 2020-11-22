import React from "react";
import './Navbar.css';

function Navbar(props) {
    return (
        <div id={"navNavbar"}>
            <ul><li><a href="book.html">Home</a></li><li><a href="https://kaul.inf.h-brs.de/wem/#app-content-1-0">Web engineering course</a></li><li><a href="?path=/story/pages-aboutme--template">About me</a></li></ul>
        </div>
    )
}

export default Navbar