import React from "react";

const Button = ({click, className, nameBtn}) => {
    return(
        <>
            <button onClick={click} className={className}>
                {nameBtn}
            </button>
        </>
    )
}

export default Button;