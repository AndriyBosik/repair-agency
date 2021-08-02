import React from "react";

function FunctionClick() {

    function clickHandler() {
        console.log("FunctionClick button clicked");
    }

    return (
        <button type="button" onClick={clickHandler}>Click</button>
    );
}

export default FunctionClick;