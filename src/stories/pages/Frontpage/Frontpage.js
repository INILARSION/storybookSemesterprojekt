import React from 'react';
import './Frontpage.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
//import "../Exercise2/GridU3.html"

function Frontpage (props) {
    return (
        <article id={"frontpageBody"}>
            <div id={"frontpageNav"}>
                <Navbar/>
            </div>
            <div id={"frontpageLeft"}></div>
            <div id={"frontpageContent"}>
                <h1>Semesterprojekt</h1>
            </div>
            <div id={"frontpageRight"}></div>
            <div id={"frontpageFooter"}>
                <Footer/>
            </div>
        </article>
    )
}

export default Frontpage
