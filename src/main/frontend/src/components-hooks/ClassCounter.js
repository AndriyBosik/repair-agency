import React, { Component } from "react";

class ClassCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ""
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            console.log("Updating document title");
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <input type="text" value={this.state.name} onChange={event => {
                    this.setState({
                        name: event.target.value
                    })
                }} />
                <button type="button" onClick={this.incrementCount}>
                    Count: {count}
                </button>
            </div>
        );
    }

}

export default ClassCounter;