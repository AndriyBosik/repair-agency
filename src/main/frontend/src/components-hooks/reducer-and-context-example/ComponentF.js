import React, { useContext } from "react";
import {CountContext} from "./Example";

function ComponentF() {
    const countContext = useContext(CountContext);

    return (
        <div>
            Component F - {countContext.countState}
            <button type="button" onClick={() => countContext.countDispatch("increment")}>Increment</button>
            <button type="button" onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
            <button type="button" onClick={() => countContext.countDispatch("reset")}>Reset</button>
        </div>
    );
}

export default ComponentF;