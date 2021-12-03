import React from 'react'

const Button = ({ className, text, onClick, type }) => {
    let classes = "btn";
    return (
        <button className={classes + ` ${className}`} onClick={onClick} type={type}>
            {text}
        </button>
    )
}

export default Button
