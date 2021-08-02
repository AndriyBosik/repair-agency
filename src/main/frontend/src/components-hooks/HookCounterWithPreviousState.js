import React, { useState } from "react";

function HookCounterWithPreviousState() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(previousCount => previousCount + 1);
        }
    };

    return (
        <div>
            Count: {count}
            <button type="button" onClick={() => setCount(initialCount)}>Reset</button>
            <button type="button" onClick={() => setCount(previousCount => previousCount + 1)}>Increment</button>
            <button type="button" onClick={() => setCount(previousCount => previousCount - 1)}>Decrement</button>
            <button type="button" onClick={incrementFive}>Increment 5</button>
        </div>
    );
}

export default HookCounterWithPreviousState;