import React from "react";
import './Button.css';

function Button(props) {
    const {variant = 'primaryButtonCompo', children, ...rest} = props
    return (
        <button className={`buttonCompo ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button