import React, { Component } from "react";

class RefsDemo extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.callbackRef = null;
        this.setCbRef = (element) => {
            this.callbackRef = element;
        };
    }

    componentDidMount() {
        if (this.callbackRef) {
            this.callbackRef.focus();
        }

        // this.inputRef.current.focus();
    }

    clickHandler = () => {
        console.log(this.inputRef.current.value);
    }

    render() {

        return (
            <div>
                <input type="text" ref={this.inputRef} />

                <input type="text" ref={this.setCbRef} />

                <button type="button" onClick={this.clickHandler}>Click</button>
            </div>
        );

    }

}

export default RefsDemo;