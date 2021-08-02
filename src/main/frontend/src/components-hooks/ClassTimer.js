import React, { Component } from "react";

class ClassTimer extends Component {

    constructor(props) {
        super(props);

        this.interval = null;

        this.state = {
            timer: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(previousState => {
                return {
                    timer: previousState.timer + 1
                };
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <button type="button" onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        );
    }

}

export default ClassTimer;