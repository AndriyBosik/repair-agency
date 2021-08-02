import React, { useState, useEffect } from "react";

function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = event => {
        setX(event.clientX);
        setY(event.clientY);
    }

    // Called only once
    useEffect(() => {
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);

    return (
        <div>
            X - {x} Y - {y}
        </div>
    );

}

export default HookMouse;