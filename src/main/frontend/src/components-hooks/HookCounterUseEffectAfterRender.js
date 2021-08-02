import React, { useState, useEffect } from "react";

function HookCounterUseEffectAfterRender() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("useEffect - Updating document title");
        document.title = `You clicked ${count} times`
    }, [count]);

    return (
        <div>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            <button type="button" onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounterUseEffectAfterRender;