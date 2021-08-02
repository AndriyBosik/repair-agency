import React, { Component } from "react";
import LifecycleChild from "./LifecycleChild";

class Lifecycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Andrew"
        };

        console.log("Lifecycle constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle getDerivedStateFromProps");

        return null;
    }

    componentDidMount() {
        console.log("Lifecycle componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Lifecycle shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Lifecycle getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Lifecycle componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Updated State"
        });
    }

    render() {
        console.log("Lifecycle render");

        return (
            <div>
                <div>LifecycleMounting</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleChild />
            </div>
        );
    }

}

export default Lifecycle;