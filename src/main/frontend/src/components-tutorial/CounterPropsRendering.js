import React, { Component } from "react";

class CounterPropsRendering extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        );
    }

}

export default CounterPropsRendering;