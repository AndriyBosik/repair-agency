import React, { useState, useEffect } from "react";

function HookIntervalCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(previousCount => previousCount + 1)
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            {count}
        </div>
    );
}

export default HookIntervalCounter;