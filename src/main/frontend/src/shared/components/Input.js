import React, { useState } from "react";

export default function Input({
    id="",
    type="text",
    handler = () => {},
    placeholder,
    iconName,
    className,
    ...props
}) {
    const [value, setValue] = useState("");

    const handleValueChanged = (event) => {
        setValue(event.target.value);
        handler(value);
    }

    return (
        <div className={`input-field ${className}`}>
            {iconName != null && <i className="material-icons prefix">{iconName}</i>}
            <input id={id} type={type} value={value} onChange={handleValueChanged} {...props} />
            <label htmlFor={id}>{placeholder}</label>
        </div>
    );
}