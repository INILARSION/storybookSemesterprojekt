import React from "react";
import './Footer.css';

function Footer(props) {
    const {children, ...rest} = props
    return (
        <div className={"footerFootercompo"}>
            Semesterprojekt Wintersemester 2020/2021 im Modul Web Engineering
        </div>
    )
}

export default Footer