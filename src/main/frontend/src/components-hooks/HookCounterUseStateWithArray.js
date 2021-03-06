import React, {useState} from "react";

function HookCounterUseStateWithArray() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random()*10) + 1
        }]);
    };

    return (
        <div>
            <button type="button" onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => <li key={item.is}>{item.value}</li>)
                }
            </ul>
        </div>
    );
}

export default HookCounterUseStateWithArray;