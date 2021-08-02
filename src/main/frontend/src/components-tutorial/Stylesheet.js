import React from "react"
import './css/site.css'

function Stylesheet({primary}) {
    const className = primary ? "primary" : "";
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    );
}

export default Stylesheet;