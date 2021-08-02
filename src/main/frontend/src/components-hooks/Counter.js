import React from "react";
import useCounter from "./hooks/useCounter";

function Counter() {
    const [count, increment, decrement, reset] = useCounter();

    return (
        <div>
            <h2>Count - {count}</h2>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
            <button type="button" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;