import React, { Component } from "react";

class ClassClick extends Component {

    clickHandler() {
        console.log("ClassClick button clicked");
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }

}

export default ClassClick;