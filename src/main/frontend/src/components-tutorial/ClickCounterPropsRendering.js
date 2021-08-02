import React, { Component } from "react";

class ClickCounterPropsRendering extends Component {

    render() {
        const { count, incrementCount } = this.props;

        return (
            <button type="button" onClick={incrementCount}>Clicked {count} times</button>
        );
    }

}

export default ClickCounterPropsRendering;