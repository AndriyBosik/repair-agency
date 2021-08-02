import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounterHOC extends Component {

    render() {
        const { count, incrementCount } = this.props;

        return (
            <button type="button" onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
        );

    }

}

export default withCounter(ClickCounterHOC, 5);