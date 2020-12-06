import React from 'react';
import './AboutMe.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AboutMeTag (props) {
    const {...rest} = props
    return (
        <article>
            <div id={"aboutmeNav"}>
                <Navbar/>
            </div>


            <div id={"aboutmeLeft"}>

            </div>


            <div id={"aboutmeContent"}>
                <h1>About Me</h1>
            </div>




            <div id={"aboutmeRight"}>

            </div>




            <div id={"aboutmeFooter"}>
                <Footer/>
            </div>
        </article>
    )
}

export default AboutMeTag