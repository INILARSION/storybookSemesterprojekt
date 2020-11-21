import React from "react";
import './Input.css';

function Input(props) {
    const {size = 'mediuminputCompo', ...rest} = props
    return (
        <input className={`inputCompo ${size}`} {...rest} />
    )
}

export default Input
