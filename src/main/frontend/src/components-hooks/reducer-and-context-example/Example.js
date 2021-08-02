import React, {useReducer} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

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
}

function Example() {
    const [count, dispatch] = useReducer(reducer, initialState, () => initialState);

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            Count - {count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </CountContext.Provider>
    );
}

export default Example;