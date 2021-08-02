import React, { Component } from "react";
import MemoComponent from "./MemoComponent";

class MemoComponentDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Andrew"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Andrew"
            });
        }, 2000);
    }

    render() {
        console.log("~~~~~~~ MemoComponentDemo ~~~~~~~");

        return (
            <div>
                MemoComponentDemo
                <MemoComponent name={this.state.name} />
            </div>
        );

    }

}

export default MemoComponentDemo;