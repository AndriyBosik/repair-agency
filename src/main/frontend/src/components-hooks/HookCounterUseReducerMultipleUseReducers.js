import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function HookCounterUseReducerMultipleUseReducers() {
    const [count, dispatch] = useReducer(reducer, initialState, () => initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState, () => initialState);

    return (
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={() => dispatch("increment")}>Increment</button>
            <button type="button" onClick={() => dispatch("decrement")}>Decrement</button>
            <button type="button" onClick={() => dispatch("reset")}>Reset</button>
            <br />
            <br />
            <div>Count - {countTwo}</div>
            <button type="button" onClick={() => dispatchTwo("increment")}>Increment</button>
            <button type="button" onClick={() => dispatchTwo("decrement")}>Decrement</button>
            <button type="button" onClick={() => dispatchTwo("reset")}>Reset</button>
        </div>
    );
}

export default HookCounterUseReducerMultipleUseReducers;