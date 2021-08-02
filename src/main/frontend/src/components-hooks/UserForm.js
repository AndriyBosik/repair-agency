import React, { useState } from "react";
import useInput from "./hooks/useInput";

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLastName] = useInput("");

    const submitHandler = event => {
        event.preventDefault();
        resetFirstName();
        resetLastName();
        console.log(`Hello ${firstName} ${lastName}`);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>First name</label>
                <input {...bindFirstName} type="text"/>
            </div>
            <div>
                <label>Last name</label>
                <input {...bindLastName} type="text"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;