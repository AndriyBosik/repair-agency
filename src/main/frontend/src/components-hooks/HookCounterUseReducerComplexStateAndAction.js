import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, firstCounter: state.firstCounter + action.value};
        case "decrement":
            return {...state, firstCounter: state.firstCounter - action.value};
        case "increment-second":
            return {...state, secondCounter: state.secondCounter + action.value};
        case "decrement-second":
            return {...state, secondCounter: state.secondCounter - action.value};
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function HookCounterUseReducerComplexStateAndAction() {
    const [count, dispatch] = useReducer(reducer, initialState, () => initialState);

    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button type="button" onClick={() => dispatch({type: "increment", value: 1})}>Increment</button>
            <button type="button" onClick={() => dispatch({type: "decrement", value: 1})}>Decrement</button>
            <button type="button" onClick={() => dispatch({type: "increment", value: 5})}>Increment 5</button>
            <button type="button" onClick={() => dispatch({type: "decrement", value: 5})}>Decrement 5</button>
            <br />
            <button type="button" onClick={() => dispatch({type: "increment-second", value: 1})}>Increment Counter Two</button>
            <button type="button" onClick={() => dispatch({type: "decrement-second", value: 1})}>Decrement Counter Two</button>
            <br />
            <button type="button" onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    );
}

export default HookCounterUseReducerComplexStateAndAction;