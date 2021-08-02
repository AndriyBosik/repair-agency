import React from 'react';

const Hello = () => {
        return React.createElement(
            "div",
            {
                id: "hello",
                className: "dummyClass"
            },
            React.createElement(
                "h1",
                null,
                "Hello, Andrii"
            )
        );
};

export default Hello;