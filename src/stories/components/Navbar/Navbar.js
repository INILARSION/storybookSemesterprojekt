import React from "react";
import './Navbar.css';
import { linkTo } from '@storybook/addon-links'
import AboutMe from "../../pages/AboutMe/AboutMe";
import Frontpage from "../../pages/Frontpage/Frontpage"

function Navbar(props) {
    return (
        <div id={"navNavbar"}>
            <ul>
                <li><a onClick={linkTo('Frontpage')}>Home</a></li>
                <li><a href="https://kaul.inf.h-brs.de/wem/#app-content-1-0">Web engineering course</a></li>
                <li><a onClick={linkTo('AboutMe')}>About me</a></li>
            </ul>
        </div>
    )
}

export default Navbar