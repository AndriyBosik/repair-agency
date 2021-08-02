import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    changeCounter(value) {
        this.setState(prevState => ({
            counter: prevState.counter + value
        }), () => {
            console.log("State was updated(setState callback)");
        });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={() => this.changeCounter(-1)}>Decrement</button>
                <div>Count - {this.state.counter}</div>
                <button type="button" onClick={() => this.changeCounter(+1)}>Increment</button>
            </div>
        );
    }

}

export default Counter;