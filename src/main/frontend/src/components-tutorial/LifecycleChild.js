import React, { Component } from "react";

class LifecycleChild extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Andrew"
        };

        console.log("LifecycleChild constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleChild getDerivedStateFromProps");

        return null;
    }

    componentDidMount() {
        console.log("LifecycleChild componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifecycleChild shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleChild getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleChild componentDidUpdate")
    }

    render() {
        console.log("LifecycleChild render");

        return (
            <div>LifecycleMountingChild</div>
        );
    }

}

export default LifecycleChild;