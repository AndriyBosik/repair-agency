import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(previousTimer => previousTimer + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            Hook Timer - {timer}
            <button type="button" onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
}

export default HookTimer;